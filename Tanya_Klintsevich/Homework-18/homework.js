// 1

var regexp = /^([a-z]{3,10})_([a-z]{3,10})(-\d{4})?@((\w\-?\.?){2,20})(\.com)$/i;

regexp.test('name_surname-1234@gmail.com');

//2

function checkPhoneNumber(numbers) {
    console.log(/^(\+?375-?((25)|(29)|(33)|(44)|(17))-?[1-9]{1}\d{2}-?\d{2}-?\d{2})|(8-?((025)|(029)|(033)|(044)|(017))-?[1-9]{1}\d{2}-?\d{2}-?\d{2})$/.test(number));
    return
}
checkPhoneNumber('+375-25-777-77-77');
//3

function countVowelLetters(str) {
    var vowel = str.match(/[аеёиоуыэюя]/ig);
    if (!vowel) {
    return 0
    }
    return vowel.length
}
countVowelLetters('Заметался пожар голубой,Позабылись родимые дали.В первый раз я запел про любовь,В первый раз отрекаюсь скандалить.');
