//задание 1*
/^([a-z]{3,10})_([a-z]{3,10})(-\d{4})?@([a-z\d]{1,10}(.?|\-?)[a-z\d]{1,10})(\.com)$/i.test('name_surname-1234@gmail.com');

//задание 2*
function check(number) {
  return (/^(8-?0|(\+?375))-?((25)|(29)|(33)|(44)|(17))-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/.test(number));
  
}

console.log(check('+375-25-777-77-77'));
console.log(check('+375299999999'));
console.log(check('8-044-444-44-44'));
console.log(check('8033-6666666'));

//задание 3*
function countVowelLetters(str) {
  var result = str.match(/([аяыиоёуюэеaeiouy])/gi);
  return result !== null ? result.length : 0;
}  

alert(countVowelLetters('Шла Саша по шоссе И сосала сУшку')); 








