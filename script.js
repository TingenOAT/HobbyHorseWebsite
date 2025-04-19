function loadHtml(id, file) {
    var element = document.getElementById(id);
    if (element) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {
                element.innerHTML = this.responseText;
            } else if (this.status == 404) {
                element.innerHTML = "Page not found.";
            }
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
    }
}
let photoList = [
    "/images/frontpage/girl1.png",
    "/images/frontpage/girl2.png",
    "/images/frontpage/girl3.png"
];
let photoIndex = 0;
function changePhoto() {
    let photo = document.getElementById("photo");
    photo.src = photoList[photoIndex];
    photoIndex = (photoIndex + 1) % photoList.length;
}
function startPhotoChange() {
    setInterval(changePhoto, 3000); // Change photo every 3 seconds
}
startPhotoChange();