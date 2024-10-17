let myName = "Justin";
let age = 52;
let student = false;

document.getElementById("let-myName").textContent = 
    `let myName = "Justin";`;
document.getElementById("p1").textContent = `My Name: ${myName}`;
document.getElementById('p1-type').textContent = `"${typeof myName}"`;
document.getElementById("let-age").textContent = 
    `let age = 52;`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById('p2-type').textContent = `${typeof age}`;
document.getElementById("let-student").textContent = 
    `let student = false;`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
document.getElementById('p3-type').textContent = `${typeof student}`;
