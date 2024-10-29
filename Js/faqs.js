// Exporting the faqs function for use in other files
export const faqs = () => {
    // Selecting all elements with the class name 'question' and storing them in the accordion variable
    const accordion = document.getElementsByClassName('question');

    // Looping through each element in the accordion (which are the question elements)
    for (const num of accordion) {
        // Adding a 'click' event listener to each question element
        num.addEventListener('click', () => {

            if (num.classList.contains('active')) {
                num.classList.toggle('active')
            } else {
                removeActiveClasses();
                num.classList.toggle('active');
            }
            
        });
    }

    // Function to remove 'active' class from all questions
    function removeActiveClasses() {
        for (const item of accordion) {
            // Remove 'active' class from each question element
            item.classList.remove('active');
        }
    }
}
