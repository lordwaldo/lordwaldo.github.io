document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    // Toggle mobile menu
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        
    });

    // Close menu when a link is clicked (for mobile)
    navLinksItems.forEach(item => {
        item.addEventListener("click", function() {
            if (window.innerWidth <= '930px') {
                navLinks.classList.remove("active");
                hamburger.classList.remove("fa-times");
                hamburger.classList.add("fa-bars");
            }
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Close menu when resizing above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > "930px") {
            navLinks.classList.remove("active");
            hamburger.classList.remove("fa-times");
            hamburger.classList.add("fa-bars");
            navLinks.style.display = ''; // Reset display property
        }
    });
});