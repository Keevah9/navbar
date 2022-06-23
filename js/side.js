const sideBtn = document.querySelector('.sideBarBtn')
const closeBtn = document.querySelector('.closeBtn')
const sideBar = document.querySelector('.sideBar')

sideBtn.addEventListener('click', _ =>{
    sideBar.classList.toggle('showSideBar')
    sideBtn.classList.add('hide')
})
closeBtn.addEventListener('click', _ =>{
    sideBar.classList.toggle('showSideBar')
    sideBtn.classList.remove('hide')
})

