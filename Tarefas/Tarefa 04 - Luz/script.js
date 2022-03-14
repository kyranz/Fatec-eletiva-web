const estado = ["Off.png", "On.png"]
var i = 0

function light_switch() {
    document.getElementById("lightbulb").src = "assets\\" + estado[++i % 2]
}