
// let arr = [1,2,3,4,5]

// arr.forEach((element,index,orgarray)=>{
//     console.log(element);
//     console.log(index);
//     console.log(orgarray);
// })
// ------------------------------------------------//
// let arr = [{a:1},{a:2},{a:3}]

// arr.forEach((ele)=>{
//     console.log(ele.a);
// })
// ------------------------------------------------//
// let arr = [{a:1,nest:{b:2}},{a:3,nest:{b:4},c:5},{a:6,nest:{c:7}}]

// arr.forEach((ele,ind,org)=>{
//     // console.log(ele.c);
//     // console.log(ele.nest.c);
//     console.log(ele.a);
// })
// -------------------------------------------------//

// let arr = [0, 0, 0, 0, 2]

// brr = arr.map((e)=>{return e*5})
// console.log(brr);

// filter only breaks after checking all
// crr = arr.filter((e)=>{return e>2})
// console.log(crr);

// find stops if one condition is true and it is faster
// drr = arr.find((e)=>{return e > 2})
// console.log(drr);

// some returns true if one condition is satisfied
// loop continues entierly even if the first condition fails
// err = arr.some((e)=>{ return e>1 })
// console.log(err);

// if the condition is satisfied with all the value then it will return true
// if one condition fails also returns false and break the loop
// let zrr = [0,2, 2, 2, 2]
// frr = zrr.every((e) => { return e > 1 })
// console.log(frr);
// ----------------------------------------------------------------------------//

// no of words, letters, up & lower case letters


// function letters() {
//     let low = 0
//     let upp = 0
//     let num = 0
//     let special = 0
//     let string = document.getElementById("textarea").value;
//     // splits spaces
//     let xyz = string.split(" ")
//     // splits spaces and joins like concat
//     string = string.split(" ").join("")
//     let out = document.querySelector(".letters")
//     for (let i = 0; i < string.length; i++) {
//         if (string[i]>="a" && string[i]<="z") {
//             low++
//         }
//         else if(string[i]>="A" && string[i]<="Z"){
//             upp++
//         }
//         else if(string[i]>=0 && string[i]<=9){
//             num++
//         }
//         else{
//             special++
//         }
//     }
//     out.innerHTML = 
//     `
//     Lower: ${low}<br>
//     Upper: ${upp}<br>
//     Number: ${num}<br>
//     Special: ${special}<br>
//     Words: ${xyz.length}<br>
//     Total: ${string.length}
//     `
// }
// --------------------------------------------------------------------//

//this concepts
// var a = 5, b = 5

// var obj = {
//     a:1,b:2,
//     add : function () {
//         // this method calls the local variable
//         c = this.a*this.b
//         c = a+b
//         console.log(c);
//     }
// }

// obj.add()
// -----------------------------------------------------------------//