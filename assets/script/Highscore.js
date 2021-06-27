//Script for calling the score list

// Selectors
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores 

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retrieve locally stored data

var allScores = localStorage.getItem("allScores");

allScores = JSON.parse(allScores);

    

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.append(createLi);

    }
    
}



// Event listener to move to index page

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});