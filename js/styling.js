const homeElement = document.getElementById('home');
const menu = document.getElementById('menu');
const navigation = document.querySelector('.navigation')
const main  = document.querySelector('main')

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

menu.addEventListener('click', function(e){
    let navHeight = navigation.clientHeight;
  
    navigation.style.height = navHeight === 80 ? "260px" : "80px";
});

main.addEventListener('click',function() {
     let navHeight = navigation.clientHeight;
    if(navHeight !== 80){
        navigation.style.height = "80px";
    }
});