document.addEventListener("DOMContentLoaded", function () {
    let typing_text = "EduGuard";
    let typingh1 = document.getElementById("typing");
    let i = 0;

    function type() {
        if (i < typing_text.length) {
            typingh1.innerText += typing_text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(function () {
                typingh1.innerText = "";
                i = 0; // Reset the index
                type();
            }, 3000);
        }
    }

    if (typingh1) { // Ensure typingh1 is not null
        type();
    } else {
        console.error("Element with id 'typing' not found.");
    }
});



function showProjects() {
    document.getElementById("home").style.display = 'none';
    document.getElementById("project_lighter").style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('project-form');
    const projectsContainer = document.getElementById('projects');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    projectsContainer.innerHTML = '';

    // Load existing projects from local storage on page load
    loadProjects();

    // Open the popup when the if shift + p is pressed
    document.addEventListener('keydown', (event) => {
        if (event.shiftKey && event.key === 'P') {
            popup.style.display = 'block';
        }
    })

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const type = document.getElementById('project-type').value;
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;

        // Create project object
        const project = {
            type,
            title,
            description
        };

        // Save project to local storage
        saveProject(project);

        // Display the project
        displayProject(project);

        // Reset form
        form.reset();

        // Close the popup
        popup.style.display = 'none';
    });

    // Checks if the "View Project" button is clicked
    projectsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('a-button')) {
            const projectDiv = event.target.closest('.project');
            const project = {
                type: projectDiv.getAttribute('data-type'), // Type now retrieved from data attribute
                title: projectDiv.querySelector('h3').textContent,
                description: projectDiv.querySelector('p').textContent
            };

            if (project.type === 'Drawings') {
                drawingProjectHandler(project);
            } else if (project.type === 'Notes') {
                notesProjectHandler(project);
            }
        }
    });

    // Save project to local storage
    function saveProject(project) {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    // Load and display projects from local storage
    function loadProjects() {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.forEach(project => {
            displayProject(project);
        });
    }

    // Display project in the #projects section
    function displayProject(project) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.setAttribute('data-type', project.type); // Store the project type as a data attribute
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="a-button">View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    }

    function drawingProjectHandler(project) {
        console.log('Drawing project selected:', project);

        // Add or update the HEXA value in localStorage
        let HEXA = JSON.parse(localStorage.getItem('HEXA')) || [];
        let existingProject = HEXA.find(p => p.title === project.title);

        if (!existingProject) {
            existingProject = { ...project, drawingData: [] };
            HEXA.push(existingProject);
            localStorage.setItem('HEXA', JSON.stringify(HEXA));
        }

        // Create a blob URL for the drawing page
        const drawingPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Drawing Page</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <style>
                .bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #333;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
}

.bottom-nav .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    width: 50px; /* Default size */
    height: 50px; /* Default size */
    border-radius: 50%; /* Circular shape */
    transition: background-color 0.3s, transform 0.3s;
}

.bottom-nav .nav-item.save {
    background-color: #4CAF50; /* Green */
}

.bottom-nav .nav-item.view {
    background-color: #2196F3; /* Blue */
}

.bottom-nav .nav-item.clear {
    background-color: #f44336; /* Red */
}

.bottom-nav .nav-item.save:hover {
    background-color: #45a049; /* Darker green */
    transform: scale(1.1); /* Slightly larger on hover */
}

.bottom-nav .nav-item.view:hover {
    background-color: #0b7dda; /* Darker blue */
    transform: scale(1.1); /* Slightly larger on hover */
}

.bottom-nav .nav-item.clear:hover {
    background-color: #e53935; /* Darker red */
    transform: scale(1.1); /* Slightly larger on hover */
}

.bottom-nav .nav-item.small {
    width: 40px;
    height: 40px;
    font-size: 20px;
}

.bottom-nav .nav-item.large {
    width: 60px;
    height: 60px;
    font-size: 28px;
}

            </style>
        </head>
        <body>
            <canvas id="canvas"></canvas>
            <div class="bottom-nav">
                <div class="nav-item save" id="save-btn">
                    <i class="bi bi-save"></i>
                </div>
                <div class="nav-item view" id="view-btn">
                    <i class="bi bi-eye"></i>
                </div>
                <div class="nav-item clear" id="clear-btn">
                    <i class="bi bi-trash"></i>
                </div>
            </div>
            <script>
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                let isDrawing = false;
                let drawings = ${JSON.stringify(existingProject.drawingData || [])};
                let startX, startY;

                function resizeCanvas() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    redraw();
                }

                function startDrawing(event) {
                    isDrawing = true;
                    [startX, startY] = [event.offsetX, event.offsetY];
                }

                function draw(event) {
                    if (!isDrawing) return;
                    const x = event.offsetX;
                    const y = event.offsetY;

                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(x, y);
                    ctx.stroke();

                    drawings.push({ startX, startY, x, y });
                    [startX, startY] = [x, y];
                }

                function stopDrawing() {
                    isDrawing = false;
                    saveDrawings();
                }

                function redraw() {
                    drawings.forEach(line => {
                        ctx.beginPath();
                        ctx.moveTo(line.startX, line.startY);
                        ctx.lineTo(line.x, line.y);
                        ctx.stroke();
                    });
                }

                function saveDrawings() {
                    const HEXA = JSON.parse(localStorage.getItem('HEXA')) || [];
                    const projectIndex = HEXA.findIndex(p => p.title === '${project.title}');
                    if (projectIndex !== -1) {
                        HEXA[projectIndex].drawingData = drawings;
                        localStorage.setItem('HEXA', JSON.stringify(HEXA));
                    }
                }

                function clearCanvas() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawings = [];
                    saveDrawings();
                }

                document.getElementById('save-btn').addEventListener('click', saveDrawings);
                document.getElementById('view-btn').addEventListener('click', () => {
                    const HEXA = JSON.parse(localStorage.getItem('HEXA')) || [];
                    const project = HEXA.find(p => p.title === '${project.title}');
                    if (project) {
                        drawings = project.drawingData || [];
                        redraw();
                    }
                });
                document.getElementById('clear-btn').addEventListener('click', clearCanvas);

                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mouseout', stopDrawing);

                window.addEventListener('resize', resizeCanvas);

                resizeCanvas();
                redraw();
            </script>
        </body>
        </html>
    `;

        const blob = new Blob([drawingPageContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        window.open(url, '_blank');
    }

    function notesProjectHandler(project) {
        console.log('Notes project selected:', project);

        // Retrieve existing notes or initialize with an empty string
        let notes = localStorage.getItem(project.title) || '';

        // Append the current date and time to the notes
        notes += `\n\n[${new Date().toLocaleString()}]`;
        project.notes = notes;

        // Save updated notes to local storage with the project title as key
        localStorage.setItem(project.title, notes);

        // HTML content for the notes page
        const notesPageContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${project.title}</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    textarea {
                        resize: none;
                        width: 100%;
                        height: 100vh;
                        padding: 10px;
                        font-size: 16px;
                        line-height: 1.5;
                        border: none;
                        background-color: #f5f5f5;
                        color: #333;
                        overflow: auto;
                        outline: none;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <textarea id="notes-textarea">${notes}</textarea>
                <script>
                    const textarea = document.getElementById('notes-textarea');
                    textarea.addEventListener('input', () => {
                        // Save updated text back to local storage
                        localStorage.setItem('${project.title}', textarea.value);
                    });
                </script>
            </body>
            </html>
            `;

        // Create a Blob from the HTML content and open it in a new tab
        const blob = new Blob([notesPageContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Open the notes page in a new tab
        window.open(url, '_blank');

        // Clean up the Blob URL after use
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 100);
    }


});
