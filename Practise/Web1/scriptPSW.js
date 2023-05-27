// Paralax
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let danyen = document.getElementById('danyen');
let car = document.getElementById('car');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Active nav Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Paralax
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    danyen.style.marginTop = value * 0.8 + 'px';   
    // car.style.left = value * 0.8 + 'px';   
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.8 + 'px';
});

// Active nav Link
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// 
const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

