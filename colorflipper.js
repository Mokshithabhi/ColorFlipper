const colors = ["green","red","rgba(133,122,200)","#f15025","#ff6347","rgb(106, 90, 205)","rgb(100, 100, 100)","rgba(255, 99, 71, 0.6)"]

// we are selecting the color in the span i.e in the container 
const color=document.querySelector(".color")
// we have to connect the button to js part so..
const btn = document.getElementById('btn');
//Now adding a eventListner to an button --- we can also add an onclick function to an button
btn.addEventListener('click',()=>{
   // here we are targeting the body to show the colours
   //so we are manipulating the normal colours not hexa colours so we have stored it in an array (colors variable) 
    
    // const randomNumber= 2;// we are just assigning it to 2 for timebeing
    const randomNumber= getRandomNumber() ;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    // now we need to display my textcontent according to the background so
    color.textContent = colors[randomNumber]
  
})

function getRandomNumber(){
   return Math.floor( Math.random()*colors.length) // here we are multiplying with arr.length because we need upto the length of the array (i.e random no*length)
}
