
const correctAnswer = "4";

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");
    
    if (userAnswer === correctAnswer)
    {
        feedback.textContent = "Please select an answer.";
        return;
    }
    
    if (userAnswer.value === correctAnswer)
    {
        feedback.textContent = "Correct! Well done.";
        
    } else 
    {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer)