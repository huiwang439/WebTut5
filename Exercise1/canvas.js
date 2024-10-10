// canvas.js
const canvas = document.getElementById('smileyCanvas');
const ctx = canvas.getContext('2d');

// Set background color to green
ctx.fillStyle = 'rgb(144,238,144)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the face
ctx.beginPath();
ctx.arc(200, 200, 150, 0, Math.PI * 2);
ctx.fillStyle = 'rgb(255,255,1)';
ctx.fill();
ctx.stroke();

// Draw the left eye
ctx.beginPath();
ctx.arc(140, 160, 12.5, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

// Draw the right eye
ctx.beginPath();
ctx.arc(260, 160, 12.5, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

// Draw the nose
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 240);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.stroke();

// Draw the mouth
ctx.beginPath();
ctx.arc(200, 250, 50, 0.1 * Math.PI, 0.9 * Math.PI);
ctx.stroke();

// Draw the text
ctx.font = '21px Arial';
ctx.fillStyle = 'black';
ctx.fillText('The Canvas brought me to life!', 70, 380);
