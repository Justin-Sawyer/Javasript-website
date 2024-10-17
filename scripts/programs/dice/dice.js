document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("dice-1").textContent = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice-2").textContent = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice-3").textContent = Math.trunc(Math.random() * 6) + 1;
});

const rollTheDice = document.getElementById("rollTheDice");

rollTheDice.onclick = function() {

    // div surrounding show button
    const showGambleCode = document.getElementById("show-dice-code");
    // div surrounding hide button
    const hideGambleCode = document.getElementById("hide-dice-code");
    const diceCode = document.getElementById("dice-code");
    const showGambleCodeButton = document.getElementById("show-dice-code-button");
    const hideGambleCodeButton = document.getElementById("hide-dice-code-button");
    //const areaFromRadiusDiv = document.getElementById("area-from-radius");

    function onWin() {
        showGambleCode.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showGambleCodeButton.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
    }

    function onReset() {
        showGambleCode.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showGambleCodeButton.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        /*diceCode.setAttribute(
            "style", "display: none; height: 0;"
        );*/
        diceCode.innerHTML = "";
        hideGambleCode.setAttribute(
            "style", "display: none; height: 0;"
        );
    }

    let prediction = document.getElementById("dice-prediction");
    
    prediction = prediction.value;
    // see whether value has been entered
    inputValue = prediction;
    // if value, convert to Number
    let dicePrediction = Number(prediction);    

    let randyOne = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerOne = (callCount) => {
        if (callCount < randyOne) {
        setTimeout(() => {
                ++callCount;
                document.getElementById("dice-1").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerOne(callCount);
            }, 75);
        };
    };

    let randyTwo = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerTwo = (callCount) => {
        if (callCount < randyTwo) {
            setTimeout(() => {
                ++callCount;
                document.getElementById("dice-2").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerTwo(callCount);
            }, 75);
        };
    };
    
    let randyThree = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerThree = (callCount) => {
        if (callCount < randyThree) {
            setTimeout(() => {
                ++callCount;
                document.getElementById("dice-3").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerThree(callCount);
            }, 75);
        };
    };

    let diceOne;
    let diceTwo;
    let diceThree;

    let maxRandy = Math.max(randyOne, randyTwo, randyThree);
    
    let sentence=new Array();
    sentence[0]=`<span class="red">Jeez, you lost. That sucks!</span>`;
    sentence[1]=`<span class="red">OMG. Try again?</span>`;
    sentence[2]=`<span class="red">Darn! Wanna keep trying?</span>`;
    sentence[3]=`<span class="red">Really think you can win?</span>`;
    sentence[4]=`<span class="red">Roll again or roll over?</span>`;
    sentence[5]=`<span class="red">Ah. Sorry.</span>`;
    sentence[6]=`<span class="red">Maybe next time?</span>`;

    if (!inputValue) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Hey! Enter something!";
        prediction.value = "";
    } else if (Number.isNaN(dicePrediction)) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Try a number?";
        document.getElementById("dice-prediction").value = "";
    } else if (dicePrediction < 3 || dicePrediction > 18) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Choose between 3 and 18!";
        document.getElementById("dice-prediction").value = "";
    } else  {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "All bets placed!";
        functionCounterTimerOne(0);
        functionCounterTimerTwo(0);
        functionCounterTimerThree(0);
        
        function allDiceValue() { 
            diceOne = document.getElementById("dice-1").textContent;
            diceTwo = document.getElementById("dice-2").textContent;
            diceThree = document.getElementById("dice-3").textContent;
            let thrownDice = Number(diceOne) + Number(diceTwo) + Number(diceThree);
            thrownDice = Number(thrownDice);

            
            if (thrownDice === Number(dicePrediction)) {
                document.getElementById("dice-win").innerHTML = `<span class="green">You won!</span>`;
                onWin();
            } else {
                document.getElementById("dice-win").innerHTML=sentence[getRandomInt(0,6)];
                document.getElementById("dice-win").setAttribute(
                    "style", "display: block; height: 100%;"
                );
                onWin();
            };
        };
        setTimeout(allDiceValue, (maxRandy*75)+150);
    };
    
    document.getElementById("dice").scrollIntoView({ behavior: "smooth", block: "start" });

    reset = document.getElementById("resetTheDice");
    reset.onclick = function() {
        document.getElementById("dice-prediction").value = "";
        document.getElementById("dice-result").setAttribute(
            "style", "display: none; height: 0;"
        );
        onReset();
    };

    theCode = `<pre>document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("dice-1").textContent = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice-2").textContent = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice-3").textContent = Math.trunc(Math.random() * 6) + 1;
});

const rollTheDice = document.getElementById("rollTheDice");

rollTheDice.onclick = function() {

    let prediction = document.getElementById("dice-prediction");
    
    prediction = prediction.value;
    // see whether value has been entered
    inputValue = prediction;
    // if value, convert to Number
    let dicePrediction = Number(prediction);    

    let randyOne = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerOne = (callCount) => {
        if (callCount < randyOne) {
        setTimeout(() => {
                ++callCount;
                document.getElementById("dice-1").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerOne(callCount);
            }, 75);
        };
    };

    let randyTwo = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerTwo = (callCount) => {
        if (callCount < randyTwo) {
            setTimeout(() => {
                ++callCount;
                document.getElementById("dice-2").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerTwo(callCount);
            }, 75);
        };
    };
    
    let randyThree = Math.round(Math.random() * (75 - 25)) + 25;
    const functionCounterTimerThree = (callCount) => {
        if (callCount < randyThree) {
            setTimeout(() => {
                ++callCount;
                document.getElementById("dice-3").textContent = Math.trunc(Math.random() * 6) + 1;
                functionCounterTimerThree(callCount);
            }, 75);
        };
    };

    let diceOne;
    let diceTwo;
    let diceThree;

    let maxRandy = Math.max(randyOne, randyTwo, randyThree);
    
    let sentence=new Array();
    sentence[0]='<span class="red">Jeez, you lost. That sucks!</span>';
    sentence[1]='<span class="red">OMG. Try again?</span>';
    sentence[2]='<span class="red">Darn! Wanna keep trying?</span>';
    sentence[3]='<span class="red">Really think you can win?</span>';
    sentence[4]='<span class="red">Roll again or roll over?</span>';
    sentence[5]='<span class="red">Ah. Sorry.</span>';
    sentence[6]='<span class="red">Maybe next time?</span>';

    if (!inputValue) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Hey! Enter something!";
        prediction.value = "";
    } else if (Number.isNaN(dicePrediction)) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Try a number?";
        document.getElementById("dice-prediction").value = "";
    } else if (dicePrediction < 3 || dicePrediction > 18) {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "Choose between 3 and 18!";
        document.getElementById("dice-prediction").value = "";
    } else  {
        document.getElementById("dice-result").setAttribute(
            "style", "display: block; height: 100%;"
        );
        document.getElementById("dice-win").textContent = "All bets placed!";
        functionCounterTimerOne(0);
        functionCounterTimerTwo(0);
        functionCounterTimerThree(0);
        
        function allDiceValue() { 
            diceOne = document.getElementById("dice-1").textContent;
            diceTwo = document.getElementById("dice-2").textContent;
            diceThree = document.getElementById("dice-3").textContent;
            let thrownDice = Number(diceOne) + Number(diceTwo) + Number(diceThree);
            thrownDice = Number(thrownDice);

            
            if (thrownDice === Number(dicePrediction)) {
                document.getElementById("dice-win").innerHTML = '<span class="green">You won!</span>';
            } else {
                document.getElementById("dice-win").innerHTML=sentence[getRandomInt(0,6)];
            };
        };
        setTimeout(allDiceValue, (maxRandy*75)+150);
    };
    
    document.getElementById("dice").scrollIntoView({ behavior: "smooth", block: "start" });

    reset = document.getElementById("resetTheDice");
    reset.onclick = function() {
        document.getElementById("dice-prediction").value = "";
        document.getElementById("dice-result").setAttribute(
            "style", "display: none; height: 0;"
        );
    };
}</pre>`;

    showGambleCodeButton.onclick = function() {
        showGambleCode.setAttribute(
            "style", "height: 100%;"
        );
        diceCode.innerHTML = theCode;
        showGambleCodeButton.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        hideGambleCode.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );

        document.getElementById("dice").scrollIntoView({ behavior: "smooth", block: "start" });
    };

    hideGambleCodeButton.onclick = function() {
        hideGambleCode.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showGambleCode.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        diceCode.textContent = "";

        document.getElementById("dice").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}




