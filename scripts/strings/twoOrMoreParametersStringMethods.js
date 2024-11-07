const twoOrMoreParametersStringMethods = document.getElementById("twoOrMoreParametersStringMethods");
const stringOne = document.getElementById("string-one");
const stringTwo = document.getElementById("string-two");
const warningText = document.getElementById("warning-text-two-or-more-parameters");
const pangramLength = document.getElementById("pangramLength");

panagram = panagrams.textContent;
pangramLength.innerHTML = `pangram.length = <span class="result green">${panagram.length}</span>`
let replaceCharacters, replacement;
let replaceAllCharacters, replacementAll;

let replaceCode = document.getElementById("replace-code");
let hideReplaceExplanation = document.getElementById("hide-replace-explanation");

let replaceAllCode = document.getElementById("replaceAll-code");
let hideReplaceAllExplanation = document.getElementById("hide-replaceAll-explanation"); 
/*let replaceAllTable = document.getElementById("replaceAll-table");
let replaceAllCharactersString = document.getElementById("hide-replaceAllCharactersString");
let replacementAllString = document.getElementById("hide-replacementAllString");*/

let sliceCode = document.getElementById("slice-code");
let hideSliceExplanation = document.getElementById("hide-slice-explanation");
let hideSliceResultString = document.getElementById("hide-sliceResultString");
let slicedPanagram;
let sliceTable = document.getElementById("slice-table");
let slicedValue = document.getElementById("sliced-value");
let firstParameterSliceResultString = document.getElementById("first-parameter-sliceResultString");
let firstParameter = document.getElementById("first-parameter");
let secondParameterSliceResultString = document.getElementById("second-parameter-sliceResultString");
let secondParameter = document.getElementById("second-parameter");

function panagramReplace() {
    replaceCharacters = stringOne.value;
    replacement = stringTwo.value;
    let panagramReplaceValues = panagram;

    if (!replaceCharacters || !replacement) {
        replaceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceCode.innerHTML = `<span class="red">// Enter something in both input boxes</span>`;
        hideReplaceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if (!(panagramReplaceValues.includes(replaceCharacters))) {
        replaceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceCode.innerHTML = `<span class="red">// The original string does not contain "<span class="result string">${replaceCharacters}</span>"</span>`;
        hideReplaceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else {
        panagramReplaceValues = `ABCDEFGHIJKLMNOPQRSTUVWXYZ 
abcdefghijklmnopqrstuvwxyz 0123456789 
#@&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
#@&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
abcdefghijklmnopqrstuvwxyz 0123456789 
ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        replaceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceCode.innerHTML = `pangram.replace("<span class="result string">${replaceCharacters}</span>", "<span class="result string">${replacement}</span>");

${panagramReplaceValues.replace(replaceCharacters, `<span class="result red">${replacement}</span>`)}`;
        hideReplaceExplanation.setAttribute ("style", "visibility: visible; height: 100%;");
    };
};

function panagramReplaceAll() {
    replaceAllCharacters = stringOne.value;
    replacementAll = stringTwo.value;
    let panagramReplaceAllValues = panagram;

    if (!replaceAllCharacters || !replacementAll) {
        replaceAllCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceAllCode.innerHTML = `<span class="red">// Enter something in both input boxes</span>`;
        hideReplaceAllExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if (!(panagramReplaceAllValues.includes(replaceAllCharacters))) {
        replaceAllCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceAllCode.innerHTML = `<span class="red">// The original string does not contain "<span class="result string">${replaceAllCharacters}</span>"</span>`;
        hideReplaceAllExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else {
        panagramReplaceAllValues = `ABCDEFGHIJKLMNOPQRSTUVWXYZ 
abcdefghijklmnopqrstuvwxyz 0123456789 
#@&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
#@&é"'(§è!çà)-°_^¨$€£*ù%${backtick}<>?,.;/:+= 
abcdefghijklmnopqrstuvwxyz 0123456789 
ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        replaceAllCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceAllCode.innerHTML = `pangram.replaceAll("<span class="result string">${replaceAllCharacters}</span>", "<span class="result string">${replacementAll}</span>");

${panagramReplaceAllValues.replaceAll(replaceAllCharacters, `<span class="result red">${replacementAll}</span>`)}`;
        hideReplaceAllExplanation.setAttribute ("style", "visibility: visible; height: 100%");
    };
};

function panagramSlice() {
    sliceIndex = stringOne.value;
    endPosition = stringTwo.value;
    
    let sliceInputValue = sliceIndex;
    let endInputValue = endPosition;
    console.log(endInputValue)
    
    sliceIndex = Number(sliceIndex);
    endPosition = Number(endPosition);

    let signSliceIndex = Math.sign(sliceIndex);
    let signEndPosition = Math.sign(endPosition);

    let panagramToSlice = panagram;

    function emptyStringReturned() {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>);
<span class="string">// Empty string returned</span>`;
    };

    function newStringReturned() {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>);
<span class="string">// String with values returned</span>`;
    }

    function newStringResult() {
        slicedPanagram = panagramToSlice.slice(sliceIndex, endPosition);
        sliceTable.setAttribute ("style", "visibility: visible; height: 100%;");
        hideSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        slicedValue.innerHTML = `"<span class="result string">${slicedPanagram}</span>"`;
        firstParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");

        let sliceIndexModulus = sliceIndex % 10;
        if (sliceIndexModulus == 1) {
            sliceIndexModulus = "st";
        } else if (sliceIndexModulus == 2) {
            sliceIndexModulus = "nd";
        } else if (sliceIndexModulus == 3) {
            sliceIndexModulus = "rd";
        } else {
            sliceIndexModulus = "th";
        };

        let firstParameterPosition = sliceIndex+1;
        let firstParameterPositionModulus = firstParameterPosition % 10;
        if (firstParameterPositionModulus == 1) {
            firstParameterPositionModulus = "st";
        } else if (firstParameterPositionModulus == 2) {
            firstParameterPositionModulus = "nd";
        } else if (firstParameterPositionModulus == 3) {
            firstParameterPositionModulus = "rd";
        } else {
            firstParameterPositionModulus = "th";
        };
        firstParameter.innerHTML = `<span class="result">Zero Indexed</span><br>
<span class="result green">${sliceIndex}${sliceIndexModulus}</span> index<br> 
<span class="result red">${firstParameterPosition}${firstParameterPositionModulus}</span> position`;

        secondParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        let secondParameter = document.getElementById("second-parameter");
        let secondParameterPositionModulus = endPosition % 10;
        if (secondParameterPositionModulus == 1) {
            secondParameterPositionModulus = "st";
        } else if (secondParameterPositionModulus == 2) {
            secondParameterPositionModulus = "nd";
        } else if (secondParameterPositionModulus == 3) {
            secondParameterPositionModulus = "rd";
        } else {
            secondParameterPositionModulus = "th";
        };

        secondParameter.innerHTML = `<span class="result red">NOT Zero Indexed</span><br>
<span class="result red">${endPosition}${secondParameterPositionModulus}</span> position`;

        hideSliceExplanation.setAttribute ("style", "visibility: visible; height: 100%");
    }

    if ((Number.isNaN(sliceIndex))||(Number.isNaN(endPosition))) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter numbers only</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if ((signSliceIndex == 0) && (signEndPosition == 0)) {
        // empty string returned
        emptyStringReturned();
        newStringResult();
    } else if ((signSliceIndex == 0) && (signEndPosition == 1)) {
        // new string returned
        if (endPosition > 201) {
            sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
            sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>);
<span class="string">// New string returned</span>
pangram.length = <span class="result green">${panagram.length}</span>
<span class="red">// New string stops after pangram.length reached</span>`;
            newStringResult();
        } else {
            newStringReturned();
            newStringResult();
        }
    /*} else if ((signSliceIndex == 0) && (signEndPosition == 1)) {
        // new string returned
        if (endPosition > 201) {
            sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
            sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>);
<span class="string">// New string returned</span>
pangram.length = <span class="result green">${panagram.length}</span>
<span class="red">// New string stops after pangram.length reached</span>`;
            newStringResult();
        } else {
            newStringReturned();
            newStringResult();
        }*/
    } else if ((signSliceIndex == 1) && (signEndPosition == 0)) {
        // new string returned
        emptyStringReturned();
        newStringResult();
    } else if ((signSliceIndex == 1) && (signEndPosition == 1)) {
        if (sliceIndex >= endPosition) {
            // empty string returned
            emptyStringReturned();;
            newStringResult();
        } else {
            newStringReturned();
            newStringResult();
        }    
    } else {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    }

    /*if (!sliceInputValue) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter something in first input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");

    
    } else if (!endInputValue) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>)`;
        hideSliceExplanation.setAttribute ("style", "visibility: visible; height: 100%");
        slicedPanagram = panagramToSlice.slice(sliceIndex);
        // console.log(slicedPanagram);
        sliceTable.setAttribute ("style", "visibility: visible; height: 100%;");
        hideSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        slicedValue.innerHTML = `"<span class="result string">${slicedPanagram}</span>"`;
        firstParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");

        let sliceIndexModulus = sliceIndex % 10;
        if (sliceIndexModulus == 1) {
            sliceIndexModulus = "st";
        } else if (sliceIndexModulus == 2) {
            sliceIndexModulus = "nd";
        } else if (sliceIndexModulus == 3) {
            sliceIndexModulus = "rd";
        } else {
            sliceIndexModulus = "th";
        };

        let firstParameterPosition = sliceIndex+1;
        let firstParameterPositionModulus = firstParameterPosition % 10;
        if (firstParameterPositionModulus == 1) {
            firstParameterPositionModulus = "st";
        } else if (firstParameterPositionModulus == 2) {
            firstParameterPositionModulus = "nd";
        } else if (firstParameterPositionModulus == 3) {
            firstParameterPositionModulus = "rd";
        } else {
            firstParameterPositionModulus = "th";
        };
        firstParameter.innerHTML = `<span class="result">Zero Indexed</span><br>
<span class="regular-font-weight">Can be <span class="result">POSITIVE</span> or <span class="result">NEGATIVE</span><br>
<span class="result green">${sliceIndex}${sliceIndexModulus}</span> index<br> 
<span class="result red">${firstParameterPosition}${firstParameterPositionModulus}</span> position`;


    } else if ((Number.isNaN(sliceIndex))||(Number.isNaN(endPosition))) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter numbers only</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    /*} else if ((sliceIndex > 200 || (sliceIndex < 0)) && (endPosition > 201 || (endPosition < 1))) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between 0 and 201 in the first input box
// Enter a number between 1 and 202 in the second input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");*/
    /*} else if ((sliceIndex > 200) || (sliceIndex < -201)) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between -201 and 201 in the first input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if (endPosition > 201 || (endPosition < -200)) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between 1 and 202 in the second input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if ((sliceIndex >= endPosition) /*&& (endPosition >= 0)) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// If 1st parameter &gt= 2nd parameter, empty string returned</span>
pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>)`;
        hideSliceExplanation.setAttribute ("style", "visibility: visible; height: 100%");
        slicedPanagram = panagramToSlice.slice(sliceIndex, endPosition);
        sliceTable.setAttribute ("style", "visibility: visible; height: 100%;");
        hideSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        slicedValue.innerHTML = `"<span class="result string">${slicedPanagram}</span>"`;
        firstParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");

        let sliceIndexModulus = sliceIndex % 10;
        if (sliceIndexModulus == 1) {
            sliceIndexModulus = "st";
        } else if (sliceIndexModulus == 2) {
            sliceIndexModulus = "nd";
        } else if (sliceIndexModulus == 3) {
            sliceIndexModulus = "rd";
        } else {
            sliceIndexModulus = "th";
        };

        let firstParameterPosition = sliceIndex+1;
        let firstParameterPositionModulus = firstParameterPosition % 10;
        if (firstParameterPositionModulus == 1) {
            firstParameterPositionModulus = "st";
        } else if (firstParameterPositionModulus == 2) {
            firstParameterPositionModulus = "nd";
        } else if (firstParameterPositionModulus == 3) {
            firstParameterPositionModulus = "rd";
        } else {
            firstParameterPositionModulus = "th";
        };
        firstParameter.innerHTML = `<span class="result">Zero Indexed</span><br>
<span class="regular-font-weight">Can be <span class="result">POSITIVE</span> or <span class="result">NEGATIVE</span><br>
Negative slices from end backwards</span><br>
<span class="result green">${sliceIndex}${sliceIndexModulus}</span> index<br> 
<span class="result red">${firstParameterPosition}${firstParameterPositionModulus}</span> position`;

        secondParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        let secondParameter = document.getElementById("second-parameter");
        let secondParameterPositionModulus = endPosition % 10;
        if (secondParameterPositionModulus == 1) {
            secondParameterPositionModulus = "st";
        } else if (secondParameterPositionModulus == 2) {
            secondParameterPositionModulus = "nd";
        } else if (secondParameterPositionModulus == 3) {
            secondParameterPositionModulus = "rd";
        } else {
            secondParameterPositionModulus = "th";
        };

        secondParameter.innerHTML = `<span class="result red">NOT Zero Indexed</span><br>
<span class="regular-font-weight">Can be <span class="result">POSITIVE</span> or <span class="result">NEGATIVE</span><br>
Negative slices from end backwards</span><br>
<span class="result red">${endPosition}${secondParameterPositionModulus}</span> position`;
    } else {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `pangram.slice(<span class="result green">${sliceIndex}</span>, <span class="result green">${endPosition}</span>)`;
        hideSliceExplanation.setAttribute ("style", "visibility: visible; height: 100%");
        slicedPanagram = panagramToSlice.slice(sliceIndex, endPosition);
        sliceTable.setAttribute ("style", "visibility: visible; height: 100%;");
        hideSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        slicedValue.innerHTML = `"<span class="result string">${slicedPanagram}</span>"`;
        firstParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");

        let sliceIndexModulus = sliceIndex % 10;
        if (sliceIndexModulus == 1) {
            sliceIndexModulus = "st";
        } else if (sliceIndexModulus == 2) {
            sliceIndexModulus = "nd";
        } else if (sliceIndexModulus == 3) {
            sliceIndexModulus = "rd";
        } else {
            sliceIndexModulus = "th";
        };

        let firstParameterPosition = sliceIndex+1;
        let firstParameterPositionModulus = firstParameterPosition % 10;
        if (firstParameterPositionModulus == 1) {
            firstParameterPositionModulus = "st";
        } else if (firstParameterPositionModulus == 2) {
            firstParameterPositionModulus = "nd";
        } else if (firstParameterPositionModulus == 3) {
            firstParameterPositionModulus = "rd";
        } else {
            firstParameterPositionModulus = "th";
        };
        firstParameter.innerHTML = `<span class="result">Zero Indexed</span><br>
<span class="regular-font-weight">Can be <span class="result">POSITIVE</span> or <span class="result">NEGATIVE</span><br>
Negative slices from end backwards</span><br>
<span class="result green">${sliceIndex}${sliceIndexModulus}</span> index<br> 
<span class="result red">${firstParameterPosition}${firstParameterPositionModulus}</span> position`;

        secondParameterSliceResultString.setAttribute ("style", "visibility: visible; height: 100%;");
        let secondParameter = document.getElementById("second-parameter");
        let secondParameterPositionModulus = endPosition % 10;
        if (secondParameterPositionModulus == 1) {
            secondParameterPositionModulus = "st";
        } else if (secondParameterPositionModulus == 2) {
            secondParameterPositionModulus = "nd";
        } else if (secondParameterPositionModulus == 3) {
            secondParameterPositionModulus = "rd";
        } else {
            secondParameterPositionModulus = "th";
        };

        secondParameter.innerHTML = `<span class="result red">NOT Zero Indexed</span><br>
<span class="regular-font-weight">Can be <span class="result">POSITIVE</span> or <span class="result">NEGATIVE</span><br>
Negative slices from end backwards</span><br>
<span class="result red">${endPosition}${secondParameterPositionModulus}</span> position`;
    }*/
}

twoOrMoreParametersStringMethods.onclick = function() {
    replaceCharacters = stringOne.value;
    replacement = stringTwo.value;

    panagramReplace();
    panagramReplaceAll();
    panagramSlice();

    /*if (!replaceCharacters || !replacement) {
        //replaceCode.setAttribute ("style", "visibility: hidden; height: 0;");
        replaceAllCode.setAttribute ("style", "visibility: hidden; height: 0;");
        hideReplaceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        hideReplaceAllExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        warningText.innerHTML = `<span class="result red">Please enter something in both input boxes!</span>`;
    } else {
        warningText.innerHTML = "";
        //panagramReplace();
        panagramReplaceAll();
        panagramSlice();
    };*/
}