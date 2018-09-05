//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [
        //Category 1
        { 'id': 'cat1-1', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat2-1', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat3-1', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
    //Category 2
        { 'id': 'cat1-2', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat2-2', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat3-2', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
    //Category 3
    { 'id': 'cat1-3', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat2-3', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'},
        { 'id': 'cat3-3', 'question': 'All dogs go to this place', 'answer': 'what is heaven?', 'incorrectAnswer1': 'wrong', 'incorrectAnswer2': 'wrong', 'incorrectAnswer3': 'wrong'}
    ]

    //Find the question in the array based on user click
    let questionDisplay
    let correctAnswer
    const findQuestion = () => {
        let matchIndex
        for (let i = 0; i < allAnswers.length; i++) {
            if (allAnswers[i].id === selectedAnswer) {
                matchIndex = [i]
                console.log('this is the match index: ' + matchIndex)
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
            $('.messagebar p').append(` A. ${correctAnswer} B. ${incorrectAnswer1} C. ${incorrectAnswer2} D. ${incorrectAnswer3}`)
            $('.messagebar p').innerHTML('Adding some choices here')
        } else {
            $('.messagebar p').text('Player One, Your Turn!')
        }
    }
    messageBar()

    //click event - calls the messageBar function
    $('.answerbox').on('click', function ($event) {
        selectedAnswer = $event.target.id
        userClick = true //changes the status for a diff result in messageBar
        findQuestion()
        messageBar() //runs the function
    })


    // DO NOT DELETE THESE BELOW!
})