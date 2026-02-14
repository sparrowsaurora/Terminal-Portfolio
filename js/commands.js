// Define our command responses
const commands = {
    help: `Available commands:
- help: Show this message (Again...)
- about: About me
- resume: My resume
- socials: Show my socials
- languages: My Languages
- projects: My projects
- email: My email
- clear: Clear the Terminal 
- history: Show the command history`,

about: /*html*/`Hi! I'm Ryan,
I'm a software engineering student and content creator, who builds cool projects like this one.
I also make YouTube videos about software engineering in my free time.
I've just completed my Diploma of Information Technology (Advanced Programming) at North Metropolitan TAFE and 
I'm passionate about building and learning new things.

My fields of interest are:
- Embedded systems
- Automation
- back-end development

Currently working on exciting projects.
(These are all commands, try it to find out more)
- Bash-Salt - A small dev toolkit
- Realtime Chat app - A TCP based ternimal chatroom
- Terminal - A terminal-style portfolio
etc. (Type <span class="highlight">'projects'</span> to see more)

I primarily use Python and C++ when building my projects.
You can learn more about the projects that I have built using the <span class="highlight">'projects'</span> command.
You can browse around my website to find out more about me.
*Try using the <span class="highlight">'socials'</span> command.

Contact me at <a href="mailto:ryankelley1711@gmail.com">ryankelley1711@gmail.com</a>`,

resume: /*html*/`<a href="assets/Ryan-Kelley-Resume.pdf">My Resume</a>`,

socials: /*html*/`Follow me on:
GitHub: <a href="https://github.com/sparrowsaurora">github.com/sparrowsaurora</a>
LinkedIn: <a href="https://www.linkedin.com/in/ryan-kelley-8762a8285">linkedin.com/ryan-kelley</a>
Youtube: <a href="https://www.youtube.com/@sparrows_aurora">youtube.com/@sparrows_aurora</a>`,

email: /*html*/`My Email: <a href="mailto:ryankelley1711@gmail.com">ryankelley1711@gmail.com</a>`,
sudo: `You're not an admin sry`,

//     languages: `
// My Languages:
//     - Python
//     - PHP
//     - Shell (bash)
//     - Rust 
//     - C
//     - C++
//     - Dart
//     - SQL & NoSQL
// Frameworks:
//     - Flask
//     - Laravel    
//     - flutter`,

    languages: `My Languages:
    - Python        - C++
    - Shell (bash)  - Rust 
    - C             - PHP
    - SQL & NoSQL
Frameworks:
    - Flask
    - Laravel`,

//     projects: /*html*/`
// <b>Web projects:</b>
// # Bash-Salt
//     - <span class="highlight">'bashsalt'</span> is a command too, try it out!
//     - Built with: Python, Rust, PHP, Tailwind, Shell, SQL
//     - Link: <a href="https://github.com/sparrowsaurora/Bash-salt">github.com/sparrowsaurora/Bash-salt</a>

//     # Terminal portfolio
//     - A <span class="highlight">'terminal'</span> style portfolio
//     - Built with: HTML, CSS, JavaScript
//     - Link: <a href="https://sparrowsaurora.github.io/Terminal-Portfolio/">sparrowsaurora.github.io/Terminal-Portfolio</a>

// <b>Embedded projects:</b>
// # Unix timestamp display
//     - A Unix <span class="highlight">'timestamp'</span> clock for my friend
//     - Built with: C, Cmake
//     - Link <a href="https://github.com/sparrowsaurora/unix_epoch_display">sparrowsaurora/unix_epoch_display</a>`,

    projects: /*html*/`# Bash-Salt
    - <span class="highlight">'bashsalt'</span> is a command too, try it out!
    - Built with: Shell (BASH), Rust, python, C, Javascript, Tailwind
    - Link: <a href="https://github.com/sparrowsaurora/Bash-salt">github.com/sparrowsaurora/Bash-salt</a>
    - You can see the project running here: <a href="https://bash-salt.vercel.app/">bash-salt.vercel.app</a>

# Realtime Chatroom App
    - A TCP-based <span class="highlight">'chatroom'</span> application.
    - Built with: C++
    - Link: <a href="https://github.com/sparrowsaurora/Realtime-chat-app">github.com/sparrowsaurora/Realtime-chat-app</a>

# Terminal portfolio
    - A <span class="highlight">'terminal'</span> style portfolio
    - Built with: HTML, CSS, JavaScript
    - Link: <a href="https://github.com/sparrowsaurora/Terminal-Portfolio">github.com/sparrowsaurora/Terminal-Portfolio</a>`,


    bashsalt: `A current free SaaP (Software as a Product) project im working on to help developers work more efficiently.
A play on words of Bassalt, this is a collection of extra commands and tools for bash to make my life a little easier.
I was frustrated with manually making file maps, not having quick access to a ToDo list, and typing in long commands, etc. so i made this.
`,

    terminal: `This website was made to be something special to me, im not the best at design so i wanted something unique and not fully static.
plus.. if you can work this website, i know youre someone id love to work with.
Made with HTML, minimal CSS and a LOT of JavaScript.`,

//     timestamp: `A simple unix timestamp display built in C++ for a friend. It displays the current raw unix timestamp on a small LCD screen.
// This project was my first real look into embedded systems and programming in C++ and it's built on a raspberry pi pico (rp2040).
// It's a fun little project to practice low-level programming and working with embedded systems.`,

    chatroom: `A real-time text chat application to help me better understand networking.
A TCP connected chatroom with a monolithic architecture, allowing users to run a server, or join a room from the same base command using CLI arguments.
It also has user customisations, like colours for a specific user's messages for clarity.`,

    // welcome: /*html*/`<span class="header">Welcome! to my interactive web terminal portfolio.<br />For a list of available commands, type <span class="highlight">'help'</span>.</span>`
    welcome: /*html*/`<span class="header">If you've met me in person, this is the portfolio site I mentioned.<br />For a list of available commands, type <span class="highlight">'help'</span>.</span>`

};

export default commands; // Export the commands object
