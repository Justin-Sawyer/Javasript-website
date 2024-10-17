let username;

function windowPrompt() {
    username = window.prompt("What's your user name?");
    console.log(username);
    if (!username) {
        document.getElementById("userName").innerHTML = `<span class="result red">Please enter something!</span>`;
    } else {
        document.getElementById("userName").innerHTML = `<span class="result">${username}</span>`;
    }
}
