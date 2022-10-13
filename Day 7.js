// Oooh, yeah! Here it is, the final function you'll need in your string-decoding arsenal this week. Today's challenge might not be too trying after all the others, but you never know!

// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.
// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

function alpha(str){
    let nor = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        bac = 'zyxwvutsrqponmlkjihgfedcba',
        string = str.split("")

    string.forEach((e,i,a)=>{
        if(nor.indexOf(e) !== -1) return a[i] = bac.charAt(nor.indexOf(e))
        else if(bac.indexOf(e) !== -1) return a[i] = nor.charAt(bac.indexOf(e))
    })

    return string.join("")
}

alpha('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH')