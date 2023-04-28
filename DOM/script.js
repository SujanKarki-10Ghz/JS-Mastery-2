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
