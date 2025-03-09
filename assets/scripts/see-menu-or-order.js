document.addEventListener("DOMContentLoaded", function () {
    dropdown = document.getElementById("jb-dropdown")
    arrow = document.getElementById("jb-arrow")
    list = document.getElementById("jb-list")

    dropdown.addEventListener("click", () => {
        if (list.style.display === "none" || list.style.display === "") {
            list.style.display = "block"
            arrow.style.transform = "rotate(180deg)"
        } else {
                list.style.display="none"
                arrow.style.transform="rotate(0deg)"
            }

        dropdown.classList.add("jb-bgchange")

        setTimeout(() => {
            dropdown.classList.remove("jb-bgchange")
        }, 300);
    })
})