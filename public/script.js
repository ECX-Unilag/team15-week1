let show = document.getElementById('show');
let password = document.getElementById('password');

// Toggles password visibility
show.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});