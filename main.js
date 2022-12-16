
    const plus-btn= document.querySelector('plus-btn'),
    minus-btn=document.querySelector('minus-btn'),
    Quant=document.querySelector('Quant'),
    let a=1;
    plus-btn.addEventlistener("click",()=>{
        a++;
        Quant.innerText=a;
        console.log(a);
    });
    minus-btn.addEventlistener("click",()=>{
       if(a>1){
           a--;
           Quant.innerText=a;
       }
   });
