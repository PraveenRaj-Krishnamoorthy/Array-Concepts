// array and object can be use to store data and 
// array uses index to access values
// object uses key to access the values
// length starts from 1 & index starts from 0

// const cars = ["Saab", "Volvo", "BMW"];
// creating an empty array and declaring values
// const cars = []
// cars[0] = "Bmw"
// cars[1] = "Benz"
// cars[2] = "Audi"
// console.log(cars[0]);

// creating a new array
// const cars = new Array("Bmw","Benz","Audi")
// cars[2] = "Skoda"
// console.log(cars);

// converting array to string
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// sort arranges array alphabetically
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// let x = fruits.map(myfunc)
// function myfunc(e, i, o) {
//     console.log(i);
// }

const numbers = [1,2,3,4,5,3];
filter continues the entire loop even the condition fails checks for next
let num = numbers.filter((e)=>{
    return e<5
})
find is faster and breaks the loop if one condition is true and returns
let num = numbers.find((e)=>{
    return e<5
})
console.log(num);