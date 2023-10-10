const setBg = () => {
    const randomColor = Math.floor(Math.random()*1000);
    
    document.body.style.backgroundColor = "#"+ randomColor;
    
    color.innerHTML = "#" + randomColor;
    
  }
  
  genNew.addEventListener("click", setBg);
  setBg();


  