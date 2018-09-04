//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

const catOneQuestions = [

]


const MessageBar = () => {
    //if player just clicked a square
    
    //find that corresponding value in the array 

    //and display it in the message bar

    //else
    //if nothing running, display "Player One's Turn!"
    $('.messagebar p').text('Player One, Your Turn!')
}
MessageBar()

const showAnswer = () => {
    MessageBar()
}


//event listener for board
$('.answerbox').on('click', showAnswer)

})