window.addEventListener('load', () => {
    const divContainer = document.querySelector('.input-group');
    const input = document.querySelector('#longUrl');
    const btn = document.querySelector('#button-addon2');

    const errorMessage = document.createElement('p');
    errorMessage.classList.add('text-danger');


    input.addEventListener('input', (e) => {
        let content = e.target.value;
        let isCorrect = content.includes('https://') || content.includes('http://')
        if(isCorrect) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            btn.disabled = false;
            errorMessage.textContent = '';
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            btn.disabled = true;
            errorMessage.textContent = 'La url debe comenzar con "https://" o "http://"';
        }
        divContainer.insertBefore(errorMessage, btn.nextSibling);
    })
})