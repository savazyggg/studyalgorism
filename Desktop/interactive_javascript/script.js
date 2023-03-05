const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

// x: null, y: null일경우 0,0포인트에서 시작. 따라서 undefined로 정의하지 않음에 따라 빈 캔버스로 시작 가능 
const mouse = {
    x: undefined,
    y: undefined,
}

//mouse 클릭에 따라 const x와 y에 값 삽입되며 점 처럼 사용
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

//mouse 무브에 따라 const x와 y에 값 삽입되며 브러쉬처럼 사용
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

//어떤 브러쉬? 클릭 점? 원하는지
/*function drawCircle(){
    ctx.fillStyle= 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill()

}*/

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
    ctx.fillStyle= 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill()
    }
}

//ctx.clearRect가 지우개 역할(x pisiton, y positon, 가로크기, 세로크기)
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle()
    requestAnimationFrame(animate);
}

animate();