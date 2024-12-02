// Generate the website from HTML, CSS, and JavaScript code
function generateWebsite() {
    const htmlCode = document.getElementById("indexHtml").value;
    const cssCode = document.getElementById("styleCss").value;
    const jsCode = document.getElementById("scriptJs").value;

    if (htmlCode && cssCode && jsCode) {
        // Create the generated website content
        const generatedWebsite = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Generated Website</title>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `;
        
        // Create a live link instead of just downloading the file
        const generatedBlob = new Blob([generatedWebsite], { type: "text/html" });
        const liveLink = URL.createObjectURL(generatedBlob);
        
        // Display the link for the user to open their generated website
        const linkDisplay = document.getElementById("generatedLink");
        linkDisplay.innerHTML = `<a href="${liveLink}" target="_blank">Click here to view your generated website</a>`;
    } else {
        alert("Please fill in all the fields (HTML, CSS, and JavaScript).");
    }
}

// Switch to template selection
function showTemplates() {
    document.querySelector(".template-list").classList.remove("hidden");
    document.querySelector(".create-section").classList.add("hidden");
    document.querySelector(".code-creation").classList.add("hidden");
    generateTemplateLinks();
}

// Generate template links with one per row for better visual presentation
function generateTemplateLinks() {
    const templateContainer = document.querySelector(".templates");
    templateContainer.innerHTML = ''; // Clear previous links

    for (let i = 1; i <= 10; i++) { // For now, adding 10 templates, can expand to 200
        const templateLink = document.createElement("a");
        templateLink.href = `templates/template${i}.html`;
        templateLink.target = "_blank";
        templateLink.classList.add("template-link");
        templateLink.textContent = `Template ${i}`;
        templateContainer.appendChild(templateLink);
    }
}

// Template loading functionality
function loadTemplate(templateNumber) {
    fetch(`templates/template${templateNumber}.html`)
        .then(response => response.text())
        .then(templateHTML => {
            document.getElementById("indexHtml").value = templateHTML;
        });
}
