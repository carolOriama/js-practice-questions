// 3. The Natural Summation: Using a for loop, write a program that calculates the sum of all natural numbers from 1 up to a given number n

// Concepts applied: for loop initialization, condition checking, and update expressions

function naturalSummation(n){
    let totalSum=0;
    for (i=1; i<=n; i++){
        totalSum +=i
    }
    return totalSum

}

const n = 10;
const result = naturalSummation(n);
console.log(`The sum of natural numbers from 1 to ${n} is: ${result}`);



// 4. Array Iteration & Modification: Create an array of your five favorite fruits

// Use a loop to iterate through the array and print each fruit
// Then, demonstrate how to change the value of the second fruit in the list

let fruits=["grapes","apples","kiwis","pineapples","watermelon"]

for(i=0; i<fruits.length; i++){
    console.log(fruits[i])
}



fruits[2]="Mangoes"
console.log( fruits)
