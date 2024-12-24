const navList = document.getElementById("nav-list");

const navBar = {
    "Home": "index.html",
    "About": "pages/about.html",
    "Fish Ratings": "pages/ratings.html",
    "Shellfishes": "pages/shellfishes.html"
}; 

for (const [key,value] of Object.entries(navBar)) {
    const listItem = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.textContent = key;
    anchor.setAttribute("href",value);
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
}