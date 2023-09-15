let container = document.querySelector('.container');
let unsplashUrl = 'https://source.unsplash.com/random/';
let row = 10; 

for( let i = 0 ; i< row *3 ; i++){
    let img = document.createElement('img');

    img.src = `${unsplashUrl}${getRandom()}`;
    container.appendChild(img)
}

function getRandom(){
 
    return  Math.floor(Math.random()* 10) + 300;
}




// array of random names
// random tech names in array










