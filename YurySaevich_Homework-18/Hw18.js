//Задание 1
/^[a-z]{3,10}_[a-z]{3,10}(-)?(\d{4})?@\w{1,10}(.)?(-)?\w{1,10}.com$/.test('name_surname-1111@gmail.com');

//Задание 2
function telefontest (tel) {
    return /^((\+)?375(-)?|8(-)?0)(29|25|33|44|17)(-)?[1-9]{1}\d{2}(-)?\d{2}(-)?\d{2}$/.test(tel);
}
telefontest('8033-6666666');
//Задание 3
function isVowel(word){
    return 'Количество гласных: '+word.match(/['euoaiёуеыаоэяию']/gi).length;
}
isVowel('горгулья');