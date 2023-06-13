let modalButton = document.querySelector(".modal_button");
let container = document.querySelector(".container");
let modalWindow = document.querySelector(".modal");
let buttonToSend = document.querySelector(".button");
let cross = document.querySelector("img");
let modalName = document.querySelector(".modal__name");
let modalSurname = document.querySelector(".modal__surname");


modalButton.addEventListener("click", () =>{
    container.classList.add("active");
    modalWindow.classList.add("active");
    buttonToSend.removeAttribute("disabled");
    container.addEventListener("click", function(event) {
        if (!event.target.closest(".modal")) {
            close()
        }
    });
    cross.addEventListener("click", close);
});

function close() {
    container.classList.remove("active");
    modalWindow.classList.remove("active");
    modalName.value="";
    modalSurname.value="";
};


buttonToSend.addEventListener("click", () =>{
    if (modalName.value == "") {
        let confirmWindow = confirm("Поле имени пустое");
        if (!confirmWindow) {
            close();
        }
    } else if (modalSurname.value == "") {
        let confirmWindow = confirm("Поле Фамилии пустое");
        if (!confirmWindow) {
            close();
        }
    } else {
        close();
    };
});