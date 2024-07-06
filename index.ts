import inquirer from "inquirer"

console.log("WELCOME TO MY QUIZ GAME")
console.log("=========================")
console.log("You have to give atleast 4 correct answers to pass the quiz")

let point = 0

let question1 = await inquirer.prompt({
    name: "question1",
    message : "What is the capital of India?",
    type: "list",
    choices : ["Delhi", "Mumbai", "Kolkata", "Chennai"]
})
if (question1.question1=="Delhi") {
    console.log("Correct")
    point++;}
else {
    console.log("Wrong")
}
let question2 = await inquirer.prompt({
    name: "question2",
    message : "Who is the CEO of Google?",
    type: "list",
    choices : ["bill gates", "Elon Musk", "Mark Zuckerberg", "Sundar Pichai"]
})
if (question2.question2=="Sundar Pichai") {
    console.log("Correct")
    point++;}
else {
    console.log("Wrong")
}
let question3 = await inquirer.prompt([{
    name: "question3",
    message : "AI stands for",
    type: "list",
    choices : ["Artificial Intelligence", "Artifical intel", "Atlered intelligence", "Action intelligence"]}])
if (question3.question3=="Artificial Intelligence") {
    console.log("Correct")
    point++;}
else {
    console.log("Wrong")
}
let question4 = await inquirer.prompt({
    name: "question4",
    message : "Founder of Microsoft?",
    type: "list",
    choices : ["elon musk", "Sundar Pichai", "bill gates", "babar azam"]
})
if (question4.question4=="bill gates ") {
    console.log("Correct")
    point++;}
else {
    console.log("Wrong")
}
let question5= await inquirer.prompt([{
    name: "question5",
    message : "Founder of Apple?",
    type: "list",
    choices : ["bill gates","elon musk", "Sundar Pichai", "Steve jobs"]}])
if (question5.question5=="Steve jobs") {
    console.log("Correct")
    point++;}
else {
    console.log("Wrong")
}
if (point>=3) {
    console.log("YOU PASSED THE QUIZ")  }
    else {
        console.log("YOU FAILED THE QUIZ")
    }
    console.log("THANK YOU FOR PARTICIPATING")
    