let myArr = ["bbq", "chili", "donuts"];
let myArr2 = ["enchiladas", "tacos", "pizza"];

for (let i =0; i < myArr.length; i ++) {
    console.log(myArr[i])
}

for (let i = 0; i < myArr2.length; i ++) {
    console.log(myArr2[i])
}

let i = 0;
while (i < 10) {
    console.log(myArr[i])
    i++
}
console.log("This is i:", i);

i = 0;
while (i < 10) {
    console.log(myArr2[i])
    i++
}

function sayHello() {
    console.log("Hello!");
    // no return statement, so returns undefined
  }

let whatAmISaying = sayHello();
console.log(whatAmISaying);

function calculateTotalWithTax(price) {
    console.log(price);
    return price + price * tax;
}

console.log(calculateTotalWithTax(4)); // 4.3

const total = calculateTotalWithTax(4);
console.log(price);  // error!
console.log(total);  

