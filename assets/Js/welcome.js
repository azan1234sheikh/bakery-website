
setTimeout(function() {
    // Load the main content from the separate HTML file
    fetch('main.html')
        .then(response => response.text())
        
        .then(html => {
            // Insert the loaded HTML into the main-content div
            document.getElementById('main-content').innerHTML = html;

            // Hide the loading page and show the main content
            document.querySelector('.loading-page').style.display = 'none';
            document.querySelector('.loading-name').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');

            // Initialize GSAP animations after content is loaded
            initializeAnimations();
        })
        .catch(err => console.error('Error loading main content:', err));
}, 4000); // Simulate a 4-second loading time

function initializeAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Box Animation
    gsap.from("#box", {
        scale: 0,
        delay: 0.5,
        duration: 1,
        rotate: 360,
        scrollTrigger: {
            trigger: "#box",
            scroller: "body",
            start: "top 90%",
            end: "top 10%",
            scrub: 2,
        }
    });

    // Responsive Animations for #sub-section and #sub-sec-2
    function updateAnimations() {
        gsap.killTweensOf("#sub-section");
        gsap.killTweensOf("#sub-sec-2");

        const responsiveValue = (desktop, mobile, smallMobile) => {
            if (window.innerWidth <= 320) return smallMobile;
            if (window.innerWidth <= 768) return mobile;
            return desktop;
        };

        const scrollTriggerSettings = trigger => ({
            trigger,
            scroller: "body",
            start: responsiveValue("top 50%", "top 60%", "top 50%"),
            end: responsiveValue("top 10%", "top 20%", "top 10%"),
            scrub: 3,
        });

        gsap.to("#sub-section", {
            x: responsiveValue(-350, -150, -50),
            duration: responsiveValue(3, 2, 1),
            scrollTrigger: scrollTriggerSettings("#sub-section")
        });

        gsap.to("#sub-sec-2", {
            x: responsiveValue(-150, -100, -30),
            duration: responsiveValue(5, 3, 2),
            scrollTrigger: scrollTriggerSettings("#sub-sec-2")
        });

        // Cursor Animation
        gsap.to('.cursor', {
            opacity: 0,
            ease: "power4.inout",
            y: "5vw",
            repeat: -1
        });

        // Text Animation
        const words = ["love", "cake", "Tart", "Bite"];
        const masterTl = gsap.timeline({ repeat: -1 }).pause();

        gsap.timeline()
            .from('.hi', {
                duration: 2,
                y: "1.5vw",
                ease: "power3.out",
                onComplete: () => masterTl.play()
            });

        words.forEach(word => {
            masterTl.add(
                gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
                    .to('.text', { duration: 1, text: word })
            );
        });

        ScrollTrigger.refresh();
    }

    // Initialize animations on page load
    updateAnimations();
    
    // Update animations on window resize
    window.addEventListener('resize', updateAnimations);
}


