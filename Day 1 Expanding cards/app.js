//here we select all the panels using the query selector all 
const panels = document.querySelectorAll(".panel");


panels.forEach( (panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
}))

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}


//  Day 1 Expanding Card using HTML / CSS AND JS 
// Name : Raj kashyap 