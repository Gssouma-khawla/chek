

var plus = document.querySelectorAll(".plus-btn")
var quant=document.querySelectorAll(".Quant")
for ( let y=0 ; y<plus.length; y++){
    plus[y].addEventListener("click", function(){
plus[y].previousElementSibling.value++;
totalPrice()
})
}


var minus=document.querySelectorAll(".minus-btn")
//console.log(minus)
//console.log(quant)
for (let f=0; f<minus.length;f++){
    minus[f].addEventListener("click",function(){
        if(minus[f].nextElementSibling.value>1){
            minus[f].nextElementSibling.value--;
            totalPrice()
    }
})
}

var deleteBtn = document.querySelectorAll(".delete")
for (let x=0 ; x<deleteBtn.length; x++){
 deleteBtn[x].addEventListener("click",function(){
 deleteBtn[x].parentElement.remove();
 totalPrice()
 })
}

var heart=document.getElementsByClassName('like')
console.log(heart)
for (let f=0; f<heart.length;f++){
    heart[f].addEventListener("click",function(){
    if (heart[f].style.color==="black") {
        heart[f].style.color="red"
   }
  else{
    (heart[f].style.color="black")
  }})
}




function totalPrice(){
   let price=document.querySelectorAll(".price")
    let quan =document.querySelectorAll(".Quant")
    let final=document.querySelector("#finalPrice")
    let sum=0
    for( let x=0;x<price.length;x++){
   sum += price[x].innerHTML*quan[x].value
   console.log(price[x].innerHTML)
    }
    final.value=sum  
}

 

