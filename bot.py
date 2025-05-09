import os
from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo
from aiogram.utils import executor

# Замените на свой токен
BOT_TOKEN = '7185317833:AAFp_KYwPvlI6daIB-mV_2twlNWQdWhVxHg'

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    markup.add(types.KeyboardButton(
        text="Играть в квест",
        web_app=WebAppInfo(url="https://24kvest.ru/")
    ))
    
    await message.answer(
        "Добро пожаловать в Тренажер для подготовки к ЕГЭ по истории!",
        reply_markup=markup
    )

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)