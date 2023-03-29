let darkthemebutt = document.querySelector("#button2");
let asideDark = document.querySelector("#left-side");
let navDark = document.querySelector(".nav-bar");

function darkTheme(e) {
    console.log(e)
    if (e.target.tagName === "BUTTON") {
        document.body.classList.toggle("darktheme")
        asideDark.classList.toggle("aside-darktheme");
        navDark.classList.toggle("navdark");
    }
    
}

darkthemebutt.addEventListener("click", darkTheme);

function changeText() {
    if (darkthemebutt.textContent === "Dark theme") {
        darkthemebutt.textContent = "Light theme";
    } else {
        darkthemebutt.textContent = "Dark theme";
    }
}

darkthemebutt.addEventListener("click", changeText);

let cancelbutton = document.querySelector("#button4");
let textArea = document.querySelector("#story");
let savebutton = document.querySelector("#button3");
let noteToggle = document.querySelector("#button1");

function hideText(e) {
    if (e.target.tagName === "BUTTON") {
        cancelbutton.classList.toggle("hidden-content");
        textArea.classList.toggle("hidden-content");
        savebutton.classList.toggle("hidden-content");
    } else {
        noteToggle.classList.toggle("show-content");
    }


}

cancelbutton.addEventListener("click", hideText);
noteToggle.addEventListener("click", hideText);

