//TODO: callback function -> you can pass the other function into function as arguments

let x = function(){
    console.log("iam called from inside a function");
}

let y =  function(cb){
    console.log("do something");
    cb();
}

y(x);//calling function here i will pass function x as arguments

//normally we are calling  function ->
let calc = function(operator, num1, num2){
    if(operator==='add'){
        return num1 + num2
    }
    else if(operator === 'mul'){
        return num1 * num2
    }else{
        return `invalid operator `
    }
};

console.log(calc('add',3,4));7
console.log(calc('mul',3,5));15


//above example we can use callback function ->

let add = function(a,b){
    return a+b;
}
let mul = function(c,d){
    return c*d
}
let whatEver = function(a,b){
    console.log(`here  are the value ${a},${b}`)
}
let calcs = function(cb,num1,num2){
  return  cb(num1,num2);
}

console.log(calcs(add,23,3));
console.log(calcs(mul,5,6));
console.log(calcs(whatEver,5,6))
console.log(calcs(function(a,b){return a-b},5,3))//in one line we can do like this also

let number = [1,2,3,45,6,3,4,5];

//more examples
let check = function(ele)
{
    return ele> 2;
}
let result = number.filter(check)
//you write like this also
let results = number.filter(ele => {return  ele>2})
console.log(results)