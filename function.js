//TODO: function -> is a block of code  we can use it again and again
// when we call it then only function  will execute
// inside function return keyword should be the last statement of the function

//function declaration ->
//function definition
function add(a,b){ // ->function is a keyword, add is function name, and a,b are the parameteres 
    console.log(a+b)
}
add(5,3)//calling function or function invoking
exam();
function exam(){
    console.log("I cleared exams")
}
console.log(typeof exam)// function
console.log(typeof exam())// its based on return type here it will show string


//function expression -> define a function without name and assign to one variable is called function expression
// -> it produced a value
//console.log(say()) if you do like this you wil get error
let say = function(){
    return 'hello to javascript'
}

let greeting = say();
console.log(greeting);

//Note: Difference between Funtion declaration and function expression 
// in function declaration before define a function we can declare that function  is callled hoisting
// but we cant do it in function expression


// arrow  function -> define a function without function name and without function keyword is called arrow function and assign two one variable

const age = ()=>{return("hi");}
console.log(age())


//hoisting ->
console.log(a)
let a = 20;
