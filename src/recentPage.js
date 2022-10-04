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
                                    //1st song
                const songNumber1 = document.createElement("h4");
                songNumber1.innerHTML = "Que País É Esse";
                const songNumber1Author = document.createElement("h5");
                songNumber1Author.innerHTML = "Legião Urbana";
                                //list item
                const song2 = document.createElement("li");
                song2.classList.add("song-container");
                                    //2nd song
                const songNumber2 = document.createElement("h4");
                songNumber2.innerHTML = "Black";
                const songNumber2Author = document.createElement("h5");
                songNumber2Author.innerHTML = "Pearl Jam";
                                //list item
                const song3 = document.createElement("li");
                song3.classList.add("song-container");
                                    //3rd song
                const songNumber3 = document.createElement("h4");
                songNumber3.innerHTML = "Shed My Skin";
                const songNumber3Author = document.createElement("h5");
                songNumber3Author.innerHTML = "Alter Bridge";
                                //list item
                const song4 = document.createElement("li");
                song4.classList.add("song-container");
                                    //4th song
                const songNumber4 = document.createElement("h4");
                songNumber4.innerHTML = "Poema";
                const songNumber4Author = document.createElement("h5");
                songNumber4Author.innerHTML = "Ney Matogrosso";
                                //list item
                const song5 = document.createElement("li");
                song5.classList.add("song-container");
                                    //5th song
                const songNumber5 = document.createElement("h4");
                songNumber5.innerHTML = "Free Mind";
                const songNumber5Author = document.createElement("h5");
                songNumber5Author.innerHTML = "Tems";
                                //list item
                const song6 = document.createElement("li");
                song6.classList.add("song-container");
                                    //6th song
                const songNumber6 = document.createElement("h4");
                songNumber6.innerHTML = "Patience";
                const songNumber6Author = document.createElement("h5");
                songNumber6Author.innerHTML = "Guns N' Roses";
                                //list item
                const song7 = document.createElement("li");
                song7.classList.add("song-container");
                                    //7th song
                const songNumber7 = document.createElement("h4");
                songNumber7.innerHTML = "Wonderwall";
                const songNumber7Author = document.createElement("h5");
                songNumber7Author.innerHTML = "Oasis";
                                //list item
                const song8 = document.createElement("li");
                song8.classList.add("song-container");
                                    //8th song
                const songNumber8 = document.createElement("h4");
                songNumber8.innerHTML = "Hero of War";
                const songNumber8Author = document.createElement("h5");
                songNumber8Author.innerHTML = "Rise Against";
                                //list item
                const song9 = document.createElement("li");
                song9.classList.add("song-container");
                                    //9th song
                const songNumber9 = document.createElement("h4");
                songNumber9.innerHTML = "Creep";
                const songNumber9Author = document.createElement("h5");
                songNumber9Author.innerHTML = "Radiohead";
                                //list item
                const song10 = document.createElement("li");
                song10.classList.add("song-container");
                                    //10th song
                const songNumber10 = document.createElement("h4");
                songNumber10.innerHTML = "Be Yourself";
                const songNumber10Author = document.createElement("h5");
                songNumber10Author.innerHTML = "Audioslave";
            
                //main append
                song1.appendChild(songNumber1);
                song1.appendChild(songNumber1Author);
                songList.appendChild(song1);
                song2.appendChild(songNumber2);
                song2.appendChild(songNumber2Author);
                songList.appendChild(song2);
                song3.appendChild(songNumber3);
                song3.appendChild(songNumber3Author);
                songList.appendChild(song3);
                song4.appendChild(songNumber4);
                song4.appendChild(songNumber4Author);
                songList.appendChild(song4);
                song5.appendChild(songNumber5);
                song5.appendChild(songNumber5Author);
                songList.appendChild(song5);
                song6.appendChild(songNumber6);
                song6.appendChild(songNumber6Author);
                songList.appendChild(song6);
                song7.appendChild(songNumber7);
                song7.appendChild(songNumber7Author);
                songList.appendChild(song7);
                song8.appendChild(songNumber8);
                song8.appendChild(songNumber8Author);
                songList.appendChild(song8);
                song9.appendChild(songNumber9);
                song9.appendChild(songNumber9Author);
                songList.appendChild(song9);
                song10.appendChild(songNumber10);
                song10.appendChild(songNumber10Author);
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