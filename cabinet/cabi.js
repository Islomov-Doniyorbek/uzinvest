import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { SupabaseClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
        const supabaseUrl = 'https://nyyjyjlzqurhukbygfft.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eWp5amx6cXVyaHVrYnlnZmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzM5NzgsImV4cCI6MjA0NjMwOTk3OH0.-pB9DrgV1uDyGudt5MQkwKJqB5CT-YfNGOzgxjjvlp0'
        const supabase = createClient(supabaseUrl, supabaseKey)
const supabase2 = new SupabaseClient(supabaseUrl, supabaseKey)
        

let user = localStorage.getItem("user")
let user_Txt = document.querySelector("#nick"),
    ism = document.querySelector("input#ism"),
    ismTxt = document.querySelector(".ism"),
    fam = document.querySelector("input#fam"),
    famTxt = document.querySelector(".fam"),
    userTxt = document.querySelector(".user"),
    users = document.querySelector("input#user"),
    tel = document.querySelector("input#tel"),
    telTxt = document.querySelector(".tel"),
    address = document.querySelector("input#address"),
    addressTxt = document.querySelector(".address"),
    saveBtn = document.querySelector("button#save"),
    birth = document.querySelector("input#date"),
    birthTxt = document.querySelector(".date");


