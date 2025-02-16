document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(id, target) {
        let element = document.getElementById(id);
        let count = 0;
        let speed = target / 100; 

        let interval = setInterval(() => {
            count += speed;
            element.innerText = Math.floor(count);

            if (count >= target) {
                element.innerText = target;
                clearInterval(interval);
            }
        }, 30);
    }

    animateCounter("co2-reduction", 1200);
    animateCounter("waste-diverted", 5000);
    animateCounter("eco-events", 350);
});
