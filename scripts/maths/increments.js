incrementStudents = 30;
document.getElementById("increment").textContent = incrementStudents;

// Increment / decrement
function incremented() {
    incrementStudents++;
    document.getElementById("increment").textContent = incrementStudents;
};
function decremented() {
    incrementStudents--;
    document.getElementById("increment").textContent = incrementStudents;
};

function resetIncrements() {
    incrementStudents = 30;
    document.getElementById("increment").textContent = incrementStudents;
};