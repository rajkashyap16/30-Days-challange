const btn = document.getElementById('button')
const  toasts = document.getElementById('toasts')


const message = [ 

    'Message One ',
    'Message Two ',
    'Message Three ',
    'Message Four '
]

btn.addEventListener('click', () => createNotification())
function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage(){
    return message[Math.floor(Math.random() * message.length)]
}
