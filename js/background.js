const imageArr = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg",];
const todaysImage = imageArr[Math.floor(Math.random() * imageArr.length)];

document.body.style.backgroundImage = `url(img/${todaysImage})`;