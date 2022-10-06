// Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!

function space(str){
    return str.replaceAll(/([Space])/g ,' ')
}

console.log(space('SThispisc#1SpaceELEMENT'))