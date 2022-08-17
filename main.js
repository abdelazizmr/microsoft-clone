let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',()=>{
    document.querySelector('.mobile').classList.toggle('show')
})

window.addEventListener('scroll',()=>{
    console.log('scrolling');
    document.querySelector('.mobile').classList.remove('show')
})