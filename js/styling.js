    const homeElement = document.getElementById('home');
    
    
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger 50px before element reaches viewport
    });
    
    observer.observe(homeElement);