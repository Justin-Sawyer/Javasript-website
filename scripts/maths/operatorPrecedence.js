//Get random values
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compute() {

    document.getElementById("correct-incorrect").textContent = "";

    let submittedAnswer = "";

    document.getElementById("submtted-answer").value = "";

    var signs=new Array();
    signs[0]=" + ";
    signs[1]=" - ";
    signs[2]=" * ";
    signs[3]=" / ";
    signs[4]=" ** ";
    signs[5]=" % ";
    signs[6] = signs[getRandomInt(0,5)] + "(" + Math.ceil(Math.random()*10) + signs[getRandomInt(0,5)] + Math.ceil(Math.random()*10) + ")" + signs[getRandomInt(0,5)];
    signs[7] = "(" + Math.ceil(Math.random()*10) + signs[getRandomInt(0,5)] + Math.ceil(Math.random()*10) + ")";
    signs[8] = "(" + Math.ceil(Math.random()*10) + signs[getRandomInt(0,5)] + Math.ceil(Math.random()*10) + ")";
    signs[9] = "(" + Math.ceil(Math.random()*10) + signs[getRandomInt(0,5)] + Math.ceil(Math.random()*10) + ")";
    signs[10] = "(" + Math.ceil(Math.random()*10) + signs[getRandomInt(0,5)] + Math.ceil(Math.random()*10) + ")";
    signs[11] = Math.ceil(Math.random()*10);
    signs[12] = Math.ceil(Math.random()*20);
    signs[13] = Math.ceil(Math.random()*30);

    document.getElementById("random-equation").innerHTML=signs[getRandomInt(7,13)] + signs[getRandomInt(0,5)] + signs[getRandomInt(7,13)] + signs[getRandomInt(0,5)] + signs[getRandomInt(7,13)];
    let equation = document.getElementById("random-equation").textContent;
    let equationResult = eval(equation);

    let answer;

    if (Number.isInteger(equationResult)) {
        answer = equationResult;
    } else {
        answer = equationResult.toFixed(2);
    };

    console.log(typeof answer);

    document.getElementById("submit-answer").onclick = function() {
        // document.getElementById("correct-incorrect").innerHTML = `<span></span>`;
        submittedAnswer = document.getElementById("submtted-answer").value;
        parseInt(submittedAnswer);
        console.log(typeof submittedAnswer);
        if (submittedAnswer == answer) {
            document.getElementById("submtted-answer").value = "";
            document.getElementById("equation-result").textContent = `= ${answer}`;
            document.getElementById("correct-incorrect").innerHTML = `<span class="green result">Correct! Click the button to try another.</span>`;
        }
        else {
            document.getElementById("correct-incorrect").innerHTML = `<span class="red result">Incorrect. Please try again.</span>`;
        }
    }
}

function resetOperatorPrecedence() {
    document.getElementById("correct-incorrect").textContent = "";
    document.getElementById("submtted-answer").value = "";
    document.getElementById("equation-result").textContent = "";
    document.getElementById("random-equation").textContent = "";
}


