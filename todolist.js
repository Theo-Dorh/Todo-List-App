const inputContainer = document.getElementById('input-container');
const listContainer = document.getElementById('list-container');

function addTask() {
    let list = document.createElement("li");
    list.innerText = inputContainer.value;
    listContainer.appendChild(list);

    let crossIcon = document.createElement("span");
    crossIcon.innerHTML = "\u00d7";
    list.appendChild(crossIcon);

    inputContainer.value = "";
}

listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    }, false);
