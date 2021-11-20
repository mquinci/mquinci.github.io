const button4 = document.getElementById("button4");

button4.addEventListener("click", ()=>{

    if(button4.innerText === "Freedom to Make Life Choices"){
        button4.innerText = "Purple";
    }else{
        button4.innerText= "Freedom to Make Life Choices";
    }
});