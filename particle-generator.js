document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;

    const names = [
        'Bad Bunny', 'Rosalía', 'J Balvin', 'Shakira', 'Ibai Llanos', 'El Rubius',
        'Karol G', 'Maluma', 'Nathy Peluso', 'Bizarrap', 'Duki', 'AuronPlay',
        'Luisito Comunica', 'Kimberly Loaiza', 'C. Tangana', 'Aitana', 'Quevedo',
        'Feid', 'TINI', 'Rauw Alejandro', 'Maria Becerra', 'Camilo', 'Evaluna'
    ];

    names.forEach(name => {
        const particle = document.createElement('div');
        particle.className = 'artist-particle';
        particle.textContent = name;

        // Random positions and animation properties
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 30 + Math.random() * 30; // Slower duration between 30s and 60s
        const delay = Math.random() * 10; // Delay up to 10s

        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particleContainer.appendChild(particle);
    });
});

