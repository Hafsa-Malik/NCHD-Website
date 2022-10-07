var imageIndex = 0;
showImage();

function showImage() {
    var i;
    var images = document.getElementsByClassName('bgimg');
    var dots = document.getElementsByClassName('dot');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    imageIndex++;
    if (imageIndex > images.length) imageIndex = 1;
    images[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
    setTimeout(showImage, 5000); // Change image every 5 seconds
}

function chooseImage(n) {
    imageIndex = n;
    showImage();
    clearInterval(timer);
}


window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        2000
    )
});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});