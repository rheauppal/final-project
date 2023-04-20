const images = document.querySelectorAll('.fashion-board img');

document.getElementById("pics1").addEventListener("click",function(){

    document.querySelector(".fashion-board").classList.add("one");
    document.querySelector(".fashion-board").classList.remove("img-fluid");
    document.querySelector(".fashion-board").classList.add("img-fluid-one");
    document.querySelector("#pics1").style.display="none";
    console.log("one");
});

