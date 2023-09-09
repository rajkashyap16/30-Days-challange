const img = document.querySelector('#profile-pic'),
input = document.querySelector('#input-file');

input.addEventListener('change', ()=>{
    img.src = URL.createObjectURL(input.files[0]);
});

