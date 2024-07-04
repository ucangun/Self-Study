let isRunning = false;
let centiSeconds = 0;
let timer;

let kronometre = document.getElementById('Kronometre')
const baslatDurdur =document.getElementById('baslatDurdur')
const sifirla = document.getElementById('sifirla')

baslatDurdur.addEventListener('click', startStop)
sifirla.addEventListener('click', reset)

baslatDurdur.textContent='▶'
sifirla.textContent ='⏹'

function updateDisplay() {
    const minutes =Math.floor(centiSeconds/6000)
    const seconds =Math.floor((centiSeconds%6000)/100)
    const centi = centiSeconds % 100;
    kronometre.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centi.toString().padStart(2, '0')}`;
    
}

function startStop() {
if (isRunning) {
    clearInterval(timer);
    baslatDurdur.textContent='▶'
} else {
    timer=setInterval(()=>
    {
        centiSeconds++;
        updateDisplay()

    },10);
    baslatDurdur.textContent='⏸'
}
isRunning =!isRunning;
    
}

function reset() {
    clearInterval(timer)
    centiSeconds=0;
    isRunning=false;
    updateDisplay();
    baslatDurdur.textContent='▶'



}

updateDisplay()