document.addEventListener("DOMContentLoaded", function () {
    const sleepForm = document.getElementById("sleepForm");
    const result = document.getElementById("result");
    const resultHours = document.getElementById("resultHours");
    const instagram = document.getElementById("instagram");
    const x = document.getElementById("x");
    const facebook = document.getElementById("facebook");
    const whatsapp = document.getElementById("whatsapp");
    const threads = document.getElementById("threads");
    // const resultTimesSlept = document.getElementById("resultTimesSlept");
    const feedback = document.getElementById("feedback");

    sleepForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const  hours = parseFloat(document.getElementById("instagram").value) + parseFloat(document.getElementById("facebook").value) + parseFloat(document.getElementById("threads").value) + parseFloat(document.getElementById("whatsapp").value)+ parseFloat(document.getElementById("x").value);
        resultHours.textContent = hours + " hours";

        

        if (hours >= 2) {
            feedback.textContent = "Reducing screen time promotes well-being. Set limits, enjoy tech-free zones, and prioritize offline activities. Mindful use enhances life balance and fosters healthier habits.";
        } else {
            feedback.textContent = "You've been maintaining a very good Screen Time. Maintaining a balanced screen time fosters a healthier lifestyle. Prioritize real-world connections, engage in hobbies, and embrace moments of digital detox. Your well-being deserves this mindful approach.";
        }

        result.classList.remove("hidden");
    });
});
