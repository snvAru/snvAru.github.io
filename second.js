let list = JSON.parse(localStorage.getItem("list")) || []

let ul = document.querySelector("#ul")
let clearBtn = document.querySelector(".clear")
let removeBtn = document.querySelectorAll(".remove")
let li = document.querySelectorAll(".li")

function remove(index){
    let list = JSON.parse(localStorage.getItem("list")) || []
    list.splice(index,1)
    localStorage.setItem("list", JSON.stringify(list)) 
}

list.map(item => ul.innerHTML += `<li class = "li">${item}</li>`)

clearBtn.addEventListener("click", () => {
    ul.innerHTML = ""
    localStorage.clear()
})

ul.addEventListener("click", (e)=> {
    console.log(e)
    e.target.innerHTML = ""
})