let arithmeticStudents = 30;
document.getElementById("plus-minus-one").textContent = arithmeticStudents;

// Arithmetic
function plusOne() {
    arithmeticStudents = arithmeticStudents+1
    document.getElementById("plus-minus-one").textContent = arithmeticStudents;
};
function minusOne() {
    arithmeticStudents = arithmeticStudents-1;
    document.getElementById("plus-minus-one").textContent = arithmeticStudents;
};

function multiplyByTwo() {
    console.log(arithmeticStudents)
    arithmeticStudents = arithmeticStudents * 2;
    console.log(arithmeticStudents)
    document.getElementById("plus-minus-one").textContent = arithmeticStudents;
};

function divideByThree() {
    arithmeticStudents = arithmeticStudents/3;
    document.getElementById("plus-minus-one").textContent = arithmeticStudents;
};

function resetArithmetic() {
    arithmeticStudents = 30;
    document.getElementById("plus-minus-one").textContent = arithmeticStudents;
};