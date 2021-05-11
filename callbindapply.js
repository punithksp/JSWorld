// call,apply,bind
//traditionally object would have its own property and its own methods for example
let punith={
    name: 'punith', // property
    calc : function(){ ///methods
        return this.name
    }
};
console.log(punith.calc())

//call -> with the call method, ypu can write a method that can be used on different objects
//call method takes arguments separately

let obj = {
    num1 : 1,
    num2 : 2,
};

let addToThis = function(a,b){
    return this.num1 + this.num2 +a + b
};
console.log(addToThis.call(obj,12,3)) //18

// apply -> apply method takes arguments as array

let number =[1,2];
console.log(addToThis.apply(obj,number)) //6

//bind -> it is used return new function 
//->only pass object itself and no arguments
console.log(addToThis.bind(obj,number)) 
let bounded = addToThis.bind(obj)
console.log(bounded)
console.log(bounded(1,2))
