let list=document.querySelector(".list")
let btn=document.querySelector(".btn")
let input_task=document.getElementById("input")

const addtask=(input)=>{
    let newtask =document.createElement("div")
    newtask.innerHTML=`<div class="all-task">
                    <input class="check-box" type="checkbox">
                    <span class="task">${input}</span>
                </div>
                <div class="all-status">
                    <span class="status">Pending</span>
                    <img src="images/delete.svg" alt="" class="delete">
                </div>`
                newtask.classList.add("task-list")
                list.appendChild(newtask)
                

}

btn.addEventListener("click",()=>{
    addtask(input_task.value)
})


