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
     let passLength = password.value.length
     securityBar.style.width = passLength * 10 + '%'     //умножаем длину пароля на 10 , чтобы выводить полоску под строкой ввода пароля в зависимости от его длины для наглядности  
     if (passLength <= 5) {
      securityBar.style.backgroundColor = 'red'         //для покраски шкалы в красный цвет если пароль короткий
     } else if (passLength >5 && passLength <10) {      // альтернативная ветка else if с двойным условием и логическим И для дальнейшей окраски
      securityBar.style.backgroundColor = 'gold'
     } else {
         securityBar.style.backgroundColor = 'green'   //если оба условия не "выполняются" , то будет зеленым
     }

}
