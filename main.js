//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [
        //Category 1
        { 'id': 'cat1-1', 'points': '$500', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat2-1', 'points': '$500', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat3-1', 'points': '$500', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        //Category 2
        { 'id': 'cat1-2', 'points': '$750', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat2-2', 'points': '$750', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat3-2', 'points': '$750', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        //Category 3
        { 'id': 'cat1-3', 'points': '$1000', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat2-3', 'points': '$1000', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' },
        { 'id': 'cat3-3', 'points': '$1000', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong' }
    ]

    let playerOneTotal = 0
    let PlayerTwoTotal = 0

    //Find the question in the array based on user click
    let questionDisplay
    let correctAnswer
    const findQuestion = () => {
        let matchIndex
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

    //Message Bar Change 
    let userClick = false;
    const messageBar = () => {
        if (userClick === true) {
            $('.messagebar p').text(questionDisplay)
            $('.messagebar p').append(` A. ${correctAnswer} B. ${incorrectAnswer1} C. ${incorrectAnswer2} D. ${incorrectAnswer3}`) //need to randomize these...
            $(`.messagebar p`).on('click', function ($event) {
                console.log($event.target)
                if ($event.target !== `${correctAnswer}`) {
                    console.log('wrong answer') //and trigger wrong answer response
                } else console.log('right answer') //and trigger right answer response
            })
        } else {$('.messagebar p').text('Player 1, Please Select a Square to Begin!')
        }
    }
    messageBar()

    const incorrectUserResponse = () => {
        $('.messagebar p').text('Your answer was incorrect!')
            // !Current Player turn
            //start the squareAnswered function for the question's corresponding square
    }

    const correctUserResponse = () => {
        $('.messagebar p').text('Correct!')
            // Add amount for question to current player
            //start the squareAnswered function for the question's corresponding square
    }

    const squareAnswered = () => {
        //if the square has been answered, change the state of the square
    }

    //click event - calls the messageBar function
    $('.answerbox').on('click', function ($event) {
        selectedAnswer = $event.target.id
        userClick = true //changes the status for a diff result in messageBar
        findQuestion()
        messageBar() //runs the function
    })


    // DO NOT DELETE THESE BELOW!
})