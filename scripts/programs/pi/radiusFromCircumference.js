// radius from circumference r=C/(2*PI) ----------------------------------
function radiusFromCircumference(radiusOfCircle) {

    let radiusFromCircumference = document.getElementById("result-radius-from-circumference");
    
    circumferenceOfCircle = circumferenceForRadius.value
    // see whether value has been entered
    inputValue = circumferenceOfCircle;
    // if value, convert to Number
    circumferenceOfCircle = Number(circumferenceOfCircle);
    // see whether positive or negative
    posneg = Math.sign(circumferenceOfCircle);

    radiusOfCircle = circumferenceOfCircle / (2 * PI);
    radiusOfCircle = Number(radiusOfCircle);

    if (!inputValue) {
        radiusFromCircumference.innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (Number.isNaN(radiusOfCircle)) {
        radiusFromCircumference.innerHTML = `<span class="result nan">Nan</span>`;
    } else if ((radiusOfCircle === 0) || posneg === -1) {
        radiusFromCircumference.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else {
        radiusFromCircumference.innerHTML = `<span class="result">${radiusOfCircle} cm`;
    };

    reset = document.getElementById("resetRadiusFromCircumference");
    reset.onclick = function() {
        circumferenceForRadius.value = "";
        radiusFromCircumference.textContent = "";
        codeResultRadiusFromCircumference.innerHTML = "";
        showResultRadiusFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultRadiusFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    codeResult = `if (!inputValue) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (radiusOfCircle === 0) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(radiusOfCircle)) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result">${radiusOfCircle} cm</span>
    };`;

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`
        codeResult = `if (!inputValue) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            ${inputValueResult}
    };`;
    } else {
        inputValueResult = `<span class="string">// ${inputValue}</span>`;
    };

    if (Number.isNaN(radiusOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(radiusOfCircle)) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="string">// Not a Number entered</span>
    };`;
    };

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${radiusOfCircle} cm</span><span class="string"> // In real life, circles cannot have a negative radius!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            ${imaginaryNumber}
    };`;
    } else if ((posneg === 0) || Number.isNaN(posneg)) {
        negpos = "";
    } else {
        negpos = `<span class="string"> (Positive number)</span>`
        imaginaryNumber = `<span class="result">${radiusOfCircle} cm<sup>2</sup></span>` 
    };

    if (inputValue && circumferenceOfCircle === 0) {
        imaginaryNumber = `<span class="result">${radiusOfCircle} cm</span><span class="string"> // In real life, circles cannot have a zero radius!</span>`
        codeResult = `if (radiusOfCircle === 0) {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-radius-from-circumference").innerHTML = 
            ${imaginaryNumber}
    };`;
    }

    theCode = `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;

function radiusFromCircumference(radiusOfCircle) {
    circumferenceOfCircle = document.getElementById("circumference-for-radius").value
    <span class="string">// see whether value has been entered</span>
    inputValue = circumferenceOfCircle;  ${inputValueResult}
    <span class="string">// if value, convert to Number</span>
    circumferenceOfCircle = Number(circumferenceOfCircle); <span class="string">// ${circumferenceOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(circumferenceOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    radiusOfCircle = circumferenceOfCircle / (2 * PI);
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>

    ${codeResult}
}</pre>`;

    if (codeResultRadiusFromCircumference.innerHTML) {
        codeResultRadiusFromCircumference.innerHTML = theCode;
    } else if (codeResultRadiusFromCircumference.innerHTML == "") {
        showResultRadiusFromCircumference.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showResultRadiusFromCircumferenceButton.onclick = function() {
            codeResultRadiusFromCircumference.setAttribute(
                "style", "height: 100%"
              );
            codeResultRadiusFromCircumference.innerHTML = theCode;

            radiusFromCircumferenceDiv.scrollIntoView({ behavior: "smooth", block: "start" });

            showResultRadiusFromCircumference.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultRadiusFromCircumference.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
        };
    };

    hideCodeRadiusFromCircumferenceButton.onclick = function() {
        hideResultRadiusFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultRadiusFromCircumference.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultRadiusFromCircumference.textContent = "";

        radiusFromCircumferenceDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}