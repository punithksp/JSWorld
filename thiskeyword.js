//TODO: this -> this keyword point to the current objcet

console.log(this); // point to the window objects

const punith = {
    age: 27,
    job: 'developer',
    birthYear: 1994,
    graduation: "BE",
    friends: ["punith","ks","ksp","kumarr"],
    callAge : function(){
        console.log(this) //here its point to the current objects
        return `${2021-punith.birthYear}` //its point to the birthYear or else we can write like this punith.birthYear
    },
    getSumarry: function(){
        return `${this.age} of the person and his friend list ${this.friends} and his education ${this.graduation}`
    },
    greet : ()=>{return `hello welcome to js and my age is ${this.age}`}
};
console.log(punith.callAge())
console.log(punith.getSumarry())
console.log(punith.greet())