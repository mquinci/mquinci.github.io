const button4 = document.getElementById("button4");

button4.addEventListener("click", ()=>{

    if(button4.innerText === "Freedom to Make Life Choices"){
        button4.innerText = "Similar to Social Support, Freedom to Make Life Choices (FMLC) is based on the question: “Are you satisfied or dissatisfied with your freedom to choose what you do with your life?”";
    }else{
        button4.innerText= "Freedom to Make Life Choices";
    }
});