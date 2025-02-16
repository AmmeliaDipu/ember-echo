document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function handleScroll() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
