const submit = document.getElementById('submit-button');
const email = document.getElementById('input-email');
const error = document.getElementById('error-message');
submit.addEventListener('click', function (){
        if(email.value === ''){
            error.style.display = 'block';
        }
    }
);


