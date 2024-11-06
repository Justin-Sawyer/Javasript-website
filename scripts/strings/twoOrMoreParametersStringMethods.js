const twoOrMoreParametersStringMethods = document.getElementById("twoOrMoreParametersStringMethods");
const stringOne = document.getElementById("string-one");
const stringTwo = document.getElementById("string-two");
const warningText = document.getElementById("warning-text-two-or-more-parameters");

panagram = panagrams.textContent;
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
    if (!(panagramReplaceValues.includes(replaceCharacters))) {
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
    if (!(panagramReplaceAllValues.includes(replaceAllCharacters))) {
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

    sliceIndex = Number(sliceIndex);
    endPosition = Number(endPosition);

    console.log(panagram.length);
    let panagramToSlice = panagram;
    if ((Number.isNaN(sliceIndex))||(Number.isNaN(endPosition))) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter numbers in both input boxes</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        /*sliceTable.setAttribute ("style", "visibility: hidden; height: 0;");
        hideSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        firstParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        secondParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");*/
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if ((sliceIndex > 200 || (sliceIndex < 0)) && (endPosition > 201 || (endPosition < 1))) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between 0 and 201 in the first input box
// Enter a number between 1 and 202 in the second input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        /*sliceTable.setAttribute ("style", "visibility: hidden; height: 0;");
        hideSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        firstParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        secondParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");*/
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if ((sliceIndex > 200) || (sliceIndex < 0)) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between 0 and 201 in the first input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        /*sliceTable.setAttribute ("style", "visibility: hidden; height: 0;");
        hideSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        firstParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        secondParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");*/
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } else if (endPosition > 201 || (endPosition <= -201)) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// Enter a number between 1 and 202 in the second input box</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        /*sliceTable.setAttribute ("style", "visibility: hidden; height: 0;");
        hideSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        firstParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        secondParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");*/
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    } /*else if (sliceIndex >= endPosition) {
        sliceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        sliceCode.innerHTML = `<span class="red">// The second input must be greater than the first</span>`;
        sliceTable.setAttribute ("style", "display: none; height: 0;");
        /*sliceTable.setAttribute ("style", "visibility: hidden; height: 0;");
        hideSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        firstParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");
        secondParameterSliceResultString.setAttribute ("style", "visibility: hidden; height: 0");*
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
    }*/ else {
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
<span class="regular-font-weight">Must be <span class="result">POSITIVE</span></span><br>
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
Negative slices from end</span><br>
<span class="result red">${endPosition}${secondParameterPositionModulus}</span> position`;
    }
}

twoOrMoreParametersStringMethods.onclick = function() {
    replaceCharacters = stringOne.value;
    replacement = stringTwo.value;

    if (!replaceCharacters || !replacement) {
        replaceCode.setAttribute ("style", "visibility: hidden; height: 0;");
        replaceAllCode.setAttribute ("style", "visibility: hidden; height: 0;");
        hideReplaceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        hideReplaceAllExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        hideSliceExplanation.setAttribute ("style", "visibility: hidden; height: 0");
        warningText.innerHTML = `<span class="result red">Please enter something in both input boxes!</span>`;
    } else {
        warningText.innerHTML = "";
        panagramReplace();
        panagramReplaceAll();
        panagramSlice();
    };
}