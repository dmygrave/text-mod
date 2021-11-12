let password = document.querySelector('.password')
let showPassword = document.querySelector('.show-password')
let securityBar = document.querySelector('.security-bar')


//Для того, чтобы при нажатии на чекбокс "Показать пароль" - показывало пароль
showPassword.onchange = function () {
    if (showPassword.checked) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}

password.oninput = function () {
     securityBar.style.width = password.value.length * 10 + '%'     //умножаем длину пароля на 10 , чтобы выводить полоску под строкой ввода пароля в зависимости от его длины для наглядности  
}