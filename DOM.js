//DOM - Document Object Model 
//Window Object 
/*
Window Object - The window object represents an open window in a browser. 
It is the browser's object not JS
and is automatically created at the browser 
It is a global object with lots of properties and methods 
*/

/*What is DOM? 
When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
It allows JavaScript to access, change, and interact with the content and structure of a webpage.
*/

// console.dir(document.body)
//console.log -> Print
//console.dir -> document - print the properties and method of special object like documnet 
// console.log(document.body)
//Wwe use DOM to make dynamic chnages in the webpage.
//DOM allows JS to interact with the webapge's HTML and modify it in real time 

//DOM Manipulation 
//Selecting with ID - #ID 
// let heading = document.getElementById("heading")//h1
// console.log(heading)

//Selecting with classname - . 
// let h = document.getElementsByClassName("Hi")
// console.log(h)
// let button = document.getElementById("myID")
// console.log(button)
//Selecting with tag 
// let para = document.getElementsByTagName("p")
// console.log(para)

//Query Selector 
// let q = document.querySelector(".Hi")//1st element of that macthing tag 
// console.log(q)
//"" -for tag 
// # for ID 
// . for classname in query selector 

//PROPERTIES - To access our elemts and changes them or manipulate them 
//tagName - return the tag name for any nodes 
//innnerText - return the text content of the element and all its children 
//innerHTML = return the plain text or HTML content in the element 
//textContent = retunrs textual content even for hidden elements 

// let div = document.querySelector("div")
// console.dir(div)

// let heading = document.querySelector("h1")
// console.dir(heading)

/*PRACTISE QUESTION 
Q1. Create a H2 heading element with text "Hello JS".
Append "from Apna College" to this text using JS 
*/

// let heading = document.querySelector("h2")
// heading.append(" from Apna College")
// console.log(heading)

/*Q2. Create 3 divs with common classnames - Box.
Access them and add some unique text to each of them 
*/
// let idx = 1 
// let divs = document.querySelectorAll(".Box");
// for (div of divs){
//     div.innerText = `New Unique value ${idx}`;
//     idx++;
// }

//DOM Attributes 
//getAttribute(atr) - to get the attribute value 
// let div = document.querySelector("div")
// console.dir(div)
// let id = div.getAttribute("id");
// console.log(id)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))


// let name = div.getAttribute("name")
// console.log(name)

// //setAttribute(attr,value) - To set the attribute value 
// para.setAttribute("class" ,"new")


// //node.style - 
// let st = div.style.backgroundColor = "Red"
// div.style.color = "Black"
// div.style.fontSize = "50px"
// div.innerText = "Hi"

//Insert Element 
// let newBtn = document.createElement("button")
// newBtn.innerText = "Click Me!"

// let newhead = document.createElement("h1")
// newhead.innerText ="Hi I am Rohan"
// div.before(newhead)

// div.after(newBtn)

// console.log(newBtn)

// let para = document.querySelector("p")
// para.after(newBtn)

// //Delete Element 
// para.remove();
// newhead.remove();

/*Q1. Create a new button element. Give it a text "Click ME"
Background color of red and text color of white 
Insert the button as the first element inside the body tag
*/
// let btn = document.createElement("button")
// btn.innerText = "Click ME"
// btn.style.backgroundColor = "Red"
// btn.style.color = "White"
// btn.style.fontSize = "8px"
// btn.style.height = "20px"
// btn.style.width= "50px"
// let body = document.querySelector("body").prepend(btn)


/*Q2. Create a <p> tag in html, give it a class and some more styling 
Now create a new class in css and try to append this class to the <p> element 
*/

// let para = document.querySelector("p");
// para.classList.add("newClass")
//To add a new class in the remaining class. To append the 2 classes 

