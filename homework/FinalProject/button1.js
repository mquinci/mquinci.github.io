const button1 = document.getElementById("button1");

button1.addEventListener("click", ()=>{

    if(button1.innerText === "Happiness Score"){
        button1.innerText = "Also referred to as “Life Ladder”, Happiness Scores are a subjective measure of well-being that can be visualized as a ladder with rungs labeled 0 through 10. The top of the ladder, or rung 10, represents the best possible life, while the bottom of the ladder, or rung 0, represents the worst possible life. This measure is taken from the Gallup World Poll (GWP).";
    }else{
        button1.innerText= "Happiness Score";
    }
});