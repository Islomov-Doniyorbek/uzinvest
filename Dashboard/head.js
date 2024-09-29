
// localStorage.clear()
function aside() {
    let navicon = document.querySelector(".fa-navicon");
    let aside = document.querySelector("aside");
    let yopish = document.querySelector("#exit");

    navicon.onclick = () => {
        aside.classList.toggle("bottom")
    }
    yopish.onclick = () => {
        aside.classList.remove("bottom")
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
// translate()

// localStorage.clear()