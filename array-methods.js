//! Double all numbers
const myarr= [1,2,4,5,6]
console.log(myarr.map(i=>i*2))

//! Convert temperatures from Celsius to Fahrenheit
const temp =[1,2,3,4,5,6]
const fah=(temp.map(i=>(i * 9/5) + 32))
console.log(fah)


//! 3. Get full names from objects
const myObj=[{
   firstname_name:"shivam", age:23
},
{
   firstname_name:"pankaj", age:22
},
{
   firstname_name:"rahul", age:25
}]

const MyNewObj=myObj.map(p=>`${p.firstname_name}`)
console.log(MyNewObj)


//!  Example 1: Get only even numbers from array
const arr1=[1,2,3,45,0,4,6,88]
const arr2=arr1.map(i=>{
    if(i%2==0){
        console.log(i)
    }
})

//! Example 1: Get only even numbers
const myarr1=[1,3,5,6,7,8]
const myarr2=myarr1.filter(i=>i%2==0)
console.log(myarr2)


//! Get only long words
const Mywords=["shivam","hello","hi","dhurandhar"]
const mynew=Mywords.filter(word=>word.length>5)
console.log(mynew)




// ============================================
//>PART 1: .map() Practice (30 minutes)
// ============================================

//! 1. Double all numbers
const nums1 = [2, 4, 6, 8, 10];
const doubled = nums1.map(num=>num*2)
console.log(doubled);  // [4, 8, 12, 16, 20]


//! 2. Convert temperatures from Celsius to Fahrenheit
// Formula: (C * 9/5) + 32
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(temp=>(temp* 9/5)+32)
console.log(fahrenheit);  // [32, 50, 68, 86, 104]


//! 3. Get full names from objects
const people = [
    { firstName: "Shivam", lastName: "Dobhal" },
    { firstName: "Rahul", lastName: "Kumar" },
    { firstName: "Priya", lastName: "Singh" }
];
const fullNames = people.map(name=>`${name.firstName}  ${name.lastName}`)
console.log(fullNames);  
// ["Shivam Dobhal", "Rahul Kumar", "Priya Singh"]


// 4. Add 10% tax to prices
const prices = [100, 200, 150, 300];
const withTax =prices.map(price=>(price/100)*10)
console.log(withTax);  // [110, 220, 165, 330]


// 5. Extract only the 'name' property from products
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];
const productNames = products.map(product=>product.name)
console.log(productNames);  // ["Laptop", "Mouse", "Keyboard"]


// ============================================
//> PART 2: .filter() Practice (30 minutes)
// ============================================

//! 6. Get only numbers greater than 10
const nums2 = [5, 12, 8, 20, 3, 15];
const greaterThan10 =nums2.filter(n=>n>10)
console.log(greaterThan10);  // [12, 20, 15]


//! 7. Get only words with more than 5 letters
const words = ["cat", "elephant", "dog", "butterfly", "ant"];
const longWords =words.filter(word=>word.length>5)
console.log(longWords);  // ["elephant", "butterfly"]


//! 8. Get only passing students (score >= 40)
const students = [
    { name: "Amit", score: 35 },
    { name: "Priya", score: 45 },
    { name: "Rahul", score: 38 },
    { name: "Neha", score: 50 }
];
const passed = students.filter(student=>student.score>40)
console.log(passed);
// [{ name: "Priya", score: 45 }, { name: "Neha", score: 50 }]


//! 9. Get only products under ₹1000
const items = [
    { name: "Phone", price: 20000 },
    { name: "Case", price: 500 },
    { name: "Charger", price: 800 },
    { name: "Laptop", price: 60000 }
];
const affordable = items.filter(item=>item.price<=1000)

console.log(affordable);
// [{ name: "Case", price: 500 }, { name: "Charger", price: 800 }]


//! 10. Get only even numbers
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums3.filter(num=>num%2==0)
console.log(evens);  // [2, 4, 6, 8, 10]


// ============================================
//> PART 3: .reduce() Practice (45 minutes)
// ============================================

//! 11. Sum all numbers
const nums4 = [10, 20, 30, 40, 50];
const sum = nums4.reduce((sum,num)=>{
  return sum=sum+num;
},)
console.log(sum);  // 150


// 12. Find the maximum number
const nums5 = [5, 12, 8, 20, 3, 15];
const max = nums5.reduce((high,num)=>{
   if(num>high){
      return num

   }
   else {
      return high
   }
},0)
console.log(max);  // 20


//! 13. Calculate total price of cart
const cart = [
    { item: "Shirt", price: 500, quantity: 2 },
    { item: "Jeans", price: 1500, quantity: 1 },
    { item: "Shoes", price: 2000, quantity: 1 }
];
const totalPrice =cart.reduce((acc,num)=>{
  let Each_items=num.price*num.quantity
  return acc=acc+Each_items
},)
// Use .reduce() to calculate: price * quantity for each, then sum
console.log(totalPrice);  

//imp==================================================================================
//! 14. Count how many times each letter appears
const letters = ["a", "b", "a", "c", "b", "a"];
const letterCount =letters.reduce((acc,word)=>{
  if(acc[word]){
   acc[word]=acc[word]+1
  }
  else{
   acc[word]=1
  }
  return acc

},{})

// Use .reduce() to create object: { a: 3, b: 2, c: 1 }
console.log(letterCount);


//! 15. Concatenate all strings into one
const words2 = ["Hello", "World", "from", "JavaScript"];
const sentence =words2.reduce((acc,word)=>
   acc=acc+" "+word

  
,"")

// Use .reduce() to join with spaces
console.log(sentence);  // "Hello World from JavaScript"
//imp ============================================




//> PART 4: Chaining Methods (45 minutes)
// ============================================

//! 16. Get sum of doubled even numbers
const nums6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Step 1: Filter evens → [2, 4, 6, 8, 10]
const mychain1=nums6.filter(i=>i%2==0)

// Step 2: Map to double → [4, 8, 12, 16, 20]
.map(i=>i*2)
// Step 3: Reduce to sum → 60
.reduce((acc,inum)=>{
   return acc=acc+inum

},0)

console.log(mychain1);  // 60


//! 17. Get names of students who passed
const students2 = [
    { name: "Amit", score: 35 },
    { name: "Priya", score: 45 },
    { name: "Rahul", score: 38 },
    { name: "Neha", score: 50 }
];
// Step 1: Filter score >= 40
const passedNames = students2.filter(i=>i.score>=40)
// Step 2: Map to get just names
.map(i=>i.name)
console.log(passedNames);  // ["Priya", "Neha"]


//! 18. Get total price of items under ₹1000
const products2 = [
    { name: "Phone", price: 20000 },
    { name: "Case", price: 500 },
    { name: "Charger", price: 800 },
    { name: "Cable", price: 300 }
];
// Step 1: Filter price < 1000
const affordableTotal = products2.filter(i=>i.price<1000)

// Step 2: Reduce to sum prices
.reduce((sum,i)=>{
   return sum=sum + i.price
},0)
console.log(affordableTotal);  // 1600


//! 19. Get average score of passing students
const students3 = [
    { name: "Amit", score: 35 },
    { name: "Priya", score: 45 },
    { name: "Rahul", score: 50 },
    { name: "Neha", score: 60 }
];
// Step 1: Filter score >= 40
const Passed = students3.filter(i=>i.score>=40)
// Step 2: Map to get just scores
const Passed_score=passed.map(i=>i.score)
// Step 3: Reduce to sum
const total=Passed_score.reduce((sum,i)=>{
  return sum =sum+i
},0)
// Step 4: Divide by length
const avgScore=total/Passed_score.length

console.log(avgScore); 


// 20. CHALLENGE: Get total quantity of expensive products
const inventory = [
    { product: "Laptop", price: 50000, stock: 5 },
    { product: "Mouse", price: 500, stock: 20 },
    { product: "Monitor", price: 15000, stock: 8 },
    { product: "Keyboard", price: 1500, stock: 15 }
];
// Step 1: Filter price > 10000
// Step 2: Map to get stock
// Step 3: Reduce to sum
const expensiveStock = 
inventory.filter(i=>i.price>10000).map(i=>i.stock).reduce((total,i)=>{
  return total=total+i
},0)
console.log(expensiveStock);  // 13 (5 + 8)