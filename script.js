function saklar(params) {
  const lampu1 = document.querySelector('#lampu1');
  if( params == 'on' ) {
    lampu1.src = 'assets/images/on.gif';
  } else if ( params == 'off' ) {
    lampu1.src = 'assets/images/off.gif';
  }

  return lampu1;
  
}