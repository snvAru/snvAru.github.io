let form = document.querySelector("#form")
let input = document.querySelector("#text")


form.addEventListener("submit", (e)=> {
    e.preventDefault()  //отменяем отправку данных на сервер

    let list = JSON.parse(localStorage.getItem("list")) || []  //вытащить все пред сохраненные со сторжэа
    list.push(input.value)    //доавить последний
    localStorage.setItem("list", JSON.stringify(list))      //вместе с послед вложить в сторажэе

    input.value = ""   //clear input
})