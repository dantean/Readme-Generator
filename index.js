const generateMarkdown=require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer= require("inquirer")
const questions = [{
    type:'input',
    message:"What is your project title?",
    name:'title'
},{
    type:'list',
    message:"What is your project title?",
    name:'license',
    choices:["MIT","Apache","IBM","No License"]
},{   
    type:'input',
    message:"What is your email address?",
    name:'email',
},{
    type:'input',
    message:"What is your Github username?",
    name:'username',
},{
    type:'input',
    message:"Please enter a description for your application.",
    name:'description',
},{
    type:'input',
    message:"How do you install the application?",
    name:'installation',
},{
    type:'input',
    message:"How do you use this application?",
    name:'usage',
},{
    type:'input',
    message:"How can people contribute to this project?",
    name:'contributing',
},{
    type:'input',
    message:"What tests have you run?",
    name:'test',
},
];


function writeToFile(fileName, data) {
    const content=generateMarkdown(data)    
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Success!")
        
    })

}

function init() {
    inquirer
    .prompt( questions)
    .then(data=>{
        writeToFile("./output/README.md",data)
    }) 

}


init();
