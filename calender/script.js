// JavaScript to toggle dark mode

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeStylesheet = document.querySelector('#dark-mode-stylesheet');

darkModeToggle.addEventListener('click', () => {
    darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
    // You can also save the user's preference to localStorage or a cookie for persistence.
});

function renderCalendar(month, year) {
    const calendarBody = document.getElementById('calendar-body'); // Get the calendar body element.

    // Clear the calendar body.
    calendarBody.innerHTML = '';

    const currentDate = new Date(year, month, 1);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Set the displayed month and year.
    document.getElementById('current-month').textContent = `${currentMonth + 1}/${currentYear}`;

    // Calculate the total number of days in the specified month.
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Calculate the day of the week for the first day of the month.
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    // Create the table rows and cells for the calendar grid.
    let row = document.createElement('tr');
    for (let i = 0; i < firstDayOfWeek; i++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;
        row.appendChild(cell);

        if (row.children.length === 7) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const currentMonthElement = document.getElementById('current-month');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function updateCalendar() {
        calendarBody.innerHTML = ''; // Clear the calendar body.
        renderCalendar(currentMonth, currentYear);
        currentMonthElement.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)} ${currentYear}`;
    }

    // Function to go to the previous month
    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        currentDate = new Date(currentYear, currentMonth, 1);
        updateCalendar();
    }

    // Function to go to the next month
    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        currentDate = new Date(currentYear, currentMonth, 1);
        updateCalendar();
    }
    document.getElementById('prev-month').addEventListener('click', goToPreviousMonth);
    document.getElementById('next-month').addEventListener('click', goToNextMonth);

    // JavaScript code goes here

    const eventForm = document.getElementById('event-form');

    eventForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting via traditional HTTP request.

        // Gather event details from the form inputs
        const eventTitle = document.getElementById('event-title').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;

        // Create and add the event to the calendar (you need to implement this part)
        addEvent(eventDate, eventTitle, eventDescription);

        // Clear the form inputs after submission
        eventForm.reset();
    });
    

    // Add an event to the calendar
    function addEvent(date, eventTitle, eventDescription) {
        const calendarBody = document.getElementById('calendar-body');
        const cells = calendarBody.getElementsByTagName('td');
        const day = new Date(date).getDate();
    
        for (let i = 0; i < cells.length; i++) {
            if (parseInt(cells[i].textContent) === day) {
                const eventElement = document.createElement('div');
                eventElement.textContent = eventTitle;
                eventElement.title = eventDescription;
                cells[i].appendChild(eventElement);
                break; // Once the event is added, exit the loop.
            }
        }
    }
    
    // Initial calendar rendering
    updateCalendar();
});
