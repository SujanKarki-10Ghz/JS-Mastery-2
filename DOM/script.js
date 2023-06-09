//getting element by ID

// const headerEl = document.getElementById("main-heading");
// console.log(headerEl);


/**select element using queryselector */

// const elementEl = document.querySelector("div"); //=> gives the first div content
// console.log(elementEl);

// const elementEl = document.querySelector("div.headline h2"); // if I have to select div with className and its element h2
// console.log(elementEl.style); //=>gives all possible styling components 

// const headerEl = document.querySelector("#main-heading"); => id
// const headerEl = document.querySelector (".header"); => classname

// const navItems = document.querySelectorAll(".nav-lists"); //selects all elements with className nav-lists
// console.log(navItems); => nodeLists(3)


/**change text of elements  */

// textContent, innerText
// const headerEl = document.getElementById("main-heading");
// headerEl.innerText = "hello"; //=> changes the innerText to hello and gives only visible text unlike textContent 
// headerEl.textContent = "Hello"; //=> gives all the textContent either visible or not


/**change the style of element */
// const changeStyle = document.querySelector("div.headline h2");
// changeStyle.style.color = "#111"; //=> color changes to #111

//Note:- we cannot write properties with  "-" in between.
// for that we can use camel case: for example
// changeStyle.style.backgroundColor = "#fff";



/**GET AND SET ATTRIBUTES */
// const link = document.querySelector("a"); //=> gives first anchor tag
// console.log(link.getAttribute("href").slice(1)); //=>#home
// link.setAttribute("href", "https://www.google.com");

// const inputEl = document.querySelector(".form-todo input");
// console.log(inputEl.getAttribute("type")); //=>text



/** get multiple elements using getElements by class Name */
// const allNavLists = document.getElementsByClassName("nav-lists");
// const allNavLists = document.getElementsByTagName("a");
// console.log(allNavLists); //=>HTML Collections(3) > li.nav-lists, li.nav-lists, li.nav-lists => array like objects
// // indexing, length property, looping etc.
// // simple for of loop, simple for loop, we cant use forEach method to iterate through HTMLCollection
// console.log(typeof allNavLists); //=> object
// console.log(Array.isArray(allNavLists)); //=> false
// console.log(allNavLists.length);
// for( let i =0; i<allNavLists.length; i++){
//     let navItems = allNavLists[i];
//     navItems.style.backgroundColor = "#fff";
//     navItems.style.color = "green";
// }


/**get multiple elements using querySelectorAll */
// const allNavLists = document.querySelectorAll(".nav-lists");
// console.log(allNavLists); // => Nodelist(3) [li.nav-lists, li.nav-lists, li.nav-lists]



/**INNERHTML */
// const headline = document.querySelector(".headline");
// // console.log(headline.innerHTML);
// //output: gives HTML inside the headline div 
// //<h2 id="main-heading">Manage your tasks</h2>
// //<button class="btn btn-headline">Learn More</button>

// //LETS CHANGE INNERHTML
// headline.innerHTML = "<h1>Inner HTML changed</h1>"
// //let us add button to innerHTML
// headline.innerHTML+= "<button class='btn btn-headline'>Learn More</button>"
// console.log(headline.innerHTML);
// //=> o/p
// //<h1>Inner HTML changed</h1>

//INNERHTML To ADD HTML ELEMENT
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML+="<li> New ToDo </li>"
// todoList.innerHTML+="<li> Teach your students </li>"



/**classlist add remove, toggle classes */
// const sectionTodo = document.querySelector(".todo-section");
 // console.log(sectionTodo.classList); //=> DOMTokenList(2) ["todo-section", "container" value: "todo-section container"]
// // sectionTodo.classList.add("bg-dark"); //=> adding class bg-dark to todo-section
// // sectionTodo.classList.remove("container"); //=> removing container class from todo-section
// // const ans = sectionTodo.classList.contains("container");
// // console.log(ans);//=>true
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");



/**CREATE ELEMENT, APPEND PREPEND AND REMOVE */
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
/**Append prepend */
// // todoList.prepend(newTodoItem);
// todoList.append(newTodoItem);

/**Remove */
// const todo = document.querySelector(".todo-list li");
// todo.remove();

/**Before After*/
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem); //before ul list 


/**Get Dimension of an element */
// const sectionTodo = document.querySelector(".todo-section");
// // const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().height;
// console.log(info);