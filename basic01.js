// PROBLEM 1: Basic Function
// Write a function that takes a name and age, returns a sentence
// Example: greeting("John", 25) should return "John is 25 years old"

// Your code here:


function MY_age_name(age,name){

    return ` hello my name is ${name} and my age is ${age}`

}
console.log(MY_age_name(23,"shivam"))


// PROBLEM 2: If/Else Logic
// Write a function that checks if a number is positive, negative, or zero
// Return "positive", "negative", or "zero"

function myNum(num){
    if(num>0){
        return  "positive"

    }
     else if(num==0){
        return "zero"
    }
    
    else{
        return 'negative Number'
        
       }
}

myNum(2)
myNum(0)
myNum(-3)


//PROBLEM 3: Arrays - Access Elements
// Write a function that takes an array and returns the first and last element
// Example: firstAndLast([1,2,3,4,5]) should return [1, 5]

function myarr(arr){
   return `${arr[0]} and ${arr[arr.length-1]} `
}
myarr([1,2,3,4,5])


// PROBLEM 5: Return vs Console.log
// Fix this function - it should RETURN the result, not print it

function multiply(a, b) {
  let result=a*b;
  return result;
}

result = multiply(5, 3);
console.log(result);  


// PROBLEM 4: Arrays - Loop
// Write a function that takes an array of numbers and returns the sum
function myarr1(arr1){
let sum=0;
for(let i=0;i<arr1.length;i++){
   sum =sum + arr1[i]
}
return sum;
}
console.log(myarr1([1,2,3,4,5,5,6]))


//-======================================================================================

//! BONUS 1: Sum only EVEN numbers

function SumEvenNum(arr){

    let sum=0;
    for(let i=0 ; i<arr.length; i++){
       // console.log( `this is item inside array ${arr[i]}`)
    if(arr[i]%2==0){
            sum=sum+arr[i]
        }
    

    }
    return sum;
}
console.log(SumEvenNum([1,2,3,4,5,6,7])) 


//! BONUS 2: Find the largest number in an array
function LargestNum(arr){
    let largest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
            
        }
    }
        return ` largest no. is ${largest}`
    

}
console.log(LargestNum([1,2,3,4,5,9]))