/**Event bubbling / Propagation*/
// When an event happens on an element, it first runs the handlers on it,
// then on its parent,
// then all the way up on other ancestors.

// const grandParentEl = document.querySelector(".grandParent");
// const ParentEl = document.querySelector(".parent");
// const childEl = document.querySelector(".child");

/**Event Capturing */
//opposite of bubbling
// capturing-bubbling cycle

// childEl.addEventListener("click", ()=>{
//     console.log("Capture child");
// }, true)

// ParentEl.addEventListener("click", ()=>{
//     console.log("Capture parent");
// }, true)

// grandParentEl.addEventListener("click", ()=>{
//     console.log("Capture grandParent");
// }, true)

//bubbling
// childEl.addEventListener("click", ()=>{
//     console.log("Bubble child");
// })

// ParentEl.addEventListener("click", ()=>{
//     console.log("Bubble parent");
// })

// grandParentEl.addEventListener("click", ()=>{
//     console.log("Bubble grandParent");
// })


/**Event Delegation */

const grandParentEl = document.querySelector(".grandParent");
grandParentEl.addEventListener("click", (event)=>{
    console.log(event.target);
})