const overlay = document.querySelector('.overlay')
const wrapper = document.querySelector('.wrapper')
const sendBtn = document.querySelector('#see-cards__btn')
const opcontainer = document.querySelector('.options__container')
const closeOp = document.querySelector('#close_options_popup')

sendBtn.addEventListener('click', () => {
    wrapper.classList.add('closed')
    overlay.classList.add('active')
    opcontainer.classList.add('open')
})

overlay.addEventListener('click', () => {
    wrapper.classList.remove('closed')
    overlay.classList.remove('active')
    opcontainer.classList.remove('open')
})

closeOp.addEventListener('click', () => {
    wrapper.classList.remove('closed')
    overlay.classList.remove('active')
    opcontainer.classList.remove('open')
})