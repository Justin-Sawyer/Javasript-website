const stringMethodsDiv = document.getElementById("string-methods");
const stringMethods = document.getElementById("letterMethods");
const panagrams = document.getElementById("panagrams");

let charAtPosition = document.getElementById("charAt-position");
let indexOfPosition = document.getElementById("indexOf-position");
let lastIndexOfPosition = document.getElementById("lastIndexOf-position");
let trimPosition = document.getElementById("trim-position");
let startsWithBoolean = document.getElementById("startsWith-boolean");
let endsWithBoolean = document.getElementById("endsWith-boolean");

let charAt = document.getElementById("charAt");
let indexOf = document.getElementById("indexOf");
let lastIndexOf = document.getElementById("lastIndexOf");
let trim = document.getElementById("trim");
let startsWith = document.getElementById("startsWith");
let endsWith = document.getElementById("endsWith");

let hideCharAtMethod = document.getElementById("hide-charAt-method");
let hideindexOfMethod = document.getElementById("hide-indexOf-method");
let hideLastIndexOfMethod = document.getElementById("hide-lastIndexOf-method");
let hideTrimMethod = document.getElementById("hide-trim-method");
let hideStartsWithMethod = document.getElementById("hide-startsWith-method");
let hideEndsWithMethod = document.getElementById("hide-endsWith-method");

let hideTrimValue = document.getElementById("hide-trim-value");
let hideIndexOfValue = document.getElementById("hide-indexOf-value");
let hideLastIndexOfValue = document.getElementById("hide-lastIndexOf-value");
let hideCharAtValue = document.getElementById("hide-charAt-value");
let hideStartsWithValue = document.getElementById("hide-startsWith-value");
let hideEndsWithValue = document.getElementById("hide-endsWith-value");

let hideIndexOfPlace = document.getElementById("hide-indexOf-place");
let hideLastIndexOfPlace = document.getElementById("hide-lastIndexOf-place");
let hideCharAtPlace = document.getElementById("hide-charAt-place");

let hideCharAtExplanation = document.getElementById("hide-charAt-explanation");
let hideIndexOfExplanation = document.getElementById("hide-indexOf-explanation");
let hideLastIndexOfExplanation = document.getElementById("hide-lastIndexOf-explanation");
let hideTrimExplanation = document.getElementById("hide-trim-explanation");
let hideStartsWithExplanation = document.getElementById("hide-startsWith-explanation");
let hideEndsWithExplanation = document.getElementById("hide-endsWith-explanation");

let charAtCode = document.getElementById("charAt-code");
let indexOfCode = document.getElementById("indexOf-code");
let lastIndexOfCode = document.getElementById("lastIndexOf-code");
let trimCode = document.getElementById("trim-code");
let startsWithCode = document.getElementById("startsWith-code");
let endsWithCode = document.getElementById("endsWith-code");

let letterMethods;
let indexOfMethod;
let lastIndexOfMethod;
let trimMethod;
let panagram;
let inputValue;
let originalValue;

let firstIndex;
let lastIndex;
let char;
let countIndexNumber;
let countLastIndexNumber;
let countCharAt;
let countedIndexOf = document.getElementById("counted-indexOf");
let countedLastIndexOf = document.getElementById("counted-lastIndexOf");
let countedCharAt = document.getElementById("counted-charAt");
let start;
let end;

function hideCharAt() {
    hideCharAtMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    charAtCode.setAttribute ("style", "visibility: hidden; height: 0;");
};

function charAtIsNaN() {
    hideCharAtMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideCharAtExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    charAtCode.innerHTML = `<span class="red">// Enter a number between 0 and 200:</span>
<span class="string">// charAt() retrieves the character at index #</span>`;
};

function tooManyIndexOf() {
    hideindexOfMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    indexOfCode.innerHTML = `<span class="red">// Enter just one character:</span>
<span class="string">// indexOf() retrieves index of one character</span>`;
};

function hideIndexOf() {
    hideindexOfMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideIndexOfExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    indexOfCode.setAttribute ("style", "visibility: hidden; height: 0;");;
};

function tooManyLastIndexOf() {
    hideLastIndexOfMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    lastIndexOfCode.innerHTML = `<span class="red">// Enter just one character:</span>
<span class="string">// lastIndexOf() retrieves last index of one character</span>`;
};

function hideLastIndexOf() {
    hideLastIndexOfMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfPlace.setAttribute ("style", "visibility: hidden; height: 0;");
    hideLastIndexOfExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    lastIndexOfCode.setAttribute ("style", "visibility: hidden; height: 0;");
};

function nothingToTrim() {
    hideTrimMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    trimCode.innerHTML = `<span class="red">// Add some white space before or after:</span>
<span class="string">// trim() trims white space from the start or end</span>`;
};

function hideTrim() {
    hideTrimMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    trimCode.setAttribute ("style", "visibility: hidden; height: 0;");
};

function hideStartsWith() {
    hideStartsWithMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideStartsWithValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideStartsWithExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    startsWithCode.setAttribute ("style", "visibility: hidden; height: 0;");
};

function hideEndsWith() {
    hideEndsWithMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideEndsWithValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideEndsWithExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    endsWithCode.setAttribute ("style", "visibility: hidden; height: 0;");
};

function whiteSpaceAdded() {
    hideTrimMethod.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimValue.setAttribute ("style", "visibility: hidden; height: 0;");
    hideTrimExplanation.setAttribute ("style", "visibility: hidden; height: 0;");
    trimCode.innerHTML = `<span class="string">// White space has been added back</span>`;
};

function trimmedValue() {
    let newTrimmedValue = originalValue.trim();
    if (originalValue == newTrimmedValue) {
        nothingToTrim();
    } else {
        trimCode.innerHTML = `<span class="string">// strings are zero indexed</span>
string.trim("<span class="result string">${originalValue}</span>")`;
        trimPosition.innerHTML = `"<span class="result string">${originalValue}</span>"`;
        trim.innerHTML = `"<span class="result string">${newTrimmedValue}</span>"`;
    };    
};

const backtick = "`";
const spanElement = "<span>";
const closeSpanElement = "</span>";

function upperCaseString() {
    panagram = panagrams.innerHTML;
    panagram = panagram.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">")

    let newUpperCasePanagram = `string.toUpperCase()

ABCDEFGHIJKLMNOPQRSTUVWXYZ 
${spanElement}abcdefghijklmnopqrstuvwxyz${closeSpanElement} 0123456789 
#@$&${spanElement}é${closeSpanElement}"'(§${spanElement}è${closeSpanElement}!${spanElement}çà${closeSpanElement})-°_^¨$€£*${spanElement}ù${closeSpanElement}%${backtick}<>?,.;/:+= 
#@$&${spanElement}é${closeSpanElement}"'(§${spanElement}è${closeSpanElement}!${spanElement}çà${closeSpanElement})-°_^¨$€£*${spanElement}ù${closeSpanElement}%${backtick}<>?,.;/:+= 
${spanElement}abcdefghijklmnopqrstuvwxyz${closeSpanElement} 0123456789 
ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    newUpperCasePanagram = newUpperCasePanagram.toUpperCase()
        .replaceAll("<SPAN>", "<span class='result red'>")
        .replaceAll("</SPAN>", "</span>")
        .replaceAll("STRING.TOUPPERCASE", "string.toUpperCase")
    document.getElementById("toUpperCase-code").innerHTML = newUpperCasePanagram;

    panagramUpperCase = panagram.toUpperCase();
    panagramUpperCaseArray = panagram.split('');
    
    let changedToUpperCase = document.getElementById("changed-toUpperCase");
    let combChangedToUpperCaseInnerHTML2;

    if (!changedToUpperCase.textContent) {
        panagramUpperCaseArray.forEach(p);
        function p(item, index) {
            if (item !== item.toUpperCase()) {
                item = item.toUpperCase();
                index = `<span class="green">${index}</span>`;
                changedToUpperCase.innerHTML += `<div class="col-6 result">Index # ${index} : <span class="string">${item.toLowerCase()}</span> => <span class="red">${item}</span>; </span></div>`;
            }
        }
        let changedToUpperCaseInnerHTML = changedToUpperCase.innerHTML;
        const divBeforechangedToUpperCaseInnerHTML = "<div class='row'>";
        const combChangedToUpperCaseInnerHTML1 = divBeforechangedToUpperCaseInnerHTML.concat(changedToUpperCaseInnerHTML);
        const divAfterChangedToUpperCaseInnerHTML = "</div>";
        combChangedToUpperCaseInnerHTML2 = combChangedToUpperCaseInnerHTML1.concat(divAfterChangedToUpperCaseInnerHTML);
        changedToUpperCase.innerHTML = combChangedToUpperCaseInnerHTML2
    }

    const showToUpperCaseChanges = document.getElementById("show-toUpperCase-code");
    const showToUpperCaseChangesButton = document.getElementById("show-toUpperCase-code-button");
    const showToUpperCaseChangesDiv = document.getElementById("hide-toUpperCase-container");
    const hideToUpperCaseChanges = document.getElementById("hide-toUpperCase-code");
    const hideToUpperCaseChangesButton = document.getElementById("hide-toUpperCase-code-button");

    showToUpperCaseChanges.setAttribute(
        "style", "visibility: visible; height: 100%;"
    );

    showToUpperCaseChangesButton.onclick = function() {
        showToUpperCaseChangesDiv.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        changedToUpperCase.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showToUpperCaseChangesButton.setAttribute(
            "style", "visibility: hidden; height: 100%;"
        );
        hideToUpperCaseChanges.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        hideToUpperCaseChangesButton.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
    };

    hideToUpperCaseChangesButton.onclick = function() {
        showToUpperCaseChangesDiv.setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        changedToUpperCase.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideToUpperCaseChangesButton.setAttribute(
            "style", "visibility: hidden; height: 100%;"
        );
        hideToUpperCaseChanges.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showToUpperCaseChangesButton.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );

        stringMethodsDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
};

function lowerCaseString() {
    panagram = panagrams.innerHTML;
    panagram = panagram.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">");

    let newLowerCasePanagram = `string.toLowerCase()

${spanElement}ABCDEFGHIJKLMNOPQRSTUVWXYZ${closeSpanElement}
abcdefghijklmnopqrstuvwxyz 0123456789 
#@$&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
#@&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
abcdefghijklmnopqrstuvwxyz 0123456789 
${spanElement}ABCDEFGHIJKLMNOPQRSTUVWXYZ${closeSpanElement}`;

    newLowerCasePanagram = newLowerCasePanagram.toLowerCase()
        .replaceAll("<span>", "<span class='result red'>")
        .replaceAll("string.tolowercase", "string.toLowerCase");
    document.getElementById("toLowerCase-code").innerHTML = newLowerCasePanagram;

    panagramLowerCase = panagram.toLowerCase();
    panagramLowerCaseArray = panagram.split('');
    
    let changedToLowerCase = document.getElementById("changed-toLowerCase");
    let combChangedToLowerCaseInnerHTML2;

    if (!changedToLowerCase.textContent) {
        panagramLowerCaseArray.forEach(p);
        function p(item, index) {
            if (item !== item.toLowerCase()) {
                item = item.toLowerCase();
                index = `<span class="green">${index}</span>`;
                changedToLowerCase.innerHTML += `<div class="col-6 result">Index # ${index} : <span class="string">${item.toUpperCase()}</span> => <span class="red">${item}</span>; </span></div>`;
            }
        }
        let changedToLowerCaseInnerHTML = changedToLowerCase.innerHTML;
        const divBeforeChangedToLowerCaseInnerHTML = "<div class='row'>";
        const combChangedToLowerCaseInnerHTML1 = divBeforeChangedToLowerCaseInnerHTML.concat(changedToLowerCaseInnerHTML);
        const divAfterChangedToLowerCaseInnerHTML = "</div>";
        const combChangedToLowerCaseInnerHTML2 = combChangedToLowerCaseInnerHTML1.concat(divAfterChangedToLowerCaseInnerHTML);
        changedToLowerCase.innerHTML = combChangedToLowerCaseInnerHTML2
    }

    const showToLowerCaseChanges = document.getElementById("show-toLowerCase-code");
    const showToLowerCaseChangesButton = document.getElementById("show-toLowerCase-code-button");
    const showToLowerCaseChangesDiv = document.getElementById("hide-toLowerCase-container");
    const hideToLowerCaseChanges = document.getElementById("hide-toLowerCase-code");
    const hideToLowerCaseChangesButton = document.getElementById("hide-toLowerCase-code-button");

    showToLowerCaseChanges.setAttribute(
        "style", "visibility: visible; height: 100%;"
    );

    showToLowerCaseChangesButton.onclick = function() {
        showToLowerCaseChangesDiv.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        changedToLowerCase.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showToLowerCaseChangesButton.setAttribute(
            "style", "visibility: hidden; height: 100%;"
        );
        hideToLowerCaseChanges.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        hideToLowerCaseChangesButton.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
    };

    hideToLowerCaseChangesButton.onclick = function() {
        showToLowerCaseChangesDiv.setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        changedToLowerCase.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideToLowerCaseChangesButton.setAttribute(
            "style", "visibility: hidden; height: 100%;"
        );
        hideToLowerCaseChanges.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showToLowerCaseChangesButton.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );

        stringMethodsDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
};

function stringStartsWith() {
    start = panagram.startsWith(`${inputValue}`);
    panagram = panagrams.textContent;
    let inputValueLength = inputValue.length;
    let panagramStart = panagram.slice(0, inputValueLength);
    if (start) {
        startsWithBoolean.innerHTML = `<span class="green">True</span>`;
        hideStartsWithValue.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    } else {
        startsWithBoolean.innerHTML = `<span class="red">False</span>`;
        hideStartsWithValue.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        startsWith.innerHTML = `"<span class="string">${panagramStart}</span>"`;
    };
    
    startsWithCode.innerHTML = `string.startsWith("<span class="result string">${inputValue}</span>");`
};

function stringEndsWith() {
    end = panagram.endsWith(`${inputValue}`);
    panagram = panagrams.textContent;
    let inputValueLength = inputValue.length;
    let panagramEnd = panagram.slice(-inputValueLength);
    if (end) {
        endsWithBoolean.innerHTML = `<span class="green">True</span>`;
        hideEndsWithValue.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
    } else {
        endsWithBoolean.innerHTML = `<span class="red">False</span>`;
        hideEndsWithValue.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        endsWith.innerHTML = `"<span class="string">${panagramEnd}</span>"`;
    };
    
    endsWithCode.innerHTML = `string.startsWith("<span class="result string">${inputValue}</span>");`
};

function indexOfStringValue() {
    firstIndex = panagram.indexOf(letterMethods);
    indexOfPosition.innerHTML = `"<span class="result string">${letterMethods}</span>"`;
    indexOf.innerHTML = `<span class="result green">${firstIndex}</span>`;
    countIndexNumber = firstIndex + 1;
    countedIndexOf.textContent = countIndexNumber;
    let lastIndexOfDigit = countIndexNumber % 10;
    if (lastIndexOfDigit == 1) {
        document.getElementById("st-nd-rd-th-indexOf").textContent = "st";
    } else if (lastIndexOfDigit == 2) {
        document.getElementById("st-nd-rd-th-indexOf").textContent = "nd";
    } else if (lastIndexOfDigit == 3) {
        document.getElementById("st-nd-rd-th-indexOf").textContent = "rd";
    } else {
        document.getElementById("st-nd-rd-th-indexOf").textContent = "th";
    };
    indexOfCode.innerHTML = `<span class="string">// strings are zero indexed</span>
string.indexOf("<span class="result string">${letterMethods}</span>");`
};

function lastIndexOfStringValue() {
    lastIndex = panagram.lastIndexOf(letterMethods)
    lastIndexOfPosition.innerHTML = `"<span class="result string">${letterMethods}</span>"`;
    lastIndexOf.innerHTML = `<span class="result green">${lastIndex}</span>`;
    countLastIndexNumber = lastIndex + 1;
    countedLastIndexOf.textContent = countLastIndexNumber;
    let lastlastIndexOfDigit = countLastIndexNumber % 10;
    if (lastlastIndexOfDigit == 1) {
        document.getElementById("st-nd-rd-th-lastIndexOf").textContent = "st";
    } else if (lastlastIndexOfDigit == 2) {
        document.getElementById("st-nd-rd-th-lastIndexOf").textContent = "nd";
    } else if (lastlastIndexOfDigit == 3) {
        document.getElementById("st-nd-rd-th-lastIndexOf").textContent = "rd";
    } else {
        document.getElementById("st-nd-rd-th-lastIndexOf").textContent = "th";
    };
    lastIndexOfCode.innerHTML = `<span class="string">// strings are zero indexed</span>
string.lastIndexOf("<span class="result string">${letterMethods}</span>");`
};

function charAtValue() {
    char = panagram.charAt(letterMethods)
    letterMethods = Number(letterMethods);
    if (Number.isNaN(letterMethods) || (letterMethods > 200) || (letterMethods < 0)) {
        charAtIsNaN();
    } else {
        charAtPosition.innerHTML = `<span class="result green">${letterMethods}</span>`;
        charAt.innerHTML = `"<span class="result string">${char}</span>"`;
        countCharAt = letterMethods+1;
        countedCharAt.textContent = countCharAt;
        let charAtDigit = countCharAt % 10;
        if (charAtDigit == 1) {
            document.getElementById("st-nd-rd-th-charAt").textContent = "st";
        } else if (charAtDigit == 2) {
            document.getElementById("st-nd-rd-th-charAt").textContent = "nd";
        } else if (charAtDigit == 3) {
            document.getElementById("st-nd-rd-th-charAt").textContent = "rd";
        } else {
            document.getElementById("st-nd-rd-th-charAt").textContent = "th";
        };
        charAtCode.innerHTML = `<span class="string">// strings are zero indexed</span>
string.charAt(<span class="result green">${letterMethods}</span>);`
    };
};

function ifEmptyString() {
    letterMethods = document.getElementById("letter-methods").value;
    // see whether value has been entered
    inputValue = letterMethods;
    panagram = panagrams.textContent;
    if (inputValue == " ") {
        indexOfStringValue();
        lastIndexOfStringValue();
        nothingToTrim();
        whiteSpaceAdded();
        //hideCharAt();
        charAtIsNaN();
        stringStartsWith();
        stringEndsWith();
    } else {
        originalValue = letterMethods;
        letterMethods = letterMethods.trim();
        
        if (letterMethods.length > 1) {
            // warning text
            tooManyIndexOf();
            tooManyLastIndexOf();
            trimmedValue();
            charAtValue();
            stringStartsWith();
            stringEndsWith();
        } else {
            if (letterMethods == "") {
                letterMethods = " ";
                indexOfStringValue();
                lastIndexOfStringValue();
                trimmedValue();
                hideCharAt();
                stringStartsWith();
                stringEndsWith();
            } else {
                indexOfStringValue();
                lastIndexOfStringValue();
                trimmedValue();
                charAtValue();
                stringStartsWith();
                stringEndsWith();
            };
        };
    };
};

function getInputValue() {
    letterMethods = document.getElementById("letter-methods").value;
    // see whether value has been entered
    inputValue = letterMethods;
    if (!inputValue) {
        // warning text
        document.getElementById("number-of-letters").innerHTML = `<span class="result red">Please enter something!</span>`;

        hideCharAt();
        hideIndexOf();
        hideLastIndexOf();
        hideTrim();
        hideStartsWith();
        hideEndsWith();
    } else {
        // clear warning text
        document.getElementById("number-of-letters").innerHTML = "";
        ifEmptyString();
    };
};


stringMethods.onclick = function() {
    
    Array.from(document.getElementsByClassName('hide-string-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    getInputValue();
    upperCaseString();
    lowerCaseString();
    //stringStartsWith();

    stringMethodsDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    
};