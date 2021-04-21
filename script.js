//bring in all panels
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    //event listener for clicking
    panel.addEventListener('click',  ()=> {
        //remove all active classes
        removeActiveClasses();
        //add active class to clicked panel
        panel.classList.add('active');

    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}