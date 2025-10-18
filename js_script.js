// Get all necessary elements from the HTML
const toggleButton = document.getElementById('toggle-btn');
const loginInterface = document.getElementById('login-interface');
const signupInterface = document.getElementById('signup-interface');
const toggleText = document.querySelector('.toggle-side p'); // .toggle-side p is used as toggleText class was not in html before.
const signupSubmitButton = document.getElementById('signup-submit-btn'); 

// Add an event listener to the Lamp button
toggleButton.addEventListener('click', function() {
    // Check if the current visible interface is 'login' (default state)
    if (loginInterface.classList.contains('active')) {
        
        // --- Switch to SIGNUP Interface ---
        
        // 1. Hide Login and Show Signup Form
        loginInterface.classList.remove('active');
        loginInterface.classList.add('hidden');

        signupInterface.classList.remove('hidden');
        signupInterface.classList.add('active');
        
        // 2. Change Lamp State (On)
        toggleButton.classList.remove('lamp-off');
        toggleButton.classList.add('lamp-on');
        
        // 3. Update Text
        toggleText.textContent = 'Click Lamp for Login';
        
        // 4. Show Signup button
        signupSubmitButton.classList.remove('hidden-button'); 

    } else {
        
        // --- Switch to LOGIN Interface ---
        
        // 1. Hide Signup Form and Show Login
        signupInterface.classList.remove('active');
        signupInterface.classList.add('hidden');

        loginInterface.classList.remove('hidden');
        loginInterface.classList.add('active');
        
        // 2. Change Lamp State (Off)
        toggleButton.classList.remove('lamp-on');
        toggleButton.classList.add('lamp-off');
        
        // 3. Update Text
        toggleText.textContent = 'Click Lamp for Signup';

        // 4. Hide Signup button
        signupSubmitButton.classList.add('hidden-button'); 
    }
});