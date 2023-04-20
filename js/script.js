  let imgsrc=document.querySelectorAll("img");
  for(let i=0;i<imgsrc.length;i++){
    imgsrc[i].addEventListener("click",function(){
        if(imgsrc[i].style.opacity==0.3)
        {
          imgsrc[i].style.opacity=1;
        }
        else{
          imgsrc[i].style.opacity=0.3;
        }
    });
  }
//opacity clicker
let all=false;
document.getElementById("myButton").addEventListener("click",function(){
  for(let i=0;i<imgsrc.length;i++)
  {
    if(all==false){
      imgsrc[i].style.opacity=0.3;
    }
    else
    imgsrc[i].style.opacity=1;
    
  }
  all=!(all);
});


  
/*
Things to do
- check axe, webtools 
- change media query for grid, when increases size get all on the page 
- make grid different from hw 
- make flex different from homework 
- use responsive design on the header 
- use resposnvie on blocks 

*/