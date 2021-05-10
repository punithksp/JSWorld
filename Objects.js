//TODO: objects -> collection of key and value pair qnd its called as (properties)
// key should unique
//key and value pair separted by :
//each properties are separted by ,

const punith = {
    firstName : "punith",
    age : 27,
    job : 'developer',
    graduation : "B.E"
};

console.log(punith); // it will display the all the object properities
console.log(punith.firstName) // o/p -> display the particular properities (using . notation) 
console.log(punith["age"]) // o/p -> display the particular properties (using [](bracket) notation)
//-> don not write like this -> punith[age]

// add the new properties to the object
punith.friends = ["ks","ksp","kumarr"]
punith['bornPlace'] = "kbl"
console.log(punith);
console.log(`${punith.firstName} and has ${punith.friends.length} and his best friend is called ${punith.friends[2]}`)