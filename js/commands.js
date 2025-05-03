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
    - AI
    - Machine Learning
    - front end development
    - and building functional projects

Currently working on exciting projects.
(These are all commands, try it to find out more)
    - Yuki - AI voice-based assistant
    - Terminal - A terminal-style portfolio
    - Adaptive chess Bot - An AI chess bot that adapts to the player's skill level
    - Stock price prediction - a program to predict the price of a stock in the near future
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
    - HTML, CSS
    - JavaScript
    - Python
    - C#
    - Arduino
    - C++
    - Rust
    - PHP`,

    projects: /*html*/`
My Projects:
1. Yuki
    - <span class="highlight">'yuki'</span> is a command too, try it out!
    - Built with: Python, C#, and Raspberry Pi
    - Link: <a href="https://github.com/sparrowsaurora/Yuki">github.com/sparrowsaurora/yuki</a>

2. Terminal portfolio
    - A <span class="highlight">'terminal'</span> style portfolio
    - Built with: HTML, CSS, JavaScript
    - Link: <a href="https://sparrowsaurora.github.io/Terminal-Portfolio/">sparrowsaurora.github.io/Terminal-Portfolio</a>

3. Adaptive Chess Bot
    - A <span class="highlight">'chess'</span> bot with it's own neural network
    - Built with: Python
    - Link: <a href="https://github.com/sparrowsaurora/Adaptive-Chess-AI">sparrowsaurora/Adaptive-Chess-AI</a>
    
4. Stock Price Prediction
    - A <span class="highlight">'stock'</span> price predict neural network w/ historical data
    - Built with: Python
    - Link <a href="https://github.com/sparrowsaurora/stock-price-predicter">sparrowsaurora/stock-price-predicter</a>`,

    email: /*html*/`
My Email: <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,

    sudo: `
You're not an admin sry`,

    yuki: `
Yuki is my passion project, an AI assistant that helps me with my coding and other tasks.
That can also communticate with me using a custom voice module and humanised speech,
Yuki also has a display model made with C# and displayed with a Raspberry Pi and a 7 inch screen.
this allows for a more immersive experience and a more natural way of interacting with Yuki.
As well as the ability to have yuki use computer vision and speach processing to help with real life tasks.`,

    terminal: `
This website was made to be something special to me, im not the best at design so i wanted something unique and not fully static.
plus.. if you can work this website, i know youre someone id love to work with.
Made with HTML, minimal CSS and a LOT of JavaScript.`,

    chess: `
An adaptive chess bot written in Python that analyses the player's skill level and adjusts its gameplay to match or slightly 
surpass it. The bot currently uses a minimax algorithm with alpha-beta pruning. Built with a custom neural that evaluates 
board positions and adapts to the player's skill level using an Elo system to be used in the CLI with UCI standard notation. 
This project adapts to the player's skill level to help players improve their skills at a faster pace.`,

    stock: `
A custom-built neural network system that analyzes historical stock performance to predict future trends.
Using the yfinance api, it analyses the data using a custom nerual network and displays the results using Tkinter and Matplotlib;
testing will be done with a paper trading account.`,

    welcome: /*html*/`<span class="header">Welcome! to my interactive web terminal portfolio.<br />For a list of available commands, type <span class="highlight">'help'</span>.</span>`

};

export default commands; // Export the commands object