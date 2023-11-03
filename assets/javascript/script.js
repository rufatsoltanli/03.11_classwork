const open1 = document.querySelector(".n1 .open")
const open2 = document.querySelector(".n2 .open")
const open3 = document.querySelector(".n3 .open")
const open4 = document.querySelector(".n4 .open")

const blur1 = document.querySelectorAll(".n1 .blur")
const blur2 = document.querySelectorAll(".n2 .blur")
const blur3 = document.querySelectorAll(".n3 .blur")
const blur4 = document.querySelectorAll(".n4 .blur")

open1.addEventListener("click",function () {
    blur1.style.filter.remove

})