const dateInput = document.getElementById('selectedDate');
const displayDate = document.getElementById('displayDate');

dateInput.addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const currentDate = new Date();
    
    // Check if the selected date is in the past
    if (selectedDate < currentDate) {
        alert('Please select a correct date.'); // You can replace this with your preferred way of displaying the message
        // Optionally, you can clear the selected date input field
        this.value = ''; // Clears the input field value
        displayDate.textContent = ''; // Clears the displayed date
    } else {
        const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString('en-US', options);
        displayDate.textContent = `Selected Date: ${formattedDate}`;
    }
});
