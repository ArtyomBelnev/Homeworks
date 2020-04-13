//задание 1*
/^([a-zA-Z]{3,10})_([a-zA-Z]{3,10})(-\d{4})?@((\w\.?\-?){2,20})(\.com)$/i.test('name_surname-1234@gmail.com');


//задание 2*
function check(number) {
  console.log(/^(8|(\+?375))-?(((25)|(025))|((29)|(029))|((33)|(033))|((44)|(044))|((17)|(017)))-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/.test(number));
  return
}

check('+375-25-777-77-77');
check('375299999999');
checkr('8-044-444-44-44');
check('8033-6666666');

//задание 3*
function countVowelLetters(str) {
  var result = str.match(/([аяыиоёуюэеaeiouy])/gi);
  if (result === null) {
    return 0
    }
    return result.length
}

alert(countVowelLetters('Шла Саша по шоссе И сосала сУшку')); 






