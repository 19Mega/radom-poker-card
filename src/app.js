function start() {
  /* 
  <i class="bi bi-suit-heart-fill"></i>
  <i class="bi bi-suit-diamond-fill"></i>
  <i class="bi bi-suit-club-fill"></i>
  <i class="bi bi-suit-spade-fill"></i>

  text-black
  text-danger

  */
  // let topIcon = document.getElementById("top-icon")
  // console.log("1st- topIcon example: ",topIcon)

  let iconsList = ["bi-suit-heart-fill text-danger","bi-suit-diamond-fill text-danger","bi-suit-club-fill text-black","bi-suit-spade-fill text-black"]
  let numberList = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let randomIconNumber = Math.floor((Math.random()*iconsList.length))
  let randomNumber = Math.floor((Math.random()*numberList.length))

  // TOP ICON
  let topIcon = document.querySelectorAll("i")[0]
  topIcon.className = iconsList[randomIconNumber]
  //console.log(">>>",topIcon[1]) // icono arriba
  //console.log(">>>",topIcon[2]) // color

  // BOTTOM ICON
  let bottomIcon = document.querySelectorAll("i")[1]
  bottomIcon.className = iconsList[randomIconNumber]
  //console.log(">>>",bottomIcon[1]) // icono abajo
  //console.log(">>>",bottomIcon[2]) // color
 
  // CENTER ICON
  let centerIcon = document.getElementById("center-icon")
  centerIcon.innerHTML =  numberList[randomNumber]

  let cardBorder = document.getElementById("card-border")

  if (iconsList[randomIconNumber] === "bi-suit-heart-fill text-danger" || iconsList[randomIconNumber] === "bi-suit-diamond-fill text-danger") {
    centerIcon.className = "text-danger"
    cardBorder.className = "border rounded border-danger border-5 w-25 d-flex flex-column justify-content-between"
    
  }

  console.log("probando >>", topIcon)
  console.log(randomIconNumber)
  console.log(randomNumber)

  cuentaRegresiva()
  
};

window.onload = start()

function myFunction(){
  location.reload(); 
}

document.getElementById("myButton").addEventListener("click", myFunction);




function cuentaRegresiva () { 
let countdownElement = document.querySelector('p');
let countdown = 10

const countdownInterval = setInterval(() => {
  countdownElement.textContent = countdown
  countdown--;
  
  if (countdown < 0) { 
    clearInterval(countdownInterval);
    countdownElement.textContent = "¡Tiempo!"
    location.reload(); 
  }
  
}, 1000)



}