const reveal = document.querySelector('.reveal');

function makeVisible(el) {
    
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom > 0 && top > window.innerHeight) {
         return el.classList.add('reveal_active')
    }
}

makeVisible(reveal);
