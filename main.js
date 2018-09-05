//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {


let selectedAnswer = '' // holds the value of the number clicked
const allAnswers = [

    {'id': 'cat1-1', 'question': 'This cat loves lasagna', 'answer': 'who is garfield?'},
    {'id': 'cat2-1', 'question': 'This dog saves little boys out of wells', 'answer': 'who is lassie?'},
    {'id': 'cat3-1', 'question': 'All dogs go to this place', 'answer': 'what is heaven?'}

]

let questionDisplay
const findQuestion = () => {
    // console.log(allAnswers[0].id)
    // console.log(selectedAnswer)
    //loop through the length of the array allAnswers holding objects 
    let matchIndex   
    for(let i = 0; i < allAnswers.length; i++){
        if(allAnswers[i].id === selectedAnswer){
            matchIndex = [i]
            console.log('this is the match index: '+ matchIndex)
        }
    }
     //set the questionDisplay variable equal to the match variable
    questionDisplay = allAnswers[matchIndex].question
    messageBar()    
    }

    //store the index of that key
    //use the key to find the answer pair
    //save that to display in the messageBar function}

let userClick = false;
const messageBar = () => {
    if (userClick === true){ 
        $('.messagebar p').text(questionDisplay)
    } else {
    $('.messagebar p').text('Player One, Your Turn!')
    }
} 
messageBar() //run the function

//click event - calls the messageBar function
$('.answerbox').on('click', function($event) {
    selectedAnswer = $event.target.id
    userClick = true //changes the status for a diff result in messageBar
    findQuestion()
    messageBar() //runs the function
})


// STOP DELETING THESE BELOW!!!! ITS FOR YOUR ENTIRE JS FILE!
})