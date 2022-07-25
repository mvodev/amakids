# Тестовое задание для AMAkids
Есть поле размером 3 на 3 ячейки(продумайте масштабируемость). В начале игры в случайную ячейку помещаем маркер. Далее генерируются 10 «ходов» (возможные варианты «вверх», «влево», «вниз», «вправо»). Игрок должен в уме «пройти» по этим ходам по лабиринту и указать конечную точку маркера.

После ответа (клик на ячейку) идет проверка ответа и предоставляется возможность начать новую игру (например, по клику на кнопку «Далее»).

Если ответ введен неправильно - указать правильный ответ. Дизайн игры произвольный.
## Установка
```bash
git clone https://github.com/mvodev/amakids.git
npm i
```
## Запуск в development режиме
```bash
npm run start
```