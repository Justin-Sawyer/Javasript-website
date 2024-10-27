let firstNumber;
let colorType;

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
    document.getElementById("ceil").classList.add("green");
    document.getElementById("ceil").innerHTML = ceil;
    if (Number.isNaN(ceil)) {
        document.getElementById("ceil").classList.add("nan");
        document.getElementById("ceil").classList.remove("green");
        document.getElementById("ceil").innerHTML = `${ceil}`;
    };

    document.getElementById("floor").classList.remove("nan");
    document.getElementById("floor").classList.add("green");
    document.getElementById("floor").textContent = floor;
    if (Number.isNaN(floor)) {
        document.getElementById("floor").classList.add("nan");
        document.getElementById("floor").classList.remove("green");
        document.getElementById("floor").innerHTML = `${floor}`;
    };
    
    if (sign == 1) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").classList.add("red");
        document.getElementById("sign").innerHTML = `${sign} <span class="black">(</span><span class="green">positive</span><span class="black">)</span>`;
    } else if (sign == -1) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").classList.add("red");
        document.getElementById("sign").innerHTML = `${sign} <span class="black">(</span><span class="red">negative</span><span class="black">)</span>`;
    } else if (sign == 0) {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").classList.add("red");
        document.getElementById("sign").innerHTML = `${sign}`;
    } else if (Number.isNaN(sign)) {
        document.getElementById("sign").classList.remove("red");
        document.getElementById("sign").classList.add("nan");
        document.getElementById("sign").innerHTML = `${sign}`;
    } else {
        document.getElementById("sign").classList.remove("nan");
        document.getElementById("sign").innerHTML = sign;
    };

    if (round < firstNumber) {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").classList.add("green");
        document.getElementById("round").innerHTML = `${round} <span class="black">(</span><span class="red result arrow">⬇⬇</span><span class="black">)</span>`;
    } else if (round == firstNumber) {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").classList.add("green");
        document.getElementById("round").innerHTML = `${round} <span class="black">(</span><span class="result black arrow">⬅⬅</span><span class="black">)</span>`;
    } else if (Number.isNaN(round)) {
        document.getElementById("round").classList.remove("green");
        document.getElementById("round").classList.add("nan");
        document.getElementById("round").innerHTML = `${round}`;
    } else {
        document.getElementById("round").classList.remove("nan");
        document.getElementById("round").classList.add("green");
        document.getElementById("round").innerHTML = `${round} <span class="black">(</span><span class="green result arrow">⬆⬆</span><span class="black">)</span>`;
    };
    
    document.getElementById("trunc").classList.remove("nan");
    document.getElementById("trunc").classList.add("green");
    document.getElementById("trunc").innerHTML = `${trunc} <span class="result black arrow">(⬅⬅)</span>`;
    if (Number.isNaN(trunc)) {
        document.getElementById("trunc").classList.add("nan");
        document.getElementById("trunc").classList.remove("green");
        document.getElementById("trunc").innerHTML = `${trunc}`;
    };

    document.getElementById("absolute").classList.remove("nan");
    document.getElementById("absolute").classList.add("green");
    document.getElementById("absolute").textContent = absolute;
    if (Number.isNaN(absolute)) {
        document.getElementById("absolute").classList.remove("green");
        document.getElementById("absolute").classList.add("nan");
        document.getElementById("absolute").innerHTML = `${absolute}`;
    };
    
    if (Number.isNaN(firstNumber)) {
        colorType = "nan";
    } else {
        colorType = "green";
    };

    document.getElementById("round-code").innerHTML = `Math.round(<span class="result ${colorType}">${firstNumber}</span>)`;
    document.getElementById("floor-code").innerHTML = `Math.floor(<span class="result ${colorType}">${firstNumber}</span>)`;
    document.getElementById("ceil-code").innerHTML = `Math.ceil(<span class="result ${colorType}">${firstNumber}</span>)`;
    document.getElementById("trunc-code").innerHTML = `Math.trunc(<span class="result ${colorType}">${firstNumber}</span>)`;
    document.getElementById("sign-code").innerHTML = `Math.sign(<span class="result ${colorType}">${firstNumber}</span>)`;
    document.getElementById("absolute-code").innerHTML = `Math.abs(<span class="result ${colorType}">${firstNumber}</span>)`;  
    
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
        document.getElementById("max").classList.remove("green");
        document.getElementById("max").classList.add("nan");
        max = "NaN";
        document.getElementById("max").textContent = max;
    } else {
        document.getElementById("max").classList.remove("nan");
        document.getElementById("max").classList.add("green");
        document.getElementById("max").textContent = max;
    };
    if ((Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else {
        document.getElementById("max-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;  
    };

    if (Number.isNaN(min)) {
        document.getElementById("min").classList.remove("green");
        document.getElementById("min").classList.add("nan");
        min = "NaN";
        document.getElementById("min").textContent = max;
    } else {
        document.getElementById("min").classList.remove("nan");
        document.getElementById("min").classList.add("green");
        document.getElementById("min").textContent = min;
    }
    //document.getElementById("min-code").innerHTML = `Math.min(<span class="result green">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`; 
    if ((Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else if ((Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result nan">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && (Number.isNaN(numberTwo)) && !(Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result nan">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;
    } else if (!(Number.isNaN(numberOne)) && !(Number.isNaN(numberTwo)) && (Number.isNaN(numberThree))) {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result nan">${numberThree}</span>)`;
    } else {
        document.getElementById("min-code").innerHTML = `Math.max(<span class="result green">${numberOne}</span>, <span class="result green">${numberTwo}</span>, <span class="result green">${numberThree}</span>)`;  
    };
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

    if (Number.isNaN(sin)) {
        document.getElementById("sin").classList.remove("green");
        document.getElementById("sin").classList.add("nan");
        document.getElementById("getSinOf").classList.remove("green");
        document.getElementById("getSinOf").classList.add("nan");
        document.getElementById("sin").textContent = sin;
    } else {
        document.getElementById("sin").classList.remove("nan");
        document.getElementById("sin").classList.add("green");
        document.getElementById("getSinOf").classList.remove("nan");
        document.getElementById("getSinOf").classList.add("green");
        document.getElementById("sin").textContent = sin;
    };
    document.getElementById("getSinOf").innerHTML = trigNumber;

    if (Number.isNaN(cos)) {
        document.getElementById("cos").classList.remove("green");
        document.getElementById("cos").classList.add("nan");
        document.getElementById("getCosOf").classList.remove("green");
        document.getElementById("getCosOf").classList.add("nan");
        document.getElementById("cos").textContent = cos;
    } else {
        document.getElementById("cos").classList.remove("nan");
        document.getElementById("cos").classList.add("green");
        document.getElementById("getCosOf").classList.remove("nan");
        document.getElementById("getCosOf").classList.add("green");
        document.getElementById("cos").textContent = cos;
    };
    document.getElementById("getCosOf").innerHTML = trigNumber;

    if (Number.isNaN(tan)) {
        document.getElementById("tan").classList.remove("green");
        document.getElementById("tan").classList.add("nan");
        document.getElementById("getTanOf").classList.remove("green");
        document.getElementById("getTanOf").classList.add("nan");
        document.getElementById("tan").textContent = tan;
    } else {
        document.getElementById("tan").classList.remove("nan");
        document.getElementById("tan").classList.add("green");
        document.getElementById("getTanOf").classList.remove("nan");
        document.getElementById("getTanOf").classList.add("green");
        document.getElementById("tan").textContent = tan;
    };
    document.getElementById("getTanOf").innerHTML = trigNumber;

    if (trigNumber < 0) {
        document.getElementById("log").classList.remove("green");
        document.getElementById("log").classList.add("nan");
        document.getElementById("getLogOf").classList.remove("nan");
        document.getElementById("getLogOf").classList.add("green");
        document.getElementById("log").textContent = log;
    } else if (Number.isNaN(log)) {
        document.getElementById("log").classList.remove("green");
        document.getElementById("log").classList.add("nan");
        document.getElementById("getLogOf").classList.remove("green");
        document.getElementById("getLogOf").classList.add("nan");
        document.getElementById("log").textContent = log;
    } else {
        document.getElementById("log").classList.remove("nan");
        document.getElementById("log").classList.add("green");
        document.getElementById("getLogOf").classList.remove("nan");
        document.getElementById("getLogOf").classList.add("green");
        document.getElementById("log").textContent = log;
    };
    document.getElementById("getLogOf").innerHTML = trigNumber;

    if (trigNumber < 0) {
        document.getElementById("log1p").classList.remove("green");
        document.getElementById("log1p").classList.add("nan");
        document.getElementById("getLog1pOf").classList.remove("nan");
        document.getElementById("getLog1pOf").classList.add("green");
        document.getElementById("log1p").textContent = log1p;
    } else if (Number.isNaN(log1p)) {
        document.getElementById("log1p").classList.remove("green");
        document.getElementById("log1p").classList.add("nan");
        document.getElementById("getLog1pOf").classList.remove("green");
        document.getElementById("getLog1pOf").classList.add("nan");
        document.getElementById("log1p").textContent = log1p;
    } else {
        document.getElementById("log1p").classList.remove("nan");
        document.getElementById("log1p").classList.add("green");
        document.getElementById("getLog1pOf").classList.remove("nan");
        document.getElementById("getLog1pOf").classList.add("green");
        document.getElementById("log1p").textContent = log1p;
    };
    document.getElementById("getLog1pOf").innerHTML = trigNumber;

    if (Number.isNaN(fround)) {
        document.getElementById("fround").classList.remove("green");
        document.getElementById("fround").classList.add("nan");
        document.getElementById("getFroundOf").classList.remove("green");
        document.getElementById("getFroundOf").classList.add("nan");
        document.getElementById("fround").textContent = fround;
    } else {
        document.getElementById("fround").classList.remove("nan");
        document.getElementById("fround").classList.add("green");
        document.getElementById("getFroundOf").classList.remove("nan");
        document.getElementById("getFroundOf").classList.add("green");
        document.getElementById("fround").textContent = fround;
    };
    document.getElementById("getFroundOf").innerHTML = trigNumber;

    if (Number.isNaN(trigNumber)) {
        colorType = "nan";
    } else {
        colorType = "green";
    };

    document.getElementById("sin-code").innerHTML = `Math.sin(<span class="result ${colorType}">${trigNumber}</span>)`;
    document.getElementById("cos-code").innerHTML = `Math.cos(<span class="result ${colorType}">${trigNumber}</span>)`;
    document.getElementById("tan-code").innerHTML = `Math.tan(<span class="result ${colorType}">${trigNumber}</span>)`;
    document.getElementById("log-code").innerHTML = `Math.log(<span class="result ${colorType}">${trigNumber}</span>)`;
    document.getElementById("log1p-code").innerHTML = `Math.log1p(<span class="result ${colorType}">${trigNumber}</span>)`;
    document.getElementById("fround-code").innerHTML = `Math.fround(<span class="result ${colorType}">${trigNumber}</span>)`;


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
        document.getElementById("square").classList.remove("green");
        document.getElementById("square").classList.add("nan");
        squareRoot = "NaN";
        document.getElementById("square").textContent = squareRoot;
        if (!(Number.isNaN(rootNumber))) {
            document.getElementById("square-code").innerHTML = `Math.sqrt(<span class="result green">${rootNumber}</span>)`;
        } else {
            document.getElementById("square-code").innerHTML = `Math.sqrt(<span class="result nan">${rootNumber}</span>)`;
        }
    } else {
        document.getElementById("square").classList.remove("nan");
        document.getElementById("square").classList.add("green");
        document.getElementById("square").textContent = squareRoot;
        document.getElementById("square-code").innerHTML = `Math.sqrt(<span class="result green">${rootNumber}</span>)`;
    };

    cubeRoot = Math.cbrt(rootNumber);
    if (Number.isNaN(cubeRoot)) {
        document.getElementById("cube").classList.remove("green");
        document.getElementById("cube").classList.add("nan");
        cubeRoot = "NaN";
        document.getElementById("cube").textContent = cubeRoot;
        document.getElementById("cube-code").innerHTML = `Math.cbrt(<span class="result nan">${rootNumber}</span>)`;
        } else {
            document.getElementById("cube").classList.remove("nan");
            document.getElementById("cube").classList.add("green");
            document.getElementById("cube").textContent = cubeRoot;
            document.getElementById("cube-code").innerHTML = `Math.cbrt(<span class="result green">${rootNumber}</span>)`;
        };
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
        document.getElementById("power").classList.remove("green");
        document.getElementById("power").classList.add("red");
        document.getElementById("power").textContent = "Error";
    } else if (Number.isNaN(operandNumber) || Number.isNaN(operatorNumber)) {
        document.getElementById("power").classList.remove("red");
        document.getElementById("power").classList.remove("green");
        document.getElementById("power").classList.add("nan");
        power = "NaN";
        document.getElementById("power").textContent = power;
    } else {
        document.getElementById("power").classList.remove("nan");
        document.getElementById("power").classList.remove("red");
        document.getElementById("power").classList.add("green");
        document.getElementById("power").textContent = power;
    };

    if (Number.isNaN(operandNumber) && Number.isNaN(operatorNumber)) {
        document.getElementById("power-code").innerHTML = `power = Math.pow(<span class="result nan">${operandNumber}</span>, <span class="result nan">${operatorNumber}</span>)`;
    } else if (!(Number.isNaN(operandNumber)) && Number.isNaN(operatorNumber)) {
        document.getElementById("power-code").innerHTML = `power = Math.pow(<span class="result green">${operandNumber}</span>, <span class="result nan">${operatorNumber}</span>)`;
    } else if (Number.isNaN(operandNumber) && !(Number.isNaN(operatorNumber))) {
        document.getElementById("power-code").innerHTML = `power = Math.pow(<span class="result nan">${operandNumber}</span>, <span class="result green">${operatorNumber}</span>)`;
    } else {
        document.getElementById("power-code").innerHTML = `power = Math.pow(<span class="result green">${operandNumber}</span>, <span class="result green">${operatorNumber}</span>)`;
    }

    if ((operandNumber === 0 && operatorNumber === 0) || (operatorNumber === 0) || (operandNumber < 0)) {
        document.getElementById("root").classList.remove("nan");
        document.getElementById("root").classList.remove("green");
        document.getElementById("root").classList.add("red");
        document.getElementById("root").textContent = "Error";
    } else if (Number.isNaN(operandNumber) || Number.isNaN(operatorNumber)) {
        document.getElementById("root").classList.remove("red");
        document.getElementById("root").classList.remove("green");
        document.getElementById("root").classList.add("nan");
        root = "NaN";
        document.getElementById("root").textContent = root;
    } else {
        document.getElementById("root").classList.remove("red");
        document.getElementById("root").classList.remove("nan");
        document.getElementById("root").classList.add("green");
        document.getElementById("root").textContent = root;
    };

    if (Number.isNaN(operandNumber) && Number.isNaN(operatorNumber)) {
        document.getElementById("root-code").innerHTML = `root = Math.pow(<span class="result nan">${operandNumber}</span>, <span class="result red">1 /</span> <span class="result nan">${operatorNumber}</span>)`;
    } else if (!(Number.isNaN(operandNumber)) && Number.isNaN(operatorNumber)) {
        document.getElementById("root-code").innerHTML = `root = Math.pow(<span class="result green">${operandNumber}</span>, <span class="result red">1 /</span> <span class="result nan">${operatorNumber}</span>)`;
    } else if (Number.isNaN(operandNumber) && !(Number.isNaN(operatorNumber))) {
        document.getElementById("root-code").innerHTML = `root = Math.pow(<span class="result nan">${operandNumber}</span>, <span class="result red">1 /</span> <span class="result green">${operatorNumber}</span>)`;
    } else {
        document.getElementById("root-code").innerHTML = `root = Math.pow(<span class="result green">${operandNumber}</span>, <span class="result red">1 /</span> <span class="result green">${operatorNumber}</span>)`;
    }
    //document.getElementById("root-code").innerHTML = `root = Math.pow(<span class="result green">${operandNumber}</span>, <span class="result red">1 /</span> <span class="result green">${operatorNumber}</span>)`;

    if (Number.isNaN(operandNumber)) {
        document.getElementById("operandNumber1").innerHTML = `<span class="result nan">${operandNumber}</span>`;
        document.getElementById("operandNumber2").innerHTML = `<span class="result nan">${operandNumber}</span>`;

    } else {
        document.getElementById("operandNumber1").innerHTML = `<span class="result green">${operandNumber}</span>`;
        document.getElementById("operandNumber2").innerHTML = `<span class="result green">${operandNumber}</span>`;

    };

    if (Number.isNaN(operatorNumber)) {
        document.getElementById("operatorNumber1").innerHTML = `<span class="result nan">${operatorNumber}</span>`;
        document.getElementById("operatorNumber2").innerHTML = `<span class="result nan">${operatorNumber}</span>`;

    } else {
        document.getElementById("operatorNumber1").innerHTML = `<span class="result green">${operatorNumber}</span>`;
        document.getElementById("operatorNumber2").innerHTML = `<span class="result green">${operatorNumber}</span>`;

    };

    //document.getElementById("operatorNumber1").textContent = operatorNumber;
    //document.getElementById("operatorNumber2").textContent = operatorNumber;
    

}

function mathRandomMethod() {
    Array.from(document.getElementsByClassName('hide-random-method')).forEach( method => {
        method.setAttribute(
            "style", "display: block;"
        );
    });

    randomNum = Math.random();
    document.getElementById("base-random-method-code").textContent = `Math.random();`;
    document.getElementById("base-result").innerHTML = `<span class="green">${randomNum}</span>`;

    randomNum = randomNum * 10;
    document.getElementById("ten-random-method-code").textContent =  `Math.random() * 10;`;
    document.getElementById("ten-result").innerHTML = `<span class="green">${randomNum}</span>`;

    truncNum = Math.trunc(randomNum);
    document.getElementById("trunc-random-method-code").textContent =  `Math.trunc(Math.random() * 10);`;
    document.getElementById("trunc-result").innerHTML = `<span class="green">${truncNum}</span>`;

    roundNum = Math.round(randomNum);
    document.getElementById("round-random-method-code").textContent =  `Math.round(Math.random() * 10);`;
    if (roundNum > truncNum) {
        document.getElementById("round-result").innerHTML = `<span class="green">${roundNum}</span> (<span class="green result arrow">⬆⬆</span>)`;
    } else {
        document.getElementById("round-result").innerHTML = `<span class="green">${roundNum}</span>`;
    }

    truncNum = Math.trunc(randomNum) + 1;
    document.getElementById("random-method-between-one-ten-trunc-code").innerHTML =  `<span class="string">// Between 1 and 10 using Math.trunc()</span>
Math.trunc(Math.random() * 10) + 1;`;
    document.getElementById("between-one-ten-trunc-result").innerHTML = `<span class="green">${truncNum}</span>`;

    roundNum = Math.round(randomNum);
    document.getElementById("random-method-between-one-ten-round-code").innerHTML =  `<span class="string">// Between 1 and 10 using Math.round()</span>
Math.round(Math.random() * 10);`;
    document.getElementById("between-one-ten-round-result").innerHTML = `<span class="green">${roundNum}</span>`;

    const min = 50;
    const max = 100;
    let fiveToTen = Math.round(Math.random() * (max - min)) + min;
    document.getElementById("random-method-between-50-100-round-code").innerHTML =  `<span class="string">// Between 50 and 100 using Math.round()</span>
const min = 50;
const max = 100;    
Math.round(Math.random() * <span class="result red">(max - min)</span>) + min;`;
    document.getElementById("between-50-100-round-result").innerHTML = `<span class="green">${fiveToTen}</span>`;
    document.getElementById("between-50-100-round-result-explanation").innerHTML = `Why is <span class="result red">(max - min)</span> needed in the code above?`;
    document.getElementById("random-method-between-50-100-round-code-explanation").innerHTML =  `<span class="string">// Between 50 and 100 without subtracting 50</span>
const min = 50;
const max = 100;    
Math.round(Math.random() * max) + min;`;
    document.getElementById("between-50-100-without-min-round-result").textContent = fiveToTen + 50;
    
}