function switchTheme(theme) {
    switch (theme) {
        case "dark": document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
            document.body.classList.remove("grey-theme");
            break;
        case "light": document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
            document.body.classList.remove("grey-theme");
            break;
        case "grey": document.body.classList.add("grey-theme");
            document.body.classList.remove("light-theme");
            document.body.classList.remove("dark-theme");
            break;
    }
}

function onRadio(that) {
    switchTheme(that.value);

}


function onSelect(that) {
    switchTheme(that.value);
}


function onClick() {
    console.log("click");
    document.body.classList.add("show-modal");
}

function init() {
    document.querySelectorAll(".grid > div").forEach(function (x) {
        x.addEventListener("click", onClick)
    });
    document.querySelector(".modal .close").addEventListener("click", function () {
        document.body.classList.remove("show-modal")
    });
    document.body.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("modal"))
            document.body.classList.remove("show-modal")
    });

    switchTheme("light")

}

init();