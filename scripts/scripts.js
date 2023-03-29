let darkthemebutt = document.querySelector("#button2");
let asideDark = document.querySelector("#left-side");
let navDark = document.querySelector(".nav-bar");
let textArea = document.querySelector("#story");
let navbar = document.querySelector(".ul1"); 


function darkTheme(e) {
    console.log(e)
    if (e.target.tagName === "BUTTON") {
        document.body.classList.toggle("darktheme")
        asideDark.classList.toggle("aside-darktheme");
        navDark.classList.toggle("navdark");
        textArea.classList.toggle("textarea-dark");
        navbar.classList.toggle('ul1-dark');
        
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
let savebutton = document.querySelector("#button3");


function hideText(e) {
    if (e.target.tagName === "BUTTON") {
        cancelbutton.classList.add("hidden-content");
        textArea.classList.add("hidden-content");
        savebutton.classList.add("hidden-content");
        cancelbutton.classList.remove("show-content");
        textArea.classList.remove("show-content");
        savebutton.classList.remove("show-content");
    }

}

cancelbutton.addEventListener("click", hideText);

let noteToggle = document.querySelector("#button1");

function showText(e) {
    if (e.target.tagName === "BUTTON") {
        cancelbutton.classList.add("show-content");
        textArea.classList.add("show-content");
        savebutton.classList.add("show-content");
        cancelbutton.classList.remove("hidden-content");
        textArea.classList.remove("hidden-content");
        savebutton.classList.remove("hidden-content");
    }
}

noteToggle.addEventListener("click", showText);


function newNote(e) {
    textArea.textContent = '';
}

noteToggle.addEventListener("click", newNote);