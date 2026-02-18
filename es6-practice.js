// ============================================
//> PART 1: const and let (15 minutes)
// ============================================

//! 1. Create these variables using CORRECT keyword (const or let):
//  Your name (won't change)
const name1="shivam"
//  Your age (will change)
let age1=23
age1=24
//  PI value 3.14159 (won't change)
const pi=Math.PI
console.log(pi)
//  A counter starting at 0 (will change)
let count=0
//  Your birth year (won't change)
let year=2003



// ============================================
// PART 2: Arrow Functions (45 minutes)
// ============================================

//> 2. Convert ALL these to arrow functions:

// Convert this:
// function square(num) {
//     return num * num;
// }

//! To arrow function:
const square2 = num=>num*num  // implicit return

console.log(square2(5));   // 25
console.log(square2(10));  // 100


// Convert this:
// function fullName1(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

//! To arrow function:
const fullName = (firstname,lastname)=>`${firstname}${lastname}`// Your code here

console.log(fullName("Shivam", "Dobhal"));  // "Shivam Dobhal"


// Convert this:
// function isEven1(num) {
//     return num % 2 === 0;
// }

// To arrow function:
const isEven =(num)=>{
  let result;
  if(num%2==0){
    result=true
  }
  else{
    result=false
  }
  return result;
} // Your code here

console.log(isEven(4));   // true
console.log(isEven(7));   // false


//> NEW: Write these DIRECTLY as arrow functions:

//! 3. Arrow function that takes temperature in Celsius, returns Fahrenheit
// Formula: (celsius * 9/5) + 32
const celsiusToFahrenheit = temp=> temp*9/5;


console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212


//! 4. Arrow function that takes array, returns its length
const getLength =arr=>arr.length;


console.log(getLength([1, 2, 3, 4, 5]));  // 5
console.log(getLength(["a", "b"]));       // 2

// ^==================================================================================================
//- =================================================
// PART 3: Template Literals (20 minutes)
// ============================================

//> 5. Create these strings using template literals:

const productName = "iPhone 15";
const price = 79999;
const discount = 10;

//! Create string: "iPhone 15 costs ₹79999"
const productInfo =`${productName} cost is ${price}`

console.log(productInfo)

//! Create string: "After 10% discount, iPhone 15 costs ₹71999.1"
const discountInfo = `After ${discount}% discount, ${productName} costs ${price - (price * discount / 100)}`
console.log(discountInfo);

//! Create string: "iPhone 15 is expensive: true"
const myopinion=`${productName} is Expensive ${price>50000}`
console.log(myopinion)





// ============================================
//> PART 4: Destructuring (40 minutes)
// ============================================

//! 6. Array Destructuring:
const colors = ["red", "green", "blue", "yellow"];
const [firstColor,secondColor,,forthColor]=colors
// Extract first and second color into variables using destructuring


console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(forthColor); // yellow


//! 7. Object Destructuring:
const student = {
    name: "Shivam",
    age: 23,
    course: "BCA",
    city: "Ghaziabad"
};
const {name,age,course,city}=student

console.log(name1);    // "Shivam"
console.log(course);  // "BCA"
console.log(city);    // "Ghaziabad"


//! 8. Destructuring in function parameter:
const laptop={
    brand:"Dell",
    price:"51000",
    ram:"16GB"
}

const laptopInfo=({brand,ram,price})=>{
    return `${brand} laptop with ${ram} RAM cost ${price}`

}
// // Uses destructuring in the parameter
// // Returns: "Dell laptop with 16GB RAM costs ₹65000"


laptopInfo(laptop);