const txt = document.querySelector('input');
const desktop = document.querySelector('.desktop');
const mobile = document.querySelector('.mobile');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if(txt.value === '') {
        txt.dataset.error = 'error';
        desktop.dataset.error = 'error';
        mobile.dataset.error = 'error';
    } else {
        txt.dataset.error = 'ok';
        desktop.dataset.error = 'ok';
        mobile.dataset.error = 'ok';
        e.preventDefault();
    }
});