const canvas = document.getElementById('canvas');
const selectImage = document.getElementById('image');
const selectFilter = document.getElementById('filter');
// const img = document.getElementById('img');
const ctx = canvas.getContext('2d');

selectImage.addEventListener('change', function () {
    img.src = './images/' + this.value;
    ctx.drawImage(img, 10, 10);
});

const img = new Image();
img.setAttribute('src', './images/mona-lisa.jpg');
ctx.drawImage(img, 10, 10);