let pages = ["home", "about", "contact"];

let home = TagCreator.getTag("home");

let header = createHeader("header", "./js logo.png", "My Framework", "Pagejs");

home.appendChild(header);

let homeLink = new PageLink("Home", "#");
let aboutLink = new PageLink("About", "#");
let contactLink = new PageLink("Contact", "#");

let nav = createNav("nav", [homeLink, aboutLink, contactLink]);

home.appendChild(nav);

TagCreator.getTag("nav-1").addEventListener("click", ()=>{
    switchPageGrid("about", pages);
});

switchPageGrid("home", pages);
