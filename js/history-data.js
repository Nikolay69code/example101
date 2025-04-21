const allHistoryQuestions = [
    {
        id: 1,
        title: "Древняя Русь",
        text: "Кто из князей правил раньше всех остальных?",
        options: [
            { text: "Владимир Мономах", isCorrect: false },
            { text: "Олег Вещий", isCorrect: true },
            { text: "Ярослав Мудрый", isCorrect: false },
            { text: "Святослав Игоревич", isCorrect: false }
        ],
        explanation: "Олег Вещий правил в 879-912 годах, что раньше всех остальных перечисленных князей."
    },
    {
        id: 2,
        title: "Монгольское нашествие",
        text: "В каком году произошла битва на реке Калке?",
        options: [
            { text: "1223 год", isCorrect: true },
            { text: "1240 год", isCorrect: false },
            { text: "1242 год", isCorrect: false },
            { text: "1380 год", isCorrect: false }
        ],
        explanation: "Битва на реке Калке произошла в 1223 году и стала первым столкновением русских войск с монголами."
    },
    {
        id: 3,
        title: "Московское государство",
        text: "При каком правителе произошло окончательное свержение монголо-татарского ига?",
        options: [
            { text: "Дмитрий Донской", isCorrect: false },
            { text: "Иван III", isCorrect: true },
            { text: "Василий II Тёмный", isCorrect: false },
            { text: "Иван Калита", isCorrect: false }
        ],
        explanation: "Окончательное свержение монголо-татарского ига произошло в 1480 году при Иване III (стояние на реке Угре)."
    },
    {
        id: 4,
        title: "Крещение Руси",
        text: "В каком году произошло крещение Руси?",
        options: [
            { text: "980 год", isCorrect: false },
            { text: "988 год", isCorrect: true },
            { text: "996 год", isCorrect: false },
            { text: "1000 год", isCorrect: false }
        ],
        explanation: "Крещение Руси произошло в 988 году при князе Владимире Святославиче."
    },
    {
        id: 5,
        title: "Древнерусская культура",
        text: "Кто считается создателем славянской письменности?",
        options: [
            { text: "Кирилл и Мефодий", isCorrect: true },
            { text: "Нестор Летописец", isCorrect: false },
            { text: "Ярослав Мудрый", isCorrect: false },
            { text: "Владимир Мономах", isCorrect: false }
        ],
        explanation: "Братья Кирилл и Мефодий создали славянскую азбуку в IX веке."
    },
    {
        id: 6,
        title: "Куликовская битва",
        text: "В каком году состоялась Куликовская битва?",
        options: [
            { text: "1380 год", isCorrect: true },
            { text: "1382 год", isCorrect: false },
            { text: "1385 год", isCorrect: false },
            { text: "1395 год", isCorrect: false }
        ],
        explanation: "Куликовская битва состоялась 8 сентября 1380 года между русским войском под командованием Дмитрия Донского и войском Золотой Орды."
    },
    {
        id: 7,
        title: "Смутное время",
        text: "Кто стал первым царём из династии Романовых?",
        options: [
            { text: "Фёдор Романов", isCorrect: false },
            { text: "Михаил Фёдорович", isCorrect: true },
            { text: "Алексей Михайлович", isCorrect: false },
            { text: "Фёдор Алексеевич", isCorrect: false }
        ],
        explanation: "Михаил Фёдорович Романов был избран на царство Земским собором в 1613 году."
    },
    {
        id: 8,
        title: "Реформы Петра I",
        text: "В каком году был основан Санкт-Петербург?",
        options: [
            { text: "1700 год", isCorrect: false },
            { text: "1703 год", isCorrect: true },
            { text: "1709 год", isCorrect: false },
            { text: "1712 год", isCorrect: false }
        ],
        explanation: "Санкт-Петербург был основан Петром I 27 мая 1703 года."
    },
    {
        id: 9,
        title: "Отечественная война 1812 года",
        text: "Кто командовал русской армией в Бородинском сражении?",
        options: [
            { text: "А.В. Суворов", isCorrect: false },
            { text: "М.И. Кутузов", isCorrect: true },
            { text: "П.И. Багратион", isCorrect: false },
            { text: "М.Б. Барклай-де-Толли", isCorrect: false }
        ],
        explanation: "Главнокомандующим русской армией в Бородинском сражении был М.И. Кутузов."
    },
    {
        id: 10,
        title: "Крымская война",
        text: "В каком году началась оборона Севастополя?",
        options: [
            { text: "1853 год", isCorrect: false },
            { text: "1854 год", isCorrect: true },
            { text: "1855 год", isCorrect: false },
            { text: "1856 год", isCorrect: false }
        ],
        explanation: "Оборона Севастополя началась в сентябре 1854 года и продолжалась 349 дней."
    },
    {
        id: 11,
        title: "Отмена крепостного права",
        text: "В каком году был издан манифест об отмене крепостного права?",
        options: [
            { text: "1861 год", isCorrect: true },
            { text: "1864 год", isCorrect: false },
            { text: "1870 год", isCorrect: false },
            { text: "1881 год", isCorrect: false }
        ],
        explanation: "Манифест об отмене крепостного права был подписан Александром II 19 февраля 1861 года."
    },
    {
        id: 12,
        title: "Революция 1905-1907 годов",
        text: "Какое событие стало началом Первой русской революции?",
        options: [
            { text: "Манифест 17 октября", isCorrect: false },
            { text: "Кровавое воскресенье", isCorrect: true },
            { text: "Восстание на броненосце 'Потёмкин'", isCorrect: false },
            { text: "Декабрьское вооружённое восстание", isCorrect: false }
        ],
        explanation: "Первая русская революция началась 9 января 1905 года с расстрела мирной демонстрации рабочих ('Кровавое воскресенье')."
    },
    {
        id: 13,
        title: "Первая мировая война",
        text: "Когда Россия вступила в Первую мировую войну?",
        options: [
            { text: "1 августа 1914 года", isCorrect: true },
            { text: "1 сентября 1914 года", isCorrect: false },
            { text: "1 октября 1914 года", isCorrect: false },
            { text: "1 ноября 1914 года", isCorrect: false }
        ],
        explanation: "Россия вступила в Первую мировую войну 1 августа 1914 года после объявления войны Германией."
    },
    {
        id: 14,
        title: "Революция 1917 года",
        text: "Какое временное правительство было сформировано после Февральской революции?",
        options: [
            { text: "Первое коалиционное", isCorrect: false },
            { text: "Директория", isCorrect: false },
            { text: "Временный комитет Государственной думы", isCorrect: true },
            { text: "Совет народных комиссаров", isCorrect: false }
        ],
        explanation: "После Февральской революции было сформировано Временное правительство на основе Временного комитета Государственной думы."
    },
    {
        id: 15,
        title: "Гражданская война",
        text: "Кто возглавил Добровольческую армию в 1918 году?",
        options: [
            { text: "А.И. Деникин", isCorrect: true },
            { text: "П.Н. Врангель", isCorrect: false },
            { text: "Л.Г. Корнилов", isCorrect: false },
            { text: "А.В. Колчак", isCorrect: false }
        ],
        explanation: "После гибели Л.Г. Корнилова в апреле 1918 года Добровольческую армию возглавил А.И. Деникин."
    },
    {
        id: 16,
        title: "Великая Отечественная война",
        text: "Когда началась Сталинградская битва?",
        options: [
            { text: "17 июля 1942 года", isCorrect: true },
            { text: "19 ноября 1942 года", isCorrect: false },
            { text: "23 августа 1942 года", isCorrect: false },
            { text: "2 февраля 1943 года", isCorrect: false }
        ],
        explanation: "Сталинградская битва началась 17 июля 1942 года и завершилась 2 февраля 1943 года."
    },
    {
        id: 17,
        title: "Послевоенный период",
        text: "В каком году была проведена денежная реформа в СССР после войны?",
        options: [
            { text: "1945 год", isCorrect: false },
            { text: "1947 год", isCorrect: true },
            { text: "1949 год", isCorrect: false },
            { text: "1950 год", isCorrect: false }
        ],
        explanation: "Денежная реформа в СССР была проведена в декабре 1947 года."
    },
    {
        id: 18,
        title: "Период оттепели",
        text: "На каком съезде КПСС был развенчан культ личности Сталина?",
        options: [
            { text: "XIX съезд", isCorrect: false },
            { text: "XX съезд", isCorrect: true },
            { text: "XXI съезд", isCorrect: false },
            { text: "XXII съезд", isCorrect: false }
        ],
        explanation: "Культ личности Сталина был развенчан на XX съезде КПСС в феврале 1956 года."
    },
    {
        id: 19,
        title: "Перестройка",
        text: "В каком году М.С. Горбачёв стал Генеральным секретарём ЦК КПСС?",
        options: [
            { text: "1984 год", isCorrect: false },
            { text: "1985 год", isCorrect: true },
            { text: "1986 год", isCorrect: false },
            { text: "1987 год", isCorrect: false }
        ],
        explanation: "М.С. Горбачёв был избран Генеральным секретарём ЦК КПСС 11 марта 1985 года."
    },
    {
        id: 20,
        title: "Современная Россия",
        text: "Когда была принята действующая Конституция Российской Федерации?",
        options: [
            { text: "12 июня 1990 года", isCorrect: false },
            { text: "12 июня 1991 года", isCorrect: false },
            { text: "12 декабря 1993 года", isCorrect: true },
            { text: "12 декабря 1994 года", isCorrect: false }
        ],
        explanation: "Действующая Конституция РФ была принята всенародным голосованием 12 декабря 1993 года."
    },
    {
        id: 21,
        title: "Киевская Русь",
        text: "Кто основал династию Рюриковичей?",
        options: [
            { text: "Олег", isCorrect: false },
            { text: "Рюрик", isCorrect: true },
            { text: "Игорь", isCorrect: false },
            { text: "Святослав", isCorrect: false }
        ],
        explanation: "Рюрик считается основателем династии Рюриковичей, правившей на Руси до конца XVI века."
    },
    {
        id: 22,
        title: "Древняя Русь",
        text: "В каком году была основана Москва?",
        options: [
            { text: "1147 год", isCorrect: true },
            { text: "1150 год", isCorrect: false },
            { text: "1156 год", isCorrect: false },
            { text: "1167 год", isCorrect: false }
        ],
        explanation: "Первое летописное упоминание о Москве относится к 1147 году, когда Юрий Долгорукий пригласил князя Святослава Ольговича в 'Москов'."
    },
    {
        id: 23,
        title: "Монгольское иго",
        text: "Кто возглавлял монгольское войско во время нашествия на Русь в 1237 году?",
        options: [
            { text: "Чингисхан", isCorrect: false },
            { text: "Батый", isCorrect: true },
            { text: "Мамай", isCorrect: false },
            { text: "Тохтамыш", isCorrect: false }
        ],
        explanation: "Батый, внук Чингисхана, возглавлял монгольское войско во время западного похода 1237-1242 годов."
    },
    {
        id: 24,
        title: "Древнерусская культура",
        text: "Какой памятник древнерусской литературы повествует о походе князя Игоря против половцев?",
        options: [
            { text: "Слово о полку Игореве", isCorrect: true },
            { text: "Повесть временных лет", isCorrect: false },
            { text: "Поучение Владимира Мономаха", isCorrect: false },
            { text: "Задонщина", isCorrect: false }
        ],
        explanation: "'Слово о полку Игореве' - выдающийся памятник древнерусской литературы конца XII века."
    },
    {
        id: 25,
        title: "Средневековая Русь",
        text: "При каком князе был построен Успенский собор во Владимире?",
        options: [
            { text: "Юрий Долгорукий", isCorrect: false },
            { text: "Андрей Боголюбский", isCorrect: true },
            { text: "Всеволод Большое Гнездо", isCorrect: false },
            { text: "Александр Невский", isCorrect: false }
        ],
        explanation: "Успенский собор был построен при князе Андрее Боголюбском в 1158-1160 годах."
    },
    {
        id: 100,
        title: "Современная Россия",
        text: "В каком году Россия вступила во Всемирную торговую организацию (ВТО)?",
        options: [
            { text: "2010 год", isCorrect: false },
            { text: "2011 год", isCorrect: false },
            { text: "2012 год", isCorrect: true },
            { text: "2013 год", isCorrect: false }
        ],
        explanation: "Россия стала членом ВТО 22 августа 2012 года после 18 лет переговоров."
    }
];

// Функция для получения случайной выборки вопросов
function getRandomQuestions(count) {
    const shuffled = [...allHistoryQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Создаем массив из 20 случайных вопросов
const historyQuestions = getRandomQuestions(20); 