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

function space(str){
    return str.replaceAll(/([Space])/g ,' ')
}

function reverse(str){
    let temp = str.split("").reverse().join("")
    return temp
}

let deco =  decode('e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs')
let spac = space(deco)
let revers = reverse(spac)

console.log(revers)