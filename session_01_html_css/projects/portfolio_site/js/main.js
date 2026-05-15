const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

const progressBars = document.querySelectorAll('.skill-progress');
progressBars.forEach(bar => {
    observer.observe(bar);
});