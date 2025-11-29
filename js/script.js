document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Scroll Suave para os botões de Download
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Animação simples no vídeo (aparecer suavemente ao rolar)
    const videoSection = document.querySelector('.video-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    // Configura o estilo inicial para animação
    if(videoSection) {
        videoSection.style.opacity = 0;
        videoSection.style.transform = 'translateY(50px)';
        videoSection.style.transition = 'all 0.8s ease-out';
        observer.observe(videoSection);
    }
});