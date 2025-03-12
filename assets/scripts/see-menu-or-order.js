//THE FOLLOWING CODE BELONGS TO J-B
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const jb_dropdown = document.getElementById("jb-dropdown");
    const jb_arrow = jb_dropdown.querySelector("img");
    const jb_list = document.getElementById("jb-list");
    const jb_scrwidth = window.matchMedia("(min-width: 768px)");

    function jbHandleDropdownClick() {
        if (jb_list.style.display === "none" || jb_list.style.display === "") {
            jb_list.style.display = "flex";
            jb_arrow.style.transform = "rotate(180deg)";
        } else {
            jb_list.style.display = "none";
            jb_arrow.style.transform = "rotate(0deg)";
        }
    }

    function jbCheckScrWidth() {
        if (jb_scrwidth.matches) {
            jb_list.style.display = "flex";
            jb_dropdown.removeEventListener("click", jbHandleDropdownClick);
        } else {
            jb_dropdown.addEventListener("click", jbHandleDropdownClick);
            if (jb_arrow.style.transform === "rotate(0deg)") {
                jb_list.style.display = "none";
            }
        }
    }

    jbCheckScrWidth();

    window.addEventListener("resize", jbCheckScrWidth);
});
//THE CODE BELONGING TO J-B ENDS HERE