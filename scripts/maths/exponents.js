exponentStudents = 30;
document.getElementById("exponential").textContent = exponentStudents;

// Exponents
function squared() {
    exponentStudents = exponentStudents**2;
    document.getElementById("exponential").textContent = exponentStudents;
};
function cubed() {
    exponentStudents = exponentStudents**3;
    document.getElementById("exponential").textContent = exponentStudents;
};
function powerof25() {
    exponentStudents = exponentStudents**25;
    document.getElementById("exponential").textContent = exponentStudents;
};

function resetExponents() {
    exponentStudents = 30;
    document.getElementById("exponential").textContent = exponentStudents;
};