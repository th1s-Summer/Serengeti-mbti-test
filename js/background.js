const imges = ["0.jpeg", "1.jpeg", "2.jpeg", "3.png", "4.jpeg"];

const randomImg = imges[Math.floor(Math.random() * imges.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);
