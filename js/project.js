const searchIcon = document.getElementById("searchIcon");
    const searchBar = document.getElementById("searchBar");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function () {
        searchBar.classList.toggle("active");
        if (searchBar.classList.contains("active")) {
            searchInput.focus();
        } else {
            searchInput.value = ""; // Clear input when closing
        }
    });

    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.classList.remove("active");
            searchInput.value = "";
        }
    });