const h3 = document.querySelector('h3');
const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', () =>{
    h3.innerText = randomColorGenerator();
    body.style.background = randomColorGenerator();
    h3.style.color = 'white';
})

function randomColorGenerator() {//randdom color generator
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green} ,${blue})`;
}