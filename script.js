// Define the API URL
const apiUrl = 'https://icanhazdadjoke.com/';
const outputElement = document.getElementById('output');
function joke(){
    fetch(apiUrl, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Optionally display the joke on the page
            outputElement.textContent = data.joke;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
function sleep() {
    alert("My boss calls me 'the computer', not because of my calculation skills but because I go to sleep when left unattended for 15 minutes.")
}
function free() {
    alert("What is 6 inches long, 2 inches wide, and drives a women wild? (A $100 Bill)");
}



function openSidebar() {
    document.getElementById('side-bar').classList.add('active');
}

function closeSidebar() {
    document.getElementById('side-bar').classList.remove('active');
}

// Optional: Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('side-bar');
    var burger = document.getElementById('burger');
    var cross = document.getElementById('cross');

    if (!sidebar.contains(event.target) && !burger.contains(event.target) && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});