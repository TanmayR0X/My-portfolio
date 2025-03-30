const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('ul li a');
const sections = document.querySelectorAll('section');
const backToTop = document.querySelector('.top');

menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    document.querySelector('header').classList.toggle('toggle');
});

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(i => i.classList.remove('active'));
        // Add 'active' class to the clicked menu item
        item.classList.add('active');
        menu.classList.remove('fa-times');
        document.querySelector('header').classList.remove('toggle');
    });
});

//   Function to check which section is in view
function checkSectionInView() {
    let
        currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    if (currentSection) {
        menuItems.forEach(i => i.classList.remove('active'));
        const activeMenuItem = document.querySelector(`ul li a[href="#${currentSection}"]`);
        if (activeMenuItem) {
            activeMenuItem.classList.add('active');
        }
    }
}

//

function toggleBackToTop() {
    if (window.scrollY > 200) { // Show button after scrolling down 200px
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}


// Add scroll event listener
window.addEventListener('scroll', () => {
    checkSectionInView();
    toggleBackToTop();
});

toggleBackToTop();
