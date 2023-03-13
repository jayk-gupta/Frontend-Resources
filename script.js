const allLinks = document.querySelectorAll("a"); // Selecting all link tags
const menuBar = document.querySelector(".menu");
const menu = document.querySelector("nav ul");

allLinks.forEach(link => {
    // If the href of the link tag includes "#"(i.e links in nav bar) do nothing
    if(link.href.includes("#")){
        return
    }else{ //else set its property attribute to "_blank"(i.e open link in new tab)
        link.setAttribute("target", "_blank");
    }
})

// Open menu once menu bar is clicked
menuBar.addEventListener("click", showMenu = () => {
    menu.classList.toggle("show");

    // Loop through all nav bar links and then if any link is clicked, close the menu bar
    document.querySelectorAll("nav ul li").forEach(li => {
        li.addEventListener("click", close = () =>{
            menu.classList.remove("show");
        })
    })
})