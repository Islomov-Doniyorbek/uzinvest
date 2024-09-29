let forms = document.querySelectorAll("form");

// Formlarni bir biriga bog'laydigan button va linklar
let input = document.querySelectorAll("input");
let logHave = document.querySelector("form .logHave #link"),
    DontHave = document.querySelector("form .DontLog #link"),
    zabil = document.querySelector("form #zabil"),
    sendCodePhone = document.querySelector("form #sendCodePhone"),
    sendCode = document.querySelector("form #sendCode"),
    sendNewPassword = document.querySelector("form #sendNewPassword"),
    resend = document.querySelector("form #resend"),
    registr = document.querySelector("form #registr");

registr.onclick = () => {
    input.forEach(e => {
        if (e.value != "") {
            window.location.href = "/index.html"
        }
    })
}
// localStorage.clear()
logHave.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formLog") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}
DontHave.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formReg") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}
zabil.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formZabil") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}
sendCodePhone.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formSMS") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
    let times = document.querySelector(".times");
    let counter = 59;
    let intervalId = setInterval(function () {
        times.innerHTML = `0:${counter}`
        counter--;
        
        if (counter <=0) {
          clearInterval(intervalId);
        }
      }, 1000); 
}
sendCode.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formNewPass") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}
sendNewPassword.onclick = (e)=> {
    e.preventDefault();
    forms.forEach(e => {
        if (e.id != "formLog") {
            e.style.display = "none"
        } else {
            e.style.display = "flex"
        }
    })
}

input.forEach(e => {
    e.addEventListener('input', () => {
        if (e.type != "checkbox") {
            if (e.validity.valid) {
                e.parentElement.style.boxShadow = '0 0 8px 3px green'; // Valid holat uchun yashil rang
              } else {
                  e.parentElement.style.boxShadow = '0 0 8px 3px red'; // Valid holat uchun yashil rang
              }
        }
      });
})