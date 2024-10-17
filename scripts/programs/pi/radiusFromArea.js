// radius from area r = √(A / PI) ----------------------------------------
function radiusFromArea(radiusOfCircle) {

    let radiusFromArea = document.getElementById("result-radius-from-area");

    areaOfCircle = areaForRadius.value;
    // see whether value has been entered
    inputValue = areaOfCircle;
    // if value, convert to Number
    areaOfCircle = Number(areaOfCircle);
    // see whether positive or negative
    posneg = Math.sign(areaOfCircle);

    radiusOfCircle = Math.sqrt(areaOfCircle / PI);
    radiusOfCircle = Number(radiusOfCircle);

    if (!inputValue) {
        radiusFromArea.innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (posneg === -1 || radiusOfCircle === 0) {
        radiusFromArea.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else if (Number.isNaN(radiusOfCircle)) {
        radiusFromArea.innerHTML = `<span class="result nan">${radiusOfCircle}</span>`;
    } else {
        radiusFromArea.innerHTML = `<span class="result">${radiusOfCircle} cm`;
    };

    reset = document.getElementById("resetRadiusFromArea");
    reset.onclick = function() {
        areaForRadius.value = "";
        radiusFromArea.textContent = "";
        codeResultRadiusFromArea.innerHTML = "";
        showResultRadiusFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultRadiusFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    codeResult = `if (!inputValue) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (radiusOfCircle === 0) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(radiusOfCircle)) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result">${radiusOfCircle} cm
    };`

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`;
        codeResult = `if (!inputValue) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="string">// No value entered</span>
    };`
    } else {
        inputValueResult = `<span class="string">${inputValue}</span>` 
    };

    if (Number.isNaN(radiusOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(radiusOfCircle)) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result nan">NaN</span>;
    } else {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="string">// Not a Number entered</span>
    };`
    }

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${radiusOfCircle} </span><span class="string"> // In real life, circles cannot have a negative area, 
                and negative numbers cannot be rooted!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-radius-from-area").innerHTML = 
            ${imaginaryNumber}
    };`
    } else if ((posneg === 0) || Number.isNaN(posneg)) {
        negpos = "";
    } else {
        negpos = `<span class="string"> (Positive number)</span>`
        imaginaryNumber = `<span class="result">${radiusOfCircle} cm<sup>2</sup></span>` 
    };

    if (inputValue && areaOfCircle === 0) {
        imaginaryNumber = `<span class="result">${radiusOfCircle} cm</span><span class="string"> // In real life, circles cannot have a zero radius!</span>`
        codeResult = `if (radiusOfCircle === 0) {
        document.getElementById("result-radius-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-radius-from-area").innerHTML = 
            ${imaginaryNumber}
    };`
    }


    theCode = `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;

function radiusFromArea(radiusOfCircle) {
    areaOfCircle = document.getElementById("area-for-radius").value;
    <span class="string">// see whether value has been entered</span>
    inputValue = areaOfCircle; <span class="string">// ${inputValueResult}</span>
    <span class="string">// if value, convert to Number</span>
    areaOfCircle = Number(areaOfCircle); <span class="string">// ${areaOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(areaOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    radiusOfCircle = Math.sqrt(areaOfCircle / PI);
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>

    ${codeResult}
}</pre>`;

    if (codeResultRadiusFromArea.innerHTML) {
        codeResultRadiusFromArea.innerHTML = theCode;
    } else if (codeResultRadiusFromArea.innerHTML == "") {
        showResultRadiusFromArea.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showResultRadiusFromAreaButton.onclick = function() {
            codeResultRadiusFromArea.setAttribute(
              "style", "height: 100%"
            );
            codeResultRadiusFromArea.innerHTML = theCode;

            radiusFromAreaDiv.scrollIntoView({ behavior: "smooth", block: "start" });

            showResultRadiusFromArea.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultRadiusFromArea.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
        };
    };

    hideCodeRadiusFromAreaButton.onclick = function() {
        hideResultRadiusFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultRadiusFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultRadiusFromArea.textContent = "";

        radiusFromAreaDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}