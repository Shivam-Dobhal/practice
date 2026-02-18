const productName = "iPhone 15";
const price = 79999;
const discount = 10;




const discountInfo = `After ${discount}% discount, ${productName} costs ${price - (price * discount / 100)}`
console.log(discountInfo);


const laptop={
    brand:"Dell",
    price:"510000",
    ram:"16GB"
}

const laptopInfo=({brand,ram,price})=>{
    return `${brand} laptop with ${ram} RAM cost ${price}`

}
// // Uses destructuring in the parameter
// // Returns: "Dell laptop with 16GB RAM costs ₹65000"
// const laptopInfo = // Your code here

laptopInfo(laptop);