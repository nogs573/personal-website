const words = document.querySelectorAll('.scrolling-word');

words.forEach((word) => {
    const textLength = word.textContent.length;
    const animationDuration = textLength * 0.5 + 's'; // Adjust the multiplier as needed

    word.style.animationDuration = animationDuration;

    /*
    word.addEventListener('mouseenter', () => {
        word.style.animationPlayState = 'paused';
        word.style.fontWeight = 'bold'; // Change the style as needed
    });

    word.addEventListener('mouseleave', () => {
        word.style.animationPlayState = 'running';
        word.style.fontWeight = 'normal'; // Reset the style
    });
    */
});
