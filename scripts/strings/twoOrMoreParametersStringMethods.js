const twoOrMoreParametersStringMethods = document.getElementById("twoOrMoreParametersStringMethods");
const stringOne = document.getElementById("string-one");
const stringTwo = document.getElementById("string-two");
const warningText = document.getElementById("warning-text-two-or-more-parameters");

panagram = panagrams.innerHTML;
let replaceCharacters, replacement;
let replaceAllCharacters, replacementAll;

let replaceCode = document.getElementById("replace-code")
/*let replaceTable = document.getElementById("replace-table");
let replaceCharactersString = document.getElementById("hide-replaceCharactersString");
let replacementString = document.getElementById("hide-replacementString");*/


let replaceAllCode = document.getElementById("replaceAll-code")
/*let replaceAllTable = document.getElementById("replaceAll-table");
let replaceAllCharactersString = document.getElementById("hide-replaceAllCharactersString");
let replacementAllString = document.getElementById("hide-replacementAllString");*/

function panagramReplace() {
    replaceCharacters = stringOne.value;
    replacement = stringTwo.value;
    let panagramReplaceValues = panagram;
    if (!(panagramReplaceValues.includes(replaceCharacters))) {
        replaceCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceCode.innerHTML = `<span class="red">// The original string does not contain "<span class="result string">${replaceCharacters}</span>"</span>`;
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
    };
}

function panagramReplaceAll() {
    replaceAllCharacters = stringOne.value;
    replacementAll = stringTwo.value;
    let panagramReplaceAllValues = panagram;
    if (!(panagramReplaceAllValues.includes(replaceAllCharacters))) {
        replaceAllCode.setAttribute ("style", "visibility: visible; height: 100%;");
        replaceAllCode.innerHTML = `<span class="red">// The original string does not contain "<span class="result string">${replaceAllCharacters}</span>"</span>`;;
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
    };
}

twoOrMoreParametersStringMethods.onclick = function() {
    replaceCharacters = stringOne.value;
    replacement = stringTwo.value;

    if (!replaceCharacters || !replacement) {
        replaceCode.setAttribute ("style", "visibility: hidden; height: 0;");
        replaceAllCode.setAttribute ("style", "visibility: hidden; height: 0;");
        warningText.innerHTML = `<span class="result red">Please enter something in both input boxes!</span>`;
    } else {
        warningText.innerHTML = "";
        panagramReplace();
        panagramReplaceAll();
    };
}