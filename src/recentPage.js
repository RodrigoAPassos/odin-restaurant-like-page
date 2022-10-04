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
    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", "../src/skip_previous_FILL0_wght400_GRAD0_opsz48.svg");
    mainImg.setAttribute("alt", "today's menu logo, skip previous");
                //song list
    const songList = document.createElement("ul");
    songList.classList.add("song-list");
                    //list items
    const song1 = document.createElement("li");
    song1.classList.add("song-container");
    const songLink1 = document.createElement("a");
    songLink1.setAttribute("href", "https://youtu.be/kFpkyT_KPpc");
    songLink1.setAttribute("target", "_blank");
                        //1st song
    const songNumber1 = document.createElement("h4");
    songNumber1.innerHTML = "Que País É Esse";
    const songNumber1Author = document.createElement("h5");
    songNumber1Author.innerHTML = "Legião Urbana";
                    //list item
    const song2 = document.createElement("li");
    song2.classList.add("song-container");
    const songLink2 = document.createElement("a");
    songLink2.setAttribute("href", "https://youtu.be/qgaRVvAKoqQ");
    songLink2.setAttribute("target", "_blank");
                        //2nd song
    const songNumber2 = document.createElement("h4");
    songNumber2.innerHTML = "Black";
    const songNumber2Author = document.createElement("h5");
    songNumber2Author.innerHTML = "Pearl Jam";
                    //list item
    const song3 = document.createElement("li");
    song3.classList.add("song-container");
    const songLink3 = document.createElement("a");
    songLink3.setAttribute("href", "https://youtu.be/6aUdqOG0_qQ");
    songLink3.setAttribute("target", "_blank");
                        //3rd song
    const songNumber3 = document.createElement("h4");
    songNumber3.innerHTML = "Shed My Skin";
    const songNumber3Author = document.createElement("h5");
    songNumber3Author.innerHTML = "Alter Bridge";
                    //list item
    const song4 = document.createElement("li");
    song4.classList.add("song-container");
    const songLink4 = document.createElement("a");
    songLink4.setAttribute("href", "https://youtu.be/L2bINZ0G_yI");
    songLink4.setAttribute("target", "_blank");
                        //4th song
    const songNumber4 = document.createElement("h4");
    songNumber4.innerHTML = "Poema";
    const songNumber4Author = document.createElement("h5");
    songNumber4Author.innerHTML = "Ney Matogrosso";
                    //list item
    const song5 = document.createElement("li");
    song5.classList.add("song-container");
    const songLink5 = document.createElement("a");
    songLink5.setAttribute("href", "https://youtu.be/VDcEJE633rM");
    songLink5.setAttribute("target", "_blank");
                        //5th song
    const songNumber5 = document.createElement("h4");
    songNumber5.innerHTML = "Free Mind";
    const songNumber5Author = document.createElement("h5");
    songNumber5Author.innerHTML = "Tems";
                    //list item
    const song6 = document.createElement("li");
    song6.classList.add("song-container");
    const songLink6 = document.createElement("a");
    songLink6.setAttribute("href", "https://youtu.be/ErvgV4P6Fzc");
    songLink6.setAttribute("target", "_blank");
                        //6th song
    const songNumber6 = document.createElement("h4");
    songNumber6.innerHTML = "Patience";
    const songNumber6Author = document.createElement("h5");
    songNumber6Author.innerHTML = "Guns N' Roses";
                    //list item
    const song7 = document.createElement("li");
    song7.classList.add("song-container");
    const songLink7 = document.createElement("a");
    songLink7.setAttribute("href", "https://youtu.be/6hzrDeceEKc");
    songLink7.setAttribute("target", "_blank");
                        //7th song
    const songNumber7 = document.createElement("h4");
    songNumber7.innerHTML = "Wonderwall";
    const songNumber7Author = document.createElement("h5");
    songNumber7Author.innerHTML = "Oasis";
                    //list item
    const song8 = document.createElement("li");
    song8.classList.add("song-container");
    const songLink8 = document.createElement("a");
    songLink8.setAttribute("href", "https://youtu.be/_DboMAghWcA");
    songLink8.setAttribute("target", "_blank");
                        //8th song
    const songNumber8 = document.createElement("h4");
    songNumber8.innerHTML = "Hero of War";
    const songNumber8Author = document.createElement("h5");
    songNumber8Author.innerHTML = "Rise Against";
                    //list item
    const song9 = document.createElement("li");
    song9.classList.add("song-container");
    const songLink9 = document.createElement("a");
    songLink9.setAttribute("href", "https://youtu.be/XFkzRNyygfk");
    songLink9.setAttribute("target", "_blank");
                        //9th song
    const songNumber9 = document.createElement("h4");
    songNumber9.innerHTML = "Creep";
    const songNumber9Author = document.createElement("h5");
    songNumber9Author.innerHTML = "Radiohead";
                    //list item
    const song10 = document.createElement("li");
    song10.classList.add("song-container");
    const songLink10 = document.createElement("a");
    songLink10.setAttribute("href", "https://youtu.be/WC5FdFlUcl0");
    songLink10.setAttribute("target", "_blank");
                        //10th song
    const songNumber10 = document.createElement("h4");
    songNumber10.innerHTML = "Be Yourself";
    const songNumber10Author = document.createElement("h5");
    songNumber10Author.innerHTML = "Audioslave";

    //main append
    songLink1.appendChild(songNumber1);
    songLink1.appendChild(songNumber1Author);
    song1.appendChild(songLink1);
    songList.appendChild(song1);
    songLink2.appendChild(songNumber2);
    songLink2.appendChild(songNumber2Author);
    song2.appendChild(songLink2);
    songList.appendChild(song2);
    songLink3.appendChild(songNumber3);
    songLink3.appendChild(songNumber3Author);
    song3.appendChild(songLink3);
    songList.appendChild(song3);
    songLink4.appendChild(songNumber4);
    songLink4.appendChild(songNumber4Author);
    song4.appendChild(songLink4);
    songList.appendChild(song4);
    songLink5.appendChild(songNumber5);
    songLink5.appendChild(songNumber5Author);
    song5.appendChild(songLink5);
    songList.appendChild(song5);
    songLink6.appendChild(songNumber6);
    songLink6.appendChild(songNumber6Author);
    song6.appendChild(songLink6);
    songList.appendChild(song6);
    songLink7.appendChild(songNumber7);
    songLink7.appendChild(songNumber7Author);
    song7.appendChild(songLink7);
    songList.appendChild(song7);
    songLink8.appendChild(songNumber8);
    songLink8.appendChild(songNumber8Author);
    song8.appendChild(songLink8);
    songList.appendChild(song8);
    songLink9.appendChild(songNumber9);
    songLink9.appendChild(songNumber9Author);
    song9.appendChild(songLink9);
    songList.appendChild(song9);
    songLink10.appendChild(songNumber10);
    songLink10.appendChild(songNumber10Author);
    song10.appendChild(songLink10);
    songList.appendChild(song10);
    mainTitle.appendChild(mainImg);
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