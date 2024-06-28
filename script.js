var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
let resultPara = document.querySelector(".result h3");


var randomNum1 = Math.floor(Math.random()*6)+1;

var randomImg = `./images/dice${randomNum1}.png`

image1.setAttribute("src", randomImg);


var randomNum2 = Math.floor(Math.random()*6)+1;


var randomImg2 = `./images/dice${randomNum2}.png`

image2.setAttribute("src", randomImg2);

if(randomNum1 > randomNum2){
    resultPara.innerHTML = "player 1 wins";
}
else if(randomNum2 > randomNum1){
resultPara.innerHTML = "player 2 wins";
}
else if(randomNum1 = randomNum2)
{
    resultPara.innerHTML = "it's  Draw";
}


function refresh(){
    window.location.reload("Refresh")
}
