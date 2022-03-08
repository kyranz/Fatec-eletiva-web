function switch_light() {
    var img = document.getElementById("lightbulb")
    if (img.src.includes("Off.png")) {
        img.src="On.png"
    }
    else {
        img.src="Off.png"
    }
}