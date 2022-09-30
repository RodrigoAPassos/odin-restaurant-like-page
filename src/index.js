import homePage from "../src/home";
import todayPage from "../src/today-menu";
import recentPage from "../src/recentPage";

homePage(0);

const clear = (page) => {

    if (page == "home") {
        homePage(1);
    }else if (page == "today") {
        todayPage();
    }else if (page == "recent") {
        recentPage();
    }else return;
};

document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        //const header = document.querySelector(".header");
        const main = document.querySelector(".main");
        const footer = document.querySelector(".footer");

        //document.getElementById("content").removeChild(header);
        document.getElementById("content").removeChild(main);
        document.getElementById("content").removeChild(footer);
        clear(button.id);
    });
})



/*
<div class="header">
            <div class="title">Daily Songs</div>
            <div class="options">
                <button id="home" class="selected" disabled="true">Home</button>
                <button id="menu" onclick="clear('today')">Today's Menu</button>
                <button id="recent" onclick="clear('recent')">Recent</button>
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
*/