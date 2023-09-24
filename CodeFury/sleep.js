document.addEventListener("DOMContentLoaded", function () {
    const sleepForm = document.getElementById("sleepForm");
    const result = document.getElementById("result");
    const resultHours = document.getElementById("resultHours");
    // const resultTimesSlept = document.getElementById("resultTimesSlept");
    const feedback = document.getElementById("feedback");

    sleepForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const hours = parseFloat(document.getElementById("hours").value);
        resultHours.textContent = hours + " hours";


        if (hours >= 7) {
            feedback.textContent = "You've achieved a healthy amount of sleep! Quality rest is essential for your well-being. Keep up the good work to maintain your energy and overall health.";
        } else {
            feedback.textContent = "While you're on the right track, it's recommended to aim for at least 7 hours of sleep for optimal health and productivity. Prioritize rest to recharge your body and mind. Consider adjusting your sleep routine and creating a more relaxing bedtime environment to improve your sleep quality..";
        }

        result.classList.remove("hidden");
    });
});
