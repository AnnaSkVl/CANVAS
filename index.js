const canvasPlot = document.getElementById('canvas_plot');
const ctx = canvasPlot.getContext('2d');


// drawing a grid
const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX = 30;
const scaleY = 30;
const shiftNames = 5;
const shiftAxis = 20;

const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;

ctx.font = `${Math.round(scaleX / 2)}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

ctx.beginPath();
ctx.strokeStyle = 'red';

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasPlotHeight);

    ctx.fillText((i - xAxis) / scaleX, i + shiftNames, yAxis + shiftNames);
}

for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvasPlotWidth, i);

    ctx.fillText((yAxis - i) / scaleY, xAxis + shiftNames, i + shiftNames);
    
}
ctx.stroke();
ctx.closePath();

//draw main axis

ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);
ctx.fillText('y', xAxis - shiftAxis, 0)

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);
ctx.fillText('x', canvasPlotWidth - shiftAxis, yAxis - shiftAxis)

ctx.stroke();
ctx.closePath();

//draw timeline
ctx.fillStyle = '#ff0000';
for (let i = 0; i <= canvasPlotWidth; i++) {
    const x = (i - xAxis) / scaleX;
    const y = Math.pow(x, 3) - 0.4 * Math.pow(x, 2) + 2 * x + 4;
    ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}

/*
ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = 'orange';
ctx.fillRect(100, 100, 200, 200);

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(320, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.font = '30px Arial';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
tx.fillText('Test', 300, 400);
ctx.fillRect(300, 400, 2, 2);*/

