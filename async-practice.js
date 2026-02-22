// ============================================
//> PART 1: Understanding Promises (45 minutes)
// ============================================

//! 1. Create a promise that resolves after 2 seconds with message "Done!"
const delayPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Done!")
    },2000)
});

delayPromise.then((message) => {
    console.log(message);  // Should print "Done!" after 2 seconds
});


//! 2. Create a promise that checks if a number is even
// If even: resolve with "Even number"
// If odd: reject with "Odd number"
function checkEven(num) {
    return new Promise((resolve, reject) => {
        if(num%2==0){
            resolve("Even Number : " + num)
        }
        else {
            reject("it ws not even number: " + num)
        }
    });
}

checkEven(4)
    .then((msg) => console.log(msg))     // "Even number"
    .catch((err) => console.log(err));

checkEven(7)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));   // "Odd number"


//! 3. Create a promise that simulates a dice roll
// Resolves with random number 1-6 after 1 second
function rollDice() {
    return new Promise((resolve) => {
        // Your code here:
        setTimeout(()=>{
        let num=Math.floor(Math.random() * 6) + 1
        resolve(num)
    },1000)
        // Use setTimeout for 1 second delay
        // Generate random number 1-6: Math.floor(Math.random() * 6) + 1
    });
}

rollDice().then((num) => {
    console.log(`You rolled: ${num}`);
});


// ============================================
//> PART 2: async/await Practice (60 minutes)
// ============================================

//! 4. Convert this .then() code to async/await
// function waitAndPrint() {
//     const promise = new Promise((resolve) => {
//         setTimeout(() => resolve("Hello from promise"), 1000);
//     });
    
//     promise.then((msg) => console.log(msg));
// }

//! Your async/await version:
async function waitAndPrintAsync() {
    // Your code here
    const promise= new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("promise resolve with asyn and await")
        },1000)
        
    })
    const mypromise=await promise
    console.log(mypromise)

}

waitAndPrintAsync();


//! 5. Create async function that waits for 3 messages in sequence
// Each message should appear 1 second after the previous
function createMessage(msg, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(msg), delay);
    });
}
async function showSequence() {
    // Your code here:
 const msg1=await  createMessage("first",1000)
 console.log(msg1)
 const msg2= await createMessage("second",1000)
 console.log(msg2)
 const msg3=await createMessage("third",1000)
 console.log(msg3)
}

showSequence()


//! 6. Create async function with error handling
// Try to fetch from a URL, catch errors
async function fetchData(url) {
    try {
        // Your code here:
        // 1. Fetch from url
        const response=await fetch(url);
        // 2. Convert to JSON
        const data=await response.json()
        // 3. Return the data
        return data;

    } catch(error) {
        // Handle error
        console.log("Error:", error.message);
    }
}
// Test it (this URL will fail)
fetchData("https://invalid-url-12345.com");


// ============================================
//> PART 3: Fetch API Practice (90 minutes)
// ============================================

//! 7. Fetch a random user and display their info
async function getRandomUser(url) {
    // Your code here:
    try{
        const myuser= await fetch(url)
        const data= await myuser.json()
        console.log(`${data.result[0].name.first}and EMAIL.ID ${data.result[0].email}and  CITY ${data.results[0].location.city}`)
    }
    catch(error){
        console.log("ERROR",error)
    }

    // 1. Fetch from: https://randomuser.me/api/
    // 2. Extract user data
    // 3. Console.log: Name, Email, City
}

getRandomUser("https://randomuser.me/api/");


//! 8. Fetch a random joke and display it
async function getJoke(url) {
    // Your code here:
    const response=await fetch(url)
    // API: https://official-joke-api.appspot.com/random_joke
    const data=await response.json()
    const myjoke=`${data.setup} -${data.punchline}`
    console.log(myjoke)
    // Display both setup and punchline
}

getJoke("https://official-joke-api.appspot.com/random_joke");


//! 9. Fetch multiple users (use loop)
async function getMultipleUsers(count) {
    // Your code here:
    const response=await fetch("https://randomuser.me/api/?results=5")
    const data=await response.json()
    data_name=await data.result[0].name
    console.log(data_name)
    // Fetch 'count' number of users
    // API: https://randomuser.me/api/?results=5
    // Display name of each user
}

getMultipleUsers(5);


//! 10. Fetch and filter data
async function getAdultUsers() {
    // Your code here:
try{
    const adult_data= await fetch("https://randomuser.me/api/?results=10")
    // 1. Fetch 10 users: https://randomuser.me/api/?results=10
    const json_adult=await adult_data.json()
    const result_data= json_adult.results
    
    const filter_map_adult= result_data.filter(i=>i.dob.age>=30)
    .map(i=>
    {
         return `name: ${i.name.first} and age: ${i.dob.age}`
    })
    console.log(filter_map_adult)
}
    catch(error) {

        console.log(`error is${error.message}`)

    }
    // 2. Filter users with age >= 30
    // 3. Display filtered users' names and ages
    // Hint: age is in data.results[i].dob.age
}
getAdultUsers();


// ============================================
//> PART 4: Real-World Scenarios (90 minutes)
// ============================================

// 11. Create a function that retries failed requests
async function fetchWithRetry(url, retries = 3) {
    // Your code here:
for(let i=0;i<=retries;i++){
     try{
      const data = await fetch(url)      
      const response=await data.json()
        return response;
    }
    catch(error){
       if(i===retries){
        throw error
       }
    }
    // Try to fetch from url
    // If it fails, retry up to 'retries' times
    // If all retries fail, throw error
}

// Test with bad URL
fetchWithRetry("https://bad-url.com", 3)
    .catch((err) => console.log("All retries failed:", err.message));


//! 12. Fetch data with timeout
// If fetch takes more than 5 seconds, cancel it
async function fetchWithTimeout(url, timeout = 5000) {
    // Your code here:
    const promise1 = fetch(url).then(response=>{
      return response.json()
    })
    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Timeout"))
        },timeout)
    })
    // Use Promise.race() to race between fetch and timeout
    try { 
        const race_result=await Promise.race([promise1, promise2]).then((value) => {
        console.log(value);
        return value
        })
        return race_result
    }  
    catch(error){
        throw error
    }
}

fetchWithTimeout("https://randomuser.me/api/", 5000);


//! 13. Fetch multiple APIs in parallel
async function fetchAllData() {
    try{
    let [promise1,promise2,promise3]=await Promise.all([
    fetch("https://randomuser.me/api/"),
    fetch("https://official-joke-api.appspot.com/random_joke"),
    fetch("https://api.adviceslip.com/advice")
    ])
    let users=await promise1.json()
    let jokes=await promise2.json()
    let advice=await promise3.json()
    console.log(users)
    console.log(jokes)
    console.log(advice)
    
}
   catch(error){
     throw error.message
   }
}

fetchAllData()



//! 14. POST request (send data to server)
// This simulates submitting a form
async function submitForm(userData) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        console.log("Form submitted successfully:", data);
    } catch(error) {
        console.log("Error submitting form:", error);
    }
}

// Test it
submitForm({ title: "My Post", body: "Hello World", userId: 1 });


// ============================================
//> PART 5: Mini Project - Weather App (60 minutes)
// ============================================

//! 15. Build a simple weather fetcher
// Use: https://wttr.in/{city}?format=j1
// Example: https://wttr.in/Delhi?format=j1

async function getWeather(city) {
    try {
        let promise1=await fetch(`https://wttr.in/${city}?format=j1`)
        // Your code here:
        let json_data=await promise1.json()
        let current=json_data.current_condition[0]
        const temperature=current.temp_C
        const humidity=current.humidity
        // 1. Fetch weather data for the city
        // 2. Extract: temperature, condition, humidity
        // 3. Display in a nice format
        
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Condition: ${current.weatherDesc[0].value}`);
        console.log(`Humidity: ${humidity}%`);
    }
     catch(error) {
        console.log(`Could not fetch weather for ${city}`);
    }
}

// Test with different cities
getWeather("Delhi");
getWeather("Mumbai");
getWeather("Bangalore");
}