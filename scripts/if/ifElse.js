
const submitIfElseNumber = document.getElementById("submitIfElseNumber");
let IfElseNumber = document.getElementById("if-else-number")

submitIfElseNumber.onclick = function() {
    
    let inputIfElseNumber = document.getElementById("inputIfElseNumber");
    
    inputIfElseNumber = inputIfElseNumber.value;
    // see whether value has been entered
    let inputIfElseNumberValue = inputIfElseNumber;
    // if value, convert to Number
    inputIfElseNumber = Number(inputIfElseNumber);

    let placeholder = document.getElementById("inputIfElseNumber");

    if (!inputIfElseNumberValue) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `ENTER a number!`;
        IfElseNumber.textContent = `No number entered`;
    } else if (Number.isNaN(inputIfElseNumber)) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `Enter a NUMBER!`;
        IfElseNumber.innerHTML = `<span class="nan">NaN</span>`;
    } else {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = `Thanks for entering a number!`;
        IfElseNumber.textContent = inputIfElseNumber;
    };

    reset = document.getElementById("resetIfElseNumber");
    reset.onclick = function() {
        placeholder.value = "";
        placeholder.placeholder = `Enter a number`;
        placeholder.classList.remove("red");
        placeholder.classList.remove("green");
        IfElseNumber.textContent = "";
        document.getElementById("code-result-if-else-number").innerHTML = "";
        document.getElementById("show-code-if-else-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("show-code-if-else-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-else-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-else-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    theCode = `<pre>const submitIfElseNumber = document.getElementById("submitIfElseNumber");
let IfElseNumber = document.getElementById("if-number")

submitIfElseNumber.onclick = function() {
    
    let inputIfElseNumber = document.getElementById("inputIfElseNumber");
    
    inputIfElseNumber = inputIfElseNumber.value;
    // see whether value has been entered
    let inputIfElseNumberValue = inputIfElseNumber;
    // if value, convert to Number
    inputIfElseNumber = Number(inputIfElseNumber);

    let placeholder = document.getElementById("inputIfElseNumber");    
    
    if (!inputIfElseNumberValue) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "ENTER a number!';
        IfElseNumber.textContent = 'No number entered";
    } else if (Number.isNaN(inputIfElseNumber)) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "Enter a NUMBER!";
        IfElseNumber.innerHTML = "<span class="nan">NaN</span>";
    } else {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = "Thanks for entering a number!";
        IfElseNumber.textContent = ${inputIfElseNumber};
    };
}</pre>`;


    if (document.getElementById("code-result-if-else-number").innerHTML) {
        document.getElementById("code-result-if-else-number").innerHTML = theCode;
    } else if (document.getElementById("code-result-if-else-number").innerHTML == "") {
        document.getElementById("code-result-if-else-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-if-else-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-if-else-number-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-code-if-else-number-button").onclick = function() {
            document.getElementById("code-result-if-else-number").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("code-result-if-else-number").innerHTML = theCode;
            document.getElementById("show-code-if-else-number").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-code-if-else-number-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-code-if-else-number").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-code-if-else-number-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("if-else").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-code-if-else-number-button").onclick = function() {
        document.getElementById("hide-code-if-else-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-else-number-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-code-if-else-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("code-result-if-else-number").innerHTML = "";

        document.getElementById("if-else").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}