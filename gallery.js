document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener("click", e => {
            e.preventDefault();
            currentIndex = index;
            updateLightbox(currentIndex);
            lightbox.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    lightboxContent.querySelector(".prev").addEventListener("click", e => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox(currentIndex);
    });

    lightboxContent.querySelector(".next").addEventListener("click", e => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox(currentIndex);
    });
});

function updateLightbox(index) {
    const images = document.querySelectorAll(".gallery img");
    const lightboxContent = document.querySelector(".lightbox-content");
    lightboxContent.querySelector("img").src = images[index].src;
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}