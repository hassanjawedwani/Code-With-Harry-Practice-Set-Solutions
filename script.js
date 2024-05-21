//chapter 1

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


// Chapter 5


