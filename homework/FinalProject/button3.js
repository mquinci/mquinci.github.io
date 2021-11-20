const button3 = document.getElementById("button3");

button3.addEventListener("click", ()=>{

    if(button3.innerText === "Social Support"){
        button3.innerText = "Red";
    }else{
        button3.innerText= "Social Support";
    }
});