window.addEventListener('load', () => {
    const input = document.querySelector('#longUrl');
    input.addEventListener('input', (e) => {
        let content = e.target.value;
        let isCorrect = content.includes('https://') || content.includes('http://')
        if(isCorrect) {
            input.classList.add('is-valid');
        }
    })
})