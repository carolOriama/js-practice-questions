// 1. The Product Calculator: Create two variables, num1 and num2, using the let keyword

//  Assign them numerical values and then use a function to calculate and return their product
//  Print the final result to the console using console.log()


let num1=10
let num2=20

function getProduct(){
    return num1 * num2
}

let result = getProduct()
console.log(result)

// 2. Odd or Even Identifier: Write a program that takes a number and uses an if...else statement to determine if it is odd or even

// The program should print a specific message for each case using template literals for cleaner output


function oddEven(num){
    if (num%2===0){
    console.log("This is an even number")
}else{
    console.log("This is an odd number")
}


}

oddEven(4)

