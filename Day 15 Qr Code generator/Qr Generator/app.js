const input = document.querySelector('input')
const button = document.querySelector('button')
const img = document.querySelector('img')
const qrImg = document.querySelector('#qrImage')

    button.addEventListener('click', ()=>{
        img.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        img.classList.add('img');
        
        
    })

