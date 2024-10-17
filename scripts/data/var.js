var hey = "Hey!";
var hey = "Hello!";

document.getElementById("hey").textContent = hey;

var hi = "Hey!";
hi = "Hello!";

document.getElementById("hi").textContent = hi;


let globalScopedVar = "available here";
    
function globalScopedVarFunction() {
    // do something
    if (globalScopedVar === "available here") {
        // do something
    }
}

globalScopedVarFunction();