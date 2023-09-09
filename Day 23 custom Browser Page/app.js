let inp = document.querySelector('input')
let form = document.querySelector('form')



    form.addEventListener('submit', (even) => {
        event.preventDefault();
    let val = inp.value
    let url = "https://www.google.com/search?q=" + val
    window.open(url, target = "_self")

})
