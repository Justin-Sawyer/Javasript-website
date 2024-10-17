let textboxUsername;
let submitUserNameCode;

// const radiusForArea = document.getElementById("radius-for-area");
// div surrounding show button
const showResultHTMLTextbox = document.getElementById("show-code-html-textbox");
// div surrounding hide button
const hideResultHTMLTextbox = document.getElementById("hide-code-html-textbox");
const codeResultHTMLTextbox = document.getElementById("code-result-html-textbox");
const showResultHTMLTextboxButton = document.getElementById("show-code-html-textbox-button");
const hideCodeHTMLTextboxButton = document.getElementById("hide-code-html-textbox-button");
const HTMLTextboxDiv = document.getElementById("html-textbox");

function submitUserName() {
    textboxUsername = document.getElementById("textboxUsername").value;
    let submitUserNameCode;
    if (textboxUsername == "") {
        textboxUsername = `<span class="string">// Username has not been entered!</span>`;
        document.getElementById("username-is").innerHTML = `<span class="red result">Please enter your user name!</span>`;
        submitUserNameCode = `if (textboxUsername == "") {
            document.getElementById("username-is").innerHTML = 
               <span class="red result">Please enter your user name!</span>
        } else {
           document.getElementById("username-is").innerHTML = 
                ${textboxUsername}
           document.getElementById("textboxUsername").value = "";<span class="string"> // Empties textbox</span>
        };`;
    } else {
        textboxUsername = `<span class="result">${textboxUsername}</span>`
        document.getElementById("username-is").innerHTML = `<span class="result">${textboxUsername}</span>`;
        submitUserNameCode = `if (textboxUsername == "") {
            document.getElementById("username-is").innerHTML = 
               <span class="string">// Username has been entered</span>
        } else {
           document.getElementById("username-is").innerHTML = 
                ${textboxUsername}
           document.getElementById("textboxUsername").value = "";<span class="string"> // Empties textbox</span>
        };`;
        document.getElementById("textboxUsername").value = "";
    }
    
    theCode = `<pre class="shadow">let textboxUsername;

function submitUserName() {
    textboxUsername = document.getElementById("textboxUsername").value;
    ${submitUserNameCode}
}</pre>`;

    //document.getElementById("html-textbox").scrollIntoView({ behavior: "smooth", block: "start" });
    if (codeResultHTMLTextbox.innerHTML) {
        codeResultHTMLTextbox.innerHTML = theCode;
    } else if (codeResultHTMLTextbox.innerHTML == "") {
        showResultHTMLTextbox.setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        showResultHTMLTextboxButton.onclick = function() {
            codeResultHTMLTextbox.setAttribute(
                "style", "height: 100%"
            );
            codeResultHTMLTextbox.innerHTML = theCode;

            HTMLTextboxDiv.scrollIntoView({ behavior: "smooth", block: "start" });
            
            showResultHTMLTextbox.setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            hideResultHTMLTextbox.setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
        };
    };

    hideCodeHTMLTextboxButton.onclick = function() {
        hideResultHTMLTextbox.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        showResultHTMLTextbox.setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        codeResultHTMLTextbox.textContent = "";

        HTMLTextboxDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}
