// Define an array of 20 true/false questions with images
const questions = [
    {
        question: "Is this the correct way to use the P tag?",
        image: "Photos/ptag.png",  // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
    {
        question: "Is this an incorrect way to define a link in HTML?",
        image: "Photos/linktag.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is false
    },
    {
        question: "Will the button font be the colour black?",
        image: "Photos/buttoncss.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is true
    },
    {
        question: "Is this the correct use of a Ordered List tag in HTML?",
        image: "Photos/orderedtag.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is false
    },
    {
        question: "Is the CSS code for changing the background color to black correct in this image?",
        image: "Photos/backgroundcolour.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
    {
        question: "Is this the correct code for a JavaScript loop?",
        image: "Photos/javaloops.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is false
    },
    {
        question: "Is this the proper way to declare a 'let' variable in JavaScript?",
        image: "Photos/letvariable.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
    {
        question: "Is this HTML code valid for defining an image?",
        image: "Photos/imagepathtag.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is false
    },
    {
        question: "Is this the correct usage of a Button tag in HTML?",
        image: "Photos/buttontag.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is true
    },
    {
        question: "Is this the correct use of CSS to set text color?",
        image: "Photos/textcolour.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
    {
        question: "Is this a proper way to use an unordered list in HTML?",
        image: "Photos/unorderedlist.png", // Replace with the correct image URL
        correctAnswer: true // correct answer is true
    },
    {
        question: "Will the button be included in the div tag?",
        image: "Photos/divtag.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is false
    },  
    {
        question: "Will the padding be 5 pixels in length?",
        image: "Photos/paddingcss.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
	{
        question: "Is this CSS code for centering text correct?",
        image: "Photos/centertext.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is true
    },
	{
        question: "Is this an incorrect way to define a heading in HTML?",
        image: "Photos/headingtag.png", // Replace with the correct image URL
        correctAnswer: false // correct answer is false
    },
];

// Initialize variables
let score = 0;
let questionIndex = [];
let totalQuestions = 10; // Number of questions to ask (can be changed)
let selectedButton = null; // To track the currently selected button

// Function to pick a random question from the array and remove it from the array
function getRandomQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    while (questionIndex.includes(index)) { // Ensure no repeats
        index = Math.floor(Math.random() * questions.length);
    }
    questionIndex.push(index); // Keep track of the questions asked
    return questions[index];
}

// Function to display a new question
function displayQuestion() {
    let question = getRandomQuestion();
    let quizContainer = document.getElementById('quiz-container');
    let nextButton = document.getElementById('next-question');
    
    // Clear previous content
    quizContainer.innerHTML = '';
    
    // Display question
    let questionText = document.createElement('h3');
    questionText.textContent = question.question;
    quizContainer.appendChild(questionText);
    
    // Display image
    let questionImage = document.createElement('img');
    questionImage.src = question.image;
    questionImage.alt = question.question;
    questionImage.style.maxWidth = '100%';
    quizContainer.appendChild(questionImage);
    
    // Display options
    let trueButton = document.createElement('button');
    trueButton.textContent = 'True';
    trueButton.classList.add('button'); // Apply button styling
    trueButton.onclick = () => handleOptionClick(trueButton, true, question.correctAnswer);
    quizContainer.appendChild(trueButton);
    
    let falseButton = document.createElement('button');
    falseButton.textContent = 'False';
    falseButton.classList.add('button'); // Apply button styling
    falseButton.onclick = () => handleOptionClick(falseButton, false, question.correctAnswer);
    quizContainer.appendChild(falseButton);
    
    nextButton.onclick = () => nextQuestion();
}

// Function to handle when an option is clicked
function handleOptionClick(button, selectedAnswer, correctAnswer) {
    // If a button was previously selected, remove the 'selected' class
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }

    // Add the 'selected' class to the currently clicked button
    button.classList.add('selected');
    selectedButton = button; // Update the selected button tracker
    
    // Check if the answer is correct and update the score
    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

// Function to load next question or finish the quiz
function nextQuestion() {
    if (questionIndex.length < totalQuestions) {
        displayQuestion();
    } else {
        displayScore();
        let nextButton = document.getElementById('next-question');
        nextButton.textContent = "Finish"; // Change button text to Finish
        nextButton.onclick = () => window.location.href = "QuizOfficial.html"; // Redirect to Homepage
    }
}

// Function to display final score
function displayScore() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Your score is ${score} out of ${totalQuestions}</h2>`;
}

// Initializing the quiz
window.onload = displayQuestion;