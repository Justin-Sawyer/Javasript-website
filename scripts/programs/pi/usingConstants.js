const PI = 3.1415926535;
let areaOfCircle;
let circumferenceOfCircle;
let radiusOfCircle;

let hideCode;
let inputValue;
let posneg;
let negpos;
let codeResult;
let inputValueResult;
let imaginaryNumber;
//let reset; // already globally declared elsewhere

// area from radius
const radiusForArea = document.getElementById("radius-for-area");
// div surrounding show button
const showResultAreaFromRadius = document.getElementById("show-code-area-from-radius");
// div surrounding hide button
const hideResultAreaFromRadius = document.getElementById("hide-code-area-from-radius");
const codeResultAreaFromRadius = document.getElementById("code-result-area-from-radius");
const showResultAreaFromRadiusButton = document.getElementById("show-code-area-from-radius-button");
const hideCodeAreaFromRadiusButton = document.getElementById("hide-code-area-from-radius-button");
const areaFromRadiusDiv = document.getElementById("area-from-radius");


// radius from area
const areaForRadius = document.getElementById("area-for-radius");
// div surrounding show button
const showResultRadiusFromArea = document.getElementById("show-code-radius-from-area");
// div surrounding hide button
const hideResultRadiusFromArea = document.getElementById("hide-code-radius-from-area");
const codeResultRadiusFromArea = document.getElementById("code-result-radius-from-area");
const showResultRadiusFromAreaButton = document.getElementById("show-code-radius-from-area-button");
const hideCodeRadiusFromAreaButton = document.getElementById("hide-code-radius-from-areas-button");
const radiusFromAreaDiv = document.getElementById("radius-from-area");


// radius from circumference
const circumferenceForRadius = document.getElementById("circumference-for-radius");
// div surrounding show button
const showResultRadiusFromCircumference = document.getElementById("show-code-radius-from-circumference");
// div surrounding hide button
const hideResultRadiusFromCircumference = document.getElementById("hide-code-radius-from-circumference");
const codeResultRadiusFromCircumference = document.getElementById("code-result-radius-from-circumference");
const showResultRadiusFromCircumferenceButton = document.getElementById("show-code-radius-from-circumference-button");
const hideCodeRadiusFromCircumferenceButton = document.getElementById("hide-code-radius-from-circumference-button");
const radiusFromCircumferenceDiv = document.getElementById("radius-from-circumference");


// circumference from radius
const radiusForCircumference = document.getElementById("radius-for-circumference");
// div surrounding show button
const showResultCircumferenceFromRadius = document.getElementById("show-code-circumference-from-radius");
// div surrounding hide button
const hideResultCircumferenceFromRadius = document.getElementById("hide-code-circumference-from-radius");
const codeResultCircumferenceFromRadius = document.getElementById("code-result-circumference-from-radius");
const showResultCircumferenceFromRadiusButton = document.getElementById("show-code-circumference-from-radius-button");
const hideCodeCircumferenceFromRadiusButton = document.getElementById("hide-code-circumference-from-radius-button");
const circumferenceFromRadiusDiv = document.getElementById("circumference-from-radius");


// area from circumference
const circumferenceForArea = document.getElementById("circumference-for-area");
// div surrounding show button
const showResultAreaFromCircumference = document.getElementById("show-code-area-from-circumference");
// div surrounding hide button
const hideResultAreaFromCircumference = document.getElementById("hide-code-area-from-circumference");
const codeResultAreaFromCircumference = document.getElementById("code-result-area-from-circumference");
const showResultAreaFromCircumferenceButton = document.getElementById("show-code-area-from-circumference-button");
const hideCodeAreaFromCircumferenceButton = document.getElementById("hide-code-area-from-circumference-button");
const areaFromCircumferenceDiv = document.getElementById("area-from-circumference");


// circumference from area
const areaForCircumference = document.getElementById("area-for-circumference");
// div surrounding show button
const showResultCircumferenceFromArea = document.getElementById("show-code-circumference-from-area");
// div surrounding hide button
const hideResultCircumferenceFromArea = document.getElementById("hide-code-circumference-from-area");
const codeResultCircumferenceFromArea = document.getElementById("code-result-circumference-from-area");
const showResultCircumferenceFromAreaButton = document.getElementById("show-code-circumference-from-area-button");
const hideCodeCircumferenceFromAreaButton = document.getElementById("hide-code-circumference-from-area-button");
const circumferenceFromAreaDiv = document.getElementById("circumference-from-area");