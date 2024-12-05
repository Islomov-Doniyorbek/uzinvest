let dovom = document.querySelector("#dovom");
let wrapper = document.querySelector(".wrapper")
let title = document.querySelector(".title")
dovom.onclick = () => {
    wrapper.innerHTML = `
    <div class="selects">
        <p style="width: 100%;">O'zingiz xohlagan biznes yo'nalishini tanlang</p>
        <select id="typeBusiness" name="">
            <option value="default">Tanlash</option>
            <option value="Ta'lim">Ta'lim</option>
            <option value="Ishlab chiqarish">Ishlab chiqarish</option>
            <option value="Qishloq xo'jaligi">Qishloq xo'jaligi</option>
            <option value="Kelajak kasblari">Kelajak kasblari</option>
            <option value="Sog'liqni saqlash">Sog'liqni saqlash</option>
            <option value="Ekologiya">Ekologiya</option>
            <option value="Ilm-fan">Ilm-fan</option>
            <option value="Savdo ishlari">Savdo ishlari</option>
            <option value="Qurilish">Qurilish</option>
            <option value="Boshqa">Boshqa</option>
        </select>
        <p style="width: 100%;">Loyihaga ajratmoqchi bo'lgan mablag'ni kiriting <br>($ miqdorda)</p>
        <select id="investitsiya" name="">
            <option value="default">Tanlash</option>
            <option value="100$ - 500$">100$ - 500$</option>
            <option value="500$ - 1000$">500$ - 1000$</option>
            <option value="1000$ - 5000$">1000$ - 5000$</option>
            <option value="5000$ - 10000$">5000$ - 10000$</option>
            <option value="10000$ - 20000$">10000$ - 20000$</option>
            <option value="20000$ - 50000$">20000$ - 50000$</option>
            <option value="50000$ - 100000$">50000$ - 100000$</option>
            <option value="100000$ - 200000$">100000$ - 200000$</option>
            <option value="200000$ - undan yuqori">200000$ - undan yuqori</option>
        </select>
        <p>Siz uchun loyihani amalga oshirish qancha muddat talab qilishi kerak</p>
        <select id="muddat" name="">
            <option value="default">Tanlash</option>
            <option value="3 oygacha">3 oygacha</option>
            <option value="3 - 6 oy">3 - 6 oy</option>
            <option value="6 oydan 1 yilgacha">6 oydan 1 yilgacha</option>
            <option value="1 - 5 yil">1 - 5 yil</option>
            <option value="5 - 10 yil">5 - 10 yil</option>
            <option value="10 - 20 yil">10 - 20 yil</option>
            <option value="Butun umr">Butun umr</option>
        </select>
        <br>
        <button id="qidiruv">Qidirish</button>
    </div>
    `;
    title.style.display = "none"
    wrapper.classList.toggle("selects_out")
    let qidiruv = document.querySelector("#qidiruv");
    qidiruv.onclick = () => {
        let selectss = document.querySelectorAll(".selects select");
        selectss.forEach(e => {
            if (e.value == "default") {
                e.style.borderBottom = "2px solid red";
            } else {
                e.style.borderBottom = "2px solid lime";
                setTimeout(() => {
                    wrapper.innerHTML = `
                    <div class="searching">
                    <div class="score">
                    <h2>Qidiruv natijalar</h2>
                    <div class="natijalar">
                        <ol class="scores">
                            <li class="item">
                                <span class="type">Ta'lim</span>
                                <span class="name">Online Course</span>
                                <span class="invest">2000$</span>
                                <span class="time">1 oygacha</span>
                            </li>
                        </ol>
                        <h2 class="noFound none">
                            Ma'lumot topilmadi!
                        </h2>
                    </div>
                </div>
            </div>
                    `
                }, 1000);
            }
        })
        console.log(123);
    }
}
