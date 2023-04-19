

  let imgsrc=document.querySelectorAll("img");
  for(let i=0;i<imgsrc.length;i++){
    imgsrc[i].addEventListener("click",function(){
        let x= imgsrc[i].alt;
        console.log(x);
    });
  }
