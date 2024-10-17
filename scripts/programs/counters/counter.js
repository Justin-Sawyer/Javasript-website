let count = 0;
let showCountCode = document.getElementById("show-count-code");
let hideCountCode = document.getElementById("hide-count-code");
let showCountCodeButton = document.getElementById("showCountCode");
let hideCountCodeButton = document.getElementById("hideCountCode");
let countCodeDiv = document.getElementById("count-code")

// decrease by one
function decreaseByOne(count) {
    count = document.getElementById("count-label").textContent;
    count--;
    document.getElementById("count-label").textContent = count;
    
    countCode = `<pre class="shadow something">let count = 0;

// decrease by one
function decreaseByOne() {
    count--;
    document.getElementById("count-label").textContent = <span class="result red">${count}</span>;
}

// reset
function resetCount() {
    count = 0;
    document.getElementById("count-label").textContent = count;
}

//increase by one
function increaseByOne() {
    count++;
    document.getElementById("count-label").textContent = count;
}

</pre>`;

    if (countCodeDiv.innerHTML) {
        countCodeDiv.innerHTML = countCode;
    } else if (countCodeDiv.innerHTML == "") {
        showCountCode.style.visibility="visible";
        showCountCode.style.height="100%";
        showCountCodeButton.onclick = function() {
            countCodeDiv.style.height="100%";
            countCodeDiv.innerHTML = countCode;
            showCountCode.style.visibility="hidden";
            showCountCode.style.height="0";
            hideCountCode.style.visibility="visible";
            hideCountCode.style.height="100%";

            document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCountCodeButton.onclick = function() {
        showCountCode.style.visibility="hidden";
        showCountCode.style.height="0";
        hideCountCode.style.visibility="hidden";
        hideCountCode.style.height="0";
        countCodeDiv.textContent = "";

        document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}

// reset
function resetCount(count, countCode) {
    count = 0;
    document.getElementById("count-label").textContent = count;

    countCode = `<pre class="shadow">let count = 0;

// decrease by one
function decreaseByOne() {
    count--;
    document.getElementById("count-label").textContent = count;
}

// reset
function resetCount() {
    count = 0;
    document.getElementById("count-label").textContent = <span class="result">${count}</span>;
}

//increase by one
function increaseByOne() {
    count++;
    document.getElementById("count-label").textContent = count;
}

</pre>`

    if (countCodeDiv.innerHTML) {
        countCodeDiv.innerHTML = countCode;
    } else if (countCodeDiv.innerHTML == "") {
        showCountCode.style.visibility="visible";
        showCountCode.style.height="100%";
        showCountCodeButton.onclick = function() {
            countCodeDiv.style.height="100%";
            countCodeDiv.innerHTML = countCode;
            showCountCode.style.visibility="hidden";
            showCountCode.style.height="0";
            hideCountCode.style.visibility="visible";
            hideCountCode.style.height="100%";

            document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCountCodeButton.onclick = function() {
        showCountCode.style.visibility="hidden";
        showCountCode.style.height="0";
        hideCountCode.style.visibility="hidden";
        hideCountCode.style.height="0";
        countCodeDiv.textContent = "";

        document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}

//increase by one
function increaseByOne(count, countCode) {
    count = document.getElementById("count-label").textContent;
    count++;
    document.getElementById("count-label").textContent = count;
    countCode = `<pre class="shadow">let count = 0;

// decrease by one
function decreaseByOne() {
    count--;
    document.getElementById("count-label").textContent = count;
}

// reset
function resetCount() {
    count = 0;
    document.getElementById("count-label").textContent = count;
}

//increase by one
function increaseByOne() {
    count++;
    document.getElementById("count-label").textContent = <span class="result green">${count}</span>;
}

</pre>`;

    if (countCodeDiv.innerHTML) {
        countCodeDiv.innerHTML = countCode;
    } else if (countCodeDiv.innerHTML == "") {
        showCountCode.style.visibility="visible";
        showCountCode.style.height="100%";
        showCountCodeButton.onclick = function() {
            countCodeDiv.style.height="100%";
            countCodeDiv.innerHTML = countCode;
            showCountCode.style.visibility="hidden";
            showCountCode.style.height="0";
            hideCountCode.style.visibility="visible";
            hideCountCode.style.height="100%";

            document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCountCodeButton.onclick = function() {
        showCountCode.style.visibility="hidden";
        showCountCode.style.height="0";
        hideCountCode.style.visibility="hidden";
        hideCountCode.style.height="0";
        countCodeDiv.textContent = "";

        document.getElementById("plus-minus-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}


// multiply / divide by two
let counter = 1;
let showCounterCode = document.getElementById("show-counter-code");
let hideCounterCode = document.getElementById("hide-counter-code");
let showCounterCodeButton = document.getElementById("showCounterCode");
let hideCounterCodeButton = document.getElementById("hideCounterCode");
let counterCodeDiv = document.getElementById("counter-code")

// dived by two
function divideByTwo(counter) {
    counter = document.getElementById("counter-label").textContent;
    counter = counter / 2;
    document.getElementById("counter-label").textContent = counter;

    let counterCode = `<pre class="shadow">let counter = 1;

// dived by two
function divideByTwo() {
    counter = counter / 2;
    document.getElementById("counter-label").textContent = <span class="result red">${counter}</span>';
}

// reset
function resetCounter() {
    counter = 1;
    document.getElementById("counter-label").textContent = counter;
}

// multiply by two
function multiplyByTwo() {
    counter = counter * 2;
    document.getElementById("counter-label").textContent = counter;
}</pre>
<p>Note that with this counter we have to reassign the value of the counter in the divide and multiply functions:</p>
<pre class="shadow">counter = counter / 2;

counter = counter * 2
</pre>`;

    if (counterCodeDiv.innerHTML) {
        counterCodeDiv.innerHTML = counterCode;
    } else if (counterCodeDiv.innerHTML == "") {
        showCounterCode.style.visibility="visible";
        showCounterCode.style.height="100%";
        showCounterCodeButton.onclick = function() {
            counterCodeDiv.style.height="100%";
            counterCodeDiv.innerHTML = counterCode;
            showCounterCode.style.visibility="hidden";
            showCounterCode.style.height="0";
            hideCounterCode.style.visibility="visible";
            hideCounterCode.style.height="100%";

            document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCounterCodeButton.onclick = function() {
        showCounterCode.style.visibility="hidden";
        showCounterCode.style.height="0";
        hideCounterCode.style.visibility="hidden";
        hideCounterCode.style.height="0";
        counterCodeDiv.textContent = "";

        document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };

}

// reset
function resetCounter(counter) {
    counter = 1;
    document.getElementById("counter-label").textContent = counter;

    let counterCode = `<pre class="shadow">let counter = 1;

// dived by two
function divideByTwo() {
    counter = counter / 2;
    document.getElementById("counter-label").textContent = counter;
}

// reset
function resetCounter() {
    counter = 1;
    document.getElementById("counter-label").textContent = <span class="result">${counter}</span>';
}

// multiply by two
function multiplyByTwo() {
    counter = counter * 2;
    document.getElementById("counter-label").textContent = counter;
}</pre>
<p>Note that with this counter we have to reassign the value of the counter in the divide and multiply functions:</p>
<pre class="shadow">counter = counter / 2;

counter = counter * 2
</pre>`;

    if (counterCodeDiv.innerHTML) {
        counterCodeDiv.innerHTML = counterCode;
    } else if (counterCodeDiv.innerHTML == "") {
        showCounterCode.style.visibility="visible";
        showCounterCode.style.height="100%";
        showCounterCodeButton.onclick = function() {
            counterCodeDiv.style.height="100%";
            counterCodeDiv.innerHTML = counterCode;
            showCounterCode.style.visibility="hidden";
            showCounterCode.style.height="0";
            hideCounterCode.style.visibility="visible";
            hideCounterCode.style.height="100%";

            document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCounterCodeButton.onclick = function() {
        showCounterCode.style.visibility="hidden";
        showCounterCode.style.height="0";
        hideCounterCode.style.visibility="hidden";
        hideCounterCode.style.height="0";
        counterCodeDiv.textContent = "";

        document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}

// multiply by two
function multiplyBy2(counter) {
    counter = document.getElementById("counter-label").textContent;
    counter = counter * 2;
    document.getElementById("counter-label").textContent = counter;

    let counterCode = `<pre class="shadow">let counter = 1;

// dived by two
function divideByTwo() {
    counter = counter / 2;
    document.getElementById("counter-label").textContent = counter;
}

// reset
function resetCounter() {
    counter = 1;
    document.getElementById("counter-label").textContent = counter;
}

// multiply by two
function multiplyByTwo() {
    counter = counter * 2;
    document.getElementById("counter-label").textContent = <span class="result green">${counter}</span>';
}</pre>
<p>Note that with this counter we have to reassign the value of the counter in the divide and multiply functions:</p>
<pre class="shadow">counter = counter / 2;

counter = counter * 2
</pre>`;

    if (counterCodeDiv.innerHTML) {
        counterCodeDiv.innerHTML = counterCode;
    } else if (counterCodeDiv.innerHTML == "") {
        showCounterCode.style.visibility="visible";
        showCounterCode.style.height="100%";
        showCounterCodeButton.onclick = function() {
            counterCodeDiv.style.height="100%";
            counterCodeDiv.innerHTML = counterCode;
            showCounterCode.style.visibility="hidden";
            showCounterCode.style.height="0";
            hideCounterCode.style.visibility="visible";
            hideCounterCode.style.height="100%";

            document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    hideCounterCodeButton.onclick = function() {
        showCounterCode.style.visibility="hidden";
        showCounterCode.style.height="0";
        hideCounterCode.style.visibility="hidden";
        hideCounterCode.style.height="0";
        counterCodeDiv.textContent = "";

        document.getElementById("multiply-divide-counter").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}