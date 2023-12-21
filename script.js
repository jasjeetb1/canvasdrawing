const canvas = document.getElementById("cnvs");
const ctx = canvas.getContext("2d");
x1 = 0;
y1 = 560;

function circle(x,y,radius) {
	ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI); //full circle
	ctx.fillStyle = 'darkblue'; //circle color
	ctx.fill();
	ctx.strokeStyle = '#000'; //black outline
	ctx.lineWidth = 2;
	ctx.stroke();
}
function triangle(x,y) {
	ctx.beginPath()
  ctx.moveTo(x, y); //move to starting position
  ctx.lineTo(x + 50, y + 50); //first line
  ctx.lineTo(x, y+100); // second line
  ctx.closePath(); //third line
  ctx.fillStyle = 'lightblue'; //change it to red
  ctx.fill();
  ctx.strokeStyle = '#000'; //black outline
  ctx.lineWidth = 2; //make the line thicker
  ctx.stroke();
    }
    
function triangle2(x,y) {
	ctx.beginPath()
  ctx.moveTo(x, y); //move to starting position
  ctx.lineTo(x - 50, y + 50); //first line
  ctx.lineTo(x, y+100); // second line
  ctx.closePath(); //third line
  ctx.fillStyle = 'lightblue'; //change it to red
  ctx.fill();
  ctx.strokeStyle = '#000'; //black outline
  ctx.lineWidth = 2; //make the line thicker
  ctx.stroke();
    }
function square(x,y,clr){
	ctx.beginPath()
	ctx.fillStyle = clr; //changes color to the one specified
	ctx.fillRect(x, y, 10, 10); //square
	ctx.strokeRect(x,y,10,10); 
}
for(let y = 0; y < 560; y += 10) {
  for (let x = 0; x < 350; x += 10) {
    square(x, y, 'white');
  }
}
for(let x1 = 120; x1 < 210; x1 += 10) { 
  y1 = 550;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 120; x1 += 10) { 
  y1 = 540;
  square(x1, y1, 'brown');
}
for(let x1 = 120; x1 < 210; x1 += 10) { 
  y1 = 540;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 210; x1 < 240; x1 += 10) { 
  y1 = 540;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 80; x1 += 10) { 
  y1 = 530;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 250; x1 += 10) { 
  y1 = 530;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 230; x1 < 250; x1 += 10) { 
  y1 = 530;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 520;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 240; x1 += 10) { 
  y1 = 520;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 240; x1 < 260; x1 += 10) { 
  y1 = 520;
  square(x1, y1, 'brown');
}
for(let x1 = 190; x1 < 210; x1 += 10) { 
  y1 = 520;
  square(x1, y1, 'lightpink');
}
for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 510;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 260; x1 += 10) { 
  y1 = 510;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 250; x1 < 270; x1 += 10) { 
  y1 = 510;
  square(x1, y1, 'brown');
}
for(let x1 = 180; x1 < 220; x1 += 10) { 
  y1 = 510;
  square(x1, y1, 'lightpink');
}
for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 500;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 260; x1 += 10) { 
  y1 = 500;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 260; x1 < 270; x1 += 10) { 
  y1 = 500;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 80; x1 += 10) { 
  y1 = 500;
  square(x1, y1, 'lightpink');
}
for(let x1 = 190; x1 < 210; x1 += 10) { 
  y1 = 500;
  square(x1, y1, 'lightpink');
}

for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 260; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 260; x1 < 270; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 90; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'lightpink');
}
for(let x1 = 120; x1 < 140; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'brown');
}
for(let x1 = 190; x1 < 210; x1 += 10) { 
  y1 = 490;
  square(x1, y1, 'brown');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 80; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'lightpink');
}
for(let x1 = 110; x1 < 120; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'brown');
}
for(let x1 = 140; x1 < 150; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'brown');
}
for(let x1 = 180; x1 < 220; x1 += 10) { 
  y1 = 480;
  square(x1, y1, 'brown');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 470;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 470;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 60; x1 < 80; x1 += 10) { 
  y1 = 470;
  square(x1, y1, 'brown');
}
for(let x1 = 180; x1 < 220; x1 += 10) { 
  y1 = 470;
  square(x1, y1, 'brown');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 470;
  square(x1, y1, 'brown');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 460;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 460;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 460;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 90; x1 += 10) { 
  y1 = 460;
  square(x1, y1, 'brown');
}
for(let x1 = 190; x1 < 210; x1 += 10) { 
  y1 = 460;
  square(x1, y1, 'brown');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 450;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 450;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 50; x1 < 90; x1 += 10) { 
  y1 = 450;
  square(x1, y1, 'brown');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 450;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 440;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 440;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 80; x1 += 10) { 
  y1 = 440;
  square(x1, y1, 'brown');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 440;
  square(x1, y1, 'brown');
}
for(let x1 = 20; x1 < 30; x1 += 10) { 
  y1 = 430;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 270; x1 += 10) { 
  y1 = 430;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 430;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 420;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 260; x1 += 10) { 
  y1 = 420;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 260; x1 < 270; x1 += 10) { 
  y1 = 420;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 410;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 260; x1 += 10) { 
  y1 = 410;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 260; x1 < 270; x1 += 10) { 
  y1 = 410;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 410;
  square(x1, y1, 'brown');
}
for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 400;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 260; x1 += 10) { 
  y1 = 400;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 260; x1 < 270; x1 += 10) { 
  y1 = 400;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 390;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 250; x1 += 10) { 
  y1 = 390;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 250; x1 < 260; x1 += 10) { 
  y1 = 390;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 380;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 110; x1 += 10) { 
  y1 = 380;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 110; x1 < 260; x1 += 10) { 
  y1 = 380;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 370;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 90; x1 += 10) { 
  y1 = 370;
  square(x1, y1, 'lightgreen');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 370;
  square(x1, y1, 'brown');
}
for(let x1 = 110; x1 < 240; x1 += 10) { 
  y1 = 370;
  square(x1, y1, 'linen');
}
for(let x1 = 240; x1 < 270; x1 += 10) { 
  y1 = 370;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 90; x1 += 10) { 
  y1 = 360;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 260; x1 += 10) { 
  y1 = 360;
  square(x1, y1, 'linen');
}
for(let x1 = 260; x1 < 280; x1 += 10) { 
  y1 = 360;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 70; x1 += 10) { 
  y1 = 350;
  square(x1, y1, 'brown');
}
for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 350;
  square(x1, y1, 'linen');
}
for(let x1 = 270; x1 < 280; x1 += 10) { 
  y1 = 350;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 340;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 280; x1 += 10) { 
  y1 = 340;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 290; x1 += 10) { 
  y1 = 340;
  square(x1, y1, 'brown');
}
for(let x1 = 150; x1 < 160; x1 += 10) { 
  y1 = 340;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 330;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 280; x1 += 10) { 
  y1 = 330;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 290; x1 += 10) { 
  y1 = 330;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 320;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 320;
  square(x1, y1, 'linen');
}
for(let x1 = 290; x1 < 300; x1 += 10) { 
  y1 = 320;
  square(x1, y1, 'brown');
}
for(let x1 = 210; x1 < 220; x1 += 10) { 
  y1 = 320;
  square(x1, y1, 'brown');
}

for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 310;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 310;
  square(x1, y1, 'linen');
}
for(let x1 = 290; x1 < 300; x1 += 10) { 
  y1 = 310;
  square(x1, y1, 'brown');
}
for(let x1 = 190; x1 < 210; x1 += 10) { 
  y1 = 310;
  square(x1, y1, 'brown');
}

for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 300;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 290; x1 += 10) { 
  y1 = 300;
  square(x1, y1, 'linen');
}
for(let x1 = 290; x1 < 300; x1 += 10) { 
  y1 = 300;
  square(x1, y1, 'brown');
}
for(let x1 = 210; x1 < 230; x1 += 10) { 
  y1 = 300;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 110; x1 += 10) { 
  y1 = 300;
  square(x1, y1, 'brown');
}

for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 290;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 290; x1 += 10) { 
  y1 = 290;
  square(x1, y1, 'linen');
}
for(let x1 = 290; x1 < 300; x1 += 10) { 
  y1 = 290;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 100; x1 += 10) { 
  y1 = 290;
  square(x1, y1, 'brown');
}

for(let x1 = 30; x1 < 40; x1 += 10) { 
  y1 = 280;
  square(x1, y1, 'brown');
}
for(let x1 = 40; x1 < 290; x1 += 10) { 
  y1 = 280;
  square(x1, y1, 'linen');
}
for(let x1 = 290; x1 < 300; x1 += 10) { 
  y1 = 280;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 90; x1 += 10) { 
  y1 = 280;
  square(x1, y1, 'brown');
}

for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 270;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 270;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 300; x1 += 10) { 
  y1 = 270;
  square(x1, y1, 'brown');
}

for(let x1 = 40; x1 < 50; x1 += 10) { 
  y1 = 260;
  square(x1, y1, 'brown');
}
for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 260;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 300; x1 += 10) { 
  y1 = 260;
  square(x1, y1, 'brown');
}
for(let x1 = 180; x1 < 200; x1 += 10) { 
  y1 = 260;
  square(x1, y1, 'brown');
}

for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 320; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 290; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'brown');
}
for(let x1 = 170; x1 < 210; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'brown');
}
for(let x1 = 180; x1 < 200; x1 += 10) { 
  y1 = 250;
  square(x1, y1, 'hotpink');
}

for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 320; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 290; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'brown');
}
for(let x1 = 140; x1 < 210; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 120; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 240;
  square(x1, y1, 'hotpink');
}

for(let x1 = 50; x1 < 60; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 320; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'linen');
}
for(let x1 = 280; x1 < 290; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'brown');
}
for(let x1 = 140; x1 < 210; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'hotpink');
}
for(let x1 = 210; x1 < 250; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 140; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 100; x1 += 10) { 
  y1 = 230;
  square(x1, y1, 'hotpink');
}

for(let x1 = 60; x1 < 290; x1 += 10) { 
  y1 = 220;
  square(x1, y1, 'brown');
}
for(let x1 = 70; x1 < 80; x1 += 10) { 
  y1 = 220;
  square(x1, y1, 'linen');
}
for(let x1 = 100; x1 < 260; x1 += 10) { 
  y1 = 220;
  square(x1, y1, 'hotpink');
}
for(let x1 = 70; x1 < 300; x1 += 10) { 
  y1 = 210;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 290; x1 += 10) { 
  y1 = 210;
  square(x1, y1, 'hotpink');
}
for(let x1 = 230; x1 < 250; x1 += 10) { 
  y1 = 210;
  square(x1, y1, 'lightpink');
}

for(let x1 = 60; x1 < 300; x1 += 10) { 
  y1 = 200;
  square(x1, y1, 'brown');
}
for(let x1 = 70; x1 < 290; x1 += 10) { 
  y1 = 200;
  square(x1, y1, 'hotpink');
}
for(let x1 = 220; x1 < 260; x1 += 10) { 
  y1 = 200;
  square(x1, y1, 'lightpink');
}
for(let x1 = 50; x1 < 300; x1 += 10) { 
  y1 = 190;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 290; x1 += 10) { 
  y1 = 190;
  square(x1, y1, 'hotpink');
}
for(let x1 = 230; x1 < 250; x1 += 10) { 
  y1 = 190;
  square(x1, y1, 'lightpink');
}
for(let x1 = 160; x1 < 180; x1 += 10) { 
  y1 = 190;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 190;
  square(x1, y1, 'lightpink');
}

for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 180;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 280; x1 += 10) { 
  y1 = 180;
  square(x1, y1, 'hotpink');
}
for(let x1 = 230; x1 < 250; x1 += 10) { 
  y1 = 180;
  square(x1, y1, 'brown');
}
for(let x1 = 160; x1 < 180; x1 += 10) { 
  y1 = 180;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 120; x1 += 10) { 
  y1 = 180;
  square(x1, y1, 'lightpink');
}

for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 170;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 280; x1 += 10) { 
  y1 = 170;
  square(x1, y1, 'hotpink');
}
for(let x1 = 220; x1 < 260; x1 += 10) { 
  y1 = 170;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 170;
  square(x1, y1, 'lightpink');
}

for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 160;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 280; x1 += 10) { 
  y1 = 160;
  square(x1, y1, 'hotpink');
}
for(let x1 = 220; x1 < 260; x1 += 10) { 
  y1 = 160;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 160;
  square(x1, y1, 'brown');
}

for(let x1 = 50; x1 < 290; x1 += 10) { 
  y1 = 150;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 280; x1 += 10) { 
  y1 = 150;
  square(x1, y1, 'hotpink');
}
for(let x1 = 230; x1 < 250; x1 += 10) { 
  y1 = 150;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 120; x1 += 10) { 
  y1 = 150;
  square(x1, y1, 'brown');
}

for(let x1 = 50; x1 < 280; x1 += 10) { 
  y1 = 140;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 270; x1 += 10) { 
  y1 = 140;
  square(x1, y1, 'hotpink');
}
for(let x1 = 80; x1 < 120; x1 += 10) { 
  y1 = 140;
  square(x1, y1, 'brown');
}

for(let x1 = 50; x1 < 280; x1 += 10) { 
  y1 = 130;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 270; x1 += 10) { 
  y1 = 130;
  square(x1, y1, 'hotpink');
}
for(let x1 = 90; x1 < 110; x1 += 10) { 
  y1 = 130;
  square(x1, y1, 'brown');
}

for(let x1 = 50; x1 < 270; x1 += 10) { 
  y1 = 120;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 260; x1 += 10) { 
  y1 = 120;
  square(x1, y1, 'hotpink');
}

for(let x1 = 50; x1 < 270; x1 += 10) { 
  y1 = 110;
  square(x1, y1, 'brown');
}
for(let x1 = 60; x1 < 260; x1 += 10) { 
  y1 = 110;
  square(x1, y1, 'hotpink');
}

for(let x1 = 60; x1 < 270; x1 += 10) { 
  y1 = 100;
  square(x1, y1, 'brown');
}
for(let x1 = 70; x1 < 250; x1 += 10) { 
  y1 = 100;
  square(x1, y1, 'hotpink');
}

for(let x1 = 60; x1 < 270; x1 += 10) { 
  y1 = 90;
  square(x1, y1, 'brown');
}
for(let x1 = 70; x1 < 250; x1 += 10) { 
  y1 = 90;
  square(x1, y1, 'hotpink');
}

for(let x1 = 60; x1 < 260; x1 += 10) { 
  y1 = 80;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 250; x1 += 10) { 
  y1 = 80;
  square(x1, y1, 'hotpink');
}
for(let x1 = 230; x1 < 240; x1 += 10) { 
  y1 = 80;
  square(x1, y1, 'brown');
}

for(let x1 = 70; x1 < 260; x1 += 10) { 
  y1 = 70;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 250; x1 += 10) { 
  y1 = 70;
  square(x1, y1, 'hotpink');
}
for(let x1 = 90; x1 < 100; x1 += 10) { 
  y1 = 70;
  square(x1, y1, 'brown');
}
for(let x1 = 220; x1 < 230; x1 += 10) { 
  y1 = 70;
  square(x1, y1, 'brown');
}

for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 60;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 260; x1 += 10) { 
  y1 = 60;
  square(x1, y1, 'hotpink');
}
for(let x1 = 100; x1 < 110; x1 += 10) { 
  y1 = 60;
  square(x1, y1, 'brown');
}
for(let x1 = 220; x1 < 230; x1 += 10) { 
  y1 = 60;
  square(x1, y1, 'brown');
}

for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 50;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 260; x1 += 10) { 
  y1 = 50;
  square(x1, y1, 'hotpink');
}
for(let x1 = 100; x1 < 110; x1 += 10) { 
  y1 = 50;
  square(x1, y1, 'brown');
}
for(let x1 = 120; x1 < 240; x1 += 10) { 
  y1 = 50;
  square(x1, y1, 'brown');
}


for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 40;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 260; x1 += 10) { 
  y1 = 40;
  square(x1, y1, 'hotpink');
}
for(let x1 = 100; x1 < 240; x1 += 10) { 
  y1 = 40;
  square(x1, y1, 'white');
}
for(let x1 = 100; x1 < 120; x1 += 10) { 
  y1 = 40;
  square(x1, y1, 'brown');
}
for(let x1 = 230; x1 < 240; x1 += 10) { 
  y1 = 40;
  square(x1, y1, 'brown');
}

for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 30;
  square(x1, y1, 'brown');
}
for(let x1 = 80; x1 < 260; x1 += 10) { 
  y1 = 30;
  square(x1, y1, 'hotpink');
}
for(let x1 = 90; x1 < 240; x1 += 10) { 
  y1 = 30;
  square(x1, y1, 'white');
}
for(let x1 = 90; x1 < 100; x1 += 10) { 
  y1 = 30;
  square(x1, y1, 'brown');
}
for(let x1 = 240; x1 < 250; x1 += 10) { 
  y1 = 30;
  square(x1, y1, 'brown');
}

for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 20;
  square(x1, y1, 'brown');
}
for(let x1 = 100; x1 < 240; x1 += 10) { 
  y1 = 20;
  square(x1, y1, 'white');
}
for(let x1 = 240; x1 < 250; x1 += 10) { 
  y1 = 20;
  square(x1, y1, 'brown');
}



for(let x1 = 70; x1 < 270; x1 += 10) { 
  y1 = 10;
  square(x1, y1, 'brown');
}
for(let x1 = 90; x1 < 250; x1 += 10) { 
  y1 = 10;
  square(x1, y1, 'white');
}
for(let x1 = 240; x1 < 250; x1 += 10) { 
  y1 = 10;
  square(x1, y1, 'brown');
}

triangle(110,20);
triangle2(210,20);
circle(160,70,15)
