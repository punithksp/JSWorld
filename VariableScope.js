//TODO:     global Scope->

let outer = 1; //global Variable
if(true){
    let local = 2;
    invalid  = -1;//without keyword if you declared Variable is called global scope 
}

if(true){
    console.log(outer); // o/p -> 1
    console.log(invalid); // o/p -> -1
   //console.log(local); //You will get Error Here
}

//TODO:    Block Scope -> {},if ,for loop, while loop
{
    let fromblock = 1;
//  let fromblock = 2 // here block scope we cannt redeclare the value. If you Declare you will get Error -> 'fromblock' has already been declared
    console.log(fromblock) // o/p -> 1
}
//console.log(fromblock) // here also you will get Error -> 'fromblock' has already been declared


//TODO: Lexical Scope 
if(true){
    let fromIf =1;
    {
        console.log(fromIf);  // o/p -> 1
    }
    {
        console.log(fromIf);// o/p -> 1
    }
}

//TODO: Scope Chain

if(true){
    let fromIfCond = 1;
    console.log(fromIfCond); // o/p -> 1
    {
        //console.log(fromIfCond) // o/p -> romIfCond' before initialization
        let fromIfCond = 2;
        console.log(fromIfCond); // o/p -> 2
    }
    console.log(fromIfCond); // o/p -> 1
}

