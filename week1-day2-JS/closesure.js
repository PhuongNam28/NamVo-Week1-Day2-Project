// Closure is a function which can memorize where it is created and it can access to a variable outside it's scope
// It means every function is a closure naturally.

//EX
function createCounter(){
    let counter = 0
        function increase()
        {
            return counter++;
        }
    return increase;
} 

let counter1 = createCounter();
console.log(counter1)
console.log(counter1)
console.log(counter1)
// This code will give us the result 1, 2 ,3 instead of 1, 1, 1. This is how we can use closure in our code/
// Explanation:
/*
When you define a function createCounter. it doesn't create a scope yet. But when you call it in line 14. 
It will create its own scope. function increase will make a reference to a counter variable and takes it value.
In the initial, when you call counter1 in line 15. It mean you are calling function increase(because function createCounter return function increase)
And when the scope of the createCounter function is created, the variable counter will remember the place where it is created.
Also the function increase still remember where it is created too.
So, when you call counter 1 the second time in line 16. The count variable will be 1. And the increase function will run and make it 2
To summarize, closure is a function that can remember where it is created and assess to the variable outside its scope 

*/