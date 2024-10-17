
const submitTernaryNumber = document.getElementById("submitTernaryNumber");
let TernaryNumber = document.getElementById("ternary-number")

submitTernaryNumber.onclick = function() {
    
    let inputTernaryNumber = document.getElementById("inputTernaryNumber");
    
    inputTernaryNumber = inputTernaryNumber.value;
    // see whether value has been entered
    let inputTernaryNumberValue = inputTernaryNumber;
    // if value, convert to Number
    inputTernaryNumber = Number(inputTernaryNumber);

    let placeholder = document.getElementById("inputTernaryNumber");

    function noValue() {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `ENTER a number!`;
        TernaryNumber.textContent = `No number entered`;
    }

    function isNan() {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = `Enter a NUMBER!`;
        TernaryNumber.innerHTML = `<span class="nan">NaN</span>`;
    }

    function hasValue() {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = `Thanks for entering a number!`;
        TernaryNumber.textContent = inputTernaryNumber;
    }

    !inputTernaryNumberValue ? noValue() : (Number.isNaN(inputTernaryNumber) ? isNan() : hasValue());

    reset = document.getElementById("resetTernaryNumber");
    reset.onclick = function() {
        placeholder.value = "";
        placeholder.placeholder = `Enter a number`;
        placeholder.classList.remove("red");
        placeholder.classList.remove("green");
        TernaryNumber.textContent = "";
        document.getElementById("code-result-ternary-number").innerHTML = "";
        document.getElementById("show-code-ternary-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("show-code-ternary-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-ternary-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-ternary-number-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    theCode = `<pre>const submitTernaryNumber = document.getElementById("submitTernaryNumber");
let TernaryNumber = document.getElementById("if-number")

submitTernaryNumber.onclick = function() {
    
    let inputTernaryNumber = document.getElementById("inputTernaryNumber");
    
    inputTernaryNumber = inputTernaryNumber.value;
    // see whether value has been entered
    let inputTernaryNumberValue = inputTernaryNumber;
    // if value, convert to Number
    inputTernaryNumber = Number(inputTernaryNumber);

    let placeholder = document.getElementById("inputTernaryNumber");    
    
    function noValue() {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "ENTER a number!";
        TernaryNumber.textContent = "No number entered";
    }

    function isNan() {
        placeholder.classList.add("red");
        placeholder.classList.remove("green");
        placeholder.value = "";
        placeholder.placeholder = "Enter a NUMBER!";
        TernaryNumber.innerHTML = "<span class="nan">NaN</span>";
    }

    function hasValue() {
        placeholder.classList.remove("red");
        placeholder.classList.add("green");
        placeholder.value = "";
        placeholder.placeholder = "Thanks for entering a number!';
        TernaryNumber.textContent = ${inputTernaryNumber};
    }

    !inputTernaryNumberValue ? noValue() : 
        (Number.isNaN(inputTernaryNumber) ? isNan() : hasValue());
}</pre>`;

    if (document.getElementById("code-result-ternary-number").innerHTML) {
        document.getElementById("code-result-ternary-number").innerHTML = theCode;
    } else if (document.getElementById("code-result-ternary-number").innerHTML == "") {
        document.getElementById("code-result-ternary-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-ternary-number").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-ternary-number-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-code-ternary-number-button").onclick = function() {
            document.getElementById("code-result-ternary-number").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("code-result-ternary-number").innerHTML = theCode;
            document.getElementById("show-code-ternary-number").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-code-ternary-number-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-code-ternary-number").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-code-ternary-number-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("ternary").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-code-ternary-number-button").onclick = function() {
        document.getElementById("hide-code-ternary-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-ternary-number-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-code-ternary-number").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("code-result-ternary-number").innerHTML = "";

        document.getElementById("ternary").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}