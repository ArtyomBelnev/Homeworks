// TABLE elements from HTML
var mail = document.getElementById('mail');
var isMail = document.getElementById('isMail');
var tel = document.getElementById('tel');
var isTel = document.getElementById('isTel');
var sentence = document.getElementById('sentence');
var button = document.getElementById('button');
var val1,
    val2,
    val3,
    editVal1,
    editVal2,
    editVal3;

var regMail = /^([a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}(\.?|-?)[a-z\d]{1,10}(\.com))$/i;
var regTel = /^(((\+?375-?)|(8-?0))(25|29|33|44|17)-?[1-9]{1}\d{2}-?\d{2}-?\d{2})$/;
var regVowels = /[aeiou]/ig;

// Events for Mail
mail.addEventListener('keyup', function () {
    val1 = mail.value;
    editVal1 = val1.trim();

    if (!regMail.test(editVal1)) {
        isMail.classList.remove('isRight');
        isMail.classList.add('notRight');
        isMail.innerText = 'Mail is NOT Right';
        return;
    }

    if (regMail.test(editVal1)) {
        isMail.classList.remove('notRight');
        isMail.classList.add('isRight');
        isMail.innerText = 'Mail is Right';
    }
    return;
});


// Events for Telephone
tel.addEventListener('keyup', function () {
    val2 = tel.value;
    editVal2 = val2.trim();

    if (!checkTel(editVal2)) {
        isTel.classList.remove('isRight');
        isTel.classList.add('notRight');
        isTel.innerText = 'Tel is NOT Right';
        return;
    }

    if (checkTel(editVal2)) {
        isTel.classList.remove('notRight');
        isTel.classList.add('isRight');
        isTel.innerText = 'Tel is Right';
    }
    return;
});


// Events for Text
sentence.addEventListener('keyup', function () {
    val3 = sentence.value;
    editVal3 = val3.trim();

    if (editVal3) {
        button.removeAttribute('disabled');
    }

    if (!editVal3) {
        button.setAttribute('disabled', '');
    }
});

button.addEventListener('click', countVowels);


// FUNCTIONS
function checkTel(tel) {
    return regTel.test(tel);
}

function countVowels() {
    var counter = (editVal3.match(regVowels)).length;

    return alert('In the sentence: "' + editVal3 + '"\n\nare ' + counter + ' vowels.');
}