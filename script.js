// Chapter 1

//Question 1
// const result = "john" + 1;
// console.log(result); // john1
// ans : john1


//Question 2
// const result = "john" + 1;
// console.log(typeof result); //  string
// ans : string


//Quesition 3
// const obj = {};
// obj = 23; // error const can't be reassign
// ans : No 


// Question 4
// const obj = {};
// obj.key = 23;
// console.log(obj.key); // 23
// ans : yes, we can add key


// Question 5
// const trendshoes = {
//     snicker: "white",
//     boots: "Chelsi",
//     shoes: "joger",
//     highHeel: "jordan",
//     running: "zoom"
// };


// Chapter 2

// Question 1
// const age = 17;
// if (age > 10 && age < 20) {
//     console.log("age lies between 10 and 20")
// }

// Question 2
// used when there is many conditions 
// const ch = 'z';
// switch (ch) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("vowel");
//         break;
//     default:
//         console.log("non-vowel");
//         break;
// }


// Question 3
// const number = prompt("Enter a number");
// (number % 2 === 0 && number % 3 === 0) 
// ? console.log("done, divisible")
// : console.log("nope, undivisible");


// Question 4
// const number = prompt("Enter a number");
// (number % 2 === 0 || number % 3 === 0) 
// ? console.log("both or one divisible")
// : console.log("undivisible");


// Question 5
// const age = 19;
// age >= 18
// ? console.log("you can drive")
// : console.log("you can't drive");


// Chapter 3

// Question 1
// const student_data = {
//     john: 23,
//     wick: 89,
//     doj: 29
// };
// for (let i = 0; i < Object.keys(student_data).length; i++)  {
//     console.log(Object.keys(student_data)[i], student_data[Object.keys(student_data)[i]]);
// }


// Question 2
// const student_data = {
//     john: 23,
//     wick: 89,
//     doj: 29
// };
// for (const key in student_data) {
//     console.log(key, student_data[key]);
// }


// Question 3
// const correctNo = 87;
// let userInput;
// do {
//      userInput = prompt("enter correct no: ");
// } while (userInput !== correctNo);


// Question 4
// const mean = (a, b, c, d, e) => {
//     console.log( Math.floor((a + b + c + d + e ) / 5));
// }
// mean(32,43,23,5,43);


// Chapter 4

// Question 1
// console.log("har\"".length);    //4
// ans: 4



// // Question 2
// const string = "MIT is one of the best university in the world";
// console.log(string.includes("best")); // true
// console.log(string.startsWith("MIT")); // true
// console.log(string.endsWith("world")); // true


// Question 3
// const upperStr = "JOHN";
// console.log(upperStr.toLowerCase()); // john


// Question 4
// const str = "Please give me Rs 1000  2000";
// const regex = /\d+/;
// console.log(str.match(regex));


// Question 5
// const str = "jo*n";
// str[2] = "h"; // logical error
// console.log(str); // jo*n because string is immutable;
// ans: no


// Chapter 5


// Question 1
// const numArr = [];
// for (let i = 1; i <= 3; i++) {
//    numArr.push(Number(prompt("Enter " + i + " number: ")));
// }
// console.log(numArr);


// Question 2
// const numArr = [];
// let input;
// while ((input = Number(prompt("Enter" + " number: "))) !== 0) {
//     numArr.push(input);
// }
// console.log(numArr) 
// for (let i = 1; i <= 3; i++) {
//    numArr.push();
// }
// console.log(numArr);


// Question 3
// const numArr = [23,54,23,54,340, 20, 4303, 23, 230];
// const divArrBy10 = numArr.filter (num => num % 10 === 0);
// console.log(divArrBy10);


// Question 4
// const numArr = [23,54,23,54,340, 20, 4303, 23, 230];
// const sqrArr = numArr.map(num => Math.pow(num, 2));
// const sqrArr = numArr.map(num => num * num);
// const sqrArr = numArr.map(num => num**2);
// console.log(sqrArr)


// Question 5
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = 7;
// const facArr = arr.slice(0, num);
// const factorial = facArr.reduce((acc, el) => acc * el, 1);
// console.log(factorial);



// Chapter 6



// Question 1
// const age = parseInt(prompt("Enter your Age: "));
// age < 18 
// ? alert("you can't drive")
// : alert("you can drive");


// Question 2
// do {
//     const age = parseInt(prompt("Enter your Age: "));
//     age < 18 
//     ? alert("you can't drive")
//     : alert("you can drive");
// } while (confirm("Do you want to check again? "));



// Question 3
// do {
//     const age = parseInt(prompt("Enter your Age: "));
//     age < 18 
//     ? console.error("error")
//     : alert("you cant drive");
// } while (confirm("Do you want to check again? "));


// Question 4
// const age = parseInt(prompt("Enter your Age: "));
// if (age > 4) {
//     window.location.href= "https://www.google.com";
// }


// Question 5
// const color = prompt("Enter background color");
// document.body.style.backgroundColor = color;


// Chapter 7

// Question 1   
// document.getElementsByTagName('nav')[0].style.backgroundColor = "red";
// document.body.firstElementChild.style.backgroundColor = "red";

// Question 2
// No

// Question 3
// document.body.firstElementChild.style.backgroundColor = "green";
// document.body.lastElementChild.style.backgroundColor = "green";

// Question 4
// document.body.firstElementChild.style.backgroundColor = 'red';


// Question 5
// none