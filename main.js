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
        if(squaresAnswered % 2 === 0){
            currentPlayer = turnTracker[1]
        } else {currentPlayer = turnTracker[0]}
    }

    //Retrieves data from Array from User Click Information
    let questionDisplay = ''
    let correctAnswer = ''
    let incorrectAnswer1 = ''
    let incorrectAnswer2 = ''
    let incorrectAnswer3 = ''
    let matchIndex
    const findQuestion = () => {
        for (let i = 0; i < allAnswers.length; i++) {
            if (allAnswers[i].id === selectedAnswer) {
                matchIndex = [i]
            }
        }
        questionDisplay = allAnswers[matchIndex].question
        correctAnswer = allAnswers[matchIndex].answer
        incorrectAnswer1 = allAnswers[matchIndex].incorrectAnswer1
        incorrectAnswer2 = allAnswers[matchIndex].incorrectAnswer2
        incorrectAnswer3 = allAnswers[matchIndex].incorrectAnswer3
        messageBar()
    }

    //Generates Question
    let createQuestion = () => {
        let input = `
        <p>${currentPlayer}:</p>
        <p>${questionDisplay}</p>
        <div>
            <p class='answerChoice'>${correctAnswer}</p>
            <p class='answerChoice'>${incorrectAnswer1}</p>
            <p class='answerChoice'>${incorrectAnswer2}</p>
            <p class='answerChoice'>${incorrectAnswer3}</p>
        </div>`
        currentQuestion = input
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
    messageBar()

    //Answer Checker
    let userResponseChoice
    let responseCorrectness
    const checkResponse = () => {
        let correctAnswer = allAnswers[matchIndex].answer
        if (userResponseChoice == correctAnswer) {
            correctUserResponse()
            console.log('match')
        } else {
            responseCorrectness =
                incorrectUserResponse()
        }
    }

    //If Correct Response
    const correctUserResponse = () => {
        console.log(currentPlayer)
        const addPoints = () => {
            if(currentPlayer === turnTracker[0]){
            playerOneTotal += allAnswers[matchIndex].points}
        else {playerTwoTotal += allAnswers[matchIndex].points}}
        addPoints()
        turnChanger() //this was the first line in the function
        $('.messagebar p').text(`Correct! ${currentPlayer}, select an answer to continue.`) //this was the second line int he function
        squaresAnswered++
        updateDisplay()
        isGameOver()
    }

    //If Incorrect Response
    const incorrectUserResponse = () => {
        turnChanger()
        $('.messagebar p').text(`Incorrect! ${currentPlayer}, select an answer to continue.`)
        squaresAnswered++
    }

    //Update Score Display on Page
    let updateDisplay = () => {
        $('#playerOneTotalDisplay').html(playerOneTotal)
        $('#playerTwoTotalDisplay').html(playerTwoTotal)
    }

    //Determine if Game is Over
    const isGameOver = () => {
        if (squaresAnswered === 20) {
            if (playerOneTotal > playerTwoTotal) {
                alert('playerOne wins!')
            } else {
                alert('playertwo wins!')
            }
        }
    }

    //CLICK EVENTS!

    //Click A Square
    $('.answerbox').on('click', function ($event) {
        $(event.target).css('background-color', 'gray').text('')
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



})