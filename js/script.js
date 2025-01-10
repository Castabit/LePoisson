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

// const footer = document.querySelector("footer");
// for (i = 0; i < 3; i++)
// {
//     const div = document.createElement("div");
//     footer.appendChild(div);
//     for (j = 0; j < 3; j++)
//     {
//         const p = document.createElement("p");
//         const a = document.createElement("a");
//         a.setAttribute("href","#top");
//         a.textContent = "placeholder";
//         p.appendChild(a);
//         div.appendChild(p);
//     }
// }
// footer.textContent = "Footer Content";

// const h2 = document.createElement("h2");
// h2.textContent = "Footer Content";
// footer.appendChild(h2);