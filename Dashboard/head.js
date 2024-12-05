
// function checkingUser() {
//     let userIcon = document.querySelector(".fa-user");
//     if (localStorage.getItem("nick")) {
//         document.querySelector("#login").style.display = "none";
//     } else {
//         userIcon.style.display = "none"
//     }
//     console.log(userIcon);
// }
// checkingUser()


// localStorage.clear()
function aside() {
    let navicon = document.querySelector(".fa-navicon");
    let aside = document.querySelector("aside");
    let yopish = document.querySelector("#exit");
    let body = document.querySelector("body");

    navicon.onclick = () => {
        aside.classList.toggle("right")
    }
    yopish.onclick = (e) => {
        e.preventDefault()
        aside.classList.remove("right")
    }
    if (window.innerWidth > 768) {
        aside.classList.remove("right")        
    }
}
aside()
// console.log(document.querySelector("body").innerText);
function translate() {
    const select = document.querySelector("#lang");
    const body = document.querySelector("header");
    const countries = {
        "en-GB":"English",
        "ru-Ru":"Russian",
        "uz-Uz":"Uzbek"
    }
    let fromTrans = select.value;
    let toTrans;
    let t = document.querySelectorAll(".tt")
    console.log(t);
    // for (let i = 0; i < t.length; i++){
    //     console.log(t[i].innerText);
    // }
    select.addEventListener("change", () => {
        toTrans = select.value;
        // console.log(body.innerText);
        for (let i = 0; i < t.length;i++) {
            // console.log(tt);
        

            let api = `https://api.mymemory.translated.net/get?q=${t[i].innerText}!&langpair=${fromTrans}|${toTrans}`;
            fetch(api).then(res => res.json()).then(data => {
                console.log(data);
                t[i].innerText = data.responseData.translatedText;
                fromTrans = select.value;
            })
            
        }
    })
}
function profil() {
    let userIcon = document.querySelector(".fa-user");
    let profil = document.querySelector(".profile");
    
    userIcon.onclick = () => {
        profil.classList.toggle("screen");
    }
}
profil()
