    const body = document.body;
    const mainBtnEl = document.querySelector("button");
    const currentColor = document.querySelector(".current-color");
    console.log(currentColor);
    mainBtnEl.addEventListener("click", ()=>{
        const randomColor = randomColorGenerator();
        body.style.backgroundColor = randomColor;
        currentColor.textContent = randomColor;
    })

    const randomColorGenerator = ()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        return randomColor;
    }