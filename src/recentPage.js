function recentPage () {
    const content = document.getElementById("content");
    //page header
            //Home
    const bHome = document.getElementById("home");
    bHome.removeAttribute("disabled");
            //Today's Menu
    const bMenu = document.getElementById("today");
    bMenu.removeAttribute("disabled");
            //Recent
    const bRecent = document.getElementById("recent");
    bRecent.setAttribute("disabled", "true");

    //page main
    const main = document.createElement("div");
    main.classList.add("main");
        //bckg
    const bckg = document.createElement("div");
    bckg.classList.add("bckg");
        //info
    const info = document.createElement("div");
    info.classList.add("info");
                //main-title
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.innerHTML = "Recent Songs";
                //song list
    const songList = document.createElement("ol");
    songList.classList.add("song-list");
                    //list items
    const song1 = document.createElement("li");
                        //1st song
    const songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    const firstSong = document.createElement("h4");
    firstSong.innerHTML = "Ideologia";
    const firstSongAuthor = document.createElement("h5");
    firstSongAuthor.innerHTML = "Cazuza";

    //main append
    songContainer.appendChild(firstSong);
    songContainer.appendChild(firstSongAuthor);
    song1.appendChild(songContainer);
    songList.appendChild(song1);
    info.appendChild(mainTitle);
    info.appendChild(songList);
    main.appendChild(bckg);
    main.appendChild(info);

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
    
    //append content;
    content.appendChild(main);
    content.appendChild(footer);
}

export default recentPage;