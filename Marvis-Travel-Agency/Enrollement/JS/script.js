let img = document.querySelector(".img");
let srcs = []

img.setInterval(() => {
    let index = 0;
    img.src.innerHTML = srcs[index];
}, 5000);