//Задание 1
var rageexp = /^[a-z]{3,10}_[a-z]{3,10}(\-\d{4})?@[a-z0-9]{1,10}((\-)|(\.))?[a-z0-9]{1,10}(.com)$/.test('name_surname-1234@gmail.com');

//Задание 2
var rageexp2 = /^(\+)?((375(\-)?)|(8(\-)?0))(25|29|33|44|17)(\-)?[1-9]{1}[0-9]{2}(\-)?[0-9]{2}(\-)?[0-9]{2}$/;

var phone = prompt('Введите номер телефона: ');

telCheck();

function telCheck() {
    console.log(Boolean(rageexp2.test(phone)))
}
//Задание 3
var str = prompt('Введите строку для проверки гласных:');

vowelLetters();

function vowelLetters() {
    var result = str.match( /[аяоёуюыиеaeiouy]/gi );
    if (result) {
        alert('Кол-во гласных: ' + result.length);
    } else {
        alert('Здесь нет гласных');
    }
}