//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    //MAIN QUESTION ARRAY
    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [

        //$400 Questions
        { id: 'cat1-1', points: 400, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-1', points: 400, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-1', points: 400, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat4-1', points: 400, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat5-1', points: 400, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },

        //$800 Questions
        { id: 'cat1-2', points: 800, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-2', points: 800, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-2', points: 800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat4-2', points: 800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat5-2', points: 800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },

        //$1,200 Questions
        { id: 'cat1-3', points: 1200, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-3', points: 1200, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-3', points: 1200, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat4-3', points: 1200, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat5-3', points: 1200, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },

        //$1,800 Questions
        { id: 'cat1-4', points: 1800, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-4', points: 1800, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-4', points: 1800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat4-4', points: 1800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat5-4', points: 1800, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },

        //$2,000 Questions
        { id: 'cat1-5', points: 2000, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-5', points: 2000, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-5', points: 2000, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat4-5', points: 2000, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat5-5', points: 2000, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },

    ]


    //PLAYER SCORES
    let playerOneTotal = 0
    let playerTwoTotal = 0

    //PLAYER TURN TRACKER
    let squaresAnswered = 0
    let turnTracker = ['Player One', 'Player Two']
    let currentPlayer = turnTracker[0]

    const turnChanger = () => {
        if (squaresAnswered % 2 === 0) {
            currentPlayer = turnTracker[1]
        } else { currentPlayer = turnTracker[0] }
    }

    //Retrieves data from Array from User Click Information
    let allInfo = {}
    let matchIndex
    const findQuestion = () => {
        for (let i = 0; i < allAnswers.length; i++) {
            if (allAnswers[i].id === selectedAnswer) {
                matchIndex = [i]
            }
        }
        allInfo = allAnswers[matchIndex]
    }

    //Generates Question
    let createQuestion = () => {
        let questionArray = [allInfo.answer, allInfo.incorrectAnswer1, allInfo.incorrectAnswer2, allInfo.incorrectAnswer3]
        questionArray.sort((a, b) => {
            return (Math.random() * 2) - 1
        })

        let answerHtml = `
        <p>${currentPlayer}:</p>
        <p>${allInfo.question}</p>
        <div>`

        for (let i = 0; i < questionArray.length; i++) {
            answerHtml += `<p class='answerChoice'>${questionArray[i]}</p>`
        }
        answerHtml += `</div>`

        currentQuestion = answerHtml
    }

    //MESSAGE BAR MANAGER | Changes the messageBar
    let currentQuestion
    let userClick = false;
    const messageBar = () => {
        if (userClick === true) {
            createQuestion()
            $('.messagebar p').html(currentQuestion)
        }
    }

    //Answer Checker
    let userResponseChoice
    const checkResponse = () => {
        let correctAnswer = allAnswers[matchIndex].answer
        if (userResponseChoice == correctAnswer) {
            correctUserResponse()
        } else {
            incorrectUserResponse()
        }
    }

    //If Correct Response
    const correctUserResponse = () => {
        //only deal with points in the correctUserResponse function
        const addPoints = () => {
            //adds points to the player whose turn it is
            if (currentPlayer === turnTracker[0]) {
                playerOneTotal += allAnswers[matchIndex].points
            }
            else {
                playerTwoTotal += allAnswers[matchIndex].points
            }
        }
        addPoints()
        turnChanger()
        $('.messagebar p').text(`Correct! ${currentPlayer}, select an answer to continue.`)
        updateDisplay() //only needed in correct
        isGameOver()
    }

    //If Incorrect Response
    const incorrectUserResponse = () => {
        turnChanger()
        $('.messagebar p').text(`Incorrect! ${currentPlayer}, select an answer to continue.`)
        isGameOver()
    }

    //Update Score Display on Page
    let updateDisplay = () => {
        $('#playerOneTotalDisplay').html(playerOneTotal)
        $('#playerTwoTotalDisplay').html(playerTwoTotal)
    }

    //Determine if Game is Over
    const isGameOver = () => {
        squaresAnswered++
        if (playerOneTotal > 500) {
            $('.messagebar p').html(`
                <p>Player One Wins!</p>
                <p id='playAgain'>Click here to play again.</p>`)
            $('.answerbox').css('pointer-events', 'none')
        } else if (playerTwoTotal > 5000) {
            $('.messagebar p').html(`
                <p>Player One Wins!</p>
                <p id='playAgain'>Click here to play again.</p>`)
            $('.answerbox').css('pointer-events', 'none')
        }
        else {
            if (squaresAnswered === 25 && playerOneTotal > playerTwoTotal) {
                $('.messagebar p').html(`
                <p>Player One Wins!</p>
                <p id='playAgain'>Click here to play again.</p>`)
            } else if (squaresAnswered === 25 && playerTwoTotal > playerOneTotal)
                $('.messagebar p').html(`
                <p>Player Two Wins!</p>
                <p id='playAgain'>Click here to play again.</p>`)
        }
    }


    //untested!!!!
    const gameReset = () => {
        //change each players score back to zero
        const resetScore = () => {
            playerOneTotal = 0
            playerTwoTotal = 0
            updateDisplay()
        }
        resetScore()
        //change the squares back to available

    }

    //CLICK EVENTS!

    //Click A Square
    $('.answerbox').on('click', function ($event) {
        $(event.target).css('background-color', 'gray').css('pointer-events', 'none').text('')
        selectedAnswer = $event.target.id
        userClick = true
        findQuestion()
        messageBar()
    })

    //Click an Answer
    $('.messagebar p').on('click', '.answerChoice', function ($event) {
        userResponseChoice = ($event.target).innerHTML;
        checkResponse()
    })

    //Click to restart game
    $('.messagebar p').on('click', '.playAgain', function ($event) {
        console.log(' I know you\'re trying to click this!')
    })




})
