const estado = ["Off.png", "On.png"]
var i = 0

function teste() {
    document.getElementById("lightbulb").src = "assets\\" + estado[++i % 2]
}