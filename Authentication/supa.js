import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { SupabaseClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
        const supabaseUrl = 'https://nyyjyjlzqurhukbygfft.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eWp5amx6cXVyaHVrYnlnZmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzM5NzgsImV4cCI6MjA0NjMwOTk3OH0.-pB9DrgV1uDyGudt5MQkwKJqB5CT-YfNGOzgxjjvlp0'
        const supabase = createClient(supabaseUrl, supabaseKey)
        const supabase2 = new SupabaseClient(supabaseUrl, supabaseKey)
      
        

// Ma'lumotlarni olish uchun async funksiyadan foydalanamiz
async function fetchData() {
    let info;
    // Jadvaldan barcha ma'lumotlarni olish
    const { data, error } = await supabase
        .from('foydalanuvchilar')
        .select('username')

    // Natijalarni tekshirish
    if (error) {
        console.error("Xato:", error.message)
    } else if (data.length > 0) {
        console.log("Ma'lumotlar:", data)
        info = data;
    } else {
        console.log("Hech qanday ma'lumot qaytmadi!")
    }

    console.log(info[0].username);
}

// Funksiyani chaqirish
// fetchData()
// Yangi qator qo'shish funksiyasi
async function addRow(newData) {
    const { data, error } = await supabase
      .from('table_name') // jadval nomini kiriting
      .insert(newData) // qo'shiladigan ma'lumotlar
  
    if (error) {
      console.error('Error adding row:', error)
    } else {
      console.log('Added row:', data)
    }
  }

  let Usname = document.querySelector(".user"),//username
      Usnick = document.querySelector(".username"),//usernick
      Ustype = document.querySelector("#mijoz"),//usertype
      Usphone = document.querySelector(".tel"),//userphone
      Uspassword = document.querySelector(".parol"),//userpassword
    registr = document.querySelector("#registr")//registr button
registr.addEventListener("click", () => {
    addRow({
        username: Usname.value,
        usernick: Usnick.value,
        usertype: Ustype.value,
        userphone: Usphone.value,
        userpassword: Uspassword.value
    })
})