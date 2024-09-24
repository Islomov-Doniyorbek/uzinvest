function profileName() {
    if (localStorage.getItem("nick")) {
        document.querySelector("#login").style.display = "none"
        document.querySelector("#sign").style.display = "none";
        let name = document.querySelector(".name")
        name.innerHTML = localStorage.getItem("nick")
    }
}
profileName()