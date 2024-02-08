function game() {

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors', 'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    let userChoice = '';
    let sheldonChoice = '';
    const userChoiceElement = document.querySelector('.user-choice');
    const pickedElement = document.querySelector('.picked');
    const userPickedElement = document.querySelector('.user-pick');
    const sheldonPickedElement = document.querySelector('.sheldon-pick');
    const resultElement = document.querySelector('.result');
    const resultTitleElement = resultElement.querySelector('.title');
    const playAgainBtn = document.querySelector('.play-again')
    let currentScore = null;

    window.addEventListener('load', () => {

        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (event) => {
                userChoice = getUserChoice(event.target);
                sheldonChoice = getSheldonChoice()

                startGame();
            })
        })
        playAgainBtn.addEventListener('click', tryAgain);
    })

    function startGame() {
        calculateWinner(userChoice, sheldonChoice)
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden');
        clearResultsBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, sheldonChoice);
    }


    // return the second item in the class-list array which in this case indicates which option was selected, will need updating with images
    function getUserChoice(target) {
        if (target.nodeName === "IMG") {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }

    // a randomised function that "sheldon" uses to select an option from the five available

    function getSheldonChoice() {
        return choices[Math.floor(Math.random() * 5)];
    }

    //calculates whether the user has won or not by comparing the concatenated string values of the user choice and sheldon choice against an array of possible win combinations

    function calculateWinner(usercard, sheldoncard) {
        if (usercard === sheldoncard) {
            resultTitleElement.innerText = "I don't need sleep, I need answers";
            incrementTries();
        } else if (getUserWinsStatus(usercard + sheldoncard)) {
            resultTitleElement.innerText = "Alright, I'll bow to social pressure";
            incrementScore();
        } else {
            resultTitleElement.innerText = 'bazinga';
            incrementSheldonScore();
        }

    }

    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);
    }

    //function that builds user and sheldon choice elements using classname, function will need editing when images are added
    //update the choices on the results block (hidden until an option is picked)
    function buildChoiceElement(isItUserElement, className) {
        const choiceElement = document.createElement('div');
        choiceElement.classList = [`game-card ${className}`];
        choiceElement.innerHTML = `<img src="images/icon-${className}.svg" alt="${className}">`;
        if (isItUserElement) {
            userPickedElement.append(choiceElement);
        } else {
            sheldonPickedElement.append(choiceElement);

        }

    }
//allows the player to try again
    function tryAgain() {
        userChoiceElement.classList.remove('hidden');
        pickedElement.classList.add('hidden');

    }
   //clears the selected options before updating them with subsequent choices
    function clearResultsBeforeAppend() {
        userPickedElement.innerHTML = '';
        sheldonPickedElement.innerHTML = '';
    }
    //adds to the player score when the player wins a round 
    function incrementScore() {
        let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
    }

    //adds to sheldon score when sheldon wins a round
    function incrementSheldonScore() {

        let oldScore = parseInt(document.getElementById('sheldon-score').innerText);
        document.getElementById('sheldon-score').innerText = ++oldScore;
    }
  //adds to the round counter, will add even if a tie
    function incrementTries() {

        let oldScore = parseInt(document.getElementById('round').innerText);
        document.getElementById('round').innerText = ++oldScore;
    }


    // reset button reselts all counters and round counter

    const resetBtn = document.querySelector('.reset-btn');

    resetBtn.addEventListener('click', resetGame);

    function resetGame() {
        document.getElementById('sheldon-score').innerText = 0;
        document.getElementById('score').innerText = 0;
        document.getElementById('round').innerText = 0;
        userScoreForWin = 0;
        sheldonScoreForWin = 0;
        userChoiceElement.classList.remove('hidden');
        pickedElement.classList.add('hidden');
    }

}

game()