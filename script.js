// Search bar
const search = document.getElementById("search");
const games = document.querySelectorAll(".game");

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    games.forEach(game => {
        const name = game.dataset.name.toLowerCase();
        game.style.display = name.includes(value) ? "block" : "none";
    });
});

// Panic key (press P)
document.addEventListener("keydown", function(e) {
    if (e.key === "p") {
        window.location.href = "https://www.google.com/docs/about/";
    }
});
