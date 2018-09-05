//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [
        //Category 1
        { id: 'cat1-1', points: '$500', question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-1', points: '$500', question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-1', points: '$500', question: 'Answer: All dogs go to this place', answer: 'what is heaven?', 'incorrectAnswer1': 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        //Category 2
        { id: 'cat1-2', points: '$750', question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-2', points: '$750', question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-2', points: '$750', question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        //Category 3
        { id: 'cat1-3', points: '$1000', question: 'Answer: This cat loves lasagna', answer: 'who is garfield?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat2-3', points: '$1000', question: 'Answer: This dog saves little boys out of wells', answer: 'who is lassie?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' },
        { id: 'cat3-3', points: '$1000', question: 'Answer: All dogs go to this place', answer: 'what is heaven?', incorrectAnswer1: 'wrong', incorrectAnswer2: 'wrong', incorrectAnswer3: 'wrong' }
    ]

    //Hold Running Player Totals
    let playerOneTotal = 0
    let PlayerTwoTotal = 0

    //Find the question in the array based on user click
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

    //Creates the question by putting the elements together
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

//CHANGE THE MESSAGE BAR
    let currentQuestion
    let userClick = false;
    const messageBar = () => {
        if (userClick === true) {
            createQuestion()
            $('.messagebar p').html(currentQuestion)
        }
    }
    messageBar()

//EVALUATE - Response Right or Wrong?
    //userResponseChoice, responseCorrectness store the last user response and whether it is correct   
    let userResponseChoice
    let responseCorrectness
    const checkResponse = () => {
        let correctAnswer = allAnswers[matchIndex].answer
        if(userResponseChoice == correctAnswer){
            correctUserResponse()
            console.log('match')
        } else {
            responseCorrectness = 
            incorrectUserResponse()
            console.log('no match')
         }
        }

    //Case for User Selecting Incorrect Response
    const correctUserResponse = () => {
        $('.messagebar p').text('Correct!')
            // Add amount for question to current player
            //start the squareAnswered function for the question's corresponding square
    }

    //Case for User Selecting Correct Response
    const incorrectUserResponse = () => {
        $('.messagebar p').text('Your answer was incorrect!')
            // !Current Player turn
            //start the squareAnswered function for the question's corresponding square
    }

    //Converts square to Blank/Unavailable
    const squareAnswered = () => {
        //if the square has been answered, change the state of the square
    }

    //CLICK EVENTS!

    //click event - calls the messageBar function
    $('.answerbox').on('click', function ($event) {
        selectedAnswer = $event.target.id
        userClick = true //switches the status to unlock functions
        findQuestion()
        messageBar() 
    })


    $('.messagebar p').on('click', '.answerChoice', function ($event) {
        userResponseChoice = ($event.target).innerHTML;
        checkResponse()
    })


    // DO NOT DELETE THESE BELOW!
})