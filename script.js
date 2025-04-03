function saklar(lamp) {

  const tombol = document.getElementById("tombol-tgl");
    
  const lampu1 = document.querySelector("#lampu1");
  const lampu2 = document.querySelector("#lampu2");
  const lampu3 = document.querySelector("#lampu3");
  
  if( tombol.checked ) {
    if (lamp == 1) {
      lampu1.src = "assets/images/on.gif";
    } else if (lamp == 2) {
      lampu2.src = "assets/images/on.gif";
    } else if (lamp == 3) {
      lampu3.src = "assets/images/on.gif";
    }
  } else {
    if (lamp == 1) {
      lampu1.src = "assets/images/off.gif";
    } else if (lamp == 2) {
      lampu2.src = "assets/images/off.gif";
    } else if (lamp == 3) {
      lampu3.src = "assets/images/off.gif";
    }
  }

}