window.addEventListener('load', () => {
    console.log('Hola');
    const mail = document.querySelector('#floatingInput');
    const password = document.querySelector('#floatingPassword');
    const checkPassword = document.querySelector('#floatingPasswordCheck');
    const category = document.querySelector('#registerCategory');
    const modal = document.querySelector('#exampleModal');
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const textPasswordConditions = document.querySelector('.fst-italic');
    const borderPassword = document.querySelector('#borderPw');

    console.log({ mail, password, checkPassword, category, modal, btnOpenModal });

    btnOpenModal.addEventListener('click', () => {
        setTimeout(() => {
            mail.focus();
        }, 500);
    })

    mail.addEventListener('input', (e) => {

        let value = e.target.value;
        let length = value.length;
        let isCorrect = value.includes('@') && value.includes('.');

        if(length === 0 || !isCorrect || (length === 0 && !isCorrect)){
            mail.classList.add('is-invalid');
            mail.classList.remove('is-valid');
        }

        if(length > 0 && isCorrect) {
            mail.classList.add('is-valid');
            mail.classList.remove('is-invalid');
        }

    })

    password.addEventListener('input', (e) => {
        textPasswordConditions.textContent = '';
        borderPassword.remove();
        let value = e.target.value;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value);
        const isLengthValid = value.length >= 8;

        if(isLengthValid && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar){
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        } else {
            password.classList.remove('is-valid');
            password.classList.add('is-invalid');
        }

    })

    checkPassword.addEventListener('input', (e) => {
        let passwordContent = password.value;
        let confirmPassword = e.target.value === passwordContent
        
        if(confirmPassword){
            checkPassword.classList.add('is-valid');
            checkPassword.classList.remove('is-invalid');
        } else {
            checkPassword.classList.add('is-invalid');
            checkPassword.classList.remove('is-valid');
        }
    })

    category.addEventListener('input', e => {
        let value = e.target.value;
        if(value.length === 0){
            category.classList.add('is-invalid');
            category.classList.remove('is-valid');
        } else {
            category.classList.add('is-valid');
            category.classList.remove('is-invalid');
        }
    })
})