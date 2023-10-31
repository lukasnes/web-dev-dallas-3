console.log('Hello World')

let x = 2
let y = 2

if(x > y){
    console.log(x)
} else if(y > x) {
    console.log(y)
} else {
    console.log('The values are the same')
}

console.log('End of conditional')

let singleQuote = 'I am a single "Quote"\nThis is a new line'
let doubleQuote = "I'm a double \"quote\""
/* 
    This is a paragraph
    comment
*/
let backtickString = `I'm a backtick "string". I'm better than ${singleQuote} and ${doubleQuote}`

let dog = 'dog'
let favorite = 'favorite'
console.log(`${dog} ${favorite}`)
console.log("${dog}")
let num = Infinity
let num2 = NaN

let two = "2"
console.log("Hello, my name is Lukas" + "\n" + "I have a cat named Tigger")
let catName = "Tigger"
let catColor = 'Orange'
let catAge = 3

const petSentence = (color,type,name,age) => {
    console.log(`I have an ${color} ${type} named ${name}. He is ${age} years old`)
}

petSentence("brown","dog","fido","5")
petSentence("green","lizard","rocky","3")

let numOne = 5
numOne **= 2
console.log(numOne)


console.log(!true)

let nullValue = null;
console.log(nullValue)