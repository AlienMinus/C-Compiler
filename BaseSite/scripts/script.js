// Function to populate articles with content
function populateArticles() {
    const articles = document.querySelectorAll("article");
    articles.forEach((article, index) => {
        article.innerHTML = `
            <h2>Article ${index + 1}</h2>
            <p>This is the content of Article ${index + 1}. You can replace this with your own content.</p>
        `;
    });
}

// Toggle the sidebar menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active"); // Toggle the 'active' class
    });
});

// Function to handle navigation clicks
function setupNavigation() {
    const nav = document.querySelector("nav");
    nav.innerHTML = `
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#aside">Aside</a></li>
        </ul>
    `;

    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// Add IDs to sections and aside for navigation
function addIds() {
    const sections = document.querySelectorAll("section");
    sections[0].id = "section1";
    sections[1].id = "section2";

    const aside = document.querySelector("aside");
    aside.id = "aside";
}

// Initialize the script
function initialize() {
    populateArticles();
    setupNavigation();
    addIds();
}

// Run the script after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialize);