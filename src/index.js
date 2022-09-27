import homePage from "../src/home";
import todayPage from "../src/today-menu";

homePage();

const clear = ((page) => {
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");
    const footer = document.querySelector(".footer");

    document.getElementById("content").removeChild(header);
    document.getElementById("content").removeChild(main);
    document.getElementById("content").removeChild(footer);

    if (page == "home") {
        homePage();
    }else if (page == "today") {
        todayPage();
    }else if (page == "recent") {
        recentPage();
    }else return;
})();