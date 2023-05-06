const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0; i<=1000000000; i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent, num);
    })
}) 
let outerVar = 0;
for(let i =0; i<=100000000; i++){
    outerVar+=i;
}
console.log("outer var is", outerVar);