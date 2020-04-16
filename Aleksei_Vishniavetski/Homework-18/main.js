//Задание 1

regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(-?|\.?)[a-z\d]{1,10}\.com$/i;

regexp.test('name_surname-1234@gmail.com');

// Задание 2

function checkNumber(number) {
    return /^(\+?375-?|8-?0)(33|29|44|17|25)-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/.test(number);
}

console.log(checkNumber('8033-6666666'));
console.log(checkNumber('8-044-444-44-44'));
console.log(checkNumber('375299999999'));
console.log(checkNumber('+375-25-777-77-77'));

//Задание 3

function countVowelLetters(str) {
    var result = str.match(/[аеёиоуыэюя]/ig);
    if (!result)  return 0;

    return result.length
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');






