const inputbox= document.getElementsByClassName("input1")[0];
const button=document.getElementsByClassName('button')[0];
const todolist= document.getElementsByClassName("todolist")[0];

function addtodo(){
    if(inputbox.value === '')
    {
        alert("please input");
    }
    else{
        let li= document.createElement("li");
        li.textContent= inputbox.value;
        todolist.appendChild(li);
        inputbox.value = '';
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
}
    todolist.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
        
    },false);
