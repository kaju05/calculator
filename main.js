let btns=document.querySelectorAll('button');
let inp=document.querySelector('input');
inp.style.color='white';
inp.value="";
function audio(){
    let audio=new Audio("audio.wav");
    audio.play();
}
for(let btn of btns){
    btn.style.backgroundColor='white';
    btn.addEventListener('click',function(e){    
        audio();
        let btntxt=e.target.innerText;
        if(btntxt==='C'){
            inp.value='';
        }
        else if(btntxt==='='){
            try{
                
                inp.value=eval(inp.value);
            }
            catch(err){
                inp.value='invalid';
            }
        }
        else{
            inp.value+=e.target.innerText;
        }

    })
}