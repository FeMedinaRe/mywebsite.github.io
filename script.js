async function loadProjects() {
    try {
        const res = await fetch("projects.json");
        const projects = await res.json();
        const container = document.getElementById("project-list");
        container.innerHTML = "";

        projects.forEach(p => {
            const item = document.createElement("div");
            item.className = "project";
            item.innerHTML = `
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank">View project</a>
            `;
            container.appendChild(item);
        });
    } catch {
        document.getElementById("project-list").innerText = "Could not load projects.";
    }
}

loadProjects();
