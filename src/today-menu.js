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
    bHome.setAttribute("onclick", "clear('home')");
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
    bRecent.setAttribute("onclick", "clear('recent')");
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

    //append content
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

export default todayPage;

/*
<div id="content">   
    <div class="header">
        <div class="title">Daily Songs</div>
        <div class="options">
            <button id="home" class="selected" disabled="true">Home</button>
            <button id="menu" onclick="todayPage()">Today's Menu</button>
            <button id="recent" onclick="recentPage()">Recent</button>
        </div>
        <div class="icon"><img src="../src/queue_music_white_36dp.svg" alt="site-icon"></div>
    </div>
    <div class="main">
        <div class="bckg"></div>
        <div class="info">
            <div class="main-title">My Daily Songs</div>
            <div class="text-intro">
                <p>Daily Songs is a site where i can display my mood through a <span class="italic">too</span> little list of songs that i'm hearing each day (which could obviously change by the minute). It is also a tribute to all the artists that put our overhelmingly complicated moods and feelings in such amazing songs. THANK YOU!</p>
            </div>
            <div class="hours">
                <h3 class="hours-title">Hours?</h3>
                <div class="hours-text">As much as possible, please.</div>
            </div>
            <div class="location">
                <h3 class="location-title">Location</h3>
                <div class="location-text">Anywhere, in a loved headphone.</div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="developed">Developed by RodrigoAPassos</div>
        <div class="credits"><a href="https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Background image by Jabber Visuals</a></div>
    </div>
</div>
*/