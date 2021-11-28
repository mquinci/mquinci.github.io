const button2 = document.getElementById("button2");

button2.addEventListener("click", ()=>{

    if(button2.innerText === "Healthy Life Expectancy"){
        button2.innerText = "Healthy Life Expectancy (HLE) data are based on life expectancy from birth and were obtained from the World Health Organization’s (WHO) Global Health Observatory data repository.";
    }else{
        button2.innerText= "Healthy Life Expectancy";
    }
});