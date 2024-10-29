

export const hero = () => {
    // Function to handle adding/removing the black background when scrolling
    function changeHeaderBackgroundOnScroll() {
        // Select the header element
        const header = document.querySelector('header');

        // Listen for the window's scroll event
        window.addEventListener('scroll', () => {
            // Check if the page is scrolled down more than 100 pixels
            // console.log('scrollPosition >>>>', window.scrollY)
            if (window.scrollY > 100) {
                // Add the 'scrolled' class to the header if scrolled past 100px
                header.classList.add('scrolled');
            } else {
                // Remove the 'scrolled' class if scrolled less than 100px
                header.classList.remove('scrolled');
            }
        });
    }

    // Call the function to enable the scroll functionality
    changeHeaderBackgroundOnScroll();

    // gettin the DOM nodes and attaching them to variables
    let bg1 = document.getElementById('hero1');
    let bg2 = document.getElementById('hero2');
    let select1 = document.getElementById('select1');
    let select2 = document.getElementById('select2');

    //    adding event listeners to the buttons for clicks
    select1.addEventListener('click', () => show1());
    select2.addEventListener('click', () => show2());

    //    show1 displays the first background (bg1) and hides bg2
    function show1() {
        if (bg1.classList.contains('hide')) {
            bg1.classList.remove('hide');
            bg1.classList.add('show');
            bg2.classList.remove('show');
            bg2.classList.add('hide');
        }
    }

    //    show2 does the inverse of show1
    function show2() {
        if (bg2.classList.contains('hide')) {
            bg2.classList.remove('hide');
            bg2.classList.add('show');
            bg1.classList.remove('show');
            bg1.classList.add('hide');
        }
    }

    // Select the timer display
    const timerDisplay = document.getElementById('timer');

    // Set the target date for the movie premiere (Year-Month-Day Hour:Minute:Second)
    const premiereDate = new Date('2024-12-01T18:00:00').getTime(); // Example: Dec 1, 2024, 6:00 PM

    // Function to calculate and update the countdown
    function updateCountdown() {
        const now = new Date().getTime(); // Current time
        const timeRemaining = premiereDate - now; // Time difference between now and the premiere date

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Format the countdown as DD:HH:MM:SS
        const formattedTime = `DD:${String(days).padStart(2, '0')} HH:${String(hours).padStart(2, '0')} MM:${String(minutes).padStart(2, '0')} SS:${String(seconds).padStart(2, '0')}`;

        // Display the countdown
        timerDisplay.textContent = formattedTime;

        // If the countdown is finished, display a message
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "The movie has premiered!";
        }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
}