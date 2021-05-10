//TODO: calback function -> you can pass other function into function as arguments is called callback funvction

let x = function (){
    console.log("iam called from inside a function");
}
let y = function(cb){
    console.log("do something");
    cb();
}

y(x)// o/p -> do something , iam called from inside a function

//try to understand this one then implement next example
// let  calc = function(operator, num1 , num2){
//     if(operator === 'add' ){
//         return num1 +num2;
//     }
//     else if(operator === 'mul'){
//         return num1 * num2;
//     }
//     else{
//     return "not valid operator"
//     }
// }
// let result = calc('add',3,3)
// console.log(result);

let add  = function(a,b){
    return a+b
}
let mul = function(c,d){
    return c*d
}
let  calc = function(cb, num1 , num2)
{
    return cb(num1,num2);
}

let result = calc(add,2,3);
let results = calc(mul,2,3);
console.log(result,  results)// o/p-> 5 6