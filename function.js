// 5. Refactoring with Arrow Functions: Take a standard function expression used for greeting a user and refactor it into an ES6 arrow function

// Ensure the function uses a default parameter (e.g., name = "Guest") so it still works if no name is provided

// Concepts applied: Arrow functions and default parameters.

const greetings= (name="Caroline")=>{
    return name

}

console.log(greetings())

// 6. Object-Oriented Blueprint: Create a class called Student with a constructor that initializes name and grade

// Add a method to the class that prints a message saying whether the student passed or failed based on their grade

// Concepts applied: Classes, constructors, and object methods.

class student{
    constructor(name,grade){
        this.name=name
        this.grade=grade
    }

    studentPassFail(){
        let grade =100;
        if(this.grade>=80){
            console.log(`${this.name} has passed with a grade of ${this.grade}`)
        }else{
            console.log(`${this.name} has failed with a grade of ${this.grade}`)
        }
    }
}

const student1 = new student("Jane",50)
const student2 = new student("Melissa",90)

student1.studentPassFail()
student2.studentPassFail()