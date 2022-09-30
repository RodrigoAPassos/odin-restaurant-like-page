function homePage (i) {

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
    bHome.classList.add("btn");
    bHome.setAttribute("disabled", "true");
    bHome.innerHTML = "Home";
            //Today's Menu
    const bMenu = document.createElement("button");
    bMenu.innerHTML = "Today's Menu";
    bMenu.setAttribute("id", "today");
    bMenu.classList.add("btn");
            //Recent
    const bRecent = document.createElement("button");
    bRecent.innerHTML = "Recent";
    bRecent.classList.add("btn");
    bRecent.setAttribute("id", "recent");
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
    mainTitle.innerHTML = "My Daily Songs";
            //text-intro
    const textIntro = document.createElement("div");
    textIntro.classList.add("text-intro");
                //p
    const textIntroP = document.createElement("p");
    textIntroP.innerHTML = "Daily Songs is a site where i can display my mood through a <span class='italic'>too</span> little list of songs that i'm hearing each day (which could obviously change by the minute). It is also a tribute to all the artists that put our overhelmingly complicated moods and feelings in such amazing songs. THANK YOU!";
            //append text-intro
    textIntro.appendChild(textIntroP);
            //hours
    const hours = document.createElement("div");
    hours.classList.add("hours");
                //hours-title
    const hoursTitle = document.createElement("h3");
    hoursTitle.classList.add("hours-title");
    hoursTitle.innerHTML = "Hours?";
                //hours-text
    const hoursText = document.createElement("div");
    hoursText.classList.add("hours-text");
    hoursText.innerHTML = "As much as possible, please.";
            //append hours
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursText);
            //location
    const location = document.createElement("div");
    location.classList.add("location");
                //location-title
    const locationTitle = document.createElement("h3");
    locationTitle.classList.add("location-title");
    locationTitle.innerHTML = "Location";
                //location-text
    const locationText = document.createElement("div");
    locationText.classList.add("location-text");
    locationText.innerHTML = "Anywhere, in a loved headphone.";
            //append location
    location.appendChild(locationTitle);
    location.appendChild(locationText);
        //append info
    info.appendChild(mainTitle);
    info.appendChild(textIntro);
    info.appendChild(hours);
    info.appendChild(location);
    //append main
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
    
    //append and update content
    if (i==0) {
        content.appendChild(header);
        content.appendChild(main);
        content.appendChild(footer);
    }else {
        //update buttons
        const upHome = document.getElementById("home");
        upHome.setAttribute("disabled", "true");
        const upTodayButton = document.getElementById("today");
        upTodayButton.removeAttribute("disabled");
        const upRecent = document.getElementById("recent");
        upRecent.removeAttribute("disabled");
        //append
        content.appendChild(main);
        content.appendChild(footer);
    }
}
//homePage();
export default homePage;