document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -100px 0px' });

    sections.forEach(section => {
        revealObserver.observe(section);
    });
});
