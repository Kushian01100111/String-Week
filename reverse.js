// Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

function reverse(str){
    let temp = str.split("").reverse().join("")
    return temp
}

console.log(reverse("   The white space at the beginning of this string doesn't match the whitespace at the end. "))