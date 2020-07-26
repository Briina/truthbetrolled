/*parallax*/
        window.addEventListener("DOMContentLoaded", scrollLoop, false);

        var bg = document.querySelector("#background");
        var mountains = document.querySelector("#mountains");
        var hills = document.querySelector("#hills");
        var title = document.querySelector("#title");
        var cat_bigtroll = document.querySelector("#cat_bigtroll");
        var leo_journalist = document.querySelector("#leo_journalist");
        var clouds5 = document.querySelector("#clouds5");
        var clouds4 = document.querySelector("#clouds4");
        var clouds3 = document.querySelector("#clouds3");
        var branches = document.querySelector("#branches");
        var maid_jester = document.querySelector("#maid_jester");
        var princess_voodoo = document.querySelector("#princess_voodoo");
        var troll = document.querySelector("#troll");
        var clouds2 = document.querySelector("#clouds2");
        var clouds1 = document.querySelector("#clouds1");
        var shortDescription = document.querySelector("#short_description");

        var xScrollPosition;
        var yScrollPosition;

        var containerHeigth;

        function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
        console.log(yScrollPosition);
 
        setTranslate(0, window.scrollY * -0.14, bg);
        setTranslate(0, window.scrollY * -0.15, mountains);
        setTranslate(0, window.scrollY * -0.16, hills);
        setTranslate(0, window.scrollY * -0.17, title);
        setTranslate(0, window.scrollY * -0.18, cat_bigtroll);
        setTranslate(0, window.scrollY * -0.19, clouds5);
        setTranslate(0, window.scrollY * -0.20, leo_journalist);
        setTranslate(0, window.scrollY * -0.21, clouds4);
        setTranslate(0, window.scrollY * -0.22, clouds3);
        setTranslate(0, window.scrollY * -0.23, branches);
        setTranslate(0, window.scrollY * -0.24, maid_jester);
        setTranslate(0, window.scrollY * -0.25, princess_voodoo);
        setTranslate(0, window.scrollY * -0.26, clouds2);
        setTranslate(0, window.scrollY * -0.30, troll);
        setTranslate(0, window.scrollY * -0.30, clouds1);
        setTranslate(0, window.scrollY * -0.30, shortDescription);
       

        requestAnimationFrame(scrollLoop);
        }

        function setTranslate(xPos, yPos, el) {
         el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
        };
    /*parallax end*/

