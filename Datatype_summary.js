// there are basically 2 types of data types categories... PRIMITIVE and NON-PRIMITIVE

/* PRIMITIVE---call by value...meaning ki isme jo original data hai uska reference nhi dia jata hai... uske value ka copy bna ke dia jata hai
so that usko baad mai naye location pe change kia ja sake*/

//types: String, Number, NULL, Boolean, Undefined, symbol, BigInt

const name = "Ashish"
const number = 30
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID);



//symbol: used to make a data unique.
//undefined: means variable is declared, memory space is declared but there is no value in the assigned variable/memory space

/******************************************************************************************************************************/

/*Reference(NON-PRIMITIVE) */

// Array, Objects, Functions

const hero = ["iron man", "Dr.strange","Hulk"];    
console.log(hero);
let myObj = {                                     
    name: "Ashish",
    Age: 30 ,
};

console.log(myObj);

const myFunction = function(){                    
    console.log("Hello world");
}
console.log(myFunction);