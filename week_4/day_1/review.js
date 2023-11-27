let obj = {
    name: "Lukas",
    age: 26,
    pets: ["Tigger","Pepper"],
    friend: {
        name: "Daniel"
    }
}

let objTwo = {
    name: "Adam",
    age: 27,
    pets: ["Fido"]
}

let objThree = {
    num: 48
}

let { age,name,pets, friend } = obj
console.log(age[1])

const printPerson = ({ name,age, pets: [ petOne,petTwo ] }) => {
    console.log(`My name is ${name}, I am ${age} years old, and I have a pet named ${petTwo}`)
}

printPerson(obj)
printPerson(objTwo)
// printPerson(objThree)

let numArr = [1,2,3,4,5]

let [ five ] = numArr
console.log(five)

let objArr = Object.entries(obj)
objArr.forEach(([ key,value ]) => {
    console.log(`The value of ${key} is ${value[1]}`)
})