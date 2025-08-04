// Define our command responses
const commands = {
    help: `
Available commands:
- help: Show this message (Again...)
- about: About me
- resume: My resume
- socials: Show my socials
- languages: My Languages
- projects: My projects
- email: My email
- clear: Clear the Terminal 
- history: Show the command history`,

    about: /*html*/`
Hi! I'm Ryan (Sparrow)
I'm a software engineer and content creator, who builds cool projects like this one
and makes YouTube videos about software engineering.
I'm currently studying a Diploma of Information Technology (Advanced Programming) at North Metropolitan TAFE and 
I'm passionate about building new things and innovating new ideas

My fields of intetest are:
    - Algorithmic trading
    - Machine Learning
    - back-end development
    - and building functional projects

Currently working on exciting projects.
(These are all commands, try it to find out more)
    - Bash-Salt - A small dev toolkit
    - Stock price prediction API- a program to predict the price of a stock in the near future
    - Terminal - A terminal-style portfolio
    etc. (Type <span class="highlight">'projects'</span> to see more)

I would love to work with anyone who wants to build a 
SaaS project for their business or even a personal 
website to showcase their portfolio.

I primarily use Python when building my projects.
You can learn more about the projects that I have built using 
the <span class="highlight">'projects'</span> command.
You can browse around my website to find out more about me.
*Try using the <span class="highlight">'socials'</span> command.

Contact me at <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,

    resume: /*html*/`
<a href="assets/Ryan_Kelley_Software_Engineer.pdf">My Resume</a>`,

    socials: /*html*/`
Follow me on:
GitHub: <a href="https://github.com/sparrowsaurora">github.com/sparrowsaurora</a>
LinkedIn: <a href="https://www.linkedin.com/in/ryan-kelley-8762a8285">linkedin.com/ryan-kelley</a>
Youtube: <a href="https://www.youtube.com/@sparrows_aurora">youtube.com/@sparrows_aurora</a>
X (Twitter): <a href="https://x.com/Sparrows_au">x.com/Sparrows_au</a>`,

    languages: `
My Languages:
    - Python
    - Rust
    - Dart
    - JavaScript
    - Shell
    - SQL
    - C++
    - PHP`,

    projects: /*html*/`
My Projects:
1. Bash-Salt
    - <span class="highlight">'bashsalt'</span> is a command too, try it out!
    - Built with: Python, Rust, PHP, Tailwind, Shell, SQL
    - Link: <a href="https://github.com/sparrowsaurora/Bash-salt">github.com/sparrowsaurora/Bash-salt</a>

2. Stock Price Prediction API
    - A <span class="highlight">'stock'</span> price predict neural network w/ historical data
    - Built with: Python
    - Link <a href="https://github.com/sparrowsaurora/stock-price-predicter">sparrowsaurora/stock-price-predicter</a>

3. Terminal portfolio
    - A <span class="highlight">'terminal'</span> style portfolio
    - Built with: HTML, CSS, JavaScript
    - Link: <a href="https://sparrowsaurora.github.io/Terminal-Portfolio/">sparrowsaurora.github.io/Terminal-Portfolio</a>`,
    
    email: /*html*/`
My Email: <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,

    sudo: `
You're not an admin sry`,

    bashsalt: `
A current free SaaP (Software as a Product) project im working on to help developers work more efficiently.
A play on words of Bassalt, this is a collection of extra commands and tools for bash to make my life a little easier.
I was frustrated with manually making file maps, not having quick access to a ToDo list, and typing in long commands, etc. so i made this.
`,

    terminal: `
This website was made to be something special to me, im not the best at design so i wanted something unique and not fully static.
plus.. if you can work this website, i know youre someone id love to work with.
Made with HTML, minimal CSS and a LOT of JavaScript.`,

    stock: `
A custom-built neural network system that analyzes historical stock performance to predict future trends.
Using the yfinance api, it analyses the data using a custom nerual network and displays the results using Tkinter and Matplotlib;
testing will be done with a paper trading account.`,

    welcome: /*html*/`<span class="header">Welcome! to my interactive web terminal portfolio.<br />For a list of available commands, type <span class="highlight">'help'</span>.</span>`

};

export default commands; // Export the commands object