
// // using console log
// console.log('hiiii');

// let abc = 'Amirtha';
// console.log(abc);

// let firstName = 'Amirtha';
// let lastName = 'varshini';
// console.log(firstName+lastName);

// // numbers
// let intrestRate = 0.33;
// intrestRate = 1;
// console.log(intrestRate);

// // let name = "Ami";
// // let age = 21;
// let person = {
//     name : 'Ammu',
//     age : 20
// };
// // dot notation
// person.name = 'hari'

// // bracket notation
// person['name'] = 'Ami'; 
// console.log(person.name);

// // arrays
// let selectedColors =  ['red', 'blue'];
// console.log(selectedColors);

// // performinng a task
// function greet(college){
//     console.log('Welcome to   ' + college);
// }
// college ='KEC';
// greet(college);
let count=0;
let countEl = document.getElementById("count-el")
function increment(){
    count+=1;
    countEl.innerText = count;
}
// function decrement(){
//     count=count-1;
//     countEl.innerText = count;
// }
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count =0
}

let message = " you have tree new notification"
console.log(message)

