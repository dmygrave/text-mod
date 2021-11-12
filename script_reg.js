let password = document.querySelector('.password')
let showPassword = document.querySelector('.show-password')
let securityBar = document.querySelector('.security-bar')


//Для того, чтобы при нажатии на чекбокс "Показать пароль- показывало пароль"
showPassword.onchange = function () {
    if (showPassword.checked) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}