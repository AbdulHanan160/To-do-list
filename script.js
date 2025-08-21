let list = document.querySelector(".list")
let btn = document.querySelector(".btn")
let input_task = document.getElementById("input")

const addtask = (input) => {
    let newtask = document.createElement("div")
    newtask.innerHTML = `<div class="all-task">
                    <input class="check-box" type="checkbox">
                    <span class="task">${input}</span>
                </div>
                <div class="all-status">
                    <span class="status">Pending</span>
                    <img src="images/delete.svg" alt="" class="delete">
                </div>`
    newtask.classList.add("task-list")
    list.appendChild(newtask)
  
statuschange()

}

btn.addEventListener("click", () => {
    if(input_task.value==""){
        document.querySelector(".creat").style.outline="1.5px solid red"
        document.querySelector(".creat input").placeholder="Please fill out"
    }
    else{
        document.querySelector(".creat").style.outline="none"
        document.querySelector(".creat input").placeholder="Write task"
        addtask(input_task.value)
    }
     
    input_task.value=""

})

const statuschange=()=>{
    let check_box = document.querySelectorAll(".check-box")
    check_box.forEach((e) => {
        e.addEventListener("change", (element) => {
            if (element.target.checked == true) {
                element.target.parentElement.parentElement.children[1].children[0].innerHTML = "Completed"
            } else {
                element.target.parentElement.parentElement.children[1].children[0].innerHTML = "Pending"
            }

        })


    })
}
