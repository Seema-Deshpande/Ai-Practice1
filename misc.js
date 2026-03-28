// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calaculate the factorial of a number
// !5 = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Exercise 2: Array Operations
const numbers = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4]
// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');    
}
const x = reverseString("hello"); // Output: "olleh"
console.log(x);

// Exercise 4: Process User Data 

const processUserData = ({ name, age }) => {
    if (typeof name !== 'string' || typeof age !== 'number' || age < 0) {
        throw new Error('Invalid input: name must be a string and age must be a non-negative number.');
    }
    return `User ${name} is ${age} years old.`;
};

const userInfo = processUserData({ name: "Alice", age: 30 }); // Output: "User Alice is 30 years old."
console.log(userInfo);
