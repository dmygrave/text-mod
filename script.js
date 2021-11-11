let longread = document.querySelector('.longread')
let colorSetting = document.querySelector('.color-setting')
let sizeSetting = document.querySelector('.size-setting')
let pixels = document.querySelector('.pixels')

colorSetting.onchange = function () {
    longread.style.color = colorSetting.value
}

sizeSetting.onchange = function () {
    pixels.textContent = sizeSetting.value
    longread.style.fontSize = sizeSetting.value + 'px'
}