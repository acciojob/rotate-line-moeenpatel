const line = document.getElementById("line");
let rotationAngle = 0;

function rotate() {
    rotationAngle += 2;
    line.style.transform = `rotate(${rotationAngle}deg)`;
    requestAnimationFrame(rotate); 

}

rotate();
