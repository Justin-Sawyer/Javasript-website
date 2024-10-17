let textboxUserAge;

function submitUserAge() {
    textboxUserAge = document.getElementById("user-age").value;
    console.log(textboxUserAge);
    if (textboxUserAge == "") {
        alert("Please enter your age");
    }
    else {
        document.getElementById("userage-is").textContent = textboxUserAge;
        document.getElementById("userage-willbe").textContent = textboxUserAge+1;
        document.getElementById("userage-is-type").textContent = `All input data are ${typeof textboxUserAge}s`;

        textboxUserAge = Number(textboxUserAge);

        document.getElementById("converted-userage-is").textContent = textboxUserAge;
        document.getElementById("converted-userage-willbe").textContent = textboxUserAge+1;
        document.getElementById("converted-userage-is-type").textContent = `The string has been converted to a ${typeof textboxUserAge}`;
    }
}

let thisString = "text";
thisString = Boolean(thisString);

let thatString;
thatString = Boolean(thatString);

document.getElementById("thisString-value").textContent = thisString;
document.getElementById("thatString-value").textContent = thatString;

let thisNumber = 37;
thisNumber = String(thisNumber);

document.getElementById("thisNumber-value").textContent = thisNumber;

let thatNumber = 37;
thatNumber = Boolean(thatNumber);

document.getElementById("thatNumber-value").textContent = thatNumber;

let otherNumber;
let notANumber;
otherNumber = Number(otherNumber);
notANumber = Boolean(otherNumber);

document.getElementById("otherNumber-value").textContent = otherNumber;
document.getElementById("notANumber-value").textContent = notANumber;

let thisBoolean = true;
thisBoolean = Number(thisBoolean);

document.getElementById("thisBoolean-value").textContent = thisBoolean;

let thatBoolean = false;
thatBoolean = Number(thatBoolean);

document.getElementById("thatBoolean-value").textContent = thatBoolean;

//thisStringBoolean
let thisStringBoolean = true;
thisStringBoolean = String(thisStringBoolean);

document.getElementById("thisStringBoolean-value").textContent = thisStringBoolean;

let thatStringBoolean = false;
thatStringBoolean = String(thatStringBoolean);

document.getElementById("thatStringBoolean-value").textContent = thatStringBoolean;

let a = "";
let b = "";
let c = "";

a = Number(a);
b = String(b);
c = Boolean(c);

document.getElementById("a-value").textContent = a;
document.getElementById("b-value").textContent = b;
document.getElementById("c-value").textContent = c;


document.getElementById("a-value-type").textContent = typeof a;
document.getElementById("b-value-type").textContent = typeof b;
document.getElementById("c-value-type").textContent = typeof c;

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

document.getElementById("x-value-type").textContent = typeof x;
document.getElementById("y-value-type").textContent = typeof y;
document.getElementById("z-value-type").textContent = typeof z;

document.getElementById("x-value").textContent = x;
document.getElementById("y-value").textContent = y;
document.getElementById("z-value").textContent = z;
