//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    //MAIN QUESTION ARRAY
    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [
        //Category 1
        { id: 'cat1-1', points: 500, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-1', points: 500, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-1', points: 500, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        //Category 2
        { id: 'cat1-2', points: 750, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-2', points: 750, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-2', points: 750, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        //Category 3
        { id: 'cat1-3', points: 1000, question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-3', points: 1000, question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-3', points: 1000, question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' }
    ]

    //PLAYER SCORES
    let playerOneTotal = 0
    let playerTwoTotal = 0

    //PLAYER TURN TRACKER

    let squaresAnswered = 0
    let turnTracker = ['Player One', 'Player Two']
    let currentPlayer

    const turnChanger = () => {
        if(squaresAnswered % 2 === 0){
            currentPlayer = turnTracker[1]
        } else {currentPlayer = turnTracker[0]}
    }
    turnChanger()

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
            console.log('no match')
        }
    }

    //If Correct Response
    const correctUserResponse = () => {
        $('.messagebar p').text('Correct!')
        playerOneTotal += allAnswers[matchIndex].points
        squaresAnswered++
        updateDisplay()
        isGameOver()
        console.log('playerOneTotal', playerOneTotal)
        console.log('playerTwoTotal', playerTwoTotal)
        console.log('squaresAnswered', squaresAnswered)
    }

    //If Incorrect Response
    const incorrectUserResponse = () => {
        $('.messagebar p').text(`Your answer was incorrect!`)
        squaresAnswered++
    }

    //Update Score Display on Page
    let updateDisplay = () => {
        $('#playerOneTotalDisplay').html(playerOneTotal)
        $('#playerTwoTotalDisplay').html(playerTwoTotal)
    }

    //Determine if Game is Over
    const isGameOver = () => {
        if (squaresAnswered === 9) {
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