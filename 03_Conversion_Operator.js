let score = 11  //try null, try string, try undefined, try boolean 
console.log(typeof(score));
console.log(typeof score);  

let ValueInNumber = Number(score);
console.log(typeof ValueInNumber);
console.log(ValueInNumber);



// "11" => 11
// "11deq" => NaN


let isLoggedIn = 1  // try empty space, try string

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


//********************operations********************/


let Value = 3
let negValue = -Value
console.log(negValue)


//tricky example

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+4+2);
console.log(5+"2"+3);
console.log(5+2+"3");



function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }
console.log(C() || B() && A());
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false



//increment operator (important) -----Prefix and postfix
console.log("Increment operator");

// let a = 3
// let b = a++
// console.log(`a:${a}, b:${b}`);

let a = 3
let b = ++a
console.log(`a:${a}, b:${b}`);


//link to study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedenc