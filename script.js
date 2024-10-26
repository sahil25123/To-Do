const taskInput=document.getElementById("task");
const listContainer=document.getElementById("task-container")

function addTask(){
    if(taskInput.value===""){
        alert("You must write something")

    }
    else{
        let li=document.createElement("li")
        li.innerHTML=taskInput.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "X";
        span.className="close";
        li.appendChild(span);


    }
    taskInput.value="";
    saveData();
}
 listContainer.addEventListener("click", function(event)
 {
    if(event.target.tagName=== "LI"){
        event.target.classList.toggle("checked")
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();