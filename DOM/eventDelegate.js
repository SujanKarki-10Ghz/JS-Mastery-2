    const todoForm = document.querySelector(".form-todo");
    const todoInput = document.querySelector(".form-todo input[type='text']");
    // console.log(todoInput);
    const todoList =document.querySelector(".todo-list");
    todoForm.addEventListener("submit", (e)=>{
    e.preventDefault(); //prevent from refresh
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHTML;
    console.log(newLi);
    todoInput.value = "";
    todoList.append(newLi);
    })

    todoList.addEventListener("click", (e)=>{
        // console.log(e.target);

        //check if user clicked on done btn
        if(e.target.classList.contains("remove")){
            const targetedLi = e.target.parentNode.parentNode;
            targetedLi.remove();
        }
        if(e.target.classList.contains("done")){
            const liSpanEl = e.target.parentNode.previousElementSibling;
            liSpanEl.style.textDecoration = "line-through";
        }
    })