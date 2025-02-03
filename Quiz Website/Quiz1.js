// Define an array of 20 multiple choice questions with options and the correct answer
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: 0 // correct answer is the first option
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: 1 // correct answer is <a>
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: 0 // correct answer is Cascading Style Sheets
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["string", "number", "boolean", "All of the above"],
        answer: 3 // correct answer is All of the above
    },
    {
        question: "Which method is used to select an element in the DOM?",
        options: ["getElementById", "getElementsByClassName", "querySelector", "All of the above"],
        answer: 3 // correct answer is All of the above
    },
    {
        question: "Which of these is used to create comments in JavaScript?",
        options: ["//", "<!-- -->", "/* */", "Both // and /* */"],
        answer: 3 // correct answer is Both // and /* */
    },
    {
        question: "What does the 'id' attribute in HTML define?",
        options: ["A class for elements", "An identifier for elements", "A style for elements", "A link to another webpage"],
        answer: 1 // correct answer is An identifier for elements
    },
    {
        question: "Which HTML element is used to define an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
        answer: 1 // correct answer is <ol>
    },
    {
        question: "What is the default value of the position property in CSS?",
        options: ["relative", "absolute", "fixed", "static"],
        answer: 3 // correct answer is static
    },
    {
        question: "What does the <meta> tag in HTML provide?",
        options: ["Metadata about the document", "Hyperlinks", "Script files", "Stylesheets"],
        answer: 0 // correct answer is Metadata about the document
    },
    {
        question: "What does the 'console.log()' function do in JavaScript?",
        options: ["Outputs data to the console", "Displays data on the web page", "Logs errors", "Calls an API"],
        answer: 0 // correct answer is Outputs data to the console
    },
    {
        question: "Which of these is the correct syntax to link an external JavaScript file?",
        options: ["<script src='file.js'></script>", "<link href='file.js'>", "<javascript src='file.js'>", "<script file='file.js'></script>"],
        answer: 0 // correct answer is <script src='file.js'></script>
    },
    {
        question: "What is the purpose of the 'alt' attribute in an <img> tag?",
        options: ["To specify the size of the image", "To provide an alternative text for the image", "To define the source of the image", "To make the image clickable"],
        answer: 1 // correct answer is To provide an alternative text for the image
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["background-color", "color", "bgcolor", "background-image"],
        answer: 0 // correct answer is background-color
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "create function myFunction()", "function: myFunction()", "func myFunction()"],
        answer: 0 // correct answer is function myFunction()
    },
    {
        question: "Which of the following is not a valid CSS unit?",
        options: ["px", "em", "%", "kg"],
        answer: 3 // correct answer is kg
    },
    {
        question: "What is the purpose of the 'href' attribute in the <a> tag?",
        options: ["To define the source of the link", "To define the link text", "To style the link", "To define the target of the link"],
        answer: 0 // correct answer is To define the source of the link
    },
    {
        question: "How do you add a comment in HTML?",
        options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "//-- This is a comment"],
        answer: 0 // correct answer is <!-- This is a comment -->
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        options: ["font-family", "font-style", "font-size", "font-color"],
        answer: 0 // correct answer is font-family
    },
    {
        question: "Which of these HTML tags is used to define a table?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        answer: 0 // correct answer is <table>
    }
];

// Initialize variables
let score = 0;
let questionIndex = [];
let totalQuestions = 10; // Number of questions to ask
let selectedButton = null; // To track the currently selected button
let timer = null; // Timer for the automatic next question
let questionTimeout = 30; // Timeout duration in seconds
let countdownInterval = null; // Interval to update the countdown timer
let timeLeft = questionTimeout; // Track the remaining time for each question

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
    // Reset timer each time a new question is displayed
    timeLeft = questionTimeout; // Reset the time
    updateTimerDisplay(); // Update the timer display immediately
    
    // Clear any existing interval or timeout
    clearInterval(countdownInterval);
    
    // Set up the countdown timer
    countdownInterval = setInterval(() => {
        timeLeft--; // Decrease the time left by 1 second
        updateTimerDisplay(); // Update the visual timer
        
        // If the time is up, automatically move to the next question
        if (timeLeft <= 0) {
            clearInterval(countdownInterval); // Clear the interval
            nextQuestion(); // Move to the next question
        }
    }, 1000); // Update every second
    
    let question = getRandomQuestion();
    let quizContainer = document.getElementById('quiz-container');
    let nextButton = document.getElementById('next-question');
    
    // Clear previous content
    quizContainer.innerHTML = '';
    
    // Display question
    let questionText = document.createElement('h3');
    questionText.textContent = question.question;
    quizContainer.appendChild(questionText);
    
    // Display options
    question.options.forEach((option, index) => {
        let button = document.createElement('button');
        button.textContent = option;
        button.classList.add('button'); // Apply button styling
        button.onclick = () => handleOptionClick(button, index, question.answer);
        quizContainer.appendChild(button);
    });
    
    // Set up the next button to move to the next question
    nextButton.onclick = () => nextQuestion();
}

// Function to update the countdown timer display
function updateTimerDisplay() {
    let timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft; // Update the time left in the display
}

// Function to handle when an option is clicked
function handleOptionClick(button, selectedIndex, correctIndex) {
    // If a button was previously selected, remove the 'selected' class
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }

    // Add the 'selected' class to the currently clicked button
    button.classList.add('selected');
    selectedButton = button; // Update the selected button tracker
    
    // Flash the correct answer in green, whether the user was right or wrong
    let quizContainer = document.getElementById('quiz-container');
    let correctButton = quizContainer.children[correctIndex + 1]; // Option buttons are below the question text
    
    correctButton.classList.add('correct-answer'); // Flash the correct answer button
    
    // If the answer is wrong, we will still allow the button to flash green after selection
    if (selectedIndex === correctIndex) {
        score++; // Increase score for correct answer
    } else {
        // Optionally add a flash for the selected incorrect answer too
        button.classList.add('incorrect-answer'); // Class for incorrect answer flash (optional)
    }

    // Clear the timer as the user has selected an answer
    clearInterval(countdownInterval); // Stop the countdown
    
    // Proceed to the next question
    setTimeout(nextQuestion, 1000); // Wait 1 second before moving to the next question
}

// Function to load the next question or finish the quiz
function nextQuestion() {
    // Clear the interval before moving to the next question
    clearInterval(countdownInterval);
    
    if (questionIndex.length < totalQuestions) {
        displayQuestion(); // Display the next question
    } else {
        displayScore(); // Display the final score
        displayFinishButton(); // Display finish button
        hideTimer(); // Hide the timer once all questions are done
    }
}

// Function to display the final score
function displayScore() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Your score is ${score} out of ${totalQuestions}</h2>`;
}

// Function to display the "Finish" button
function displayFinishButton() {
    let quizContainer = document.getElementById('quiz-container');
    let finishButton = document.createElement('button');
    finishButton.textContent = "Finish";
    finishButton.classList.add('finish-button');
    finishButton.onclick = () => {
        window.location.href = 'QuizOfficial.html'; // Redirect to QuizOfficial.html
    };
    quizContainer.appendChild(finishButton);
}

// Function to hide the timer
function hideTimer() {
    let timerContainer = document.getElementById('timer-container');
    timerContainer.style.display = 'none'; // Hide the timer
}

// Initializing the quiz
window.onload = displayQuestion;