//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {


let selectedAnswer = '' // holds the value of the number clicked
const allAnswers = [
    {question: 'This cat loves lasagna', answer: 'who is garfield?'},
    {question: 'This dog saves little boys out of wells', answer: 'who is lassie?'},
    {question: 'All dogs go to this place', answer: 'what is heaven?'}
];

let userClick = false; //default value
const messageBar = () => { //run this function
    if (userClick === true){ //if the button has been clicked do this instead
        $('.messagebar p').text('The answer will be here!')
        console.log(selectedAnswer)
    } else {
    $('.messagebar p').text('Player One, Your Turn!')
    }
} 
messageBar() //run the funnction


//click event - calls the messageBar function
$('.answerbox').on('click', 'p', function() {
    selectedAnswer = ( $( this ))
    // selectedAnswer = ( $( this ).text())
    userClick = true //changes the status for a diff result in messageBar
    messageBar() //runs the function
})


// STOP DELETING THIS!!!! ITS FOR YOUR ENTIRE JS FILE!
})