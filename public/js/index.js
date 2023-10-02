window.addEventListener('load', () => {
    const input = document.querySelector('#longUrl');
    const btn = document.querySelector('#button-addon2');
    input.addEventListener('input', (e) => {
        let content = e.target.value;
        let isCorrect = content.includes('https://') || content.includes('http://')
        if(isCorrect) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            btn.disabled = false;
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            btn.disabled = true;
        }
    })
})