const submitIfNumber = document.getElementById("submitIfNumber");
let ifNumber = document.getElementById("if-number")

submitIfNumber.onclick = function() {
    
    let inputIfNumber = document.getElementById("inputIfNumber");
    
    inputIfNumber = inputIfNumber.value;
    // see whether value has been entered
    let inputIfNumberValue = inputIfNumber;
    // if value, convert to Number
    inputIfNumber = Number(inputIfNumber);

    let placeholder = document.getElementById("inputIfNumber");
    
    if (inputIfNumberValue) {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = `Thanks for entering a number!`;
        ifNumber.textContent = inputIfNumber;
    };

    if (Number.isNaN(inputIfNumber)) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `Enter a NUMBER!`;
        ifNumber.innerHTML = `<span class="nan">NaN</span>`;
    };
    
    if (!inputIfNumberValue) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `ENTER a number!`;
        ifNumber.textContent = `No number entered`;
    };

    reset = document.getElementById("resetIfNumber");
    reset.onclick = function() {
        placeholder.value = "";
        placeholder.placeholder = `Enter a number`;
        placeholder.classList.remove("red");
        placeholder.classList.remove("green");
        ifNumber.textContent = "";
        document.getElementById("code-result-if-number").innerHTML = "";
        document.getElementById("show-code-if-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("show-code-if-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    theCode = `<pre>const submitIfNumber = document.getElementById("submitIfNumber");
let ifNumber = document.getElementById("if-number")

submitIfNumber.onclick = function() {
    
    let inputIfNumber = document.getElementById("inputIfNumber");
    
    inputIfNumber = inputIfNumber.value;
    // see whether value has been entered
    let inputIfNumberValue = inputIfNumber;
    // if value, convert to Number
    inputIfNumber = Number(inputIfNumber);

    let placeholder = document.getElementById("inputIfNumber");
    
    if (inputIfNumberValue) {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = "Thanks for entering a number!";
        ifNumber.textContent = ${inputIfNumber};
    };

    if (Number.isNaN(inputIfNumber)) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "Enter a NUMBER!";
        ifNumber.textContent = "Value entered was not a number";
    };
    
    if (!inputIfNumberValue) {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "ENTER a number!";
        ifNumber.textContent = "No number entered";
    };
}</pre>`;


    if (document.getElementById("code-result-if-number").innerHTML) {
        document.getElementById("code-result-if-number").innerHTML = theCode;
    } else if (document.getElementById("code-result-if-number").innerHTML == "") {
        document.getElementById("code-result-if-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-if-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-if-number-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-code-if-number-button").onclick = function() {
            document.getElementById("code-result-if-number").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("code-result-if-number").innerHTML = theCode;
            document.getElementById("show-code-if-number").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-code-if-number-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-code-if-number").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-code-if-number-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("if-something-do-something").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-code-if-number-button").onclick = function() {
        document.getElementById("hide-code-if-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-if-number-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-code-if-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("code-result-if-number").innerHTML = "";

        document.getElementById("if-something-do-something").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}