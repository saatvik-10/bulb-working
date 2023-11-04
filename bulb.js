let btn=document.getElementById('toggle')
let bulb=document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)

function toggleBulb(_event){
    if(btn.textContent.includes('On')){
    bulb.src="./bulbOn.jpg"
    btn.textContent="Turn Off" 
    }
    else{
        bulb.src="./bulbOff.jpg"
        btn.textContent="Turn On"
    }
}

