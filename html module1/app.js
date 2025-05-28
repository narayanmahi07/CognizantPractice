// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = () => {
    alert("Page is fully loaded!");
    loadSavedPreference(); // Reapply saved preferences
};

// 2. Syntax, Data Types, and Operators
const eventName = "Community Meetup";
const eventDate = "2025-06-15";
let availableSeats = 50;
let eventInfo = `${eventName} on ${eventDate} with ${availableSeats} seats available`;
console.log(eventInfo);

// 3. Conditionals, Loops, and Error Handling
const events = [
    { name: "Music", date: "2025-07-01", seats: 30, category: "Entertainment" },
    { name: "Marathon", date: "2024-12-01", seats: 0, category: "Fitness" },
    { name: "Book Fair", date: "2025-08-10", seats: 20, category: "Education" },
];

function displayUpcomingEvents() {
    try {
        const today = new Date().toISOString().split("T")[0];
        events.forEach(event => {
            if (event.date >= today && event.seats > 0) {
                console.log(`Upcoming: ${event.name} on ${event.date}`);
            }
        });
    } catch (error) {
        console.error("Error displaying events:", error);
    }
}
displayUpcomingEvents();

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, seats, category) {
    events.push({ name, date, seats, category });
}

function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {
        event.seats--;
        console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
    } else {
        console.log("Event is full or not found");
    }
}

function filterEventsByCategory(category) {
    return events.filter(e => e.category === category);
}

function createCategoryCounter() {
    const counts = {};
    return function(eventName) {
        counts[eventName] = (counts[eventName] || 0) + 1;
        return counts[eventName];
    };
}
const trackRegistrations = createCategoryCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}
Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};
const concert = new Event("Concert", "2025-07-20", 100);
console.log(Object.entries(concert));

// 6. Arrays and Methods
events.push({ name: "Art Exhibition", date: "2025-10-10", seats: 15, category: "Art" });
const musicEvents = events.filter(e => e.name === "Music");
const eventCards = events.map(e => `${e.name} - ${e.date}`);
console.log(eventCards);

// 7. DOM Manipulation
function renderEvents() {
    const container = document.getElementById("gallery");
    if (!container) return;

    container.innerHTML += '<h3>Upcoming Events</h3>';
    events.forEach(event => {
        const div = document.createElement("div");
        div.textContent = `${event.name} - ${event.date} - Seats: ${event.seats}`;
        container.appendChild(div);
    });
}

// 8. Event Handling
document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", event => {
        console.log("Changed to:", event.target.value);
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        console.log("Quick search initiated");
    }
});

// 9. Async JS, Promises, Async/Await
async function fetchEvents() {
    const display = document.getElementById("output");
    display.innerText = "Loading events...";
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        display.innerText = "Events fetched successfully!";
        console.log(data.slice(0, 5)); // Mock data
    } catch (err) {
        display.innerText = "Failed to fetch events";
        console.error(err);
    }
}
fetchEvents();

// 10. Modern JavaScript Features
function showEvent({ name, date, seats } = {}) {
    console.log(`Event: ${name}, Date: ${date}, Seats: ${seats}`);
}
const clonedEvents = [...events];
clonedEvents.forEach(showEvent);

// 11. Working with Forms
document.querySelector("#register form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = this.querySelector('input[type="email"]').value;
    const selectedEvent = document.getElementById("eventSelect").value;

    if (!name || !email || !selectedEvent) {
        document.getElementById("regMsg").innerText = "❌ Please fill all fields";
        return;
    }

    document.getElementById("regMsg").innerText = `✅ Registered ${name} for ${selectedEvent}`;
});

// 12. AJAX & Fetch API
function submitRegistration() {
    const data = {
        name: document.getElementById("regName").value,
        event: document.getElementById("eventSelect").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    })
        .then(res => res.json())
        .then(json => {
            console.log("Submitted:", json);
            alert("✔️ Registration sent to server.");
        })
        .catch(err => console.error("❌ Failed to send:", err));
}

// 13. Debugging and Testing
function debugRegistration() {
    console.log("Checking registration form...");
    const name = document.getElementById("regName").value;
    const event = document.getElementById("eventSelect").value;
    console.log({ name, event });
    debugger; // DevTools breakpoint
}

// 14. jQuery and JS Frameworks (if jQuery is loaded)
if (window.jQuery) {
    $('#registerBtn').click(() => alert('Registered via jQuery'));
    $('.eventImage').fadeIn().fadeOut();
    console.log("✅ jQuery in use. Consider moving to React/Vue for better SPA management.");
}
