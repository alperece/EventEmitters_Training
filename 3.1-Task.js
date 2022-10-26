/* 
Task:
Node JS Events Example:
- Create Node JS Project
- Create a package.json file like below:
    package.json:
    
    {
  "name": "events",
  "version": "1.0.0",
  "description": "events example",
  "main": "events",
  "author": "AlperBlog",
  "engines":{
  	"node":"*"
  	}
  }

- Create a text file “AlperBlog.txt” with the following content. 
- We are going to use this file to test Node Js events.
  AlperBlog.txt:
    Dear, AlperBlog Readers. 
    Thank You for your support.

- Create a JavaScript file with name events.js
- When you write "node events.js" in terminal, the output will be :
-------------------
alper@alper-ThinkPad-L480:~/Documents/01.DCI/08.NODEJS/02.Lessons_2020/L6-20200712/Events_Alper$ node 1.1-Task.js
Reading AlperBlog.txt file started:
Reading undefined file done successfully.
File Data:

Dear, AlperBlog Readers. 
Thank You for your support.
Reading and Printing File content job is done successfully.
--------------------

*/

// we have imported Node JS “events” and “fs” (FileSystem) module into our application cache.
var events = require("events");
var fs = require('fs');
// we have created an object of EventEmitter class
var eventsEmitter = new events.EventEmitter();

// we have binded “read” event with “readFileContent” Event Handler function using on() method of EventEmitter class.
eventsEmitter.on('read',readFileContent);
// we have binded “display” event with “displayFileContent” Event Handler function using on() method of EventEmitter class.
eventsEmitter.on('display',displayFileContent);
// we have binded “finished” event with “finished” Event Handler function using on() method of EventEmitter class.
eventsEmitter.on('finished',finished);
// we have raised a “read” event by passing filename “JournalDEV.txt” as input using emit() method of EventEmitter class.
eventsEmitter.emit('read','AlperBlog.txt');

// we have written JavaScript functions. We use them as Event Handler Functions.
function readFileContent(fileName){
    console.log("Reading " + fileName + " file started:");
    fs.readFile(fileName, 'utf8', readFile);
}

function  displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
  console.log("Reading and Printing File content job is done successfully.");
}

function readFile(err,data,fileName) {
    console.log("Reading " + fileName + " file done successfully.");
    eventsEmitter.emit('display',data);
}
