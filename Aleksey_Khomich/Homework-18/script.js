//Задание №1

/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(-?|\.?)[a-z\d]{1,10}\.com$/i.test('name_surname-1234@gmail.com');
//Задание №2

function correctNumber(number) {
    var findNumber = /^(\+?375|8-?0)-?(25|33|29|44|17)-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/ig;
    return findNumber.test(number);
}
correctNumber('8033-8886666');
//Задание №3

function transmitText(text) {
    return text.split(/[^аеёиоуыэюя]/i).join('').length;
}
transmitText('Шла Саша по шоссе И сосала сУшку');