const button3 = document.getElementById("button3");

button3.addEventListener("click", ()=>{

    if(button3.innerText === "Social Support"){
        button3.innerText = "Social Support is a GWP measure based on the binary response (0 or 1) to the question “If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?”";
    }else{
        button3.innerText= "Social Support";
    }
});