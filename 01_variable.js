const userID = 123;
var Name = "Ashish";   //prefer not to use var. 
/*
We don't use var anymore because say var has a variable name called 'Age' ---- var age =30. 
so, whenever we were using 'age' in some other place, it used to change the values from everywhere, (block scope, functional scope)
that's why we use 'let', because with it we can use scope {}.So whatever changes is implemented inside a scope will not effect rest of the dependencies
*/
let Address = "BBSR";
accEmail = "abcd@efg.com"
let accState

console.log(Address);

console.table([userID, Name, Address, accEmail,accState])
