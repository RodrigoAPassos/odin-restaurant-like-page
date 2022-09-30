function todayPage () {
    const content = document.getElementById("content");
    //page header
            //Home
    const bHome = document.getElementById("home");
    bHome.removeAttribute("disabled");
            //Today's Menu
    const bMenu = document.getElementById("today");
    bMenu.setAttribute("disabled", "true");
            //Recent
    const bRecent = document.getElementById("recent");
    bRecent.removeAttribute("disabled");

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
    mainTitle.innerHTML = "Today's Menu";
                //song list
    const songList = document.createElement("ol");
    songList.classList.add("song-list");
                    //list items
    const song1 = document.createElement("li");
    song1.classList.add("song-container");
                        //1st song
    const songNumber1 = document.createElement("h4");
    songNumber1.innerHTML = "Ideologia";
    const songNumber1Author = document.createElement("h5");
    songNumber1Author.innerHTML = "Cazuza";
                    //list item
    const song2 = document.createElement("li");
    song2.classList.add("song-container");
                        //1st song
    const songNumber2 = document.createElement("h4");
    songNumber2.innerHTML = "Do the Evolution";
    const songNumber2Author = document.createElement("h5");
    songNumber2Author.innerHTML = "Pearl Jam";

    //main append
    song1.appendChild(songNumber1);
    song1.appendChild(songNumber1Author);
    songList.appendChild(song1);
    song2.appendChild(songNumber2);
    song2.appendChild(songNumber2Author);
    songList.appendChild(song1);
    songList.appendChild(song2);
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

export default todayPage;
