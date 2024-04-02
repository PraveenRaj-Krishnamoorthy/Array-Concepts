
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
let zrr = [0,2, 2, 2, 2]
frr = zrr.every((e) => { return e > 1 })
console.log(frr);