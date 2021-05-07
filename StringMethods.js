//TODO: StringMethods ->

let greeting = "Welcome To javascript and javascript"

// length -> returns the length of the given string
console.log(greeting.length) // o/p -> 21

// charAt() ->it will use get particular character present in the given index.
console.log(greeting.charAt(3));// o/p c

//toUpperCase() ->it will convert given string into uppercase. 
console.log(greeting.toUpperCase())// o/p -> WELCOME TO JAVASCRIPT

//tolowercase() -> it will convert the given string into lowercase
console.log(greeting.toLowerCase())// o/p-> welcome to javascript

//trim() -> remove the white space (begining and end)
let firstName  ="   punith kumar ks  ";
console.log(firstName.length) // o/p -> 20
console.log(firstName.trim().length); // o/p -> 15

//index of -> find the first index of the given string
console.log(greeting.indexOf('c')); // o/p -> 3

//lastIndexOf -> find the last index of the given string
console.log(greeting.lastIndexOf('c')); // o/p -> 16

// split -> convert the given string into array
console.log(greeting.split(' ')); // o/p -> (3) ["Welcome", "To", "Javascript"]
//0: "Welcome"
//1: "To"
//2: "Javascript"

//tostring -> convert the values into string
let value = greeting.split(' ');
console.log(value)// o/p -> ["Welcome", "To", "Javascript"]
console.log(value.toString()) // o/p -> "Welcome,To,Javascript"

//replace -> replace the matched substring into new substring
console.log(greeting.replace('javascript', 'js'))//o/p ->Welcome To Javascript and js
console.log(greeting.replace(/javascript/g, 'js'))// o/p -> Welcome To js and js

//slice -> slice methods is used to extract part of string and this method returns that extracted part.
console.log(greeting.slice(1)) 
// o/p -> elcome To javascript and javascript
console.log(greeting.slice(1, 6));
// o/p -> elcom
console.log(greeting.slice(-2)) // op -> pt
console.log(greeting.slice(4, -1)); // o/p -> here -1 indicate last element -> ome To javascript and javascrip
console.log(greeting.slice(-1, 4)); // o/p -> first value - negative ans second value positive it sow error

// problem 1
let city = "ameStradam" //here first letter capital remianing small

console.log(city.charAt(0)) // o/p -> a
console.log(city.charAt(0).toUpperCase()) // o/p -> A
console.log(city.slice(1)) // o/p -> meStradam
console.log(city.slice(1).toLowerCase()) // o/p -> mestradam
console.log(city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()); //o/p -> Amestradam
