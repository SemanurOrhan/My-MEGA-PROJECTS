function newImages() {
    const images = document.querySelectorAll('.rsm1');
    images.forEach((img, index) => {
        img.src = `https://source.unsplash.com/random/300x300 =${index + 1}`;
    });
}


