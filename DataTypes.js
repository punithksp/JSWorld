//TODO: DataTypes In JS

// 1)Primitive DataTypes -> Number,Null,Undefined, String, Boolean, Symbol
// 2)Reference DataTypes -> Array, Object, Function, set, Date, Map

//typeof -> its Special function. it will help/find what type/kind of data we are used.

//Number -> decimal Number, Floating Point Number.
let age = 27;
let percentage = 65.5;
console.log(age, percentage); // o/p -> 27 65.5
console.log(typeof age, typeof percentage);// o/p -> number number

//String -> String is sequence of character used for text.
//we can written in single quotes/double qoutes.
let firstName = "punith";
let lastName = "ks";
let havePassPort = "true";
console.log(firstName, lastName, havePassPort)// o/p ->Punith ks true
console.log(typeof firstName, typeof lastName, typeof havePassPort) // o/p -> string string string

//Boolean -> True of false used for take decision.
let pass = true;
let fail = false;
console.log(pass, fail);//o/p-> true false
console.log(typeof pass, typeof fail)// o/p -> boolean boolean

//undefined -> declare a variable and not assign a value for that Variable.
let goal;
console.log(goal); //o/p -> undefined
console.log(typeof goal);// o/p -> undefined

//null -> declare a variable and assign a null value for that variable.
let setGoal = null;
console.log(setGoal);// o/p -> null
console.log(typeof setGoal); // o/p-> object

//symbol -> produced unique Values