function saklar(lamp) {

  const tombol = document.getElementById("tombol-tgl");
  const tombol1 = document.getElementById("tombol-tgl2");
  const tombol2 = document.getElementById("tombol-tgl3");
    
  const lampu1 = document.querySelector("#lampu1");
  const lampu2 = document.querySelector("#lampu2");
  const lampu3 = document.querySelector("#lampu3");

  if (tombol.checked) {
    lampu1.src = 'assets/images/on.gif'    
  } else {
    lampu1.src = "assets/images/off.gif";
  }
  if (tombol1.checked) {
    lampu2.src = 'assets/images/on.gif'    
  } else {
    lampu2.src = "assets/images/off.gif";
  }
  if (tombol2.checked) {
    lampu3.src = 'assets/images/on.gif'    
  } else {
    lampu3.src = "assets/images/off.gif";
  }

}