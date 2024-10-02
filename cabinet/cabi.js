if (localStorage.getItem("nick")) {
    let sorov = prompt("Eski akkauntingiz bilan kirasizmi?!");
    if (sorov == true) {
        localStorage.clear();
    }
}