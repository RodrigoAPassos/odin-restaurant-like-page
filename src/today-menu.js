function todayPage () {
    const content = document.getElementById("content");
    //page header
    const header = document.createElement("div");
    header.classList.add("header");
        //header title
    const hTitle = document.createElement("div");
    hTitle.classList.add("title");
    hTitle.innerHTML = "Daily Songs";
        //header options
    const options = document.createElement("div");
    options.classList.add("options");
            //Home
    const bHome = document.createElement("button");
    bHome.setAttribute("id", "home");
    bHome.setAttribute("onclick", "homePage()");
    bHome.innerHTML = "Home";
            //Today's Menu
    const bMenu = document.createElement("button");
    bMenu.innerHTML = "Today's Menu";
    bMenu.setAttribute("id", "menu");
    bMenu.classList.add("selected");
    bMenu.setAttribute("disabled", "true");
            //Recent
    const bRecent = document.createElement("button");
    bRecent.innerHTML = "Recent";
    bRecent.setAttribute("id", "recent");
    bRecent.setAttribute("onclick", "recentPage()");
        //append options
    options.appendChild(bHome);
    options.appendChild(bMenu);
    options.appendChild(bRecent);
        //icon
    const icon = document.createElement("div");
    icon.classList.add("icon");
            //img
    const img = document.createElement("img");
    img.setAttribute("src", "../src/queue_music_white_36dp.svg");
    img.setAttribute("alt", "site-icon");
        //append icon
    icon.appendChild(img);
    //append header
    header.appendChild(hTitle);
    header.appendChild(options);
    header.appendChild(icon);

    //page main
    

    //page footer
    const footer = document.createElement("div");
    footer.classList.add("footer");
        //developed
    const dev = document.createElement("div");
    dev.classList.add("developed");
    dev.innerHTML = "Developed by RodrigoAPassos";
        //credits
    const credits = document.createElement("div");
    credits.classList.add("credits");
            //a
    const creditsLink = document.createElement("a");
    creditsLink.setAttribute("href", "https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink");
    creditsLink.innerHTML = "Background image by Jabber Visuals";
        //append credits
    credits.appendChild(creditsLink);
    //append footer
    footer.appendChild(dev);
    footer.appendChild(credits);
}

export default todayPage;