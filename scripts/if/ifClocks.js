function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = `<span class=red>${hh}:</span> <span class=green>${mm}:</span> <span class=string>${ss}</span>`;

    var t = setTimeout(function(){ currentTime() }, 1000); 

    function currentMinute() {
        if (mm == 01) {
            minute.textContent = `Oh One:`; 
        } else if (mm == 02) {
            minute.innerHTML = `Oh Two:`; 
        } else if (mm == 03) {
            minute.innerHTML = `Oh Three:`; 
        } else if (mm == 04) {
            minute.textContent = `Oh Four:`; 
        } else if (mm == 05) {
            minute.innerHTML = `Oh Five:`; 
        } else if (mm == 06) {
            minute.innerHTML = `Oh Six:`; 
        } else if (mm == 07) {
            minute.textContent = `Oh Seven:`; 
        } else if (mm == 08) {
            minute.innerHTML = `Oh Eight:`; 
        } else if (mm == 09) {
            minute.innerHTML = `Oh Nine:`; 
        } else if (mm == 10) {
            minute.textContent = `Ten:`; 
        } else if (mm == 11) {
            minute.innerHTML = `Eleven:`; 
        } else if (mm == 12) {
            minute.innerHTML = `Twelve:`; 
        } else if (mm == 13) {
            minute.textContent = `Thirteen:`; 
        } else if (mm == 14) {
            minute.innerHTML = `Fourteen:`; 
        } else if (mm == 15) {
            minute.innerHTML = `Fifteen:`; 
        } else if (mm == 16) {
            minute.textContent = `Sixteen:`; 
        } else if (mm == 17) {
            minute.innerHTML = `Seventeen:`; 
        } else if (mm == 18) {
            minute.innerHTML = `Eighteen:`; 
        } else if (mm == 19) {
            minute.textContent = `Nineteen:`; 
        } else if (mm == 20) {
            minute.innerHTML = `Twenty:`; 
        } else if (mm == 21) {
            minute.innerHTML = `Twenty One:`; 
        } else if (mm == 22) {
            minute.textContent = `Twenty Two:`; 
        } else if (mm == 23) {
            minute.innerHTML = `Twenty Three:`; 
        } else if (mm == 24) {
            minute.innerHTML = `Twenty Four:`; 
        } else if (mm == 25) {
            minute.innerHTML = `Twenty Five:`;
        } else if (mm == 26) {
            minute.innerHTML = `Twenty Six:`; 
        } else if (mm == 27) {
            minute.innerHTML = `Twenty Seven:`; 
        } else if (mm == 28) {
            minute.textContent = `Twenty Eight:`; 
        } else if (mm == 29) {
            minute.innerHTML = `Twenty Nine:`; 
        } else if (mm == 30) {
            minute.innerHTML = `Thirty:`; 
        } else if (mm == 31) {
            minute.innerHTML = `Thirty One:`; 
        } else if (mm == 32) {
            minute.textContent = `Thirty Two:`; 
        } else if (mm == 33) {
            minute.innerHTML = `Thirty Three:`; 
        } else if (mm == 34) {
            minute.innerHTML = `Thirty Four:`; 
        } else if (mm == 35) {
            minute.innerHTML = `Thirty Five:`;
        } else if (mm == 36) {
            minute.innerHTML = `Thirty Six:`; 
        } else if (mm == 37) {
            minute.innerHTML = `Thirty Seven:`; 
        } else if (mm == 38) {
            minute.textContent = `Thirty Eight:`; 
        } else if (mm == 39) {
            minute.innerHTML = `Thirty Nine:`; 
        } else if (mm == 40) {
            minute.innerHTML = `Forty:`; 
        } else if (mm == 41) {
            minute.innerHTML = `Forty One:`; 
        } else if (mm == 42) {
            minute.textContent = `Forty Two:`; 
        } else if (mm == 43) {
            minute.innerHTML = `Forty Three:`; 
        } else if (mm == 44) {
            minute.innerHTML = `Forty Four:`; 
        } else if (mm == 45) {
            minute.innerHTML = `Forty Five:`;
        } else if (mm == 46) {
            minute.innerHTML = `Forty Six:`; 
        } else if (mm == 47) {
            minute.innerHTML = `Forty Seven:`; 
        } else if (mm == 48) {
            minute.textContent = `Forty Eight:`; 
        } else if (mm == 49) {
            minute.innerHTML = `Forty Nine:`; 
        } else if (mm == 50) {
            minute.innerHTML = `Fifty:`; 
        } else if (mm == 51) {
            minute.innerHTML = `Fifty One:`; 
        } else if (mm == 52) {
            minute.textContent = `Fifty Two:`; 
        } else if (mm == 53) {
            minute.innerHTML = `Fifty Three:`; 
        } else if (mm == 54) {
            minute.innerHTML = `Fifty Four:`; 
        } else if (mm == 55) {
            minute.innerHTML = `Fifty Five:`;
        } else if (mm == 56) {
            minute.innerHTML = `Fifty Six:`; 
        } else if (mm == 57) {
            minute.innerHTML = `Fifty Seven:`; 
        } else if (mm == 58) {
            minute.textContent = `Fifty Eight:`; 
        } else if (mm == 59) {
            minute.innerHTML = `Fifty Nine:`; 
        } else {
            minute.innerHTML = `Hundred:`;
        };
    };

    function currentSecond() {
        if (ss == 01) {
            second.textContent = `Oh One`; 
        } else if (ss == 02) {
            second.innerHTML = `Oh Two`; 
        } else if (ss == 03) {
            second.innerHTML = `Oh Three`; 
        } else if (ss == 04) {
            second.textContent = `Oh Four`; 
        } else if (ss == 05) {
            second.innerHTML = `Oh Five`; 
        } else if (ss == 06) {
            second.innerHTML = `Oh Six`; 
        } else if (ss == 07) {
            second.textContent = `Oh Seven`; 
        } else if (ss == 08) {
            second.innerHTML = `Oh Eight`; 
        } else if (ss == 09) {
            second.innerHTML = `Oh Nine`; 
        } else if (ss == 10) {
            second.textContent = `Ten`; 
        } else if (ss == 11) {
            second.innerHTML = `Eleven`; 
        } else if (ss == 12) {
            second.innerHTML = `Twelve`; 
        } else if (ss == 13) {
            second.textContent = `Thirteen`; 
        } else if (ss == 14) {
            second.innerHTML = `Fourteen`; 
        } else if (ss == 15) {
            second.innerHTML = `Fifteen`; 
        } else if (ss == 16) {
            second.textContent = `Sixteen`; 
        } else if (ss == 17) {
            second.innerHTML = `Seventeen`; 
        } else if (ss == 18) {
            second.innerHTML = `Eighteen`; 
        } else if (ss == 19) {
            second.textContent = `Nineteen`; 
        } else if (ss == 20) {
            second.innerHTML = `Twenty`; 
        } else if (ss == 21) {
            second.innerHTML = `Twenty One`; 
        } else if (ss == 22) {
            second.textContent = `Twenty Two`; 
        } else if (ss == 23) {
            second.innerHTML = `Twenty Three`; 
        } else if (ss == 24) {
            second.innerHTML = `Twenty Four`; 
        } else if (ss == 25) {
            second.innerHTML = `Twenty Five`;
        } else if (ss == 26) {
            second.innerHTML = `Twenty Six`; 
        } else if (ss == 27) {
            second.innerHTML = `Twenty Seven`; 
        } else if (ss == 28) {
            second.textContent = `Twenty Eight`; 
        } else if (ss == 29) {
            second.innerHTML = `Twenty Nine`; 
        } else if (ss == 30) {
            second.innerHTML = `Thirty`; 
        } else if (ss == 31) {
            second.innerHTML = `Thirty One`; 
        } else if (ss == 32) {
            second.textContent = `Thirty Two`; 
        } else if (ss == 33) {
            second.innerHTML = `Thirty Three`; 
        } else if (ss == 34) {
            second.innerHTML = `Thirty Four`; 
        } else if (ss == 35) {
            second.innerHTML = `Thirty Five`;
        } else if (ss == 36) {
            second.innerHTML = `Thirty Six`; 
        } else if (ss == 37) {
            second.innerHTML = `Thirty Seven`; 
        } else if (ss == 38) {
            second.textContent = `Thirty Eight`; 
        } else if (ss == 39) {
            second.innerHTML = `Thirty Nine`; 
        } else if (ss == 40) {
            second.innerHTML = `Forty`; 
        } else if (ss == 41) {
            second.innerHTML = `Forty One`; 
        } else if (ss == 42) {
            second.textContent = `Forty Two`; 
        } else if (ss == 43) {
            second.innerHTML = `Forty Three`; 
        } else if (ss == 44) {
            second.innerHTML = `Forty Four`; 
        } else if (ss == 45) {
            second.innerHTML = `Forty Five`;
        } else if (ss == 46) {
            second.innerHTML = `Forty Six`; 
        } else if (ss == 47) {
            second.innerHTML = `Forty Seven`; 
        } else if (ss == 48) {
            second.textContent = `Forty Eight`; 
        } else if (ss == 49) {
            second.innerHTML = `Forty Nine`; 
        } else if (ss == 50) {
            second.innerHTML = `Fifty`; 
        } else if (ss == 51) {
            second.innerHTML = `Fifty One`; 
        } else if (ss == 52) {
            second.textContent = `Fifty Two`; 
        } else if (ss == 53) {
            second.innerHTML = `Fifty Three`; 
        } else if (ss == 54) {
            second.innerHTML = `Fifty Four`; 
        } else if (ss == 55) {
            second.innerHTML = `Fifty Five`;
        } else if (ss == 56) {
            second.innerHTML = `Fifty Six`; 
        } else if (ss == 57) {
            second.innerHTML = `Fifty Seven`; 
        } else if (ss == 58) {
            second.textContent = `Fifty Eight`; 
        } else if (ss == 59) {
            second.innerHTML = `Fifty Nine`; 
        } else {
            second.innerHTML = `Oh Oh`;
        };
    };

    if (hh == 00) {
        hour.innerHTML = `Midnight:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 01) {
        hour.innerHTML = `Oh One:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 02) {
        hour.innerHTML = `Oh Two:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 03) {
        hour.innerHTML = `Oh Three:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 04) {
        hour.innerHTML = `Oh Four:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 05) {
        hour.innerHTML = `Oh Five:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 06) {
        hour.innerHTML = `Oh Six:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 07) {
        hour.innerHTML = `Oh Seven:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 08) {
        hour.innerHTML = `Oh Eight:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 09) {
        hour.innerHTML = `Oh Nine:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 10) {
        hour.innerHTML = `Ten:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 11) {
        hour.innerHTML = `Eleven:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 12) {
        hour.innerHTML = `Twelve:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 13) {
        hour.innerHTML = `Thirteen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 14) {
        hour.innerHTML = `Fourteen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 15) {
        hour.innerHTML = `Fifteen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 16) {
        hour.innerHTML = `Sixteen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 17) {
        hour.innerHTML = `Seventeen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 18) {
        hour.innerHTML = `Eighteen:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 19) {
        hour.innerHTML = `Nineten:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 20) {
        hour.innerHTML = `Twenty:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 21) {
        hour.innerHTML = `Twenty One:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 22) {
        hour.innerHTML = `Twenty Two:`; 
        currentMinute();
        currentSecond();
    } else if (hh == 23) {
        hour.innerHTML = `Twenty Three:`; 
        currentMinute();
        currentSecond();
    } else {
        hour.innerHTML = `:`; 
        currentMinute();
        currentSecond();
    };


    theIfCode = `<pre>function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = <span class=red>${hh}:</span> <span class=green>${mm}:</span> <span class=string>${ss}</span>;
    
    var t = setTimeout(function(){ currentTime() }, 1000); 

    function currentMinute() {
        if (mm == 01) {
            minute.textContent = "Oh One:"; 
        } else if (mm == 02) {
            minute.innerHTML = "Oh Two:"; 
        } else if (mm == 03) {
            minute.innerHTML = "Oh Three:"; 
        } else if (mm == 04) {
            minute.textContent = "Oh Four:"; 
        } else if (mm == 05) {
            minute.innerHTML = "Oh Five:"; 
        } else if (mm == 06) {
            minute.innerHTML = "Oh Six:"; 
        } else if (mm == 07) {
            minute.textContent = "Oh Seven:"; 
        } else if (mm == 08) {
            minute.innerHTML = "Oh Eight:"; 
        } else if (mm == 09) {
            minute.innerHTML = "Oh Nine:"; 
        } else if (mm == 10) {
            minute.textContent = "Ten:"; 
        } else if (mm == 11) {
            minute.innerHTML = "Eleven:"; 
        } else if (mm == 12) {
            minute.innerHTML = "Twelve:"; 
        } else if (mm == 13) {
            minute.textContent = "Thirteen:"; 
        } else if (mm == 14) {
            minute.innerHTML = "Fourteen:"; 
        } else if (mm == 15) {
            minute.innerHTML = "Fifteen:"; 
        } else if (mm == 16) {
            minute.textContent = "Sixteen:"; 
        } else if (mm == 17) {
            minute.innerHTML = "Seventeen:"; 
        } else if (mm == 18) {
            minute.innerHTML = "Eighteen:"; 
        } else if (mm == 19) {
            minute.textContent = "Nineteen:"; 
        } else if (mm == 20) {
            minute.innerHTML = "Twenty:"; 
        } else if (mm == 21) {
            minute.innerHTML = "Twenty One:"; 
        } else if (mm == 22) {
            minute.textContent = "Twenty Two:"; 
        } else if (mm == 23) {
            minute.innerHTML = "Twenty Three:"; 
        } else if (mm == 24) {
            minute.innerHTML = "Twenty Four:"; 
        } else if (mm == 25) {
            minute.innerHTML = "Twenty Five:";
        } else if (mm == 26) {
            minute.innerHTML = "Twenty Six:"; 
        } else if (mm == 27) {
            minute.innerHTML = "Twenty Seven:"; 
        } else if (mm == 28) {
            minute.textContent = "Twenty Eight:"; 
        } else if (mm == 29) {
            minute.innerHTML = "Twenty Nine:"; 
        } else if (mm == 30) {
            minute.innerHTML = "Thirty:"; 
        } else if (mm == 31) {
            minute.innerHTML = "Thirty One:"; 
        } else if (mm == 32) {
            minute.textContent = "Thirty Two:"; 
        } else if (mm == 33) {
            minute.innerHTML = "Thirty Three:"; 
        } else if (mm == 34) {
            minute.innerHTML = "Thirty Four:"; 
        } else if (mm == 35) {
            minute.innerHTML = "Thirty Five:";
        } else if (mm == 36) {
            minute.innerHTML = "Thirty Six:"; 
        } else if (mm == 37) {
            minute.innerHTML = "Thirty Seven:"; 
        } else if (mm == 38) {
            minute.textContent = "Thirty Eight:"; 
        } else if (mm == 39) {
            minute.innerHTML = "Thirty Nine:"; 
        } else if (mm == 40) {
            minute.innerHTML = "Forty:"; 
        } else if (mm == 41) {
            minute.innerHTML = "Forty One:"; 
        } else if (mm == 42) {
            minute.textContent = "Forty Two:"; 
        } else if (mm == 43) {
            minute.innerHTML = "Forty Three:"; 
        } else if (mm == 44) {
            minute.innerHTML = "Forty Four:"; 
        } else if (mm == 45) {
            minute.innerHTML = "Forty Five:";
        } else if (mm == 46) {
            minute.innerHTML = "Forty Six:"; 
        } else if (mm == 47) {
            minute.innerHTML = "Forty Seven:"; 
        } else if (mm == 48) {
            minute.textContent = "Forty Eight:"; 
        } else if (mm == 49) {
            minute.innerHTML = "Forty Nine:"; 
        } else if (mm == 50) {
            minute.innerHTML = "Fifty:"; 
        } else if (mm == 51) {
            minute.innerHTML = "Fifty One:"; 
        } else if (mm == 52) {
            minute.textContent = "Fifty Two:"; 
        } else if (mm == 53) {
            minute.innerHTML = "Fifty Three:"; 
        } else if (mm == 54) {
            minute.innerHTML = "Fifty Four:"; 
        } else if (mm == 55) {
            minute.innerHTML = "Fifty Five:";
        } else if (mm == 56) {
            minute.innerHTML = "Fifty Six:"; 
        } else if (mm == 57) {
            minute.innerHTML = "Fifty Seven:"; 
        } else if (mm == 58) {
            minute.textContent = "Fifty Eight:"; 
        } else if (mm == 59) {
            minute.innerHTML = "Fifty Nine:"; 
        } else {
            minute.innerHTML = "Hundred:";
        };
    };

    function currentSecond() {
        if (ss == 01) {
            second.textContent = "Oh One"; 
        } else if (ss == 02) {
            second.innerHTML = "Oh Two"; 
        } else if (ss == 03) {
            second.innerHTML = "Oh Three"; 
        } else if (ss == 04) {
            second.textContent = "Oh Four"; 
        } else if (ss == 05) {
            second.innerHTML = "Oh Five"; 
        } else if (ss == 06) {
            second.innerHTML = "Oh Six"; 
        } else if (ss == 07) {
            second.textContent = "Oh Seven"; 
        } else if (ss == 08) {
            second.innerHTML = "Oh Eight"; 
        } else if (ss == 09) {
            second.innerHTML = "Oh Nine"; 
        } else if (ss == 10) {
            second.textContent = "Ten"; 
        } else if (ss == 11) {
            second.innerHTML = "Eleven"; 
        } else if (ss == 12) {
            second.innerHTML = "Twelve"; 
        } else if (ss == 13) {
            second.textContent = "Thirteen"; 
        } else if (ss == 14) {
            second.innerHTML = "Fourteen"; 
        } else if (ss == 15) {
            second.innerHTML = "Fifteen"; 
        } else if (ss == 16) {
            second.textContent = "Sixteen"; 
        } else if (ss == 17) {
            second.innerHTML = "Seventeen"; 
        } else if (ss == 18) {
            second.innerHTML = "Eighteen"; 
        } else if (ss == 19) {
            second.textContent = "Nineteen"; 
        } else if (ss == 20) {
            second.innerHTML = "Twenty"; 
        } else if (ss == 21) {
            second.innerHTML = "Twenty One"; 
        } else if (ss == 22) {
            second.textContent = "Twenty Two"; 
        } else if (ss == 23) {
            second.innerHTML = "Twenty Three"; 
        } else if (ss == 24) {
            second.innerHTML = "Twenty Four"; 
        } else if (ss == 25) {
            second.innerHTML = "Twenty Five";
        } else if (ss == 26) {
            second.innerHTML = "Twenty Six"; 
        } else if (ss == 27) {
            second.innerHTML = "Twenty Seven"; 
        } else if (ss == 28) {
            second.textContent = "Twenty Eight"; 
        } else if (ss == 29) {
            second.innerHTML = "Twenty Nine"; 
        } else if (ss == 30) {
            second.innerHTML = "Thirty"; 
        } else if (ss == 31) {
            second.innerHTML = "Thirty One"; 
        } else if (ss == 32) {
            second.textContent = "Thirty Two"; 
        } else if (ss == 33) {
            second.innerHTML = "Thirty Three"; 
        } else if (ss == 34) {
            second.innerHTML = "Thirty Four"; 
        } else if (ss == 35) {
            second.innerHTML = "Thirty Five";
        } else if (ss == 36) {
            second.innerHTML = "Thirty Six"; 
        } else if (ss == 37) {
            second.innerHTML = "Thirty Seven"; 
        } else if (ss == 38) {
            second.textContent = "Thirty Eight"; 
        } else if (ss == 39) {
            second.innerHTML = "Thirty Nine"; 
        } else if (ss == 40) {
            second.innerHTML = "Forty"; 
        } else if (ss == 41) {
            second.innerHTML = "Forty One"; 
        } else if (ss == 42) {
            second.textContent = "Forty Two"; 
        } else if (ss == 43) {
            second.innerHTML = "Forty Three"; 
        } else if (ss == 44) {
            second.innerHTML = "Forty Four"; 
        } else if (ss == 45) {
            second.innerHTML = "Forty Five";
        } else if (ss == 46) {
            second.innerHTML = "Forty Six"; 
        } else if (ss == 47) {
            second.innerHTML = "Forty Seven"; 
        } else if (ss == 48) {
            second.textContent = "Forty Eight"; 
        } else if (ss == 49) {
            second.innerHTML = "Forty Nine"; 
        } else if (ss == 50) {
            second.innerHTML = "Fifty"; 
        } else if (ss == 51) {
            second.innerHTML = "Fifty One"; 
        } else if (ss == 52) {
            second.textContent = "Fifty Two"; 
        } else if (ss == 53) {
            second.innerHTML = "Fifty Three"; 
        } else if (ss == 54) {
            second.innerHTML = "Fifty Four"; 
        } else if (ss == 55) {
            second.innerHTML = "Fifty Five";
        } else if (ss == 56) {
            second.innerHTML = "Fifty Six"; 
        } else if (ss == 57) {
            second.innerHTML = "Fifty Seven"; 
        } else if (ss == 58) {
            second.textContent = "Fifty Eight"; 
        } else if (ss == 59) {
            second.innerHTML = "Fifty Nine"; 
        } else {
            second.innerHTML = "Oh Oh";
        };
    };

    if (hh == 00) {
        hour.innerHTML = "Midnight:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 01) {
        hour.innerHTML = "Oh One:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 02) {
        hour.innerHTML = "Oh Two:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 03) {
        hour.innerHTML = "Oh Three:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 04) {
        hour.innerHTML = "Oh Four:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 05) {
        hour.innerHTML = "Oh Five:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 06) {
        hour.innerHTML = "Oh Six:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 07) {
        hour.innerHTML = "Oh Seven:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 08) {
        hour.innerHTML = "Oh Eight:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 09) {
        hour.innerHTML = "Oh Nine:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 10) {
        hour.innerHTML = "Ten:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 11) {
        hour.innerHTML = "Eleven:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 12) {
        hour.innerHTML = "Twelve:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 13) {
        hour.innerHTML = "Thirteen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 14) {
        hour.innerHTML = "Fourteen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 15) {
        hour.innerHTML = "Fifteen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 16) {
        hour.innerHTML = "Sixteen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 17) {
        hour.innerHTML = "Seventeen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 18) {
        hour.innerHTML = "Eighteen:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 19) {
        hour.innerHTML = "Nineten:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 20) {
        hour.innerHTML = "Twenty:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 21) {
        hour.innerHTML = "Twenty One:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 22) {
        hour.innerHTML = "Twenty Two:"; 
        currentMinute();
        currentSecond();
    } else if (hh == 23) {
        hour.innerHTML = "Twenty Three:"; 
        currentMinute();
        currentSecond();
    } else {
        hour.innerHTML = ":"; 
        currentMinute();
        currentSecond();
    };
}</pre>`;

    if (document.getElementById("if-else-clock-code").innerHTML) {
        document.getElementById("if-else-clock-code").innerHTML = theIfCode;
    } else if (document.getElementById("if-else-clock-code").innerHTML == "") {
        document.getElementById("if-else-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-if-else-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-if-else-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-if-else-clock-code-button").onclick = function() {
            document.getElementById("if-else-clock-code").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("if-else-clock-code").innerHTML = theIfCode;
            document.getElementById("show-if-else-clock-code").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-if-else-clock-code-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-if-else-clock-code").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-if-else-clock-code-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("if-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-if-else-clock-code-button").onclick = function() {
        document.getElementById("hide-if-else-clock-code").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-if-else-clock-code-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-if-else-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-if-else-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("if-else-clock-code").innerHTML = "";

        document.getElementById("if-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const ternaryHour = document.getElementById("ternary-hour");
    const ternaryMinute = document.getElementById("ternary-minute");
    const ternarySecond = document.getElementById("ternary-second");

    function currentTernaryHour() {
        if (hh == 00) {
            ternaryHour.textContent = `Midnight:`; 
        } else if (hh == 01) {
            ternaryHour.textContent = `Oh One:`; 
        } else if (hh == 02) {
            ternaryHour.innerHTML = `Oh Two:`; 
        } else if (hh == 03) {
            ternaryHour.innerHTML = `Oh Three:`; 
        } else if (hh == 04) {
            ternaryHour.textContent = `Oh Four:`; 
        } else if (hh == 05) {
            ternaryHour.innerHTML = `Oh Five:`; 
        } else if (hh == 06) {
            ternaryHour.innerHTML = `Oh Six:`; 
        } else if (hh == 07) {
            ternaryHour.textContent = `Oh Seven:`; 
        } else if (hh == 08) {
            ternaryHour.innerHTML = `Oh Eight:`; 
        } else if (hh == 09) {
            ternaryHour.innerHTML = `Oh Nine:`; 
        } else if (hh == 10) {
            ternaryHour.textContent = `Ten:`; 
        } else if (hh == 11) {
            ternaryHour.innerHTML = `Eleven:`; 
        } else if (hh == 12) {
            ternaryHour.innerHTML = `Twelve:`; 
        } else if (hh == 13) {
            ternaryHour.textContent = `Thirteen:`; 
        } else if (hh == 14) {
            ternaryHour.innerHTML = `Fourteen:`; 
        } else if (hh == 15) {
            ternaryHour.innerHTML = `Fifteen:`; 
        } else if (hh == 16) {
            ternaryHour.textContent = `Sixteen:`; 
        } else if (hh == 17) {
            ternaryHour.innerHTML = `Seventeen:`; 
        } else if (hh == 18) {
            ternaryHour.innerHTML = `Eighteen:`; 
        } else if (hh == 19) {
            ternaryHour.textContent = `Nineteen:`; 
        } else if (hh == 20) {
            ternaryHour.innerHTML = `Twenty:`; 
        } else if (hh == 21) {
            ternaryHour.innerHTML = `Twenty One:`; 
        } else if (hh == 22) {
            ternaryHour.textContent = `Twenty Two:`; 
        } else if (hh == 23) {
            ternaryHour.innerHTML = `Twenty Three:`; 
        } else {
            ternaryHour.innerHTML = ` :`;
        };
    };

    function currentTernaryMinute() {
        if (mm == 01) {
            ternaryMinute.textContent = `Oh One:`; 
        } else if (mm == 02) {
            ternaryMinute.innerHTML = `Oh Two:`; 
        } else if (mm == 03) {
            ternaryMinute.innerHTML = `Oh Three:`; 
        } else if (mm == 04) {
            ternaryMinute.textContent = `Oh Four:`; 
        } else if (mm == 05) {
            ternaryMinute.innerHTML = `Oh Five:`; 
        } else if (mm == 06) {
            ternaryMinute.innerHTML = `Oh Six:`; 
        } else if (mm == 07) {
            ternaryMinute.textContent = `Oh Seven:`; 
        } else if (mm == 08) {
            ternaryMinute.innerHTML = `Oh Eight:`; 
        } else if (mm == 09) {
            ternaryMinute.innerHTML = `Oh Nine:`; 
        } else if (mm == 10) {
            ternaryMinute.textContent = `Ten:`; 
        } else if (mm == 11) {
            ternaryMinute.innerHTML = `Eleven:`; 
        } else if (mm == 12) {
            ternaryMinute.innerHTML = `Twelve:`; 
        } else if (mm == 13) {
            ternaryMinute.textContent = `Thirteen:`; 
        } else if (mm == 14) {
            ternaryMinute.innerHTML = `Fourteen:`; 
        } else if (mm == 15) {
            ternaryMinute.innerHTML = `Fifteen:`; 
        } else if (mm == 16) {
            ternaryMinute.textContent = `Sixteen:`; 
        } else if (mm == 17) {
            ternaryMinute.innerHTML = `Seventeen:`; 
        } else if (mm == 18) {
            ternaryMinute.innerHTML = `Eighteen:`; 
        } else if (mm == 19) {
            ternaryMinute.textContent = `Nineteen:`; 
        } else if (mm == 20) {
            ternaryMinute.innerHTML = `Twenty:`; 
        } else if (mm == 21) {
            ternaryMinute.innerHTML = `Twenty One:`; 
        } else if (mm == 22) {
            ternaryMinute.textContent = `Twenty Two:`; 
        } else if (mm == 23) {
            ternaryMinute.innerHTML = `Twenty Three:`; 
        } else if (mm == 24) {
            ternaryMinute.innerHTML = `Twenty Four:`; 
        } else if (mm == 25) {
            ternaryMinute.innerHTML = `Twenty Five:`;
        } else if (mm == 26) {
            ternaryMinute.innerHTML = `Twenty Six:`; 
        } else if (mm == 27) {
            ternaryMinute.innerHTML = `Twenty Seven:`; 
        } else if (mm == 28) {
            ternaryMinute.textContent = `Twenty Eight:`; 
        } else if (mm == 29) {
            ternaryMinute.innerHTML = `Twenty Nine:`; 
        } else if (mm == 30) {
            ternaryMinute.innerHTML = `Thirty:`; 
        } else if (mm == 31) {
            ternaryMinute.innerHTML = `Thirty One:`; 
        } else if (mm == 32) {
            ternaryMinute.textContent = `Thirty Two:`; 
        } else if (mm == 33) {
            ternaryMinute.innerHTML = `Thirty Three:`; 
        } else if (mm == 34) {
            ternaryMinute.innerHTML = `Thirty Four:`; 
        } else if (mm == 35) {
            ternaryMinute.innerHTML = `Thirty Five:`;
        } else if (mm == 36) {
            ternaryMinute.innerHTML = `Thirty Six:`; 
        } else if (mm == 37) {
            ternaryMinute.innerHTML = `Thirty Seven:`; 
        } else if (mm == 38) {
            ternaryMinute.textContent = `Thirty Eight:`; 
        } else if (mm == 39) {
            ternaryMinute.innerHTML = `Thirty Nine:`; 
        } else if (mm == 40) {
            ternaryMinute.innerHTML = `Forty:`; 
        } else if (mm == 41) {
            ternaryMinute.innerHTML = `Forty One:`; 
        } else if (mm == 42) {
            ternaryMinute.textContent = `Forty Two:`; 
        } else if (mm == 43) {
            ternaryMinute.innerHTML = `Forty Three:`; 
        } else if (mm == 44) {
            ternaryMinute.innerHTML = `Forty Four:`; 
        } else if (mm == 45) {
            ternaryMinute.innerHTML = `Forty Five:`;
        } else if (mm == 46) {
            ternaryMinute.innerHTML = `Forty Six:`; 
        } else if (mm == 47) {
            ternaryMinute.innerHTML = `Forty Seven:`; 
        } else if (mm == 48) {
            ternaryMinute.textContent = `Forty Eight:`; 
        } else if (mm == 49) {
            ternaryMinute.innerHTML = `Forty Nine:`; 
        } else if (mm == 50) {
            ternaryMinute.innerHTML = `Fifty:`; 
        } else if (mm == 51) {
            ternaryMinute.innerHTML = `Fifty One:`; 
        } else if (mm == 52) {
            ternaryMinute.textContent = `Fifty Two:`; 
        } else if (mm == 53) {
            ternaryMinute.innerHTML = `Fifty Three:`; 
        } else if (mm == 54) {
            ternaryMinute.innerHTML = `Fifty Four:`; 
        } else if (mm == 55) {
            ternaryMinute.innerHTML = `Fifty Five:`;
        } else if (mm == 56) {
            ternaryMinute.innerHTML = `Fifty Six:`; 
        } else if (mm == 57) {
            ternaryMinute.innerHTML = `Fifty Seven:`; 
        } else if (mm == 58) {
            ternaryMinute.textContent = `Fifty Eight:`; 
        } else if (mm == 59) {
            ternaryMinute.innerHTML = `Fifty Nine:`; 
        } else {
            ternaryMinute.innerHTML = `Hundred:`;
        };
    };

    function currentTernarySecond() {
        if (ss == 01) {
            ternarySecond.textContent = `Oh One`; 
        } else if (ss == 02) {
            ternarySecond.innerHTML = `Oh Two`; 
        } else if (ss == 03) {
            ternarySecond.innerHTML = `Oh Three`; 
        } else if (ss == 04) {
            ternarySecond.textContent = `Oh Four`; 
        } else if (ss == 05) {
            ternarySecond.innerHTML = `Oh Five`; 
        } else if (ss == 06) {
            ternarySecond.innerHTML = `Oh Six`; 
        } else if (ss == 07) {
            ternarySecond.textContent = `Oh Seven`; 
        } else if (ss == 08) {
            ternarySecond.innerHTML = `Oh Eight`; 
        } else if (ss == 09) {
            ternarySecond.innerHTML = `Oh Nine`; 
        } else if (ss == 10) {
            ternarySecond.textContent = `Ten`; 
        } else if (ss == 11) {
            ternarySecond.innerHTML = `Eleven`; 
        } else if (ss == 12) {
            ternarySecond.innerHTML = `Twelve`; 
        } else if (ss == 13) {
            ternarySecond.textContent = `Thirteen`; 
        } else if (ss == 14) {
            ternarySecond.innerHTML = `Fourteen`; 
        } else if (ss == 15) {
            ternarySecond.innerHTML = `Fifteen`; 
        } else if (ss == 16) {
            ternarySecond.textContent = `Sixteen`; 
        } else if (ss == 17) {
            ternarySecond.innerHTML = `Seventeen`; 
        } else if (ss == 18) {
            ternarySecond.innerHTML = `Eighteen`; 
        } else if (ss == 19) {
            ternarySecond.textContent = `Nineteen`; 
        } else if (ss == 20) {
            ternarySecond.innerHTML = `Twenty`; 
        } else if (ss == 21) {
            ternarySecond.innerHTML = `Twenty One`; 
        } else if (ss == 22) {
            ternarySecond.textContent = `Twenty Two`; 
        } else if (ss == 23) {
            ternarySecond.innerHTML = `Twenty Three`; 
        } else if (ss == 24) {
            ternarySecond.innerHTML = `Twenty Four`; 
        } else if (ss == 25) {
            ternarySecond.innerHTML = `Twenty Five`;
        } else if (ss == 26) {
            ternarySecond.innerHTML = `Twenty Six`; 
        } else if (ss == 27) {
            ternarySecond.innerHTML = `Twenty Seven`; 
        } else if (ss == 28) {
            ternarySecond.textContent = `Twenty Eight`; 
        } else if (ss == 29) {
            ternarySecond.innerHTML = `Twenty Nine`; 
        } else if (ss == 30) {
            ternarySecond.innerHTML = `Thirty`; 
        } else if (ss == 31) {
            ternarySecond.innerHTML = `Thirty One`; 
        } else if (ss == 32) {
            ternarySecond.textContent = `Thirty Two`; 
        } else if (ss == 33) {
            ternarySecond.innerHTML = `Thirty Three`; 
        } else if (ss == 34) {
            ternarySecond.innerHTML = `Thirty Four`; 
        } else if (ss == 35) {
            ternarySecond.innerHTML = `Thirty Five`;
        } else if (ss == 36) {
            ternarySecond.innerHTML = `Thirty Six`; 
        } else if (ss == 37) {
            ternarySecond.innerHTML = `Thirty Seven`; 
        } else if (ss == 38) {
            ternarySecond.textContent = `Thirty Eight`; 
        } else if (ss == 39) {
            ternarySecond.innerHTML = `Thirty Nine`; 
        } else if (ss == 40) {
            ternarySecond.innerHTML = `Forty`; 
        } else if (ss == 41) {
            ternarySecond.innerHTML = `Forty One`; 
        } else if (ss == 42) {
            ternarySecond.textContent = `Forty Two`; 
        } else if (ss == 43) {
            ternarySecond.innerHTML = `Forty Three`; 
        } else if (ss == 44) {
            ternarySecond.innerHTML = `Forty Four`; 
        } else if (ss == 45) {
            ternarySecond.innerHTML = `Forty Five`;
        } else if (ss == 46) {
            ternarySecond.innerHTML = `Forty Six`; 
        } else if (ss == 47) {
            ternarySecond.innerHTML = `Forty Seven`; 
        } else if (ss == 48) {
            ternarySecond.textContent = `Forty Eight`; 
        } else if (ss == 49) {
            ternarySecond.innerHTML = `Forty Nine`; 
        } else if (ss == 50) {
            ternarySecond.innerHTML = `Fifty`; 
        } else if (ss == 51) {
            ternarySecond.innerHTML = `Fifty One`; 
        } else if (ss == 52) {
            ternarySecond.textContent = `Fifty Two`; 
        } else if (ss == 53) {
            ternarySecond.innerHTML = `Fifty Three`; 
        } else if (ss == 54) {
            ternarySecond.innerHTML = `Fifty Four`; 
        } else if (ss == 55) {
            ternarySecond.innerHTML = `Fifty Five`;
        } else if (ss == 56) {
            ternarySecond.innerHTML = `Fifty Six`; 
        } else if (ss == 57) {
            ternarySecond.innerHTML = `Fifty Seven`; 
        } else if (ss == 58) {
            ternarySecond.textContent = `Fifty Eight`; 
        } else if (ss == 59) {
            ternarySecond.innerHTML = `Fifty Nine`; 
        } else {
            ternarySecond.innerHTML = `Oh Oh`;
        };
    };

    const ternaryTime = document.getElementById("ternary-time");

    (hh < 24) ? (currentTernaryHour(), currentTernaryMinute(), currentTernarySecond()) : ternaryTime.innerHTML = `<span class="result">The clock has stopped!</span>`;

    theTernaryCode = `<pre>function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    const ternaryHour = document.getElementById("ternary-hour");
    const ternaryMinute = document.getElementById("ternary-minute");
    const ternarySecond = document.getElementById("ternary-second");
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = <span class=red>${hh}:</span> <span class=green>${mm}:</span> <span class=string>${ss}</span>;
    
    var t = setTimeout(function(){ currentTime() }, 1000);

    function currentTernaryHour() {
        if (hh == 00) {
            ternaryHour.textContent = "Midnight:"; 
        } else if (hh == 01) {
            ternaryHour.textContent = "Oh One:"; 
        } else if (hh == 02) {
            ternaryHour.innerHTML = "Oh Two:"; 
        } else if (hh == 03) {
            ternaryHour.innerHTML = "Oh Three:"; 
        } else if (hh == 04) {
            ternaryHour.textContent = "Oh Four:"; 
        } else if (hh == 05) {
            ternaryHour.innerHTML = "Oh Five:"; 
        } else if (hh == 06) {
            ternaryHour.innerHTML = "Oh Six:"; 
        } else if (hh == 07) {
            ternaryHour.textContent = "Oh Seven:"; 
        } else if (hh == 08) {
            ternaryHour.innerHTML = "Oh Eight:"; 
        } else if (hh == 09) {
            ternaryHour.innerHTML = "Oh Nine:"; 
        } else if (hh == 10) {
            ternaryHour.textContent = "Ten:"; 
        } else if (hh == 11) {
            ternaryHour.innerHTML = "Eleven:"; 
        } else if (hh == 12) {
            ternaryHour.innerHTML = "Twelve:"; 
        } else if (hh == 13) {
            ternaryHour.textContent = "Thirteen:"; 
        } else if (hh == 14) {
            ternaryHour.innerHTML = "Fourteen:"; 
        } else if (hh == 15) {
            ternaryHour.innerHTML = "Fifteen:"; 
        } else if (hh == 16) {
            ternaryHour.textContent = "Sixteen:"; 
        } else if (hh == 17) {
            ternaryHour.innerHTML = "Seventeen:"; 
        } else if (hh == 18) {
            ternaryHour.innerHTML = "Eighteen:"; 
        } else if (hh == 19) {
            ternaryHour.textContent = "Nineteen:"; 
        } else if (hh == 20) {
            ternaryHour.innerHTML = "Twenty:"; 
        } else if (hh == 21) {
            ternaryHour.innerHTML = "Twenty One:"; 
        } else if (hh == 22) {
            ternaryHour.textContent = "Twenty Two:"; 
        } else if (hh == 23) {
            ternaryHour.innerHTML = "Twenty Three:"; 
        } else {
            ternaryHour.innerHTML = " :";
        };
    };

    function currentTernaryMinute() {
        if (mm == 01) {
            ternaryMinute.textContent = "Oh One:"; 
        } else if (mm == 02) {
            ternaryMinute.innerHTML = "Oh Two:"; 
        } else if (mm == 03) {
            ternaryMinute.innerHTML = "Oh Three:"; 
        } else if (mm == 04) {
            ternaryMinute.textContent = "Oh Four:"; 
        } else if (mm == 05) {
            ternaryMinute.innerHTML = "Oh Five:"; 
        } else if (mm == 06) {
            ternaryMinute.innerHTML = "Oh Six:"; 
        } else if (mm == 07) {
            ternaryMinute.textContent = "Oh Seven:"; 
        } else if (mm == 08) {
            ternaryMinute.innerHTML = "Oh Eight:"; 
        } else if (mm == 09) {
            ternaryMinute.innerHTML = "Oh Nine:"; 
        } else if (mm == 10) {
            ternaryMinute.textContent = "Ten:"; 
        } else if (mm == 11) {
            ternaryMinute.innerHTML = "Eleven:"; 
        } else if (mm == 12) {
            ternaryMinute.innerHTML = "Twelve:"; 
        } else if (mm == 13) {
            ternaryMinute.textContent = "Thirteen:"; 
        } else if (mm == 14) {
            ternaryMinute.innerHTML = "Fourteen:"; 
        } else if (mm == 15) {
            ternaryMinute.innerHTML = "Fifteen:"; 
        } else if (mm == 16) {
            ternaryMinute.textContent = "Sixteen:"; 
        } else if (mm == 17) {
            ternaryMinute.innerHTML = "Seventeen:"; 
        } else if (mm == 18) {
            ternaryMinute.innerHTML = "Eighteen:"; 
        } else if (mm == 19) {
            ternaryMinute.textContent = "Nineteen:"; 
        } else if (mm == 20) {
            ternaryMinute.innerHTML = "Twenty:"; 
        } else if (mm == 21) {
            ternaryMinute.innerHTML = "Twenty One:"; 
        } else if (mm == 22) {
            ternaryMinute.textContent = "Twenty Two:"; 
        } else if (mm == 23) {
            ternaryMinute.innerHTML = "Twenty Three:"; 
        } else if (mm == 24) {
            ternaryMinute.innerHTML = "Twenty Four:"; 
        } else if (mm == 25) {
            ternaryMinute.innerHTML = "Twenty Five:";
        } else if (mm == 26) {
            ternaryMinute.innerHTML = "Twenty Six:"; 
        } else if (mm == 27) {
            ternaryMinute.innerHTML = "Twenty Seven:"; 
        } else if (mm == 28) {
            ternaryMinute.textContent = "Twenty Eight:"; 
        } else if (mm == 29) {
            ternaryMinute.innerHTML = "Twenty Nine:"; 
        } else if (mm == 30) {
            ternaryMinute.innerHTML = "Thirty:"; 
        } else if (mm == 31) {
            ternaryMinute.innerHTML = "Thirty One:"; 
        } else if (mm == 32) {
            ternaryMinute.textContent = "Thirty Two:"; 
        } else if (mm == 33) {
            ternaryMinute.innerHTML = "Thirty Three:"; 
        } else if (mm == 34) {
            ternaryMinute.innerHTML = "Thirty Four:"; 
        } else if (mm == 35) {
            ternaryMinute.innerHTML = "Thirty Five:";
        } else if (mm == 36) {
            ternaryMinute.innerHTML = "Thirty Six:"; 
        } else if (mm == 37) {
            ternaryMinute.innerHTML = "Thirty Seven:"; 
        } else if (mm == 38) {
            ternaryMinute.textContent = "Thirty Eight:"; 
        } else if (mm == 39) {
            ternaryMinute.innerHTML = "Thirty Nine:"; 
        } else if (mm == 40) {
            ternaryMinute.innerHTML = "Forty:"; 
        } else if (mm == 41) {
            ternaryMinute.innerHTML = "Forty One:"; 
        } else if (mm == 42) {
            ternaryMinute.textContent = "Forty Two:"; 
        } else if (mm == 43) {
            ternaryMinute.innerHTML = "Forty Three:"; 
        } else if (mm == 44) {
            ternaryMinute.innerHTML = "Forty Four:"; 
        } else if (mm == 45) {
            ternaryMinute.innerHTML = "Forty Five:";
        } else if (mm == 46) {
            ternaryMinute.innerHTML = "Forty Six:"; 
        } else if (mm == 47) {
            ternaryMinute.innerHTML = "Forty Seven:"; 
        } else if (mm == 48) {
            ternaryMinute.textContent = "Forty Eight:"; 
        } else if (mm == 49) {
            ternaryMinute.innerHTML = "Forty Nine:"; 
        } else if (mm == 50) {
            ternaryMinute.innerHTML = "Fifty:"; 
        } else if (mm == 51) {
            ternaryMinute.innerHTML = "Fifty One:"; 
        } else if (mm == 52) {
            ternaryMinute.textContent = "Fifty Two:"; 
        } else if (mm == 53) {
            ternaryMinute.innerHTML = "Fifty Three:"; 
        } else if (mm == 54) {
            ternaryMinute.innerHTML = "Fifty Four:"; 
        } else if (mm == 55) {
            ternaryMinute.innerHTML = "Fifty Five:";
        } else if (mm == 56) {
            ternaryMinute.innerHTML = "Fifty Six:"; 
        } else if (mm == 57) {
            ternaryMinute.innerHTML = "Fifty Seven:"; 
        } else if (mm == 58) {
            ternaryMinute.textContent = "Fifty Eight:"; 
        } else if (mm == 59) {
            ternaryMinute.innerHTML = "Fifty Nine:"; 
        } else {
            ternaryMinute.innerHTML = "Hundred:";
        };
    };

    function currentTernarySecond() {
        if (ss == 01) {
            ternarySecond.textContent = "Oh One"; 
        } else if (ss == 02) {
            ternarySecond.innerHTML = "Oh Two"; 
        } else if (ss == 03) {
            ternarySecond.innerHTML = "Oh Three"; 
        } else if (ss == 04) {
            ternarySecond.textContent = "Oh Four"; 
        } else if (ss == 05) {
            ternarySecond.innerHTML = "Oh Five"; 
        } else if (ss == 06) {
            ternarySecond.innerHTML = "Oh Six"; 
        } else if (ss == 07) {
            ternarySecond.textContent = "Oh Seven"; 
        } else if (ss == 08) {
            ternarySecond.innerHTML = "Oh Eight"; 
        } else if (ss == 09) {
            ternarySecond.innerHTML = "Oh Nine"; 
        } else if (ss == 10) {
            ternarySecond.textContent = "Ten"; 
        } else if (ss == 11) {
            ternarySecond.innerHTML = "Eleven"; 
        } else if (ss == 12) {
            ternarySecond.innerHTML = "Twelve"; 
        } else if (ss == 13) {
            ternarySecond.textContent = "Thirteen"; 
        } else if (ss == 14) {
            ternarySecond.innerHTML = "Fourteen"; 
        } else if (ss == 15) {
            ternarySecond.innerHTML = "Fifteen"; 
        } else if (ss == 16) {
            ternarySecond.textContent = "Sixteen"; 
        } else if (ss == 17) {
            ternarySecond.innerHTML = "Seventeen"; 
        } else if (ss == 18) {
            ternarySecond.innerHTML = "Eighteen"; 
        } else if (ss == 19) {
            ternarySecond.textContent = "Nineteen"; 
        } else if (ss == 20) {
            ternarySecond.innerHTML = "Twenty"; 
        } else if (ss == 21) {
            ternarySecond.innerHTML = "Twenty One"; 
        } else if (ss == 22) {
            ternarySecond.textContent = "Twenty Two"; 
        } else if (ss == 23) {
            ternarySecond.innerHTML = "Twenty Three"; 
        } else if (ss == 24) {
            ternarySecond.innerHTML = "Twenty Four"; 
        } else if (ss == 25) {
            ternarySecond.innerHTML = "Twenty Five";
        } else if (ss == 26) {
            ternarySecond.innerHTML = "Twenty Six"; 
        } else if (ss == 27) {
            ternarySecond.innerHTML = "Twenty Seven"; 
        } else if (ss == 28) {
            ternarySecond.textContent = "Twenty Eight"; 
        } else if (ss == 29) {
            ternarySecond.innerHTML = "Twenty Nine"; 
        } else if (ss == 30) {
            ternarySecond.innerHTML = "Thirty"; 
        } else if (ss == 31) {
            ternarySecond.innerHTML = "Thirty One"; 
        } else if (ss == 32) {
            ternarySecond.textContent = "Thirty Two"; 
        } else if (ss == 33) {
            ternarySecond.innerHTML = "Thirty Three"; 
        } else if (ss == 34) {
            ternarySecond.innerHTML = "Thirty Four"; 
        } else if (ss == 35) {
            ternarySecond.innerHTML = "Thirty Five";
        } else if (ss == 36) {
            ternarySecond.innerHTML = "Thirty Six"; 
        } else if (ss == 37) {
            ternarySecond.innerHTML = "Thirty Seven"; 
        } else if (ss == 38) {
            ternarySecond.textContent = "Thirty Eight"; 
        } else if (ss == 39) {
            ternarySecond.innerHTML = "Thirty Nine"; 
        } else if (ss == 40) {
            ternarySecond.innerHTML = "Forty"; 
        } else if (ss == 41) {
            ternarySecond.innerHTML = "Forty One"; 
        } else if (ss == 42) {
            ternarySecond.textContent = "Forty Two"; 
        } else if (ss == 43) {
            ternarySecond.innerHTML = "Forty Three"; 
        } else if (ss == 44) {
            ternarySecond.innerHTML = "Forty Four"; 
        } else if (ss == 45) {
            ternarySecond.innerHTML = "Forty Five";
        } else if (ss == 46) {
            ternarySecond.innerHTML = "Forty Six"; 
        } else if (ss == 47) {
            ternarySecond.innerHTML = "Forty Seven"; 
        } else if (ss == 48) {
            ternarySecond.textContent = "Forty Eight"; 
        } else if (ss == 49) {
            ternarySecond.innerHTML = "Forty Nine"; 
        } else if (ss == 50) {
            ternarySecond.innerHTML = "Fifty"; 
        } else if (ss == 51) {
            ternarySecond.innerHTML = "Fifty One"; 
        } else if (ss == 52) {
            ternarySecond.textContent = "Fifty Two"; 
        } else if (ss == 53) {
            ternarySecond.innerHTML = "Fifty Three"; 
        } else if (ss == 54) {
            ternarySecond.innerHTML = "Fifty Four"; 
        } else if (ss == 55) {
            ternarySecond.innerHTML = "Fifty Five";
        } else if (ss == 56) {
            ternarySecond.innerHTML = "Fifty Six"; 
        } else if (ss == 57) {
            ternarySecond.innerHTML = "Fifty Seven"; 
        } else if (ss == 58) {
            ternarySecond.textContent = "Fifty Eight"; 
        } else if (ss == 59) {
            ternarySecond.innerHTML = "Fifty Nine"; 
        } else {
            ternarySecond.innerHTML = "Oh Oh";
        };
    };

    const ternaryTime = document.getElementById("ternary-time");

    (hh < 24) ? (currentTernaryHour(), currentTernaryMinute(), currentTernarySecond()) : 
        ternaryTime.innerHTML = "<span class="result">The clock has stopped!</span>";
}</pre>`;

    if (document.getElementById("ternary-clock-code").innerHTML) {
        document.getElementById("ternary-clock-code").innerHTML = theTernaryCode;
    } else if (document.getElementById("ternary-clock-code").innerHTML == "") {
        document.getElementById("ternary-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-ternary-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-ternary-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        
        document.getElementById("show-ternary-clock-code-button").onclick = function() {
            document.getElementById("ternary-clock-code").setAttribute(
                "style", "height: 100%;"
            );
            document.getElementById("ternary-clock-code").innerHTML = theTernaryCode;
            document.getElementById("show-ternary-clock-code").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("show-ternary-clock-code-button").setAttribute(
                "style", "visibility: hidden; height: 0;"
            );
            document.getElementById("hide-ternary-clock-code").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("hide-ternary-clock-code-button").setAttribute(
                "style", "visibility: visible; height: 100%;"
            );
            document.getElementById("ternary-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
        };
    };

    document.getElementById("hide-ternary-clock-code-button").onclick = function() {
        document.getElementById("hide-ternary-clock-code").setAttribute(
            "style", "visibility: hidden; height: 0;"
        );
        document.getElementById("hide-ternary-clock-code-button").setAttribute(
            "style", "visibility: hidden; height: 0"
        );
        document.getElementById("show-ternary-clock-code").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("show-ternary-clock-code-button").setAttribute(
            "style", "visibility: visible; height: 100%;"
        );
        document.getElementById("ternary-clock-code").innerHTML = "";

        document.getElementById("ternary-clock-card").scrollIntoView({ behavior: "smooth", block: "start" });
    };
  
};
  
currentTime();