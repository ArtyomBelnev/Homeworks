//Задание №1

/^[a-z]{3,10}_[a-z]{3,10}-?\d{4}@[\w.?|\-?]{2,20}.com$/i.test('name_surname-1234@gmail.com');

//Задание №2

function correctNumber(number){
    var findNumber =/^\+?(375|8-?0)-?(25|33|29|44|17)-?[1-9]{3}-?[\d]{2}-?[\d]{2}$/ig;
    return findNumber.exec(number) ? true : false;
    }
    correctNumber('+375-25-777-77-77');

//Задание №3

function transmitText(text) {
    return text.split(/[^аеёиоуыэюя]/i).join('').length;
 }
 transmitText("Шла Саша по шоссе И сосала сУшку");