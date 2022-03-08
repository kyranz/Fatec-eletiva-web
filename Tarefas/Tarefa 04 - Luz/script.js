function switch_light() {
    var img = document.getElementById("lightbulb")
    if (img.src.includes("Off.png")) {
        img.src="assets/On.png"
    }
    else {
        img.src="assets/Off.png"
    }
}