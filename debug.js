//! Bug 1 Solution
function addNum(a,b){
    let sum=a+b;
    return sum;

}
let result =addNum(5,3)
console.log(result)

//! Bug 2 Solutions
function findmax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }

} 
return max;
}
console.log(findmax([0,12,44]))
console.log(findmax([-1,-12,-44]))


//! bug 3 solution 

function CountEven(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            count ++;
        }
    }
    return count;
}
console.log(CountEven([1,2,3,4,5,6,7,4,]))
