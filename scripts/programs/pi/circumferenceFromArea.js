// circumference from area -----------------------------------------------
function circumferenceFromArea(circumferenceOfCircle) {

    let circumferenceFromArea = document.getElementById("result-circumference-from-area");
    
    areaOfCircle = document.getElementById("area-for-circumference").value
    // see whether value has been entered
    inputValue = areaOfCircle;
    // if value, convert to Number
    areaOfCircle = Number(areaOfCircle);
    // see whether positive or negative
    posneg = Math.sign(areaOfCircle);

    radiusOfCircle = Math.sqrt(areaOfCircle / PI);
    radiusOfCircle = Number(radiusOfCircle);

    circumferenceOfCircle = 2 * PI * radiusOfCircle;
    circumferenceOfCircle = Number(circumferenceOfCircle);

    if (!inputValue) {
        circumferenceFromArea.innerHTML = `<span class="result red">Please enter a number!</span>`;
    } else if (Number.isNaN(areaOfCircle)) {
        circumferenceFromArea.innerHTML = `<span class="result nan">NaN</span>`;
    } else if (posneg === -1 || (circumferenceOfCircle === 0)) {
        circumferenceFromArea.innerHTML = `<span class="result red">Please enter a number bigger than zero!</span>`;
    } else {
        circumferenceFromArea.innerHTML = `<span class="result">${circumferenceOfCircle} cm</span>`;
    };

    reset = document.getElementById("resetCircumferenceFromArea");
    reset.onclick = function() {
        areaForCircumference.value = "";
        circumferenceFromArea.textContent = "";
        codeResultCircumferenceFromArea.innerHTML = "";
        showResultCircumferenceFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideResultCircumferenceFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    };

    codeResult =`if (!inputValue) {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="result red">Please enter a number!</span>
    } else if (posneg === -1) {
        document.getElementById("result-circumference-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (areaOfCircle === 0) {
        document.getElementById("result-circumference-from-area").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else if (Number.isNaN(areaOfCircle)) {
        document.getElementById("result-circumference-from-area").innerHTML = 
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-circumference-from-area").innerHTML = 
            <span class="result">${circumferenceOfCircle} cm</span>
    };`;

    if (!inputValue) {
        inputValueResult = `<span class="string">// No value entered</span>`
        codeResult = `if (!inputValue) {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="result red">Please enter a number!</span>
    } else {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="string">// No value entered</span>
    };`
    } else {
        inputValueResult = `<span class="string">${inputValue}</span>` 
    };

    if (Number.isNaN(areaOfCircle)) {
        negpos = "";
        codeResult = `if (Number.isNaN(areaOfCircle)) {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="result nan">NaN</span>
    } else {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="string">// Not a Number entered</span>
    };`
    }

    if (posneg === -1) {
        negpos = `<span class="string"> (Negative number)</span>`
        imaginaryNumber = `<span class="result">${circumferenceOfCircle}</span><span class="string"> // In real life, circles cannot have a negative area, 
                and negative numbers cannot be rooted!</span>`
        codeResult = `if (posneg === -1) {
        document.getElementById("result-circumference-from-area").innerHTML =
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-circumference-from-area").innerHTML =
            ${imaginaryNumber}
    };`
    } else if ((posneg === 0) || Number.isNaN(posneg)) {
        negpos = "";
    } else {
        negpos = `<span class="string"> (Positive number)</span>`
        imaginaryNumber = `<span class="result">${circumferenceOfCircle} cm</span>';` 
    };

    if (inputValue && areaOfCircle === 0) {
        imaginaryNumber = `<span class="result">${circumferenceOfCircle} cm</span><span class="string"> // In real life, circles cannot have a zero circumference!</span>`
        codeResult = `if (areaOfCircle === 0) {
        document.getElementById("result-area-from-circumference").innerHTML = 
            <span class="result red">Please enter a number bigger than zero!</span>
    } else {
        document.getElementById("result-area-from-circumference").innerHTML = 
            ${imaginaryNumber}
    };`
    }

    theCode =  `<pre class="shadow">const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;
let inputValue;
let posneg;
    
function circumferenceFromArea(circumferenceOfCircle) {

    areaOfCircle = document.getElementById("area-for-circumference").value
    <span class="string">// see whether value has been entered</span>
    inputValue = areaOfCircle; <span class="string">// ${inputValueResult}</span>
    <span class="string">// if value, convert to Number</span>
    areaOfCircle = Number(areaOfCircle); <span class="string">// ${areaOfCircle}</span>
    <span class="string">// see whether positive or negative</span>
    posneg = Math.sign(areaOfCircle); <span class="string">// ${posneg} ${negpos}</span>

    radiusOfCircle = Math.sqrt(areaOfCircle / PI);
    radiusOfCircle = Number(radiusOfCircle); <span class="string">// ${radiusOfCircle}</span>

    circumferenceOfCircle = 2 * PI * radiusOfCircle;
    circumferenceOfCircle = Number(circumferenceOfCircle); <span class="string">// ${circumferenceOfCircle}</span>

    ${codeResult}
}
</pre>`;

    if (codeResultCircumferenceFromArea.innerHTML) {
        codeResultCircumferenceFromArea.innerHTML = theCode;
    } else if (codeResultCircumferenceFromArea.innerHTML == "") {
        showResultCircumferenceFromArea.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        showResultCircumferenceFromAreaButton.onclick = function() {
            codeResultCircumferenceFromArea.setAttribute(
                "style", "height: 100%;"
            );
            codeResultCircumferenceFromArea.innerHTML = theCode;
            showResultCircumferenceFromArea.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultCircumferenceFromArea.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            circumferenceFromAreaDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCodeCircumferenceFromAreaButton.onclick = function() {
        hideResultCircumferenceFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultCircumferenceFromArea.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultCircumferenceFromArea.textContent = "";
            
        circumferenceFromAreaDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}