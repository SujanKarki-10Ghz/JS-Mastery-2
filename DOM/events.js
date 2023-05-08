/**Events
 * Events are things that happen in the system you are programming, which the system tells you about so your code can react to them.
 * HTML events are "things" that happen to HTML elements.
 * When JavaScript is used in HTML pages, JavaScript can "react" on these events.
 */

/**HTML Events
 * An HTML event can be something the browser does, or something a user does.
 * Often, when events happen, you may want to do something.
 * JavaScript lets you execute code when events are detected.
 * HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
 */


//For example,
// if the user clicks a button on a webpage, you might want to react to that action by displaying an information box.  
// The user selects, clicks, or hovers the cursor over a certain element.
//The user chooses a key on the keyboard.
//The user resizes or closes the browser window.
//A web page finishes loading.
//A form is submitted.
//A video is played, paused, or ends.
// An error occurs.


// ways of adding event
// => adding event in HTML element
//=> selecting element and firing

// const btnEl = document.querySelector(".btn-headline");
// console.dir(btnEl);
// btnEl.onClick = function(){
//     console.log("Clicked");
// }

// btnEl.addEventListener("click", ()=>{
//     console.log("clicked!!!");
// })


/**This keyword in events*/
// const btnEl = document.querySelector(".btn-headline");
// btnEl.addEventListener("click", function(){
//     console.log("clicked!!!");
//     console.log(this); // <button class="btn btn-headline">Learn More</button>
//     //In arrow fxn, value of this is window because arrow fxn has no this binding
// })


/**click event on multiple buttons */
// const buttons = document.querySelectorAll(".my-buttons button");
// console.log(buttons); // NodeList(3) [button#one, button#two, button#three]

// for (let button of buttons){
//     button.addEventListener("click", ()=>{
//         console.log("clicked");
//     })
// }

// for(let button of buttons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// buttons.forEach((items)=>{
//     items.addEventListener("click", function(){
//         console.log(this);
//     })
// })


/* Practises*/

// const allBtnEl = document.querySelectorAll(".my-buttons button");
// allBtnEl.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })