import commands from './commands.js';

// Get our HTML elements
const banner = document.getElementById('banner');
const input = document.getElementById('input');
const output = document.getElementById('output');

var commandLog = []; // array to store command history

// Function to handle commands
function handleCommand(cmd) {
    cmd = cmd.toLowerCase().trim(); // Normalize command
    commandLog.push(cmd); // Store command in commandLog

    output.innerHTML += `\n\nvisitor@portfolio:~$ ${cmd}`; // Display command

    if (cmd === 'clear') {
        output.innerHTML = ''; // Clear output
    } else if (cmd === 'history') {
        readCommandLog(); // Call to read command log
    } else if (commands[cmd]) {
        output.innerHTML += '\n' + commands[cmd]; // Show command response
    } else if (cmd !== '') {
        output.innerHTML += '\nCommand not found. Type "help" to see commands.'; // Error message
    }

    window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
}

// reads out command log
function readCommandLog() {
    output.innerHTML += '\nCommand History:\n'; // Optional header
    commandLog.forEach((command, index) => {
        output.innerHTML += `${index + 1}: ${command}\n`; // Display command with index
    });
}

// Event listener for when user presses a key in the input field
input.addEventListener('keypress', function(event) {
    // Check if Enter key was pressed
    if (event.key === 'Enter') {
        // Get the command
        let cmd = input.value;

        // Handle the command
        handleCommand(cmd);

        // Clear the input
        input.value = '';
    }
});

// Keep focus on input when clicking anywhere on the page
document.addEventListener('click', function() {
    input.focus();
});

// Initial focus on input when page loads
window.addEventListener('load', function() {
    input.focus();
});

// Function to add text to the output
function addToOutput(text) {
    output.innerHTML += text;
    // Scroll to bottom of page
    window.scrollTo(0, document.body.scrollHeight);
}

function printTitle(text) {
    banner.innerHTML += text;
    // Scroll to bottom of page
    window.scrollTo(0, document.body.scrollHeight);
}


// Simulating a typing effect for the welcome message
function Welcomebanner() {
    const bannerTitle = `                ⢀⣀⣤⡤⠤⠤⠤⣤⣄⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠉⠛⢦⣤⠶⠦⣤⡀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⢋⡽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⠀⠀⠙⢶⣄
⠀⠀⠀⠀⠀⠀⣰⠟⠁⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡀⠀⠀⠉⠓⠦⣤⣤⣤⣤⣤⣤⣄⣀
⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣷⡄⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣆
⠀⠀⣠⠞⠁⠀⠀⣀⣠⣏⡀⠀⢠⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⡃⠀⠀⠄⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆
⢀⡞⠁⠀⣠⠶⠛⠉⠉⠉⠙⢦⡸⣿⡿⠀⠀⠀⡄⢀⣀⣀⡶⠀⠀⠀⢀⡄⣀⠀⣢⠟⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠃
⡞⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀⢳⢀⣠⠀⠀⠀⠉⠉⠀⠀⣀⠀⠀⠀⢀⣠⡴⠞⠁⠀⠀⠈⠓⠦⣄⣀⠀⠀⠀⠀⣀⣤⠞⠁ _____
⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠁⠀⢀⣀⣀⡴⠋⢻⡉⠙⠾⡟⢿⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠉⠉⠀⠀ / ___/ 
⠘⣦⡀⠀⠀⠀⠀⠀⠀⣀⣤⠞⢉⣹⣯⣍⣿⠉⠟⠀⠀⣸⠳⣄⡀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ / /_     ____   ____ _   _____   _____  ____  _      __
⠀⠈⠙⠒⠒⠒⠒⠚⠋⠁⠀⡴⠋⢀⡀⢠⡇⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⢀⡾⠋⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \\__ \\   / __ \\ / __ \`/  / ___/  / ___/ / __ \\| | /| / /
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⢸⡀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ___/ /  / /_/ // /_/ /  / /     / /    / /_/ /| |/ |/ / 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠉⠋⠻⣄⠀⠀⠀⠀⠀⣀⣠⣴⠞⠋⠳⠶⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   /____/  / .___/ \\__,_/  /_/     /_/     \\____/ |__/|__/  
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠦⢤⠤⠶⠋⠙⠳⣆⣀⣈⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀             /_/                                     © 2024

----~~~~~~~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;~~~~~~~----------___________________________________------~~~~~;;`;
    let i = 0;
    function typeChar() {
        // Define how many characters to add at once
        const chunkSize = 5; // Adjust this number for speed
        const nextChunk = bannerTitle.substring(i, i + chunkSize);
        
        if (nextChunk.length > 0) {
            printTitle(nextChunk); // Print the chunk
            i += chunkSize; // Move the index forward by chunk size
            setTimeout(typeChar, 5); // Adjust this value for overall speed
        } else {
            // Show content after the banner is fully displayed
            document.getElementById('content').style.display = 'block'; // Show content
        }
    }
    typeChar();
}

// Call the typing effect function when the page loads
window.addEventListener('load', Welcomebanner);