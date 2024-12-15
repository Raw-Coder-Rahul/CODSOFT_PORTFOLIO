document.getElementById("resume-button").addEventListener("click",function(){
    window.location.href = "images/mine_cv.pdf";
});
const projects=[
    {name:"E-learning Platform",link: "https://raw-coder-rahul.github.io/e-Raw-learn-2.0-/", description:"A platform for online learning using HTML, CSS, and JS." },
    {name:"Ancient India & Modern Time",link: "https://raw-coder-rahul.github.io/Ancient_India_And_Modern_Time/", description:"Calculates Yuga time and Kali Yuga's end." },
    {name:"Music Player",link: "https://raw-coder-rahul.github.io/music_player/", description:"A simple music player interface." },
    {name:"Password Generator",link: "https://raw-coder-rahul.github.io/Password-Generator/", description:"Generates strong passwords." },
    {name:"Rocket Runner Game",link: "https://github.com/Raw-Coder-Rahul/Scratch_Rocket_2.0/blob/main/README.md", description:"A fun game made in Scratch." }
];
const projectList = document.getElementById("project-list");
projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectCard);
});

