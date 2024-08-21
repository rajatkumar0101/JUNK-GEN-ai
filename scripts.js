// Spacecraft animation: moving up and down
gsap.to("#spacecraft", {
    duration: 5,
    y: -500,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

// Debris 1 animation: moving diagonally and rotating
gsap.to("#debris1", {
    duration: 3,
    x: 300,
    y: 600,
    rotation: 360,
    ease: "linear",
    repeat: -1,
    delay: 1
});

// Debris 2 animation: moving diagonally in the opposite direction and rotating
gsap.to("#debris2", {
    duration: 4,
    x: -300,
    y: 700,
    rotation: -360,
    ease: "linear",
    repeat: -1,
    delay: 2
});

// Interactive spacecraft control with mouse movement
document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    gsap.to("#spacecraft", {
        x: x - window.innerWidth / 2,
        y: y - 400,
        duration: 0.1
    });
});

// Parallax scrolling effect for spacecraft
gsap.registerPlugin(ScrollTrigger);

gsap.to("#spacecraft", {
    scrollTrigger: {
        trigger: ".animation-container",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -1000,
    ease: "none"
});

// Path calculation example
document.getElementById('pathForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const start = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;
    
    // Placeholder function for path calculation
    const path = calculatePath(start, destination);
    
    document.getElementById('pathResult').innerText = `Optimal Path: ${path}`;
});

function calculatePath(start, destination) {
    // Advanced algorithm for path calculation will go here
    return `${start} -> ${destination} (No debris)`;
}
