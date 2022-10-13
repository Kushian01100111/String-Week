//Day 1
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

//Day 2 Key for Day 3

// Day 3

function space(str){
    return str.replaceAll(/([Space])/g ,' ')
}

// Day 4

function reverse(str){
    let temp = str.split("").reverse().join("")
    return temp
}

//Day 5 Number for Day 6

// Day 6

function intru(str,n){
    let ltr =  str.split("")
    for(let i = n - 1 ; i < ltr.length; i+=n){
        ltr[i] = ''
    }

    return ltr.join("")
}

//Day 7

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

let first = decode("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"),
    secund = space(first),
    third = reverse(secund),
    fourd = intru(third,3),
    five = alpha(fourd)