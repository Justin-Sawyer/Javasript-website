const submitSwitchText = document.getElementById("submitSwitchText");
let switchText = document.getElementById("switch-text")

submitSwitchText.onclick = function() {
    
    let inputSwitchText = document.getElementById("inputSwitchText");
    
    inputSwitchText = inputSwitchText.value;
    inputSwitchText = inputSwitchText.replace(/./,x=>x.toUpperCase());

    let placeholder = document.getElementById("inputSwitchText");

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let bibleDays = [
        "Light was created",
        "The sky was created",
        "Dry land, seas, plants and trees were created",
        "The Sun, Moon and stars were created",
        "Creatures that live in the sea and creatures that fly were created",
        "Animals that live on the land and humans were created",
        "God finished his work of creation and rested, making the seventh day a special holy day",
    ];

    let mon = `switchText.textContent = bibleDays[0];`;
    let tues = `switchText.textContent = bibleDays[1];`;
    let wed = `switchText.textContent = bibleDays[2];`;
    let thurs = `switchText.textContent = bibleDays[3];`;
    let fri = `switchText.textContent = bibleDays[4];`;
    let sat = `switchText.textContent = bibleDays[5];`;
    let sun = `switchText.textContent = bibleDays[6];`;
    let noday = `switchText.innerHTML = Please enter a day!`;


    switch(inputSwitchText) {
        case days[0]:
            switchText.textContent = bibleDays[0];
            mon = `switchText.innerHTML = <span class="result green">${bibleDays[0]}</span>`;
            break;
        case days[1]:
            switchText.textContent = bibleDays[1];
            tues = `switchText.innerHTML = <span class="result green">${bibleDays[1]}</span>`;
            break;
        case days[2]:
            switchText.textContent = bibleDays[2];
            wed = `switchText.innerHTML = <span class="result green">${bibleDays[2]}</span>`;
            break;
        case days[3]:
            switchText.textContent = bibleDays[3];
            thurs = `switchText.innerHTML = <span class="result green">${bibleDays[3]}</span>`;
            break;
        case days[4]:
            switchText.textContent = bibleDays[4];
            fri = `switchText.innerHTML = <span class="result green">${bibleDays[4]}</span>`;
            break;
        case days[5]:
            switchText.textContent = bibleDays[5];
            sat = `switchText.innerHTML = <span class="result green">${bibleDays[5]}</span>`;
            break;
        case days[6]:
            switchText.textContent = bibleDays[6];
            sun = `switchText.innerHTML = <span class="result green">${bibleDays[6]}</span>`;
            break;
        default:
            switchText.innerHTML = `<span class="red">Please enter a day!</span>`;
            noday = `switchText.innerHTML = <span class="result red">Please enter a day!</span>`;
            break;
    };

    reset = document.getElementById("resetSwitchText");
    reset.onclick = function() {
        placeholder.value = "";
        placeholder.placeholder = `Enter a number`;
        placeholder.classList.remove("red");
        placeholder.classList.remove("green");
        switchText.textContent = "";
        document.getElementById("code-result-switch-text").innerHTML = "";
        document.getElementById("show-code-switch-text").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("show-code-switch-text-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-switch-text").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-switch-text-button").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );

        document.getElementById("switch").scrollIntoView({ behavior: "smooth", block: "start" });
    };

    theCode = `<pre>const submitSwitchText = document.getElementById("submitSwitchText");
let switchText = document.getElementById("switch-text")

submitSwitchText.onclick = function() {
    
    let inputSwitchText = document.getElementById("inputSwitchText");
    
    inputSwitchText = inputSwitchText.value;
    <span class="string">// Capitalize first letter</span>
    inputSwitchText = inputSwitchText.replace(/./,x=>x.toUpperCase());

    let placeholder = document.getElementById("inputSwitchText");

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let bibleDays = [
        "Light was created",
        "The sky was created",
        "Dry land, seas, plants and trees were created",
        "The Sun, Moon and stars were created",
        "Creatures that live in the sea and creatures that fly were create",
        "Animals that live on the land and humans were created",
        "God finished his work of creation and rested, making the seventh day a special holy day"
    ];

    switch(inputSwitchText) {
        case days[0]:
            ${mon}
            break;
        case days[1]:
            ${tues}
            break;
        case days[2]:
            ${wed}
            break;
        case days[3]:
            ${thurs}
            break;
        case days[4]:
            ${fri}
            break;
        case days[5]:
            ${sat}
            break;
        case days[6]:
            ${sun}
            break;
        default:
            ${noday}
            break;
    };
}</pre>`;

    // document.getElementById("code-result-switch-text").innerHTML = theCode;
    document.getElementById("show-code-switch-text").setAttribute(
        "style", "visibility: visible; height: 100%;"
    );
    document.getElementById("show-code-switch-text-button").setAttribute(
        "style", "visibility: visible; height: 100%;"
    );

    if (document.getElementById("code-result-switch-text").innerHTML) {
        document.getElementById("code-result-switch-text").innerHTML = theCode;
    } else if (document.getElementById("code-result-switch-text").innerHTML == "") {
        document.getElementById("code-result-switch-text").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-switch-text").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-code-switch-text-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-code-switch-text-button").onclick = function() {
            document.getElementById("code-result-switch-text").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("code-result-switch-text").innerHTML = theCode;
            document.getElementById("show-code-switch-text").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-code-switch-text-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-code-switch-text").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-code-switch-text-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("switch").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-code-switch-text-button").onclick = function() {
        document.getElementById("hide-code-switch-text").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-code-switch-text-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-code-switch-text").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("code-result-switch-text").innerHTML = "";

        document.getElementById("switch").scrollIntoView({ behavior: "smooth", block: "start" });
    };
}