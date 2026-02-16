//Write a function that takes a name and age, returns a greeting
function mygreetings(age,name){
    return `hello, it nice to meet you ${name} and your age is ${age} `
}
console.log(mygreetings(23,"shivam"))


// 2. Write a function that checks if number is positive/negative/zero
function CheckNum(num){
 if(num>0){
    return `positive`
 }
  else if(num===0){
    return`zero`
  }
  else{
    return `negative`
  }
}
console.log(CheckNum(-1))


//3. Write a function that returns first and last element of array

function Myarr(arr){
    
    return ` my first array element is ${arr[0]} and my last array element is ${arr[arr.length-1]}`
}
console.log(Myarr([0,2,4,5,3,9]))

// 4. Write a function that sums all numbers in an array

function SumAll(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
  }
  return sum
  
}
console.log(SumAll([1,2,3,5,6]))


//5.  Write a function that finds the largest number in an array

function largestNum(arr){
    let largest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
        
    }
    return largest;

}
console.log(largestNum([1,2,4,6,3,39,8]))


//! CHALLENGE 1: Count Vowels in a String
function myVowel(str){
    let count=0;
    for(i=0;i<str.length;i++){
       let char=str[i]
        if(char==="a" || char==="e" || char==="i" ||  char==="o"|| char==="u"){
            count ++;
            console.log(`vowel ${str[i]} in ${str}`)
        }
       }
       return `${count} vowels`;
    }


console.log(myVowel("shivam"))
console.log(myVowel("javascript"))

//! CHALLENGE 2: Reverse an Array
//! Write a function that reverses an array WITHOUT using .reverse()
function reverseArray(arr){
    let myarr=[]
    for(let i=arr.length-1; i>=0; i--){
        console.log(i)
     myarr.push(arr[i])
    }
    return myarr
}
console.log(reverseArray([1,2,3,4,5]))

//! CHALLENGE 3: Get Only Even Numbers
function EvenNum(arr){
    let myarr=[]
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2==0){
            myarr.push(arr[i])
        }

}
    return myarr;
}
console.log(EvenNum([1,2,3,4,5,6,7,8]))


// //! CHALLENGE 4: Count Occurrences
function countOccurence(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count ++
        }
    }
    return count ;

}
console.log(countOccurence([1,2,2,3,4],3))


//! CHALLENGE 5: Find Average
function Average(arr){
    let average=0;
    for(let i=0;i<arr.length;i++){
        average=average+arr[i]
    }
    return average/arr.length;
}
console.log(Average([1,2,3,9,4,5]))


