document.querySelector('#more').addEventListener('click', showSubNav);

function showSubNav() {
    document.querySelector('#sub-nav').classList.toggle('show');
    document.querySelector('#sub-nav').classList.toggle('hide');
    document.querySelector('.plus-icon').classList.toggle('rotate');
}