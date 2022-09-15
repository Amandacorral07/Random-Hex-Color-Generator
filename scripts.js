const hex = document.querySelector('.hex')
const button1 = document.querySelector('.generate')
const button2 = document.querySelector('.body')

const generateBackgroundColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8)
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor
}
const generateContainerColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8)
    let container = document.getElementById('container')
    container.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor
}

button1.addEventListener('click', generateBackgroundColor)
button2.addEventListener('click', generateContainerColor)

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2,8);

// subtring extracts character from string, it takes two parameters



console.log(color)