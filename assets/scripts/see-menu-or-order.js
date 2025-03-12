document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("jb-dropdown");
    const arrow = dropdown.querySelector("img");
    const list = document.getElementById("jb-list");
    const scrwidth = window.matchMedia("(min-width: 768px)");

    function handleDropdownClick() {
        if (list.style.display === "none" || list.style.display === "") {
            list.style.display = "flex";
            arrow.style.transform = "rotate(180deg)";
        } else {
            list.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    }

    function checkScrWidth() {
        if (scrwidth.matches) {
            list.style.display = "flex";
            dropdown.removeEventListener("click", handleDropdownClick);
        } else {
            dropdown.addEventListener("click", handleDropdownClick);
            if (arrow.style.transform === "rotate(0deg)") {
                list.style.display = "none";
            }
        }
    }

    checkScrWidth();
    window.addEventListener("resize", checkScrWidth);
});