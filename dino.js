const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("score");

// var hs = document.createElement('DIV');
// hs.innerHtml = "this is a heading";
// score.appendChild(hs);

var highScore = localStorage.getItem('high_score');
var hs = document.createElement('div');
document.body.appendChild(hs);
hs.innerHTML = `Your High Score : ${highScore}`;
hs.classList.add("hs");




function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
document.addEventListener('keypress', () => {
    if(!character.classList.contains('animate')){
        jump();
    }
});
setInterval(() =>{
    score.innerText++;
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 0){
        block.style.animation="none";
    }
    else{
        block.style.animation="";
    }
   if(blockLeft<50 && blockLeft>0 && characterTop>=150){
        alert("Game Over! Your Score: "+ score.innerText + "\nPlay again?");
        // console.log(Math.max(parseInt(score.innerText),highScore));
        localStorage.setItem("high_score",Math.max(parseInt(score.innerText),highScore));
        location.reload();
   }
},50);