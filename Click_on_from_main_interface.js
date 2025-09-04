document.addEventListener('DOMContentLoaded', () => {
    const mathButton = document.getElementById('math-button');
    const grammarButton = document.getElementById('grammar-button');

    // Add click event listeners to the buttons
    mathButton.addEventListener('click', () => {
        // In the future, this will navigate to the math game
        window.location.href = 'Math_Interface.html';
        console.log('Math module selected!');
        alert('Math module selected!'); // Replace with a custom message box in the final version
    });

    grammarButton.addEventListener('click', () => {
        // In the future, this will navigate to the grammar game
        window.location.href = 'Grammar_interface.html';
        console.log('Grammar module selected!');
        alert('Grammar module selected!'); // Replace with a custom message box in the final version
    });
});