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
