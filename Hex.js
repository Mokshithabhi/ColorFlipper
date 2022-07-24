 const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

 const btn=document.getElementById('btn')
 const color=document.querySelector('.color')

 btn.addEventListener("click",()=>{
    let firstHex="#"
    for (let i=0;i<6;i++){// because the hexa should contain 6 elements
       firstHex += hex[randomNo()]
      
    }
    console.log(firstHex);
    color.textContent =firstHex
    document.body.style.backgroundColor = firstHex
 })

 function randomNo(){
    return Math.floor(Math.random()*hex.length)
 }