sec=0;
min=0;
hr=0;
let timer
const p= document.getElementById('timer')

function incSec(){
    sec+=1;
    if(sec===60){
        min+=1
        sec=0
        if(min==60){
            hr+=1
            min=0
            sec=0
        }
    }

    p.innerHTML= `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}


function start(){
    var startBtn = document.getElementById('strtbtn')
    if(startBtn.textContent==='START'){
        timer = window.setInterval(incSec,1000)
        startBtn.textContent='STOP'
    }

    else{
            window.clearInterval(timer)
            sec= 0
            min= 0
            hr = 0
            p.innerHTML = '00:00:00';
            startBtn.textContent='START'
            document.getElementById('pause').innerHTML='PAUSE   '
        
    }
    
}

function pause(e){

    var pauseBtn = document.getElementById('pause')
    if(pauseBtn.textContent === 'RESUME'){
        timer = window.setInterval(incSec,1000)
        pauseBtn.textContent = 'PAUSE'
    }else{
        if(document.getElementById('strtbtn').textContent=='STOP'){
            window.clearInterval(timer)
            timer = 'paused'
            pauseBtn.textContent='RESUME'
        }
    }  
}


function lap(){
    if(document.getElementById('strtbtn').textContent==='STOP'){
        var lapbtn = document.querySelector('ul')
        var li = document.createElement('li')
        li.textContent = `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
        lapbtn.appendChild(li)
        document.getElementById('RESET').style.display = 'block'
    }
}


function reset(){
    var lapbtn = document.querySelectorAll('li')
    for(let i=0;i<lapbtn.length ;i++){
        var ul = document.querySelector('ul')
        ul.removeChild(lapbtn[i])
    }
    document.getElementById('RESET').style.display = 'none'

}