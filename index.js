const inputColor = document.getElementById('input-color')
const colorSchemeMode = document.getElementById('color-scheme-mode')
const getColor = document.getElementById('get-color')
const color = document.getElementsByClassName('color')
const colorNames = document.getElementsByClassName('color-names')
let i = 0
// console.log(inputColor.value)
// console.log(colorSchemeMode.value)
fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.slice(1, inputColor.value.length)}&mode=${colorSchemeMode.value}`)
        .then(res=>res.json())
        .then(data=>
        { 
            data.colors.forEach(function(colorHex){
                // console.log(colorHex.hex.value)
                color[i].style.backgroundColor = colorHex.hex.value
                colorNames[i].textContent = colorHex.hex.value
                i++
            })
        })
getColor.addEventListener('click',function(){
    i = 0
    // console.log(inputColor.value.slice(1, inputColor.value.length))
    // console.log(colorSchemeMode.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.slice(1, inputColor.value.length)}&mode=${colorSchemeMode.value}`)
        .then(res=>res.json())
        .then(data=>
        { 
            data.colors.forEach(function(colorHex){
                // console.log(colorHex.hex.value)
                color[i].style.backgroundColor = colorHex.hex.value
                colorNames[i].textContent = colorHex.hex.value
                i++
            })
        })
})


