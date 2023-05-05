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


// const h1El = document.querySelector("h1");
// console.log(h1El.parentNode);
// //output
// {/* <div class="container">
//         <h1>My heading</h1>
//         <p>Some useful information</p>
//     </div> */}

// const body = h1El.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const head = document.querySelector("head");
// console.log(head);
// const title = document.querySelector("title");
// console.log(title);


// const container =document.querySelector(".container");
// console.log(container.childNodes); //=> NodeList(5) [text, h1, text, p, text]
// console.log(container.children); //=> HTMLCollection(2) [h1, p] => without the text node\


/**Clone Nodes */
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New Todo";
// ul.append(li);
// ul.prepend(li);

//here, both append and prepend cannot be executed at same time, 
//either it will prepend or append not both at same time.

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New Todo";
// // const li2= li.cloneNode(); //it will not clone properly
// //inorder to do deep cloning
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);



/** Static list vs Live list */

//Static list => querySelectorAll will give us static list
// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems); // NodeList(5) [li, li, li, li, li]
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems); // NodeList(5) [li, li, li, li, li]



//live list => getElementBySomething will give us live list
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// console.log(listItems); // HTMLCollection(5) [li, li, li, li, li]
// const li = document.createElement("li");
// li.textContent = "Item 6";
// ul.append(li);
// console.log(listItems); // HTMLCollection(6) [li, li, li, li, li, li]