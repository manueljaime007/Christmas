const menuBtn = document.querySelector('.menu__btn')
const opcontainer = document.querySelector('.options__container')
const closeOp = document.querySelector('#close_options_popup')

console.log(
    `menuBtn: ${menuBtn}`,
    `opcontainer: ${opcontainer}`,
    `closeOp: ${closeOp}`
);
menuBtn.addEventListener('click', () => {
    opcontainer.classList.add('open')
    menuBtn.style.display = 'none'
})


closeOp.addEventListener('click', () => {
    opcontainer.classList.remove('open')
    menuBtn.style.display = 'block'
})