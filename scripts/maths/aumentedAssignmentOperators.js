augmentedStudents = 30;
document.getElementById("augmented").textContent = augmentedStudents

// Augmented Assignment Operators
function augmentedBy2() {
    document.getElementById("augmented").textContent = augmentedStudents+=2;
};
function reducedBy4() {
    document.getElementById("augmented").textContent = augmentedStudents-=4;
};
function multipliedBy5() {
    document.getElementById("augmented").textContent = augmentedStudents*=5;
};
function dividedBy6() {
    document.getElementById("augmented").textContent = augmentedStudents/=6;
};
function poweredBy2() {
    document.getElementById("augmented").textContent = augmentedStudents**=2;
};
function modulusByy2() {
    document.getElementById("augmented").textContent = augmentedStudents%=2;
};

function resetAAO() {
    augmentedStudents = 30;
    document.getElementById("augmented").textContent = augmentedStudents;
};