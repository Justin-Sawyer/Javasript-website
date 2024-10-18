function currentSwitchTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    const switchHour = document.getElementById("switch-hour");
    const switchMinute = document.getElementById("switch-minute");
    const switchSecond = document.getElementById("switch-second");

    let shh = (hh < 10) ? "0" + hh : hh;
    let smm = (mm < 10) ? "0" + mm : mm;
    let sss = (ss < 10) ? "0" + ss : ss;
    
    let time = `<span class=red>${shh}:</span> <span class=green>${smm}:</span> <span class=string>${sss}</span>`;

    var t = setTimeout(function(){ currentSwitchTime() }, 1000); 

    function currentSwitchSecond() {
        switch (ss) {
            case 0:
                switchSecond.textContent = `Oh Oh`; 
                break;
            case 1:
                switchSecond.textContent = `Oh One`; 
                break;
            case 2:
                switchSecond.innerHTML = `Oh Two`; 
                break;
            case 3:
                switchSecond.innerHTML = `Oh Three`; 
                break;
            case 4:
                switchSecond.textContent = `Oh Four`; 
                break;
            case 5:
                switchSecond.innerHTML = `Oh Five`; 
                break;
            case 6:
                switchSecond.innerHTML = `Oh Six`; 
                break;
            case 7:
                switchSecond.textContent = `Oh Seven`; 
                break;
            case 8:
                switchSecond.innerHTML = `Oh Eight`; 
                break;
            case 9:
                switchSecond.innerHTML = `Oh Nine`;
                break;
            case 10:
                switchSecond.textContent = `Ten`;
                break;
            case 11:
                switchSecond.innerHTML = `Eleven`;
                break;
            case 12:
                switchSecond.innerHTML = `Twelve`; 
                break;
            case 13:
                switchSecond.textContent = `Thirteen`; 
                break;
            case 14:
                switchSecond.innerHTML = `Fourteen`; 
                break;
            case 15:
                switchSecond.innerHTML = `Fifteen`; 
                break;
            case 16:
                switchSecond.textContent = `Sixteen`; 
                break;
            case 17:
                switchSecond.innerHTML = `Seventeen`; 
                break;
            case 18:
                switchSecond.innerHTML = `Eighteen`; 
                break;
            case 19:
                switchSecond.textContent = `Nineteen`; 
                break;
            case 20:
                switchSecond.innerHTML = `Twenty`; 
                break;
            case 21:
                switchSecond.innerHTML = `Twenty One`; 
                break;
            case 22:
                switchSecond.textContent = `Twenty Two`; 
                break;
            case 23:
                switchSecond.innerHTML = `Twenty Three`; 
                break;
            case 24:
                switchSecond.innerHTML = `Twenty Four`; 
                break;
            case 25:
                switchSecond.innerHTML = `Twenty Five`;
                break;
            case 26:
                switchSecond.innerHTML = `Twenty Six`; 
                break;
            case 27:
                switchSecond.innerHTML = `Twenty Seven`; 
                break;
            case 28:
                switchSecond.textContent = `Twenty Eight`; 
                break;
            case 29:
                switchSecond.innerHTML = `Twenty Nine`; 
                break;
            case 30:
                switchSecond.innerHTML = `Thirty`; 
                break;
            case 31:
                switchSecond.innerHTML = `Thirty One`; 
                break;
            case 32:
                switchSecond.textContent = `Thirty Two`; 
                break;
            case 33:
                switchSecond.innerHTML = `Thirty Three`; 
                break;
            case 34:
                switchSecond.innerHTML = `Thirty Four`; 
                break;
            case 35:
                switchSecond.innerHTML = `Thirty Five`;
                break;
            case 36:
                switchSecond.innerHTML = `Thirty Six`; 
                break;
            case 37:
                switchSecond.innerHTML = `Thirty Seven`; 
                break;
            case 38:
                switchSecond.textContent = `Thirty Eight`; 
                break;
            case 39:
                switchSecond.innerHTML = `Thirty Nine`; 
                break;
            case 40:
                switchSecond.innerHTML = `Forty`; 
                break;
            case 41:
                switchSecond.innerHTML = `Forty One`; 
                break;
            case 42:
                switchSecond.textContent = `Forty Two`; 
                break;
            case 43:
                switchSecond.innerHTML = `Forty Three`; 
                break;
            case 44:
                switchSecond.innerHTML = `Forty Four`; 
                break;
            case 45:
                switchSecond.innerHTML = `Forty Five`;
                break;
            case 46:
                switchSecond.innerHTML = `Forty Six`; 
                break;
            case 47:
                switchSecond.innerHTML = `Forty Seven`; 
                break;
            case 48:
                switchSecond.textContent = `Forty Eight`; 
                break;
            case 49:
                switchSecond.innerHTML = `Forty Nine`; 
                break;
            case 50:
                switchSecond.innerHTML = `Fifty`; 
                break;
            case 51:
                switchSecond.innerHTML = `Fifty One`; 
                break;
            case 52:
                switchSecond.textContent = `Fifty Two`; 
                break;
            case 53:
                switchSecond.innerHTML = `Fifty Three`; 
                break;
            case 54:
                switchSecond.innerHTML = `Fifty Four`; 
                break;
            case 55:
                switchSecond.innerHTML = `Fifty Five`;
                break;
            case 56:
                switchSecond.innerHTML = `Fifty Six`; 
                break;
            case 57:
                switchSecond.innerHTML = `Fifty Seven`; 
                break;
            case 58:
                switchSecond.textContent = `Fifty Eight`; 
                break;
            case 59:
                switchSecond.innerHTML = `Fifty Nine`; 
                break;
            default:
                switchSecond.innerHTML = `Sixty`;
                break;
        };
    };
    
    function currentSwitchMinute() {
        switch (mm) {
            case 0:
                switchMinute.textContent = `Hundred:`; 
                break;
            case 1:
                switchMinute.textContent = `Oh One:`; 
                break;
            case 2:
                switchMinute.innerHTML = `Oh Two:`; 
                break;
            case 3:
                switchMinute.innerHTML = `Oh Three:`; 
                break;
            case 4:
                switchMinute.textContent = `Oh Four:`; 
                break;
            case 5:
                switchMinute.innerHTML = `Oh Five:`; 
                break;
            case 6:
                switchMinute.innerHTML = `Oh Six:`; 
                break;
            case 7:
                switchMinute.textContent = `Oh Seven:`; 
                break;
            case 8:
                switchMinute.innerHTML = `Oh Eight:`; 
                break;
            case 9:
                switchMinute.innerHTML = `Oh Nine:`; 
                break;
            case 10:
                switchMinute.textContent = `Ten:`; 
                break;
            case 11:
                switchMinute.innerHTML = `Eleven:`; 
                break;
            case 12:
                switchMinute.innerHTML = `Twelve:`; 
                break;
            case 13:
                switchMinute.textContent = `Thirteen:`; 
                break;
            case 14:
                switchMinute.innerHTML = `Fourteen:`; 
                break;
            case 15:
                switchMinute.innerHTML = `Fifteen:`; 
                break;
            case 16:
                switchMinute.textContent = `Sixteen:`; 
                break;
            case 17:
                switchMinute.innerHTML = `Seventeen:`; 
                break;
            case 18:
                switchMinute.innerHTML = `Eighteen:`; 
                break;
            case 19:
                switchMinute.textContent = `Nineteen:`; 
                break;
            case 20:
                switchMinute.innerHTML = `Twenty:`; 
                break;
            case 21:
                switchMinute.innerHTML = `Twenty One:`; 
                break;
            case 22:
                switchMinute.textContent = `Twenty Two:`; 
                break;
            case 23:
                switchMinute.innerHTML = `Twenty Three:`; 
                break;
            case 24:
                switchMinute.innerHTML = `Twenty Four:`; 
                break;
            case 25:
                switchMinute.innerHTML = `Twenty Five:`;
                break;
            case 26:
                switchMinute.innerHTML = `Twenty Six:`; 
                break;
            case 27:
                switchMinute.innerHTML = `Twenty Seven:`; 
                break;
            case 28:
                switchMinute.textContent = `Twenty Eight:`; 
                break;
            case 29:
                switchMinute.innerHTML = `Twenty Nine:`; 
                break;
            case 30:
                switchMinute.innerHTML = `Thirty:`; 
                break;
            case 31:
                switchMinute.innerHTML = `Thirty One:`; 
                break;
            case 32:
                switchMinute.textContent = `Thirty Two:`;
                break;
            case 33:
                switchMinute.innerHTML = `Thirty Three:`;
                break;
            case 34:
                switchMinute.innerHTML = `Thirty Four:`; 
                break;
            case 35:
                switchMinute.innerHTML = `Thirty Five:`;
                break;
            case 36:
                switchMinute.innerHTML = `Thirty Six:`; 
                break;
            case 37:
                switchMinute.innerHTML = `Thirty Seven:`; 
                break;
            case 38:
                switchMinute.textContent = `Thirty Eight:`; 
                break;
            case 39:
                switchMinute.innerHTML = `Thirty Nine:`; 
                break;
            case 40:
                switchMinute.innerHTML = `Forty:`; 
                break;
            case 41:
                switchMinute.innerHTML = `Forty One:`; 
                break;
            case 42:
                switchMinute.textContent = `Forty Two:`; 
                break;
            case 43:
                switchMinute.innerHTML = `Forty Three:`; 
                break;
            case 44:
                switchMinute.innerHTML = `Forty Four:`; 
                break;
            case 45:
                switchMinute.innerHTML = `Forty Five:`;
                break;
            case 46:
                switchMinute.innerHTML = `Forty Six:`; 
                break;
            case 47:
                switchMinute.innerHTML = `Forty Seven:`; 
                break;
            case 48:
                switchMinute.textContent = `Forty Eight:`;
                break;
            case 49:
                switchMinute.innerHTML = `Forty Nine:`;
                break;
            case 50:
                switchMinute.innerHTML = `Fifty:`;
                break;
            case 51:
                switchMinute.innerHTML = `Fifty One:`; 
                break;
            case 52:
                switchMinute.textContent = `Fifty Two:`; 
                break;
            case 53:
                switchMinute.innerHTML = `Fifty Three:`; 
                break;
            case 54:
                switchMinute.innerHTML = `Fifty Four:`; 
                break;
            case 55:
                switchMinute.innerHTML = `Fifty Five:`;
                break;
            case 56:
                switchMinute.innerHTML = `Fifty Six:`; 
                break;
            case 57:
                switchMinute.innerHTML = `Fifty Seven:`; 
                break;
            case 58:
                switchMinute.textContent = `Fifty Eight:`; 
                break;
            case 59:
                switchMinute.innerHTML = `Fifty Nine:`;
                break;
            default:
                switchMinute.innerHTML = `Sixty:`;
                break;
        };
        currentSwitchSecond();
    };

    function currentSwitchHour() {
        switch (hh) {
            case 0:
                switchHour.textContent = `Midnight:`; 
                break;
            case 1:
                switchHour.textContent = `Oh One:`; 
                break;
            case 2:
                switchHour.innerHTML = `Oh Two:`; 
                break;
            case 3:
                switchHour.innerHTML = `Oh Three:`; 
                break;
            case 4:
                switchHour.textContent = `Oh Four:`; 
                break;
            case 5:
                switchHour.innerHTML = `Oh Five:`; 
                break;
            case 6:
                switchHour.innerHTML = `Oh Six:`; 
                break;
            case 7:
                switchHour.textContent = `Oh Seven:`; 
                break;
            case 8:
                switchHour.innerHTML = `Oh Eight:`; 
                break;
            case 9:
                switchHour.innerHTML = `Oh Nine`;
                break;
            case 10:
                switchHour.textContent = `Ten`;
                break;
            case 11:
                switchHour.innerHTML = `Eleven`;
                break;
            case 12:
                switchHour.innerHTML = `Twelve:`; 
                break;
            case 13:
                switchHour.textContent = `Thirteen:`; 
                break;
            case 14:
                switchHour.innerHTML = `Fourteen:`; 
                break;
            case 15:
                switchHour.innerHTML = `Fifteen:`; 
                break;
            case 16:
                switchHour.textContent = `Sixteen:`; 
                break;
            case 17:
                switchHour.innerHTML = `Seventeen:`; 
                break;
            case 18:
                switchHour.innerHTML = `Eighteen:`; 
                break;
            case 19:
                switchHour.textContent = `Nineteen:`; 
                break;
            case 20:
                switchHour.innerHTML = `Twenty:`; 
                break;
            case 21:
                switchHour.innerHTML = `Twenty One:`; 
                break;
            case 22:
                switchHour.textContent = `Twenty Two:`; 
                break;
            case 23:
                switchHour.innerHTML = `Twenty Three:`; 
                break;
            default:
                switchHour.innerHTML = ``;
                break;
        };
        currentSwitchMinute();
    }
    currentSwitchHour();

    theSwitchCode = `<pre>function currentSwitchTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    const switchHour = document.getElementById("switch-hour");
    const switchMinute = document.getElementById("switch-minute");
    const switchSecond = document.getElementById("switch-second");

    let shh = (hh < 10) ? "0" + hh : hh;
    let smm = (mm < 10) ? "0" + mm : mm;
    let sss = (ss < 10) ? "0" + ss : ss;
    
    let time = "<span class=red>${shh}:</span> <span class=green>${smm}:</span> <span class=string>${sss}</span>";

    var t = setTimeout(function(){ currentSwitchTime() }, 1000); 

    function currentSwitchSecond() {
        switch (ss) {
            case 0:
                switchSecond.textContent = "Oh Oh"; 
                break;
            case 1:
                switchSecond.textContent = "Oh One"; 
                break;
            case 2:
                switchSecond.innerHTML = "Oh Two"; 
                break;
            case 3:
                switchSecond.innerHTML = "Oh Three"; 
                break;
            case 4:
                switchSecond.textContent = "Oh Four"; 
                break;
            case 5:
                switchSecond.innerHTML = "Oh Five"; 
                break;
            case 6:
                switchSecond.innerHTML = "Oh Six"; 
                break;
            case 7:
                switchSecond.textContent = "Oh Seven"; 
                break;
            case 8:
                switchSecond.innerHTML = "Oh Eight"; 
                break;
            case 9:
                switchSecond.innerHTML = "Oh Nine";
                break;
            case 10:
                switchSecond.textContent = "Ten";
                break;
            case 11:
                switchSecond.innerHTML = "Eleven";
                break;
            case 12:
                switchSecond.innerHTML = "Twelve"; 
                break;
            case 13:
                switchSecond.textContent = "Thirteen"; 
                break;
            case 14:
                switchSecond.innerHTML = "Fourteen"; 
                break;
            case 15:
                switchSecond.innerHTML = "Fifteen"; 
                break;
            case 16:
                switchSecond.textContent = "Sixteen"; 
                break;
            case 17:
                switchSecond.innerHTML = "Seventeen"; 
                break;
            case 18:
                switchSecond.innerHTML = "Eighteen"; 
                break;
            case 19:
                switchSecond.textContent = "Nineteen"; 
                break;
            case 20:
                switchSecond.innerHTML = "Twenty"; 
                break;
            case 21:
                switchSecond.innerHTML = "Twenty One"; 
                break;
            case 22:
                switchSecond.textContent = "Twenty Two"; 
                break;
            case 23:
                switchSecond.innerHTML = "Twenty Three"; 
                break;
            case 24:
                switchSecond.innerHTML = "Twenty Four"; 
                break;
            case 25:
                switchSecond.innerHTML = "Twenty Five";
                break;
            case 26:
                switchSecond.innerHTML = "Twenty Six"; 
                break;
            case 27:
                switchSecond.innerHTML = "Twenty Seven"; 
                break;
            case 28:
                switchSecond.textContent = "Twenty Eight"; 
                break;
            case 29:
                switchSecond.innerHTML = "Twenty Nine"; 
                break;
            case 30:
                switchSecond.innerHTML = "Thirty"; 
                break;
            case 31:
                switchSecond.innerHTML = "Thirty One"; 
                break;
            case 32:
                switchSecond.textContent = "Thirty Two"; 
                break;
            case 33:
                switchSecond.innerHTML = "Thirty Three"; 
                break;
            case 34:
                switchSecond.innerHTML = "Thirty Four"; 
                break;
            case 35:
                switchSecond.innerHTML = "Thirty Five";
                break;
            case 36:
                switchSecond.innerHTML = "Thirty Six"; 
                break;
            case 37:
                switchSecond.innerHTML = "Thirty Seven"; 
                break;
            case 38:
                switchSecond.textContent = "Thirty Eight"; 
                break;
            case 39:
                switchSecond.innerHTML = "Thirty Nine"; 
                break;
            case 40:
                switchSecond.innerHTML = "Forty"; 
                break;
            case 41:
                switchSecond.innerHTML = "Forty One"; 
                break;
            case 42:
                switchSecond.textContent = "Forty Two"; 
                break;
            case 43:
                switchSecond.innerHTML = "Forty Three"; 
                break;
            case 44:
                switchSecond.innerHTML = "Forty Four"; 
                break;
            case 45:
                switchSecond.innerHTML = "Forty Five";
                break;
            case 46:
                switchSecond.innerHTML = "Forty Six"; 
                break;
            case 47:
                switchSecond.innerHTML = "Forty Seven"; 
                break;
            case 48:
                switchSecond.textContent = "Forty Eight"; 
                break;
            case 49:
                switchSecond.innerHTML = "Forty Nine"; 
                break;
            case 50:
                switchSecond.innerHTML = "Fifty"; 
                break;
            case 51:
                switchSecond.innerHTML = "Fifty One"; 
                break;
            case 52:
                switchSecond.textContent = "Fifty Two"; 
                break;
            case 53:
                switchSecond.innerHTML = "Fifty Three"; 
                break;
            case 54:
                switchSecond.innerHTML = "Fifty Four"; 
                break;
            case 55:
                switchSecond.innerHTML = "Fifty Five";
                break;
            case 56:
                switchSecond.innerHTML = "Fifty Six"; 
                break;
            case 57:
                switchSecond.innerHTML = "Fifty Seven"; 
                break;
            case 58:
                switchSecond.textContent = "Fifty Eight"; 
                break;
            case 59:
                switchSecond.innerHTML = "Fifty Nine"; 
                break;
            default:
                switchSecond.innerHTML = "Sixty";
                break;
        };
    };
    
    function currentSwitchMinute() {
        switch (mm) {
            case 0:
                switchMinute.textContent = "Hundred:"; 
                break;
            case 1:
                switchMinute.textContent = "Oh One:"; 
                break;
            case 2:
                switchMinute.innerHTML = "Oh Two:"; 
                break;
            case 3:
                switchMinute.innerHTML = "Oh Three:"; 
                break;
            case 4:
                switchMinute.textContent = "Oh Four:"; 
                break;
            case 5:
                switchMinute.innerHTML = "Oh Five:"; 
                break;
            case 6:
                switchMinute.innerHTML = "Oh Six:"; 
                break;
            case 7:
                switchMinute.textContent = "Oh Seven:"; 
                break;
            case 8:
                switchMinute.innerHTML = "Oh Eight:"; 
                break;
            case 9:
                switchMinute.innerHTML = "Oh Nine:"; 
                break;
            case 10:
                switchMinute.textContent = "Ten:"; 
                break;
            case 11:
                switchMinute.innerHTML = "Eleven:"; 
                break;
            case 12:
                switchMinute.innerHTML = "Twelve:"; 
                break;
            case 13:
                switchMinute.textContent = "Thirteen:"; 
                break;
            case 14:
                switchMinute.innerHTML = "Fourteen:"; 
                break;
            case 15:
                switchMinute.innerHTML = "Fifteen:"; 
                break;
            case 16:
                switchMinute.textContent = "Sixteen:"; 
                break;
            case 17:
                switchMinute.innerHTML = "Seventeen:"; 
                break;
            case 18:
                switchMinute.innerHTML = "Eighteen:"; 
                break;
            case 19:
                switchMinute.textContent = "Nineteen:"; 
                break;
            case 20:
                switchMinute.innerHTML = "Twenty:"; 
                break;
            case 21:
                switchMinute.innerHTML = "Twenty One:"; 
                break;
            case 22:
                switchMinute.textContent = "Twenty Two:"; 
                break;
            case 23:
                switchMinute.innerHTML = "Twenty Three:"; 
                break;
            case 24:
                switchMinute.innerHTML = "Twenty Four:"; 
                break;
            case 25:
                switchMinute.innerHTML = "Twenty Five:";
                break;
            case 26:
                switchMinute.innerHTML = "Twenty Six:"; 
                break;
            case 27:
                switchMinute.innerHTML = "Twenty Seven:"; 
                break;
            case 28:
                switchMinute.textContent = "Twenty Eight:"; 
                break;
            case 29:
                switchMinute.innerHTML = "Twenty Nine:"; 
                break;
            case 30:
                switchMinute.innerHTML = "Thirty:"; 
                break;
            case 31:
                switchMinute.innerHTML = "Thirty One:"; 
                break;
            case 32:
                switchMinute.textContent = "Thirty Two:";
                break;
            case 33:
                switchMinute.innerHTML = "Thirty Three:";
                break;
            case 34:
                switchMinute.innerHTML = "Thirty Four:"; 
                break;
            case 35:
                switchMinute.innerHTML = "Thirty Five:";
                break;
            case 36:
                switchMinute.innerHTML = "Thirty Six:"; 
                break;
            case 37:
                switchMinute.innerHTML = "Thirty Seven:"; 
                break;
            case 38:
                switchMinute.textContent = "Thirty Eight:"; 
                break;
            case 39:
                switchMinute.innerHTML = "Thirty Nine:"; 
                break;
            case 40:
                switchMinute.innerHTML = "Forty:"; 
                break;
            case 41:
                switchMinute.innerHTML = "Forty One:"; 
                break;
            case 42:
                switchMinute.textContent = "Forty Two:"; 
                break;
            case 43:
                switchMinute.innerHTML = "Forty Three:"; 
                break;
            case 44:
                switchMinute.innerHTML = "Forty Four:"; 
                break;
            case 45:
                switchMinute.innerHTML = "Forty Five:";
                break;
            case 46:
                switchMinute.innerHTML = "Forty Six:"; 
                break;
            case 47:
                switchMinute.innerHTML = "Forty Seven:"; 
                break;
            case 48:
                switchMinute.textContent = "Forty Eight:";
                break;
            case 49:
                switchMinute.innerHTML = "Forty Nine:";
                break;
            case 50:
                switchMinute.innerHTML = "Fifty:";
                break;
            case 51:
                switchMinute.innerHTML = "Fifty One:"; 
                break;
            case 52:
                switchMinute.textContent = "Fifty Two:"; 
                break;
            case 53:
                switchMinute.innerHTML = "Fifty Three:"; 
                break;
            case 54:
                switchMinute.innerHTML = "Fifty Four:"; 
                break;
            case 55:
                switchMinute.innerHTML = "Fifty Five:";
                break;
            case 56:
                switchMinute.innerHTML = "Fifty Six:"; 
                break;
            case 57:
                switchMinute.innerHTML = "Fifty Seven:"; 
                break;
            case 58:
                switchMinute.textContent = "Fifty Eight:"; 
                break;
            case 59:
                switchMinute.innerHTML = "Fifty Nine:";
                break;
            default:
                switchMinute.innerHTML = "Sixty:";
                break;
        };
        currentSwitchSecond();
    };

    function currentSwitchHour() {
        switch (hh) {
            case 0:
                switchHour.textContent = "Midnight:"; 
                break;
            case 1:
                switchHour.textContent = "Oh One:"; 
                break;
            case 2:
                switchHour.innerHTML = "Oh Two:"; 
                break;
            case 3:
                switchHour.innerHTML = "Oh Three:"; 
                break;
            case 4:
                switchHour.textContent = "Oh Four:"; 
                break;
            case 5:
                switchHour.innerHTML = "Oh Five:"; 
                break;
            case 6:
                switchHour.innerHTML = "Oh Six:"; 
                break;
            case 7:
                switchHour.textContent = "Oh Seven:"; 
                break;
            case 8:
                switchHour.innerHTML = "Oh Eight:"; 
                break;
            case 9:
                switchHour.innerHTML = "Oh Nine";
                break;
            case 10:
                switchHour.textContent = "Ten";
                break;
            case 11:
                switchHour.innerHTML = "Eleven";
                break;
            case 12:
                switchHour.innerHTML = "Twelve:"; 
                break;
            case 13:
                switchHour.textContent = "Thirteen:"; 
                break;
            case 14:
                switchHour.innerHTML = "Fourteen:"; 
                break;
            case 15:
                switchHour.innerHTML = "Fifteen:"; 
                break;
            case 16:
                switchHour.textContent = "Sixteen:"; 
                break;
            case 17:
                switchHour.innerHTML = "Seventeen:"; 
                break;
            case 18:
                switchHour.innerHTML = "Eighteen:"; 
                break;
            case 19:
                switchHour.textContent = "Nineteen:"; 
                break;
            case 20:
                switchHour.innerHTML = "Twenty:"; 
                break;
            case 21:
                switchHour.innerHTML = "Twenty One:"; 
                break;
            case 22:
                switchHour.textContent = "Twenty Two:"; 
                break;
            case 23:
                switchHour.innerHTML = "Twenty Three:"; 
                break;
            default:
                switchHour.innerHTML = "";
                break;
        };
        currentSwitchMinute();
    }
    currentSwitchHour();        
};
currentSwitchTime();
</pre>`;

    if (document.getElementById("switch-clock-code").innerHTML) {
        document.getElementById("switch-clock-code").innerHTML = theSwitchCode;
    } else if (document.getElementById("switch-clock-code").innerHTML == "") {
        document.getElementById("switch-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-switch-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-switch-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-switch-clock-code-button").onclick = function() {
            document.getElementById("switch-clock-code").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("switch-clock-code").innerHTML = theSwitchCode;
            document.getElementById("show-switch-clock-code").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-switch-clock-code-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-switch-clock-code").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-switch-clock-code-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("switch-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-switch-clock-code-button").onclick = function() {
        document.getElementById("hide-switch-clock-code").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-switch-clock-code-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-switch-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-switch-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("switch-clock-code").innerHTML = "";

        document.getElementById("switch-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    
};
currentSwitchTime();