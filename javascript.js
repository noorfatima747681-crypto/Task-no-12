let item1 = 500;
let item2 = 300;
let totalcart = item1 + item2;
console.log( "Total cart price is:" +totalcart);

let price = 1000;
console.log("price after 10% Discount: " + (price - (price * 0.10)));

let bill = 2000;
console.log("total bill with tax:" + (bill + (bill * 0.18)));

let weight = 70;
let height = 1.75;
console.log("BMI result:" + (weight / (height * height)));

let salary = 5000;
console.log("Monthly salary after tax:" + (salary - (salary * 0.05)));

let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 5;
let r5 = 4;
console.log("Average Rating:" + ((r1 + r2 + r3 + r4 +r5) / 5));

let OrderVal = 1500;
console.log("Delivery Charges:" + (OrderVal * 0.05));

let p = 1000, r = 5, t = 2;
console.log("Simple Interest: " + (p * r * t / 100));

let balance = 5000, withdraw = 1200;
console.log("Remaining Balance: " + (balance - withdraw));

let totalMins = 130;
console.log("Time: " + Math.floor(totalMins/60) + " Hours and " + (totalMins%60) + " Minutes");

let user = "admin"
let password = "123"
if (user == "admin" &&  password == 123){
    console.log("login Successful");   
}
else {
    console.log("Invalid credentials");
}

let age = 16;
if (age < 18) {
    console.log("Access blocked: under 18");
}
else {
    console.log("Access Granted");
}

let Ammount = 250;
if( Ammount > 200){
    console.log("20% discount applied");
}
else if (Ammount > 100){
    console.log("10% discount applied");
}
else {
    console.log("No discount");
}

let marks = 85;
if(marks >=80 ){
    console.log("Grade: A");
}
else if( marks >= 60){
    console.log("Grade: B");
}
else{
    console.log("Result: Fail"); 
}

let weather = "rainy";
if ( weather == "hot"){
    console.log("Stay Hydrated!");
}
else if( weather == "cold"){
    console.log("Wear a jacket");
}
else if( weather == "rainy"){
    console.log( "Take an umbrella!");
}












