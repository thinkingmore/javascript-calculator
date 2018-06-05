// var plusBtn = document.getElementById('plus');
// plusBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber+secondNumber;
//     document.getElementById('result').value=sum;
// };
//
// var minusBtn = document.getElementById('minus');
// minusBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber-secondNumber;
//     document.getElementById('result').value = sum;
//
// };
//
// var multiplicationBtn = document.getElementById('multiplication');
// multiplicationBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber*secondNumber;
//     document.getElementById('result').value = sum;
//
// };
//
// var divisionBtn = document.getElementById('division');
// divisionBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber/secondNumber;
//     document.getElementById('result').value = sum;
//
// };
//
// var remainderBtn = document.getElementById('remainder');
// remainderBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber%secondNumber;
//     document.getElementById('result').value = sum;
//
// };

function myCalculator (operator) {
    var firstNumber=Number(document.getElementById('firstNumber').value);
    var SecondNumber=Number(document.getElementById('secondNumber').value);
    switch (operator) {
        case '+':
            var result=firstNumber+SecondNumber;
            break;
            case '-':
            var result=firstNumber-SecondNumber;
            break;
            case '*':
            var result=firstNumber*SecondNumber;
            break;
            case '/':
            var result=firstNumber/SecondNumber;
            break;
    }
    return result;
}

var plusBtn = document.getElementById('plus');
plusBtn.onclick = function () {

    var operator = document.getElementById('operator').value='+';
};

var minusBtn = document.getElementById('minus');
minusBtn.onclick = function () {

    var operator = document.getElementById('operator').value='-';
};
var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function () {

    var operator = document.getElementById('operator').value='*';
};

var divsionBtn = document.getElementById('division');
divsionBtn.onclick = function () {

    var operator = document.getElementById('operator').value='/';
};

var remainderBtn = document.getElementById('remainder');
remainderBtn.onclick = function () {

    var operator = document.getElementById('operator').value='%';
};

var equalBtn=document.getElementById('equalBtn');
equalBtn.onclick=function() {
    var operator=document.getElementById('operator').value;
    var res=myCalculator(operator);
    myCalculator(operator);
    document.getElementById('result').value=res;
};

var clearBtn =document.getElementById('clearBtn');
clearBtn.onclick = function () {
    document.getElementById('firstNumber').value='-';
    document.getElementById('secondNumber').value='-';
    document.getElementById('operator').value='-';
    document.getElementById('result').value='-';
};

function myCalculator (operator) {
    var firstNumber=Number(document.getElementById('firstNumber').value);
    var SecondNumber=Number(document.getElementById('secondNumber').value);
    switch (operator) {
        case '+':
            var result=firstNumber+SecondNumber;
            break;
        case '-':
            var result=firstNumber-SecondNumber;
            break;
        case '*':
            var result=firstNumber*SecondNumber;
            break;
        case '/':
            var result=firstNumber/SecondNumber;
            break;
    }
    return result;
}