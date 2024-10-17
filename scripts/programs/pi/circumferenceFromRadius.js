// circumference from radius C=2PIr --------------------------------------
function circumferenceFromRadius(circumferenceOfCircle) {

    let circumferenceFromRadius = document.getElementById("result-circumference-from-radius");

    radiusOfCircle = radiusForCircumference.value
    // see whether value has been entered
    inputValue = radiusOfCircle;
    // if value, convert to Number
    radiusOfCircle = Number(radiusOfCircle);
    // see whether positive or negative
    posneg = Math.sign(radiusOfCircle);

    circumferenceOfCircle = 2 * PI * radiusOfCircle;
    circumferenceOfCircle = Number(circumferenceOfCircle);

    if (!inputValue) {
        document.getElementById("result-circumference-from-radius").innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (posneg === -1 || circumferenceOfCircle === 0) {
        circumferenceFromRadius.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else if (Number.isNaN(circumferenceOfCircle)) {
        circumferenceFromRadius.innerHTML = `<span class="result nan">NaN</span>`;
    } else {
        circumferenceFromRadius.innerHTML = `<span class="result">${circumferenceOfCircle} cm</span>`;
    };

    reset = document.getElementById("resetCircumferenceFromRadius");
    reset.onclick = function() {
        radiusForCircumference.value = "";
        circumferenceFromRadius.textContent = "";
        codeResultCircumferenceFromRadius.innerHTML = "";
        showResultCircumferenceFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultCircumferenceFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    codeResult = `if (!inputValue) {
    document.getElementById("result-circumference-from-radius").innerHTML = 
        <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (circumferenceOfCircle === 0) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(circumferenceOfCircle)) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result">${circumferenceOfCircle} cm</span>
    };`;

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`
        codeResult = `if (!inputValue) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            ${inputValueResult}
    };`;
    } else {
        inputValueResult = `<span class="string">// ${inputValue}</span>`;
    };

    if (Number.isNaN(circumferenceOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(radiusOfCircle)) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="string">// Not a Number entered</span>
    };`;
    };

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${circumferenceOfCircle} cm</span><span class="string"> // In real life, circles cannot have a negative circumference!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            ${imaginaryNumber}
    };`;
    } else if ((posneg === 0) || Number.isNaN(posneg)) {
        negpos = "";
    } else {
        negpos = `<span class="string"> (Positive number)</span>`
        imaginaryNumber = `<span class="result">${circumferenceOfCircle} cm<sup>2</sup></span>` 
    };

    if (inputValue && radiusOfCircle === 0) {
        imaginaryNumber = `<span class="result">${circumferenceOfCircle} cm</span><span class="string"> // In real life, circles cannot have a zero circumference!</span>`
        codeResult = `if (radiusOfCircle === 0) {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-circumference-from-radius").innerHTML = 
            ${imaginaryNumber}
    };`;
    }

    theCode = `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;
    
function circumferenceFromRadius(circumferenceOfCircle) {
    radiusOfCircle = document.getElementById("radius-for-circumference").value
    <span class="string">// see whether value has been entered</span>
    inputValue = radiusOfCircle; ${inputValueResult}
    <span class="string">// if value, convert to Number</span>
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(radiusOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    circumferenceOfCircle = 2 * PI * radiusOfCircle;
    circumferenceOfCircle = Number(circumferenceOfCircle); <span class="string">// ${circumferenceOfCircle}</span>

    ${codeResult}
}
</pre>`;

    if (codeResultCircumferenceFromRadius.innerHTML) {
        codeResultCircumferenceFromRadius.innerHTML = theCode;
    } else if (codeResultCircumferenceFromRadius.innerHTML == "") {
        showResultCircumferenceFromRadius.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showResultCircumferenceFromRadiusButton.onclick = function() {
            codeResultCircumferenceFromRadius.setAttribute(
                "style", "height: 100%"
            );
            codeResultCircumferenceFromRadius.innerHTML = theCode;

            circumferenceFromRadiusDiv.scrollIntoView({ behavior: "smooth", block: "start" });

            showResultCircumferenceFromRadius.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultCircumferenceFromRadius.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
        };
    };

    hideCodeCircumferenceFromRadiusButton.onclick = function() {
        hideResultCircumferenceFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultCircumferenceFromRadius.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultCircumferenceFromRadius.textContent = "";

        circumferenceFromRadiusDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}



