// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


// COPY
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// As an example, here is how a string looks before and after the characters are fixed:
// COPY
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

//Parameter: String
//Result:
//Example:
//Psudocode:

function decode(str){
    let num = [0,1,2,3,4,5,6,7,8,9],
        letter = ['O','I','Z','E','h','S','G','L','B','q'];
    str = str.split("")
    for(let i = 0; i < str.length; i++ ){
        if(str[i] === ' ')continue
        if(num.indexOf( Number(str[i])) !== -1){
            str[i] = letter[num.indexOf( Number(str[i]))]
        }else if(letter.indexOf(str[i]) !== -1){
            str[i] = num[letter.indexOf(str[i])]
        }
    }

    return str.join("")
}

decode("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")