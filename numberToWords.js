// PROBLEM 2
map = {
    "ones": [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ],
    "tens": [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ],
    "scale": ["", "thousand", "million", "billion", "trillion"],
};


function numberToWords(number) {
    arrNumber = number.toString().split(".");
    int = arrNumber[0];
    frac = (arrNumber[1]) ? ` and ${arrNumber[1]}/100` : "";
    intLen = (int.length)
    arrWord = [];
    chunkedNumber = [];

    for (var i = intLen; i >= 0; i -= 3){
        // console.log("(Start, End): ("+(i-3)+", "+(i)+")")
        if ((i-3) > 0){
            chunkedNumber.push(int.slice(i-3, i));
        } else {
            chunkedNumber.push(int.slice(0, i));
        }
    }

console.log(chunkedNumber)

    for (var n = 0; n < chunkedNumber.length; n++) {
        chunk = chunkedNumber[n];
        if (chunk != "") {
            chunkLen = chunk.length;
            hunds = chunk.charAt(chunkLen-3) && chunk.charAt(chunkLen-3) != 0 ? chunk.charAt(chunkLen-3) : 0;
            tens  = chunk.charAt(chunkLen-2) && chunk.charAt(chunkLen-2) != 0 ? chunk.charAt(chunkLen-2) : 0;
            ones  = chunk.charAt(chunkLen-1) && chunk.charAt(chunkLen-1) != 0 ? chunk.charAt(chunkLen-1) : 0;
            scale = map["scale"][n];
    
    
            first = hunds != "" ? `${map["ones"][hunds]} hundred` : "";
            last  = parseInt(tens+ones) < 20 ? map["ones"][parseInt(tens+ones)] : `${map["tens"][tens]}-${map["ones"][ones]}`;
    
            console.log("first: "+first)
            console.log("last: "+last)
    
            if (first != "" || last != "") {
                arrWord.unshift(`${first} ${last} ${scale},`.trim());
            }
            
        }
    }
    numberString = arrWord.join(" ");
    
    return numberString.charAt(0).toUpperCase() + numberString.substr(1) + frac;
}

console.log(numberToWords(0))


// 1000 => "One thousand"
// 1000000 => "One million"
// 1545120 => "One million, five hundred and forty-five thousand, one hundred
// and twenty"
// 999999999.99 => "Nine hundred and ninety-nine million, nine hundred and ninetynine
// thousand, nine hundred and ninety-nine and 99/100"
// 245.13 => "Two hundred and forty-five and 13/100"