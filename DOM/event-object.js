//Whenever we put event listener on the elements
// JS Engine ----- line by line execute
// Browser ------- Js Engine + extra features
// Browser ------- Js Engine + WebAPIs

//When the browser knows user performed an event, it does two work
//=> it gives the callback fxn to JS Engine
// => along with callback fxn, the event information which was performed will be also given
// information will given in form of object
// const allBtnEl = document.querySelectorAll(".my-buttons button");
// for(let btn of allBtnEl){
//     btn.addEventListener("click", function(e){ //e or event
//      console.log(e.target); //=> e is an object
//      //<button id="one">My Button 1</button>
//     })
// }