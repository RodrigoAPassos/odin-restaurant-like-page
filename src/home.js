/*
        <div class="header">
            <div class="title">Daily Songs</div>
            <div class="options">
                <button class="selected">Home</button>
                <button>Today's Menu</button>
                <button>Recent</button>
            </div>
            <div class="icon">
                <img src="../src/queue_music_white_36dp.svg" alt="site icon">
            </div>
        </div>
        <div class="main">
            <div class="bckg"></div>
            <div class="info">
                <div class="main-title">My Daily Songs</div>
                <div class="text-intro">
                    <p>Daily Songs is a site where i can display my mood through a <span class="italic">too</span> little list
                    of songs that i'm hearing each day (which could obviously change by the minute). It is also a tribute to
                    all the artists that put our overhelmingly complicated moods and feelings in such amazing songs. THANK YOU!</p>
                </div>
                <div class="hours">
                    <h3 class="hours-title">Hours?</h3>
                    <div class="hours-text">As much as possible, please.</div>
                </div>
                <div class="location">
                    <h3 class="location-title">Location</h3>
                    <div class="location-text">In a loved headphone. As high as possible.</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="developed">Developed by RodrigoAPassos</div>
            <div class="credits"><a href="https://unsplash.com/photos/PlUQQyIMO8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Background image by Jabber Visuals</a></div>
        </div>
*/

const homePage = () => {
    const ctnt = document.getElementById("content");
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
        //options buttons
    const bHome = document.createElement("button");
    bHome.classList.add("selected");
    bHome.innerHTML = "Home";
}