let firstNumber;

function mathMethods() {
    
    Array.from(document.getElementsByClassName('hide-maths-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    firstNumber = document.getElementById("first-number").value;
    firstNumber = Number(firstNumber);

    ceil = Math.ceil(firstNumber);
    floor = Math.floor(firstNumber);
    sign = Math.sign(firstNumber);
    round = Math.round(firstNumber);
    trunc = Math.trunc(firstNumber);
    absolute = Math.abs(firstNumber)

    document.getElementById("ceil").classList.remove("nan");
    document.getElementById("ceil").innerHTML = ceil;
    if (ceil = Number.isNaN(ceil)) {
        ceil = "NaN";
        document.getElementById("ceil").classList.add("nan");
        document.getElementById("ceil").innerHTML = `${ceil}`;
    };

    document.getElementById("floor").classList.remove("nan");
    document.getElementById("floor").textContent = floor;
    if (floor = Number.isNaN(floor)) {
        floor = "NaN";
        document.getElementById("floor").classList.add("nan");
        document.getElementById("floor").innerHTML = `${floor}`;
    };
    
    if (sign == 1) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").innerHTML = `${sign} (<span class="green">positive</span>)`;
    } else if (sign == -1) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").innerHTML = `${sign} (<span class="red">negative</span>)`;
    } else if (sign == 0) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").innerHTML = `${sign}`;
    } else if (sign = Number.isNaN(sign)) {
        sign = "NaN";
        document.getElementById("sign").classList.add("nan");
        document.getElementById("sign").innerHTML = `${sign}`;
    } else {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").innerHTML = sign;
    };

    if (round < firstNumber) {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").innerHTML = `${round} (<span class="red result arrow">⬇⬇</span>)`;
    } else if (round == firstNumber) {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").innerHTML = `${round} (<span class="result arrow">⬅⬅</span>)`;
    } else if (sign = Number.isNaN(round)) {
        round = "NaN";
        document.getElementById("round").classList.add("nan");
        document.getElementById("round").innerHTML = `${round}`;
    } else {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").innerHTML = `${round} (<span class="green result arrow">⬆⬆</span>)`;
    };
    
    document.getElementById("trunc").classList.remove("nan");
    document.getElementById("trunc").innerHTML = `${trunc} (<span class="result arrow">⬅⬅</span>)`;
    if (trunc = Number.isNaN(trunc)) {
        trunc = "NaN";
        document.getElementById("trunc").classList.add("nan");
        document.getElementById("trunc").innerHTML = `${trunc}`;
    };

    document.getElementById("absolute").classList.remove("nan");
    document.getElementById("absolute").textContent = absolute;
    if (absolute = Number.isNaN(absolute)) {
        absolute = "NaN";
        document.getElementById("absolute").classList.add("nan");
        document.getElementById("absolute").innerHTML = `${absolute}`;
    };
    

    document.getElementById("round-code").innerHTML = `Math.round(${firstNumber})`;
    document.getElementById("floor-code").innerHTML = `Math.floor(${firstNumber})`;
    document.getElementById("ceil-code").innerHTML = `Math.ceil(${firstNumber})`;
    document.getElementById("trunc-code").innerHTML = `Math.trunc(${firstNumber})`;
    document.getElementById("sign-code").innerHTML = `Math.sign(${firstNumber})`;
    document.getElementById("absolute-code").innerHTML = `Math.abs(${firstNumber})`;  
    
}

function mathMaxMinMethods() {

    Array.from(document.getElementsByClassName('hide-maths-max-min-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    numberOne = document.getElementById("number-one").value;
    numberOne = Number(numberOne);

    numberTwo = document.getElementById("number-two").value;
    numberTwo = Number(numberTwo);

    numberThree = document.getElementById("number-three").value;
    numberThree = Number(numberThree);

    max = Math.max(numberOne, numberTwo, numberThree);
    min = Math.min(numberOne, numberTwo, numberThree);

    if (Number.isNaN(max)) {
        document.getElementById("max").classList.add("nan");
        max = "NaN";
        document.getElementById("max").textContent = max;
    } else {
        document.getElementById("max").classList.remove("nan");
        document.getElementById("max").textContent = max;
    };
    document.getElementById("max-code").innerHTML = `Math.max(${numberOne}, ${numberTwo}, ${numberThree})`;  

    if (Number.isNaN(min)) {
        document.getElementById("min").classList.add("nan");
        min = "NaN";
        document.getElementById("min").textContent = max;
    } else {
        document.getElementById("min").classList.remove("nan");
        document.getElementById("min").textContent = min;
    }
    document.getElementById("min-code").innerHTML = `Math.min(${numberOne}, ${numberTwo}, ${numberThree})`; 
}

function mathTrigMethods() {
    
    Array.from(document.getElementsByClassName('hide-maths-trig-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    trigNumber = document.getElementById("trig-number").value;
    trigNumber = Number(trigNumber);

    sin = Math.sin(trigNumber);
    cos = Math.cos(trigNumber);
    tan = Math.tan(trigNumber);

    log = Math.log(trigNumber);
    log1p = Math.log1p(trigNumber);
    fround = Math.fround(trigNumber);

    //document.getElementById("sin").textContent = sin;
    if (Number.isNaN(sin)) {
        document.getElementById("sin").classList.add("nan");
        sin = "NaN";
        document.getElementById("sin").textContent = sin;
    } else {
        document.getElementById("sin").classList.remove("nan");
        document.getElementById("sin").textContent = sin;
    };

    //document.getElementById("cos").textContent = cos;
    if (Number.isNaN(cos)) {
        document.getElementById("cos").classList.add("nan");
        cos = "NaN";
        document.getElementById("cos").textContent = cos;
    } else {
        document.getElementById("cos").classList.remove("nan");
        document.getElementById("cos").textContent = cos;
    };

    //document.getElementById("tan").textContent = tan;
    if (Number.isNaN(tan)) {
        document.getElementById("tan").classList.add("nan");
        tan = "NaN";
        document.getElementById("tan").textContent = tan;
    } else {
        document.getElementById("tan").classList.remove("nan");
        document.getElementById("tan").textContent = tan;
    };


    //document.getElementById("log").textContent = log;
    if (Number.isNaN(log)) {
        document.getElementById("log").classList.add("nan");
        log = "NaN";
        document.getElementById("log").textContent = log;
    } else {
        document.getElementById("log").classList.remove("nan");
        document.getElementById("log").textContent = log;
    };

    //document.getElementById("log1p").textContent = log1p;
    if (Number.isNaN(log1p)) {
        document.getElementById("log1p").classList.add("nan");
        log1p = "NaN";
        document.getElementById("log1p").textContent = log1p;
    } else {
        document.getElementById("log1p").classList.remove("nan");
        document.getElementById("log1p").textContent = log1p;
    };

    //document.getElementById("fround").textContent = fround;
    if (Number.isNaN(fround)) {
        document.getElementById("fround").classList.add("nan");
        fround = "NaN";
        document.getElementById("fround").textContent = fround;
    } else {
        document.getElementById("fround").classList.remove("nan");
        document.getElementById("fround").textContent = fround;
    };

    document.getElementById("sin-code").innerHTML = `Math.sin(${trigNumber})`;
    document.getElementById("cos-code").innerHTML = `Math.cos(${trigNumber})`;
    document.getElementById("tan-code").innerHTML = `Math.tan(${trigNumber})`;
    document.getElementById("log-code").innerHTML = `Math.log(${trigNumber})`;
    document.getElementById("log1p-code").innerHTML = `Math.log1p(${trigNumber})`;
    document.getElementById("fround-code").innerHTML = `Math.fround(${trigNumber})`;


}

function mathRootMethods() {
    Array.from(document.getElementsByClassName('hide-maths-root-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    rootNumber = document.getElementById("root-number").value;
    rootNumber = Number(rootNumber);

    squareRoot = Math.sqrt(rootNumber);
    
    if (Number.isNaN(squareRoot)) {
        document.getElementById("square").classList.add("nan");
        squareRoot = "NaN";
        document.getElementById("square").textContent = squareRoot;
    } else {
        document.getElementById("square").classList.remove("nan");
        document.getElementById("square").textContent = squareRoot;
    };
    document.getElementById("square-code").innerHTML = `Math.sqrt(${rootNumber})`;

    cubeRoot = Math.cbrt(rootNumber);
    if (Number.isNaN(cubeRoot)) {
        document.getElementById("cube").classList.add("nan");
        cubeRoot = "NaN";
        document.getElementById("cube").textContent = cubeRoot;
        } else {
            document.getElementById("cube").classList.remove("nan");
            document.getElementById("cube").textContent = cubeRoot;
        };
    document.getElementById("cube-code").innerHTML = `Math.cbrt(${rootNumber})`;
}

function mathPowerMethods() {
    Array.from(document.getElementsByClassName('hide-maths-power-methods')).forEach( method => {
        method.style.visibility="visible";
        method.style.height="100%";
    });

    operandNumber = document.getElementById("number-to-power").value;
    operandNumber = Number(operandNumber);

    operatorNumber = document.getElementById("to-power-of").value;
    operatorNumber = Number(operatorNumber);

    power = Math.pow(operandNumber, operatorNumber);

    root = Math.pow(operandNumber, 1 / operatorNumber);

    if (operandNumber === 0 && operatorNumber === 0){
        document.getElementById("power").classList.remove("nan");
        document.getElementById("power").classList.add("red");
        document.getElementById("power").textContent = "Error";
    } else if (Number.isNaN(operandNumber) || Number.isNaN(operatorNumber)) {
        document.getElementById("power").classList.add("nan");
        document.getElementById("power").classList.remove("red");
        power = "NaN";
        document.getElementById("power").textContent = power;
    } else {
        document.getElementById("power").classList.remove("nan");
        document.getElementById("power").classList.remove("red");
        document.getElementById("power").textContent = power;
    };

    document.getElementById("power-code").innerHTML = `power = Math.pow(${operandNumber}, ${operatorNumber})`;

    if ((operandNumber === 0 && operatorNumber === 0) || (operatorNumber === 0) || (operandNumber < 0)) {
        document.getElementById("root").classList.remove("nan");
        document.getElementById("root").classList.add("red");
        document.getElementById("root").textContent = "Error";
    } else if (Number.isNaN(operandNumber) || Number.isNaN(operatorNumber)) {
        document.getElementById("root").classList.remove("red");
        document.getElementById("root").classList.add("nan");
        root = "NaN";
        document.getElementById("root").textContent = root;
    } else {
        document.getElementById("root").classList.remove("red");
        document.getElementById("root").classList.remove("nan");
        document.getElementById("root").textContent = root;
    };

    document.getElementById("root-code").innerHTML = `root = Math.pow(${operandNumber}, 1 / ${operatorNumber})`;
    document.getElementById("operandNumber1").textContent = operandNumber;
    document.getElementById("operandNumber2").textContent = operandNumber;

    document.getElementById("operatorNumber1").textContent = operatorNumber;
    document.getElementById("operatorNumber2").textContent = operatorNumber;
    

}

function mathRandomMethod() {
    Array.from(document.getElementsByClassName('hide-random-method')).forEach( method => {
        method.setAttribute(
            "style", "display: block;"
        );
    });

    randomNum = Math.random();
    document.getElementById("base-random-method-code").textContent = `Math.random();`;
    document.getElementById("base-result").textContent = randomNum;

    randomNum = randomNum * 10;
    document.getElementById("ten-random-method-code").textContent =  `Math.random() * 10;`;
    document.getElementById("ten-result").textContent = randomNum;

    truncNum = Math.trunc(randomNum);
    document.getElementById("trunc-random-method-code").textContent =  `Math.trunc(Math.random() * 10);`;
    document.getElementById("trunc-result").textContent = truncNum;

    roundNum = Math.round(randomNum);
    document.getElementById("round-random-method-code").textContent =  `Math.round(Math.random() * 10);`;
    if (roundNum > truncNum) {
        document.getElementById("round-result").innerHTML = `${roundNum} (<span class="green result arrow">⬆⬆</span>)`;
    } else {
        document.getElementById("round-result").innerHTML = roundNum;
    }

    truncNum = Math.trunc(randomNum) + 1;
    document.getElementById("random-method-between-one-ten-trunc-code").innerHTML =  `<span class="string">// Between 1 and 10 using Math.trunc()</span>
Math.trunc(Math.random() * 10) + 1;`;
    document.getElementById("between-one-ten-trunc-result").textContent = truncNum;

    roundNum = Math.trunc(randomNum) + 1;
    document.getElementById("random-method-between-one-ten-round-code").innerHTML =  `<span class="string">// Between 1 and 10 using Math.round()</span>
Math.round(Math.random() * 10) + 1;`;
    document.getElementById("between-one-ten-round-result").textContent = roundNum;

    const min = 50;
    const max = 100;
    let fiveToTen = Math.round(Math.random() * (max - min)) + min;
    document.getElementById("random-method-between-50-100-round-code").innerHTML =  `<span class="string">// Between 50 and 100 using Math.round()</span>
const min = 50;
const max = 100;    
Math.round(Math.random() * <span class="result red">(max - min)</span>) + min;`;
    document.getElementById("between-50-100-round-result").textContent = fiveToTen;
    document.getElementById("between-50-100-round-result-explanation").innerHTML = `Why is <span class="result red">(max - min)</span> needed in the code above?`;
    document.getElementById("random-method-between-50-100-round-code-explanation").innerHTML =  `<span class="string">// Between 50 and 100 without subtracting 50</span>
const min = 50;
const max = 100;    
Math.round(Math.random() * max) + min;`;
    document.getElementById("between-50-100-without-min-round-result").textContent = fiveToTen + 50;
    
}