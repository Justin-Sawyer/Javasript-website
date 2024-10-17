// area from radius PIr**2 -----------------------------------------------
function areaFromRadius(areaOfCircle) {
    let areaFromRadius = document.getElementById("result-area-from-radius");

    radiusOfCircle = radiusForArea.value;
    // see whether value has been entered
    inputValue = radiusOfCircle;
    // if value, convert to Number
    radiusOfCircle = Number(radiusOfCircle);
    // see whether positive or negative
    posneg = Math.sign(radiusOfCircle);
    

    areaOfCircle = PI * radiusOfCircle**2;
    areaOfCircle = Number(areaOfCircle);

    if (!inputValue) {
        areaFromRadius.innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (Number.isNaN(areaOfCircle)) {
        areaFromRadius.innerHTML = `<span class="result nan">${areaOfCircle}</span>`;
    } else if (posneg === -1 || areaOfCircle === 0) {
        areaFromRadius.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else {
        areaFromRadius.innerHTML = `<span class="result">${areaOfCircle} cm<sup>2</sup></span>`;
    };

    reset = document.getElementById("resetAreaFromRadius");
    reset.onclick = function() {
        radiusForArea.value = "";
        areaFromRadius.textContent = "";
        codeResultAreaFromRadius.innerHTML = "";
        showResultAreaFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultAreaFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    }

    codeResult = `if (!inputValue) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (areaOfCircle === 0) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(areaOfCircle)) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result">${areaOfCircle}</span>
    };`

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`
        codeResult = `if (!inputValue) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="string">// No value entered</span>
    };`
    } else {
        inputValueResult = `<span class="string">${inputValue}</span>` 
    };

    if (Number.isNaN(areaOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(areaOfCircle)) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result nan">NaN</span>;
    } else {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="string">// Not a Number entered</span>
    };`
    }

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${areaOfCircle} cm<sup>2</sup></span><span class="string"> // In real life, circles cannot have a negative radius!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-area-from-radius").innerHTML = 
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
        document.getElementById("result-area-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-area-from-radius").innerHTML = 
            ${imaginaryNumber}
    };`
    }

    theCode = `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;

function areaFromRadius(areaOfCircle) {
    radiusOfCircle = document.getElementById("radius-for-area").value;
    <span class="string">// see whether value has been entered</span>
    inputValue = radiusOfCircle; <span class="string">// ${inputValueResult}</span>
    <span class="string">// if value, convert to Number</span>
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(radiusOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    areaOfCircle = PI * radiusOfCircle**2;
    areaOfCircle = Number(areaOfCircle); <span class="string">// ${areaOfCircle}</span>

    ${codeResult}
}</pre>`;


   if (codeResultAreaFromRadius.innerHTML) {
        codeResultAreaFromRadius.innerHTML = theCode;
    } else if (codeResultAreaFromRadius.innerHTML == "") {
        showResultAreaFromRadius.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        showResultAreaFromRadiusButton.onclick = function() {
            codeResultAreaFromRadius.setAttribute(
                "style", "height: 100%;"
            );
            codeResultAreaFromRadius.innerHTML = theCode;

            areaFromRadiusDiv.scrollIntoView({ behavior: "smooth", block: "start" });
            
            showResultAreaFromRadius.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultAreaFromRadius.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
        };
    };

    hideCodeAreaFromRadiusButton.onclick = function() {
        hideResultAreaFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultAreaFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultAreaFromRadius.textContent = "";

        areaFromRadiusDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}