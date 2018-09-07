//onLoad, prompt player 1 to select a tile
//select the 'messagebar' element and change the text to a stored variable that contains a string
$(() => {


    //MAIN QUESTION ARRAY
    let selectedAnswer = '' // holds the value of the number clicked
    const allAnswers = [

        //$400 Questions
        { id: 'cat1-1', points: 400, question: 'ANSWER: Two Pomeranians and a Pekingese survived when this ship sank just four days into the ship\'s maiden voyage from Southampton to New York City.', answer: 'What is the Titanic?', incorrectAnswer1: 'What is the Mayflower?', incorrectAnswer2: 'What is the C.S.S. Hunley?', incorrectAnswer3: 'What is the Santa Maria?' },
        { id: 'cat2-1', points: 400, question: 'ANSWER: This dog breed has puppies that are white when they are born and develop spots as they grow older.', answer: 'What is Dalmation?', incorrectAnswer1: 'What is German Shorthair Pointer?', incorrectAnswer2: 'What is Spotted Spaniel?', incorrectAnswer3: 'What is Crested Mastiff?' },
        { id: 'cat3-1', points: 400, question: 'ANSWER: This dog breed has webbed feet to help with swimming.', answer: 'What is Newfoundland?', incorrectAnswer1: 'What is Great Dane?', incorrectAnswer2: 'What is Cocker Spaniel?', incorrectAnswer3: 'What is Poodle?' },
        { id: 'cat4-1', points: 400, question: 'ANSWER: This cartoon dog belongs to Fred Jones, Daphne Blake, Velma Dinkley, and Norville Rogers.', answer: 'Who is Scooby Doo?', incorrectAnswer1: 'Who is Astro?', incorrectAnswer2: 'Who is Snoopy?', incorrectAnswer3: 'Who is Mr. Peabody?' },
        { id: 'cat5-1', points: 400, question: 'ANSWER: Petting dogs has been shown to have what positive effect on humans\' health?', answer: 'What is blood pressure?', incorrectAnswer1: 'What is glucose levels?', incorrectAnswer2: 'What is cure cancer?', incorrectAnswer3: 'What is weight loss?' },

        //$800 Questions
        { id: 'cat1-2', points: 800, question: 'ANSWER: In ancient China, people kept warm by putting dogs in what part of their clothing?', answer: 'What is up their sleeves?', incorrectAnswer1: 'What is in their pants?', incorrectAnswer2: 'What is in their hats?', incorrectAnswer3: 'What is in their shoes?' },
        { id: 'cat2-2', points: 800, question: 'ANSWER: Unlike humans, this is the number of eyelids that dogs have.', answer: 'What is 3?', incorrectAnswer1: 'What is 0?', incorrectAnswer2: 'What is 7?', incorrectAnswer3: 'What is 2?' },
        { id: 'cat3-2', points: 800, question: 'ANSWER: This is the favorite dog breed of the Queen of England.', answer: 'What is Corgi?', incorrectAnswer1: 'What is King Charles Spaniel?', incorrectAnswer2: 'What is beagle?', incorrectAnswer3: 'What is Irish setter?' },
        { id: 'cat4-2', points: 800, question: 'ANSWER: This dog is the pet of Dr. Seuss\' Christmas-stealing grinch.', answer: 'Who is Max?', incorrectAnswer1: 'Who is Carl?', incorrectAnswer2: 'Who is Buddy?', incorrectAnswer3: 'Who is Spot?' },
        { id: 'cat5-2', points: 800, question: 'ANSWER: This country has the highest dog population in the world.', answer: 'What is the United States?', incorrectAnswer1: 'What is Japan?', incorrectAnswer2: 'What is Germany?', incorrectAnswer3: 'What is Canada?' },

        //$1,200 Questions
        { id: 'cat1-3', points: 1200, question: 'This was the name of George Washington\'s dog.', answer: 'Who is Sweet Lips?', incorrectAnswer1: 'Who is Le Beau?', incorrectAnswer2: 'Who is King Tut?', incorrectAnswer3: 'Who is Faithful?' },
        { id: 'cat2-3', points: 1200, question: 'Born with pink tongues, this dog breed later develops a distinctive blue-black tongue.', answer: 'What is Chow Chow?', incorrectAnswer1: 'What is Sharpei?', incorrectAnswer2: 'What is pug?', incorrectAnswer3: 'What is Shiba Inu?' },
        { id: 'cat3-3', points: 1200, question: 'This is the most popular breed of dog, according to the American Kennel Club’s registrations.', answer: 'What is Labrador?', incorrectAnswer1: 'What is Golden Retriever?', incorrectAnswer2: 'What is Cocker Spaniel?', incorrectAnswer3: 'What is Poodle?' },
        { id: 'cat4-3', points: 1200, question: 'This breed of dog inspired the character of Chewbacca from Star Wars.', answer: 'What is Alaskan Malamute??', incorrectAnswer1: 'What is Irish Wolfhound?', incorrectAnswer2: 'What is English Sheepdog?', incorrectAnswer3: 'What is Carin Terrier?' },
        { id: 'cat5-3', points: 1200, question: 'This was the most popular dog name of 2011, according to VPI Pet Insurance.', answer: 'What is Lucy?', incorrectAnswer1: 'What is Bailey?', incorrectAnswer2: 'What is Bella?', incorrectAnswer3: 'What is Max?' },

        //$1,800 Questions
        { id: 'cat1-4', points: 1600, question: 'This U.S. President was given a dog named Pushinka by Soviet Premier Nikita Krushchev.', answer: 'Who is John F. Kennedy?', incorrectAnswer1: 'Who is Richard Nixon?', incorrectAnswer2: 'Who is Lyndon B. Johnson?', incorrectAnswer3: 'Who is Gerald Ford?' },
        { id: 'cat2-4', points: 1600, question: 'Dogs sweat through this part of their body.', answer: 'What is paws?', incorrectAnswer1: 'What is ears?', incorrectAnswer2: 'What is mouth?', incorrectAnswer3: 'What is nose?' },
        { id: 'cat3-4', points: 1600, question: 'This breed was once known as St. John’s Newfoundland?', answer: 'What is Labrador?', incorrectAnswer1: 'What is Newfoundland?', incorrectAnswer2: 'What is Golden Retriever?', incorrectAnswer3: 'What is Puli?' },
        { id: 'cat4-4', points: 1600, question: 'Moose, the celebrity Jack Russell Terrier most famous for his role as Eddie on the television sitcom Frasier, earned an average of this many dollars per episode.', answer: 'What is $10,000?', incorrectAnswer1: 'What is $15,000?', incorrectAnswer2: 'What is $10,000?', incorrectAnswer3: 'What is $5,000?' },
        { id: 'cat5-4', points: 1600, question: 'Paul McCartney recorded a high pitched whistle at the end of this Beatles song.', answer: 'What is \'A Day in the Life?\'', incorrectAnswer1: 'What is \'Ticket to Ride?\'', incorrectAnswer2: 'What is \'Two of Us?\'', incorrectAnswer3: 'What is \'Eleanor Rigby?\'' },

        //$2,000 Questions
        { id: 'cat1-5', points: 2000, question: 'This historical figure owned the most dogs.', answer: 'Who is Kublai Khan?', incorrectAnswer1: 'Who is Genghis Khan?', incorrectAnswer2: 'Who is Marie Antoinette?', incorrectAnswer3: 'Who is King George, III?' },
        { id: 'cat2-5', points: 2000, question: 'This is the normal body temperature for a dog in Fahrenheit.', answer: 'What is 100.5?', incorrectAnswer1: 'What is 98.6?', incorrectAnswer2: 'What is 108.7?', incorrectAnswer3: 'What is 111?' },
        { id: 'cat3-5', points: 2000, question: 'The first dogs registered in the American Kennel Club belonged to what group?', answer: 'What is the Sporting Group?', incorrectAnswer1: 'What is the Hearding Group?', incorrectAnswer2: 'What is the Working Group?', incorrectAnswer3: 'What is the Hound Group?' },
        { id: 'cat4-5', points: 2000, question: 'The world’s oldest dog, an Australian cattle hound named Bluey, was this old in human years.', answer: 'What is 29?', incorrectAnswer1: 'What is 27?', incorrectAnswer2: 'What is 32?', incorrectAnswer3: 'What is 30?' },
        { id: 'cat5-5', points: 2000, question: 'This is the fear of dogs.', answer: 'What is Cynophobia?', incorrectAnswer1: 'What is Ornithopia', incorrectAnswer2: 'What is Anatidaephobia?', incorrectAnswer3: 'What is Ailurophobia?' },

    ]

    // const highwoof = document.createElement("audio")
    // highwoof.src = 'sounds/highwoof.wav'
    // highwoof.volume = 0.1;
    // highwoof.autoPlay = false;
    // highwoof.preLoad = true;
    // highwoof.controls = true;

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
        $(event.target).css('background-color', 'gray').css('pointer-events', 'none').text('').slideDown()
        selectedAnswer = $event.target.id
        highwoof.play()
        userClick = true
        findQuestion()
        messageBar()
    })

    const highwoof = new Audio("./sounds/highwoof.wav");

    //Click an Answer
    $('.messagebar p').on('click', '.answerChoice', function ($event) {
        userResponseChoice = ($event.target).innerHTML
        checkResponse()
    })

    //Click to restart game
    $('.messagebar p').on('click', '.playAgain', function ($event) {
        // console.log(' I know you\'re trying to click this!')
    })


    // $('#dice-button').click(e => rollSound.play());

    // // const bark = () => {
    //     var highwoof = document.createElement("audio");
    //     highwoof.src = 'sounds/highwoof.wav'
    //     highwoof.volume = 0.1;
    //     highwoof.autoPlay = false;
    //     highwoof.preLoad = true;
    //     highwoof.controls = true;
      
    //     // $(".messagebar p").on('click', 'answerChoice', function() {
    //     //   highwoof.play();
    //       // obj.pause();
    //     });
    //   });

})
