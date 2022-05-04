document.addEventListener("DOMContentLoaded", function() {
    if (window.screen.width < 765) {
        const menu = document.getElementById('nav-mobile')
        const trigger = document.getElementById('nav-trigger')

        if (trigger){
            trigger.addEventListener('click', (e)=>{
                e.stopPropagation()
                menu.classList.toggle('show')
            })
        }
    }
})
