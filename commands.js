// Define our command responses
const commands = {
    help: `
Available commands:
- help: Show this message (Again...)
- about: About me
- resume: My resume
- socials: Show my socials
- skills: My skills
- projects: My projects
- email: My email
- banner: Display the header ascii
- clear: Clear the Terminal 
- history: Show the command history`,

    about: `
Hi! I'm Ryan (Sparrow)
I'm a software engineer and content creator, who builds cool projects like this one
and makes YouTube videos about software engineering.
I'm currently studying a cert IV in programming at North Metropolitan TAFE and 
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
    etc. (Type <span class="highlight">'projects'</span> to see more)

I would love to work with anyone who wants to build a 
SaaS project for their business or even a personal 
website to showcase their portfolio.

I primarily use python and C# when building my projects.
You can learn more about the projects that I have built using 
the <span class="highlight">'projects'</span> command.
You can browse around my website to find out more about me.
*Try using the <span class="highlight">'socials'</span> command.

Contact me at <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,

    resume: `
<a href="assets/ryan-resume.pdf">My Resume</a>`,

    socials: `
Follow me on:
Twitch: <a href="https://www.twitch.tv/sparrows_aurora">twitch.tv/sparrows_aurora</a>
Instagram: <a href="https://www.instagram.com/sparrows_aurora">instagram.com/sparrows_aurora</a>
GitHub: <a href="https://github.com/sparrowsaurora">github.com/sparrowsaurora</a>
LinkedIn: <a href=""></a>
Youtube: <a href="https://www.youtube.com/@sparrows_aurora">youtube.com/@sparrows_aurora</a>`,

    skills: `
My Skills:
    - HTML, CSS
    - JavaScript
    - Python
    - C#
    - Git basics
    - Web Design`,

    projects: `
My Projects:
1. Yuki
    - <span class="highlight">'yuki'</span> is a command too, try it out!
    - Built with: Python, C#, and Raspberry Pi
    - Link: <a href="https://github.com/sparrowsaurora">github.com/sparrowsaurora/yuki</a>

2. Terminal portfolio
    - A <span class="highlight">'terminal'</span> style portfolio
    - Built with: HTML, CSS, JavaScript
    - Link: <a href="https://github.com/sparrowsaurora/terminal-style-portfolio">github.com/sparrowsaurora/terminal-style-portfolio</a>`,

    email: `
My Email: <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,

    banner: `\n                ⢀⣀⣤⡤⠤⠤⠤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠉⠛⢦⣤⠶⠦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      
⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⢋⡽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⠀⠀⠙⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    
⠀⠀⠀⠀⠀⠀⣰⠟⠁⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡀⠀⠀⠉⠓⠦⣤⣤⣤⣤⣤⣤⣄⣀⠀⠀⠀   
⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣷⡄⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣆⠀    
⠀⠀⣠⠞⠁⠀⠀⣀⣠⣏⡀⠀⢠⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⡃⠀⠀⠄⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆   
⢀⡞⠁⠀⣠⠶⠛⠉⠉⠉⠙⢦⡸⣿⡿⠀⠀⠀⡄⢀⣀⣀⡶⠀⠀⠀⢀⡄⣀⠀⣢⠟⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠃    
⡞⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀⢳⢀⣠⠀⠀⠀⠉⠉⠀⠀⣀⠀⠀⠀⢀⣠⡴⠞⠁⠀⠀⠈⠓⠦⣄⣀⠀⠀⠀⠀⣀⣤⠞⠁ _____
⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠁⠀⢀⣀⣀⡴⠋⢻⡉⠙⠾⡟⢿⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠉⠉⠀⠀ / ___/                                                  
⠘⣦⡀⠀⠀⠀⠀⠀⠀⣀⣤⠞⢉⣹⣯⣍⣿⠉⠟⠀⠀⣸⠳⣄⡀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ / /_     ____   ____ _   _____   _____  ____  _      __
⠀⠈⠙⠒⠒⠒⠒⠚⠋⠁⠀⡴⠋⢀⡀⢠⡇⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⢀⡾⠋⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  \\__ \\   / __ \\ / __ \`/  / ___/  / ___/ / __ \\| | /| / /
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⢸⡀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ___/ /  / /_/ // /_/ /  / /     / /    / /_/ /| |/ |/ / 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠉⠋⠻⣄⠀⠀⠀⠀⠀⣀⣠⣴⠞⠋⠳⠶⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ /____/  / .___/ \\__,_/  /_/     /_/     \\____/ |__/|__/  
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠦⢤⠤⠶⠋⠙⠳⣆⣀⣈⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       /_/                                     © 2024
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                 
----~~~~~~~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;~~~~~~~----------_____________________________________________------~~~~~;;`,

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
Made with HTML, minimal CSS and a LOT of JavaScript. `

};

export default commands; // Export the commands object