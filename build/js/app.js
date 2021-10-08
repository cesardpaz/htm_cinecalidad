//const
const menuToggler = document.querySelector('#menu-toggler');
const tagList     = document.querySelector('.tagList__cnt');

//listeners
const loadEventListeners = () => {
    
    menuToggler.addEventListener('click', openCategories);

}
loadEventListeners();


//Functions

function openCategories(e) {
    e.preventDefault();
    
    if(tagList.classList.contains('trunc')) {
        tagList.classList.remove('trunc');
        tagList.classList.add('ad-grid');
    } else {
        tagList.classList.add('trunc');
        tagList.classList.remove('ad-grid');
    }
    
}