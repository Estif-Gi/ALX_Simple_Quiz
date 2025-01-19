// let checkAnswer = document.querySelector('#submit-answer');
// let feedback = document.querySelector('#feedback');
// let choose = document.querySelectorAll("input[name='quiz']");
// let findSelected = () =>{
//     let selected= document.querySelector("input[name='quiz']:checked");
//    console.log(selected.nextElementSibling.innerText);
//    checkAnswer.addEventListener('click' , () => {

//     if(selected.nextElementSibling.innerText == 4 ) 
//     {
//         feedback.innerText='Correct! Well done'; 
//     }
//     else
//     {
//         feedback.textContent="That's incorrect. Try again!";  
//     }
// });
// };
// choose.forEach(choose=>{
//     choose.addEventListener('change' , findSelected);
// });

const correctAnswer = "4";

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
