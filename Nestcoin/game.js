var bonusCoin = document.querySelectorAll(".coin");
var bottomIcon = document.querySelectorAll("#bottom");
var topIcon = document.querySelectorAll("#top");
var scoreReader = document.querySelector(".score");

/*function coinEffect() {
    for (var i = bonusCoin.length - 1; i >= 0; i--) {
        bonusCoin[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                console.log(currentCoin);
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
    for (var i = bottomIcon.length - 1; i >= 0; i--) {
        bottomIcon[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                console.log(currentCoin);
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
    for (var i = topIcon.length - 1; i >= 0; i--) {
        topIcon[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                console.log(currentCoin);
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
    
}
coinEffect();

function board (){
   if(coinEffect()){
    scoreReader.textContent = "4000" - "50";
    }
    
}
board();
var bonusCoin = document.querySelectorAll(".coin");
var scoreReader = document.querySelector(".score");*/

function coinEffect() {
    for (var i = bonusCoin.length - 1; i >= 0; i--) {
        bonusCoin[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                updateScore();
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
    for (var i = bottomIcon.length - 1; i >= 0; i--) {
        bottomIcon[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                updateScore();
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
    for (var i = topIcon.length - 1; i >= 0; i--) {
        topIcon[i].addEventListener("click", function() {
            var currentCoin = this; // Get the clicked coin element
            if (currentCoin.style.visibility === "visible") {
                currentCoin.style.visibility = "hidden";
                updateScore();
            } else {
                currentCoin.style.visibility = "hidden";
            }
        });
    }
}

coinEffect();

function updateScore() {
    var currentScore = scoreReader.textContent;
    var newScore = currentScore - 20; 
    scoreReader.textContent = newScore;
   
}





