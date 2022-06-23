const toggle = document.querySelector('.toggle') 
const links = document.querySelector('.links')

toggle.addEventListener('click', _ => {
    links.classList.toggle('showLinks')
})


