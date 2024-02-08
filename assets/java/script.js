function game() {


    //global constants to allow game to function
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    //an array of all possible win conditions for the player
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors', 'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    //empty strings to receive player and 'sheldon' choices
    let userChoice = '';
    let sheldonChoice = '';
    //javascript constants for html elements to allow access from funtions
    const userChoiceElement = document.querySelector('.user-choice');
    const pickedElement = document.querySelector('.picked');
    const userPickedElement = document.querySelector('.user-pick');
    const sheldonPickedElement = document.querySelector('.sheldon-pick');
    const resultElement = document.querySelector('.result');
    const resultTitleElement = resultElement.querySelector('.title');
    const playAgainBtn = document.querySelector('.play-again')


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

    //starts the game. checks who has won based on information returned from the target with the classes .user-choice and .game-card - these are attached to the five options
    function startGame() {
        calculateWinner(userChoice, sheldonChoice)
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden');
        clearResultsBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, sheldonChoice);
    }


    // return the second item in the class-list array which in this case indicates which option was selected
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
            resultTitleElement.innerText = "I don't need sleep, I need answers.";
            incrementTries();
        } else if (getUserWinsStatus(usercard + sheldoncard)) {
            resultTitleElement.innerText = "Alright, I'll bow to social pressure.";
            incrementScore();
        } else {
            resultTitleElement.innerText = 'Bazinga!';
            incrementSheldonScore();
        }

    }

    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);
    }

    //function that builds user and sheldon choice elements using classname
    //update the choices by creating a div on the results block (hidden until an option is picked)
    function buildChoiceElement(isItUserElement, className) {
        const choiceElement = document.createElement('div');    
        choiceElement.classList = [`choice ${className}`];
        choiceElement.innerHTML = `<img src="images/icon-${className}.svg" alt="${className}">`;
        if (isItUserElement) {
            userPickedElement.append(choiceElement);
        } else {
            sheldonPickedElement.append(choiceElement);

        }

    }
    //allows the player to try again when the try again button is pushed
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


    // reset button resets all counters and round counter

    const resetBtn = document.querySelector('.reset-btn');

    resetBtn.addEventListener('click', resetGame);
    //reseting all elements and constants that need it in order for game to reset
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
//runs the game
game()