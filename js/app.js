const tg = window.Telegram.WebApp;
tg.expand();

let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let isAnswered = [];

function initializeQuiz() {
    selectedQuestions = getRandomQuestions(20);
    userAnswers = new Array(selectedQuestions.length).fill(null);
    isAnswered = new Array(selectedQuestions.length).fill(false);
    currentQuestionIndex = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const appContainer = document.querySelector('.app-container');
    const startButton = document.querySelector('.start-btn');
    const cardsStack = document.querySelector('.cards-stack');
    const resultPanel = document.querySelector('.result-panel');

    startButton.addEventListener('click', () => {
        splashScreen.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            appContainer.style.display = 'flex';
            initializeQuiz();
            initializeCards();
        }, 500);
    });

    document.querySelector('.restart-btn').addEventListener('click', () => {
        initializeQuiz();
        resultPanel.style.display = 'none';
        initializeCards();
    });
});

function createCard(questionIndex) {
    const question = selectedQuestions[questionIndex];
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = questionIndex;

    const content = `
        <div class="question-number">Вопрос ${questionIndex + 1}/${selectedQuestions.length}</div>
        <h2 class="question-title">${question.title}</h2>
        <p class="question-text">${question.text}</p>
        <div class="options-container">
            ${question.options.map((option, index) => `
                <button class="option-btn" data-index="${index}">${option.text}</button>
            `).join('')}
        </div>
    `;

    card.innerHTML = content;

    card.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => handleAnswer(button, question));
    });

    return card;
}

function initializeCards() {
    const cardsStack = document.querySelector('.cards-stack');
    cardsStack.innerHTML = '';
    
    const currentCard = createCard(currentQuestionIndex);
    cardsStack.appendChild(currentCard);

    const hammer = new Hammer(currentCard);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    
    hammer.on('swipeup', () => {
        if (isAnswered[currentQuestionIndex]) {
            nextQuestion();
        }
    });

    updateProgress();
}

function handleAnswer(button, question) {
    const selectedIndex = parseInt(button.dataset.index);
    const isCorrect = question.options[selectedIndex].isCorrect;
    
    userAnswers[currentQuestionIndex] = selectedIndex;
    isAnswered[currentQuestionIndex] = true;

    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    button.classList.add('selected');
    buttons.forEach((btn, index) => {
        if (question.options[index].isCorrect) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';

    const resultMessage = document.createElement('div');
    resultMessage.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
    resultMessage.textContent = isCorrect ? 'Правильно! 🎉' : 'Неправильно! ❌';

    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    
    const explanationTitle = document.createElement('div');
    explanationTitle.className = 'explanation-title';
    explanationTitle.textContent = 'Пояснение';
    
    const explanationText = document.createElement('div');
    explanationText.className = 'explanation-text';
    explanationText.textContent = question.explanation;
    
    explanation.appendChild(explanationTitle);
    explanation.appendChild(explanationText);

    const swipeInstruction = document.createElement('div');
    swipeInstruction.className = 'swipe-instruction';
    swipeInstruction.textContent = 'Свайпните вверх для перехода к следующему заданию';

    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(explanation);
    resultContainer.appendChild(swipeInstruction);

    const card = button.closest('.card');
    card.appendChild(resultContainer);

    updateProgress();
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        const currentCard = document.querySelector('.card');
        currentCard.classList.add('swiped');

        setTimeout(() => {
            currentQuestionIndex++;
            initializeCards();
        }, 500);
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

function showResults() {
    const correctAnswers = userAnswers.reduce((sum, answer, index) => {
        if (answer !== null && selectedQuestions[index].options[answer].isCorrect) {
            return sum + 1;
        }
        return sum;
    }, 0);

    const percentage = Math.round((correctAnswers / selectedQuestions.length) * 100);
    
    const resultPanel = document.querySelector('.result-panel');
    const stats = document.querySelector('.stats');
    
    stats.innerHTML = `
        <p>Правильных ответов: ${correctAnswers} из ${selectedQuestions.length}</p>
        <p>Процент успеха: ${percentage}%</p>
        <p>Рекомендации: ${getRecommendations(percentage)}</p>
    `;
    
    resultPanel.style.display = 'block';
}

function getRecommendations(percentage) {
    if (percentage >= 80) {
        return "Отличный результат! Продолжайте в том же духе!";
    } else if (percentage >= 60) {
        return "Хороший результат, но есть над чем поработать. Обратите внимание на темы, в которых были ошибки.";
    } else {
        return "Рекомендуем повторить основные даты и события. Попробуйте использовать метод хронологических карточек для запоминания.";
    }
} 