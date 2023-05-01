/** Traversing Dom Tree */

const rootNode = document.getRootNode();
// console.log(rootNode); // => #document object
// console.log(rootNode.childNodes); //=> NodeList [html]
const HTMLElementNode = rootNode.childNodes[0];
// console.log(HTMLElementNode); //=> <html><head></head><body></body></html>
// console.log(HTMLElementNode.childNodes); //=> NodeList(3) [head, text, body]
const headElementNode = HTMLElementNode.childNodes[0]; //<head></head>
// console.log(headElementNode.childNodes); //=> NodeList(5) [text, title, text, script, text]
const textElementNode1 = HTMLElementNode.childNodes[1]; 
const bodyElementNode = HTMLElementNode.childNodes[2]; // <body></body>
// console.log(headElementNode.parentNode); //=>html
//console.log(bodyElementNode.childNodes); //=> NodeList(7) [text, div.container, text, comment, text, script, text]


//Siblings relation
// console.log(headElementNode.nextSibling);//=> #text
// console.log(headElementNode.nextSibling.nextSibling);//=> body
// console.log(headElementNode.nextElementSibling); //=> ignores spaces and new line


const h1El = document.querySelector("h1");
// console.log(h1El.parentNode);
// //output
// {/* <div class="container">
//         <h1>My heading</h1>
//         <p>Some useful information</p>
//     </div> */}

// const body = h1El.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

const body = document.body;
body.style.color = "#efefef";
body.style.backgroundColor = "#333";

const head = document.querySelector("head");
console.log(head);
const title = document.querySelector("title");
console.log(title);


const container =document.querySelector(".container");
console.log(container.childNodes); //=> NodeList(5) [text, h1, text, p, text]
console.log(container.children); //=> HTMLCollection(2) [h1, p] => without the text node