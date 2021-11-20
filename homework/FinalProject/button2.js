const button2 = document.getElementById("button2");

button2.addEventListener("click", ()=>{

    if(button2.innerText === "Healthy Life Expectancy"){
        button2.innerText = "Green";
    }else{
        button2.innerText= "Healthy Life Expectancy";
    }
});