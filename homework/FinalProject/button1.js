const button1 = document.getElementById("button1");

button1.addEventListener("click", ()=>{

    if(button1.innerText === "Happiness Score"){
        button1.innerText = "Blue";
    }else{
        button1.innerText= "Happiness Score";
    }
});