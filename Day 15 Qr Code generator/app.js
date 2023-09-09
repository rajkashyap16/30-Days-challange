
const qrImage = document.querySelector("img")
const qrText = document.querySelector("input")
const button = document.querySelector("button")
const imgBox = document.querySelector("#imgBox")

button.addEventListener('click',()=>{
    qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
    imgBox.classList.add("show-img");
})
// https://goqr.me/api/