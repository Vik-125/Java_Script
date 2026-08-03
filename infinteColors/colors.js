// Generating random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';

    for(let i=0;i<6;i++){
        color += hex[Math.floor((Math.random() * 16))]
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    document.querySelector('h1').innerHTML = "Stop should not change the background color any second!!!"
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 500)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    document.querySelector('h1').innerHTML = "Start should change the background color every second!!!"
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').
addEventListener('click',startChangingColor)

document.querySelector('#stop').
addEventListener('click',stopChangingColor)