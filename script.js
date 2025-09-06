const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.getElementById("submit-btn").addEventListener("click", function () {
    const questions = {
        q1: {
        answer: "a",
        explanation: "Natural Language Processing (NLP) is a branch of AI focused on understanding human language."
        },
        q2: {
        answer: "a",
        explanation: "Machine learning enables computers to learn patterns from data and improve their performance over time without being explicitly programmed."
        },
        q3: {
        answer: "a",
        explanation: "Regression is an example of supervised learning, where the model learns from labeled data to predict continuous outcomes."
        },
        q4: {
        answer: "a",
        explanation: "TensorFlow is a popular Python library widely used for machine learning and AI applications."
        },
        q5: {
        answer: "a",
        explanation: "The main goal of AI is to make machines intelligent, allowing them to perform tasks that normally require human intelligence."
        }
};


    let score = 0;
    let feedback = "";

    for (let q in questions) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            if (selected.value === questions[q].answer) {
                score++;
                feedback += `<p class="correct">${q.toUpperCase()}: ✅ Correct — ${questions[q].explanation}</p>`;
            } 
            else {
            feedback += `<p class="wrong">${q.toUpperCase()}: ❌ Wrong (Correct: ${questions[q].answer}) — ${questions[q].explanation}</p>`;
            }
        } 
        else {
            feedback += `<p class="skipped">${q.toUpperCase()}: ❌ Not Attempted (Correct: ${questions[q].answer}) — ${questions[q].explanation}</p>`;
        }
    }

    function submitQuiz() {
        const answers = ["a", "a", "a", "a", "a"]; 
        let score = 0;

        answers.forEach((answer, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected && selected.value === answer) {
            score++;
        }
        });

        let feedback = "";
        if (score === 0) {
            feedback = "😢 Don't worry, it's just the beginning!<br>Keep practicing and you'll surely see progress with every attempt.";
        }   else if (score === 1) {
            feedback = "💡 You got 1 right!<br>It's a small step, but every big journey starts with one. Keep going!";
        }   else if (score === 2) {
            feedback = "🙂 Not bad!<br>You're getting there, and with a little more practice you'll improve quickly.";
        }   else if (score === 3) {
            feedback = "🔥 Nice!<br>You got more than half correct — just refine your approach and you'll do even better next time.";
        }   else if (score === 4) {
            feedback = "⭐ Great job!<br>You're only one away from perfection, a little more focus will get you there.";
        }   else if (score === 5) {
            feedback = "🏆 Excellent!<br>You nailed all the questions — this shows your hard work and preparation are paying off!";
        }


        return `<h3 style="text-align:center;">Feedback</h3><p style="text-align:center;">${feedback}</p>`;
    }

    const summaryHTML = submitQuiz();

    document.getElementById("result").innerHTML = `
        <h2>You scored ${score} out of ${Object.keys(questions).length}!</h2>
        ${feedback}
        <hr>
        ${summaryHTML}
    `;
});
