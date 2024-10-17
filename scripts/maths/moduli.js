moduliStudents = 30;
document.getElementById("remainder").textContent = `None`;

// Moduli
function remainderWhenDividedBy2() {
    document.getElementById("remainder").textContent = moduliStudents%2;
};
function remainderWhenDividedBy7() {
    document.getElementById("remainder").textContent = moduliStudents%7;
};
function remainderWhenDividedBy16() {
    document.getElementById("remainder").textContent = moduliStudents%16;
};

function resetModuli() {
    moduliStudents = 30;
    document.getElementById("remainder").textContent = `None`;
};