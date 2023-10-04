window.addEventListener('load', () => {
    const formLoginAdmin = document.querySelector('#formLoginAdmin')
    const mail = document.querySelector('#floatingInput')
    const password = document.querySelector('#floatingPassword');
    const initSessionBtn = document.querySelector('#btnSubmit');

    console.log({ formLoginAdmin, mail, floatingPassword, initSessionBtn });

    const checkErrors = () => {
        let arr = [mail, password]
        const allValid = arr.every(e => e.classList.contains('is-valid'));
        allValid ? initSessionBtn.disabled = false : initSessionBtn.disabled = true;
    }

    setTimeout(() => {
        mail.focus();
    }, 200);

    mail.addEventListener('input', (e) => {

        let value = e.target.value;
        let length = value.length;
        let isCorrect = value.includes('@') && value.includes('.');
        console.log(isCorrect);

        if(length === 0 || !isCorrect || (length === 0 && !isCorrect)){
            mail.classList.add('is-invalid');
            mail.classList.remove('is-valid');
        }

        if(length > 0 && isCorrect) {
            mail.classList.add('is-valid');
            mail.classList.remove('is-invalid');
        }
        checkErrors();
    })

    password.addEventListener('input', e => {
        let value = e.target.value.length;

        if(value < 8) {
            password.classList.add('is-invalid');
            password.classList.remove('is-valid');
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
        checkErrors();
    })
})