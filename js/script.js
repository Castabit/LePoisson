const navList = document.getElementById("nav-list");

const navBar = {
    Home: "/index.html",
    About: "../pages/about.html",
    Rankings: "../pages/rankings.html",
}; 

for (const [key,value] of Object.entries(navBar)) {
    const listItem = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.textContent = key;
    anchor.setAttribute("href",value);
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
}