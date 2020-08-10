let show = document.getElementById('show');
let password = document.getElementById('password');

// Toggles password visibility
show.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        show.innerText = 'Hide';
    } else {
        password.type = 'password';
        show.innerText = 'Show';
    }
});