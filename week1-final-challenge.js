//! 1 You have an API that returns user data
// Process it to find specific information

async function processUsers() {
    try {
        // 1. Fetch users from API
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        const users = data.results;
        
        // 2. Filter: Get only users older than 30
        const adults = users.filter(user=>user.dob.age>=30)
        
        // 3. Map: Extract just their names and emails
     const contacts = adults.map(i => ({
     name: `${i.name.first} ${i.name.last}`,
     email: i.email
     // Should return: [{ name: "John Doe", email: "john@example.com" }, ...
}))      
//. Find: Get the oldest user
        const oldest = users.reduce((acc,CurrVal)=>{
          if(acc.dob.age>=CurrVal.dob.age){
            return acc
        }
        else{
            return CurrVal
            }
        } 
)   
//. Display results
        console.log("Adults over 30:", adults);
        console.log("Contact list:", contacts);
        console.log("Oldest person:", oldest);
        
    } catch(error) {
        console.log("Error:", error.message);
    }
}
processUsers();

//! 2 You have a shopping cart
// Calculate totals, apply discounts, format output

const cart = [
    { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
    { name: "Mouse", price: 500, quantity: 2, category: "electronics" },
    { name: "Notebook", price: 50, quantity: 5, category: "stationery" },
    { name: "Pen", price: 10, quantity: 10, category: "stationery" },
    { name: "Phone", price: 30000, quantity: 1, category: "electronics" }
];

function calculateCart(items) {
    // 1. Calculate subtotal for each item (price * quantity)
    const itemTotals = cart.map(i=>i.price*i.quantity)
     // Your code (use .map)
    
    // 2. Calculate grand total
    const grandTotal =itemTotals.reduce((acc,cur)=>acc=acc+cur,0)
     // Your code (use .reduce)
    
    // 3. Apply 10% discount if total > 40000
    const discount = grandTotal > 40000 ? grandTotal * 0.1 : 0
    const finalTotal = grandTotal - discount;
    
    // 4. Get only electronics items
    // Your code (use .filter)
    const electronics = cart.filter(i=>i.category==="electronics")
    
    // 5. Calculate electronics subtotal
    const electronicsTotal = electronics.map(i=>i.price*i.quantity)
    .reduce((acc,cur)=>acc=acc+cur,0)
    
    // 6. Format and display
    console.log("=== SHOPPING CART ===");
    items.forEach(item => {
        const subtotal = item.price * item.quantity;
        console.log(`${item.name} x${item.quantity}: ₹${subtotal}`);
    });
    
    console.log("\n--- Summary ---");
    console.log(`Subtotal: ₹${grandTotal}`);
    console.log(`Discount: ₹${discount}`);
    console.log(`Final Total: ₹${finalTotal}`);
    console.log(`Electronics Total: ₹${electronicsTotal}`);
}

calculateCart(cart);


//! 3 Create a robust data fetcher that:
// - Retries on failure
// - Has timeout
// - Validates data

async function robustFetch(url, options = {}) {
    const {
        retries = 3,
        timeout = 5000,
        validateData = (data) => true  // Function to validate data
    } = options;
    for(let attempt = 0; attempt <= retries; attempt++) {
        try{   
            // Your code here:
            // 1. Create fetch promise
            const promise1 = fetch(url).then(response=>response.json())
            // 2. Create timeout promise that rejects after timeout
            const promise2 = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    reject(new Error(`Request timeout after ${timeout}ms`))
                },timeout)
            })
            // 3. Use Promise.race for timeout
            const race_result = await Promise.race([promise1, promise2])
            if (!validateData(race_result)){
                throw new Error("DATA VALIDATION is failed")
            }
            
            return race_result
        }        
        catch(error) {
            if(attempt===retries)
                throw error
            console.log(`ATTEMPT ${attempt+1} failed ${error.message}.Reterying...`)
        }
    }
}

// Test 1: Should succeed
robustFetch("https://randomuser.me/api/", {
    timeout: 5000,
    validateData: (data) => data.results && data.results.length > 0
})
    .then(data => console.log("Success:", data.results[0].name))
    .catch(err => console.log("Failed:", err.message));

// Test 2: Should timeout
robustFetch("https://httpbin.org/delay/10", {
    timeout: 2000,
    retries: 2
})
    .catch(err => console.log("Timeout test:", err.message));

 
//! 4 Analyze student performance data

const students = [
    { name: "Amit", scores: { math: 85, science: 90, english: 78 } },
    { name: "Priya", scores: { math: 92, science: 88, english: 95 } },
    { name: "Rahul", scores: { math: 70, science: 75, english: 72 } },
    { name: "Neha", scores: { math: 88, science: 92, english: 90 } },
    { name: "Rohan", scores: { math: 65, science: 70, english: 68 } }
];

function analyzeStudents(studentList) {
    // 1. Calculate average for each student
    const studentsWithAverage = studentList.map(student =>{
        // Calculate average of their scores
        const scores = Object.values(student.scores);
        const average = scores.reduce((sum,curr)=>sum+curr)/scores.length
        // Your code (use .reduce)
      
        return {
            ...student,  // Spread operator
            average: average
        };
    });
    
    // 2. Determine grade based on average
    const studentsWithGrade = studentsWithAverage.map(student => {
        let grade;
        if(student.average >= 90) grade = 'A';
        else if(student.average >= 80) grade = 'B';
        else if(student.average >= 70) grade = 'C';
        else grade = 'D';
        
        return { ...student, grade };
    });
    
    // 3. Filter: Get only students with grade A or B
    const topStudents = studentsWithGrade.filter(student=>student.grade==="A"|| student.grade==="B")
    
    // 4. Find: Student with highest average
    const topStudent = topStudents.reduce((acc,cur)=>cur.average>acc.average?cur:acc)
    
    // 5. Calculate: Class average
    const classAverage = studentsWithAverage.reduce((acc, curr) => acc + curr.average, 0) / studentsWithAverage.length
    
    // 6. Display results
    console.log("=== CLASS REPORT ===\n");
    
    studentsWithGrade.forEach(student => {
        console.log(`${student.name}:`);
        console.log(`  Math: ${student.scores.math}`);
        console.log(`  Science: ${student.scores.science}`);
        console.log(`  English: ${student.scores.english}`);
        console.log(`  Average: ${student.average.toFixed(2)}`);
        console.log(`  Grade: ${student.grade}\n`);
    });
    
    console.log("--- Summary ---");
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log(`Top Student: ${topStudent.name} (${topStudent.average.toFixed(2)})`);
    console.log(`A/B Students: ${topStudents.length}`);
}

analyzeStudents(students);






// Fetch weather for multiple cities simultaneously
// Display comparison and insights

async function weatherDashboard(cities) {
    console.log("Fetching weather data...\n");
    
    try {
        // 1. Create array of fetch promises (one for each city)
        const fetchPromises = cities.map(city => {
            return fetch(`https://wttr.in/${city}?format=j1`)
                .then(res => res.json())
                .then(data => ({
                    city: city,
                    temp: parseInt(data.current_condition[0].temp_C),
                    condition: data.current_condition[0].weatherDesc[0].value,
                    humidity: parseInt(data.current_condition[0].humidity)
                }))
                .catch(error => ({
                    city: city,
                    error: "Failed to fetch"
                }));
        });
        
        // 2. Wait for ALL cities to complete (use Promise.all)
        const results = await Promise.all(fetchPromises)
        
        // 3. Filter out any errors
        const validResults = results.filter(result=>!result.error)
        
        // 4. Find hottest city
        const hottest = validResults.reduce((acc,curr)=>curr.temp>acc.temp?curr:acc)
         // Your code (use .reduce)
        
        // 5. Find coldest city
        const coldest = validResults.reduce((acc,curr)=>curr.temp<acc.temp?curr:acc)
         // Your code (use .reduce)
        
        // 6. Calculate average temperature
        const avgTemp = validResults.reduce((acc,city)=>acc+city.temp,0)/validResults.length;
        // 7. Filter cities with high humidity (>70%)
        const humid = validResults.filter(result=>result.humidity>70)
        
        // 8. Display results
        console.log("=== WEATHER DASHBOARD ===\n");
        
        validResults.forEach(weather => {
            console.log(`${weather.city}:`);
            console.log(`  Temperature: ${weather.temp}°C`);
            console.log(`  Condition: ${weather.condition}`);
            console.log(`  Humidity: ${weather.humidity}%\n`);
        });
        
        console.log("--- Insights ---");
        console.log(`Hottest: ${hottest.city} (${hottest.temp}°C)`);
        console.log(`Coldest: ${coldest.city} (${coldest.temp}°C)`);
        console.log(`Average Temperature: ${avgTemp.toFixed(1)}°C`);
        console.log(`High Humidity Cities: ${humid.map(c => c.city).join(", ")}`);
        
    } catch(error) {
        console.log("Error:", error.message);
    }
}

// Test with Indian cities
weatherDashboard(["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"]);