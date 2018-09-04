//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {

    //maybe an object is the best way to store these?
const janswers = [
    {question: 'This cat loves lasagne', answer: 'who is garfield?'},
    {question: 'This dog saves little boys out of wells', answer: 'who is lassie?'},
    {question: 'All dogs go to this place', answer: 'what is heaven?'}
];

let userClick = false;
const MessageBar = () => {
    if (userClick === true){
        $('.messagebar p').text('You clicked on an answer!')
    } else
    //find that corresponding value in the array 
    //and display it in the message bar
    //else
    $('.messagebar p').text('Player One, Your Turn!')
} 
MessageBar()

// $( "#dataTable tbody" ).on( "click", "tr", function() {
//     console.log( $( this ).text() );
//   });

$('.answerbox').on('click', 'p', function() {
    console.log( $( this ).text())
    userClick = true
    MessageBar()
})


// STOP DELETING THIS!!!! ITS FOR YOUR ENTIRE JS FILE!
})