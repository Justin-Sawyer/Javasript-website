// area from circumference -----------------------------------------------
function areaFromCircumference(areaOfCircle) {

    let areaFromCircumference = document.getElementById("result-area-from-circumference");

    circumferenceOfCircle = circumferenceForArea.value
    // see whether value has been entered
    inputValue = circumferenceOfCircle;
    // if value, convert to Number
    circumferenceOfCircle = Number(circumferenceOfCircle);
    // see whether positive or negative
    posneg = Math.sign(circumferenceOfCircle);

    radiusOfCircle = circumferenceOfCircle / (2 * PI);
    radiusOfCircle = Number(radiusOfCircle);

    areaOfCircle = PI * radiusOfCircle**2;
    areaOfCircle = Number(areaOfCircle);

    if (!inputValue) {
        areaFromCircumference.innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (Number.isNaN(circumferenceOfCircle)) {
        areaFromCircumference.innerHTML = `<span class="result nan">NaN</span>`;
    } else if (posneg === -1 || (circumferenceOfCircle === 0)) {
        areaFromCircumference.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else {
        areaFromCircumference.innerHTML = `<span class="result">${areaOfCircle} cm<sup>2</sup></span>`;
    };

    reset = document.getElementById("resetAreaFromCircumference");
    reset.onclick = function() {
        circumferenceForArea.value = "";
        areaFromCircumference.textContent = "";
        codeResultAreaFromCircumference.innerHTML = "";
        showResultAreaFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultAreaFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    codeResult = `if (!inputValue) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (areaOfCircle === 0) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(circumferenceOfCircle)) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result">${areaOfCircle} cm<sup>2</sup></span>
    };`

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`
        codeResult = `if (!inputValue) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="string">// No value entered</span>
    };`
    } else {
        inputValueResult = `<span class="string">${inputValue}</span>` 
    };

    if (Number.isNaN(circumferenceOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(circumferenceOfCircle)) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="string">// Not a Number entered</span>
    };`
    }

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${areaOfCircle} cm<sup>2</sup></span><span class="string"> // In real life, circles cannot have a negative circumference!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            ${imaginaryNumber}
    };`
    } else if ((posneg === 0) || Number.isNaN(posneg)) {
        negpos = "";
    } else {
        negpos = `<span class="string"> (Positive number)</span>`
        imaginaryNumber = `<span class="result">${areaOfCircle} cm<sup>2</sup></span>';` 
    };

    if (inputValue && areaOfCircle === 0) {
        imaginaryNumber = `<span class="result">${areaOfCircle} cm<sup>2</sup></span><span class="string">// In real life, circles cannot have a zero area!</span>`
        codeResult = `if (areaOfCircle === 0) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            ${imaginaryNumber}
    };`
    }

    theCode = `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;
    
function areaFromCircumference(areaOfCircle) {
    circumferenceOfCircle = circumferenceForArea.value
    <span class="string">// see whether value has been entered</span>
    inputValue = circumferenceOfCircle; <span class="string">// ${inputValueResult}</span>
    <span class="string">// if value, convert to Number</span>
    circumferenceOfCircle = Number(circumferenceOfCircle); <span class="string">// ${circumferenceOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(circumferenceOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    radiusOfCircle = circumferenceOfCircle / (2 * PI);
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>

    areaOfCircle = PI * radiusOfCircle**2;
    areaOfCircle = Number(areaOfCircle); <span class="string">// ${areaOfCircle}</span>

    ${codeResult}
}
</pre>`;

    if (codeResultAreaFromCircumference.innerHTML) {
        codeResultAreaFromCircumference.innerHTML = theCode;
    } else if (codeResultAreaFromCircumference.innerHTML == "") {
        showResultAreaFromCircumference.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        showResultAreaFromCircumferenceButton.onclick = function() {
            codeResultAreaFromCircumference.setAttribute(
                "style", "height: 100%;"
            );
            codeResultAreaFromCircumference.innerHTML = theCode;
            showResultAreaFromCircumference.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultAreaFromCircumference.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );

            areaFromCircumferenceDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCodeAreaFromCircumferenceButton.onclick = function() {
        hideResultAreaFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultAreaFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultAreaFromCircumference.textContent = "";

        areaFromCircumferenceDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}



