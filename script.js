async function loadProjects() {
    try {
        const res = await fetch("projects.json");
        const projects = await res.json();
        const container = document.getElementById("project-list");
        container.innerHTML = "";
        container.className = "columns is-multiline";

        projects.forEach(p => {
            const item = document.createElement("div");
            item.className = "column is-one-third";
            item.innerHTML = `
                <div class="card">
                    <div class="card-content">
                        <p class="title is-4">${p.name}</p>
                        <div class="content">
                            ${p.desc}
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="${p.link}" target="_blank" class="card-footer-item">View project</a>
                    </footer>
                </div>
            `;
            container.appendChild(item);
        });
    } catch {
        document.getElementById("project-list").innerText = "Could not load projects.";
    }
}

loadProjects();
