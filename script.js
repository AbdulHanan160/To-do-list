let list = document.querySelector(".list")
let btn = document.querySelector(".btn")
let input_task = document.getElementById("input")
let all = document.querySelector(".all")
let completed = document.querySelector(".completed")
let pending = document.querySelector(".pending")

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
    delete_task()

}



    btn.addEventListener("click", () => {
        if (input_task.value == "") {
            document.querySelector(".creat").style.outline = "1.5px solid red"
            document.querySelector(".creat input").placeholder = "Please fill out"
        }
        else {
            document.querySelector(".creat").style.outline = "none"
            document.querySelector(".creat input").placeholder = "Write task"
            addtask(input_task.value)
    
        }
    
        input_task.value = ""
    input_task.focus()
    })




const statuschange = () => {
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

const delete_task = () => {
    let del = document.querySelectorAll(".delete")
    del.forEach((e) => {
        e.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.classList.add("hide")
        })
    })
}
const all_list=()=>{
    all.addEventListener("click", () => {
        completed.style.color = "rgb(174, 170, 170)"
        pending.style.color = "rgb(174, 170, 170)"
        all.style.color = "black"
        let status=document.querySelectorAll(".status")
        status.forEach((e)=>{
        
          if(e.innerHTML=="Completed" || e.innerHTML=="Pending"){
            e.parentElement.parentElement.style.display="flex"
          }

    })
})
}
const completed_list=()=>{
    completed.addEventListener("click", () => {
        all.style.color = "rgb(174, 170, 170)"
        pending.style.color = "rgb(174, 170, 170)"
        completed.style.color = "black"
        let status=document.querySelectorAll(".status")
        status.forEach((e)=>{
        
          if(e.innerHTML!=="Completed"){
            e.parentElement.parentElement.style.display="none"
          }
          else{
            e.parentElement.parentElement.style.display="flex"
          }
        })
    })
}

const pending_list=()=>{
    pending.addEventListener("click", () => {
        all.style.color = "rgb(174, 170, 170)"
        completed.style.color = "rgb(174, 170, 170)"
        pending.style.color = "black"

        let status=document.querySelectorAll(".status")
        status.forEach((e)=>{
        
          if(e.innerHTML=="Completed"){
            e.parentElement.parentElement.style.display="none"
          }
          else{
            e.parentElement.parentElement.style.display="flex"
          }
        })
    })
}
pending_list()
completed_list()
all_list()

window.addEventListener("load", () => {
    completed.style.color = "rgb(174, 170, 170)"
    pending.style.color = "rgb(174, 170, 170)"
    all.style.color = "black"
})


window.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
    btn.click()
}
})