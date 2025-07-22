let add = document.querySelector("#add");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


// add.addEventListener("keydown", (event) => {
//     if(event.key === "Enter") {
//         addTasks();
//         console.log("enter press");
//     }
// })

add.addEventListener("click", () => {
    addTasks();
})


function addTasks() {
    const task = inp.value;
    if(task === "") {
        return;
    }
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${inp.value} <button class = "del" onclick="delTasks(this)">X</button>`;
    inp.value = "";
}

function delTasks(button) {
    let li = button.parentElement;
    li.remove();
}