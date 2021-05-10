"use strict"
//TODO: Array is collection of data.
// array is index based
// Array is mutable
// index start from 0

let city1 = "Bangalore";
let city2 = "hyderabab";
let city3 = "mumbai";
let city4 ="chennai";

const lCity = ["bangalore","Hyderbad","mumbai","chennai"];
console.log(lCity);
console.log(typeof lCity)

// length  -> it returns length of the array ->length start from one
console.log(lCity.length);

// Assign the value to the array
lCity[4]= "Hosanagara";
lCity[5]="shivamogga";
//lCity = ["ks","ksp"]; //  reassign value like this not a good way
console.log(lCity);

// Display the Particular Value
console.log(lCity[0],lCity[3]);

//find the last element in the array
console.log(lCity[lCity.length-1]);

//Add the elements to the array
lCity.push("kbl") // add the element to the end of the array
console.log(lCity)
lCity.unshift("karnataka")//add the element to the begining of the array
console.log(lCity)

//Delete the elemnts to the array
lCity.pop() // delete the element to the end of the array
console.log(lCity)
lCity.shift()// delete the element to the begining of the array
console.log(lCity)

// find the position of the given element
console.log(lCity.indexOf("chennai"))
lCity.push("chennai")

// find the last position of the given elemnet
console.log(lCity.lastIndexOf("chennai"));

//return if value is there it will return true or false
console.log(lCity.includes("chennai"))

//merging two arrays
const year = [1,2,3,4,5];
const no = [1994,1995,1996,1997,1998]
console.log(year + no) 
// here we will get like this o/p -> 1,2,3,4,51994,1995,1996,1997,1998
// last element in  the first Array and first element in the last array should be combined
// so we have to use concat
console.log(year.concat(no))//o/p -> [1, 2, 3, 4, 5, 1994, 1995, 1996, 1997, 1998]

//splice method -> add and delete element in Arrays
console.log(lCity.splice(1,0,"addHosanagara"))// here we are passing  three arguments first Arguments indexNo, deleteCount, and list of elements
console.log(lCity)

//slice method -> used to extract some part of array and this method return that extracted part 
console.log(lCity.slice(1,4));

// foreach -> method it will can't create new array just for display purpose
let num = [1,2,3,4,5]
let res = num.forEach((value,index) =>{
    console.log( `${index} -> ${value}`);
} ) 
console.log(res);

//map -> map method it will help to create new array based on your requirement without distrubing old array 
const numArr =  [1,2,3];
//using for loop 
const newArr = [];
for(let i=0;i<numArr.length;i++){
    newArr.push(numArr[i]*2);
}
console.log(newArr);
console.log(newArr.__proto__);  

const mapRes = numArr.map(e => {
    return e*2;
})
console.log(mapRes);

//find -> find method will return  only first value when match the condition

const newArrEle = [1,2,3,4,5,6,7];

let fiRes = newArrEle.find(e => {
    return e>3;
})
console.log(fiRes);

// filter -> filter method will return the all values when match the condition

let filRest =  newArrEle.filter(ele => {
    return ele>3
})
console.log(filRest);

const filtArr = [{num:1},{num:2},{num:3}];

const filRes = filtArr.filter(e=>{
    if(e.num%2 === 0)
    {
        return e.num*2
    }

});
console.log(filRes);