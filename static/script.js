var colors = ['#00ADEF','#22AD00','#FF8C00','#ee5555','#484fd1','#cd32cd','#7f32cd'];
var colorIndex = 0;

document.documentElement.style.setProperty('--themeColor', Math.floor(Math.random()*colors.length));

document.getElementById('changeColor').addEventListener('click', function(e) {
	colorIndex = (colorIndex+1) % colors.length;
	document.documentElement.style.setProperty('--themeColor', colors[colorIndex]);
});