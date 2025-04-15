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

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}