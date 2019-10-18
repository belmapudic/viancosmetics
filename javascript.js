function myCanvas(){
	var myCanvas = document.getElementById("myCanvas").getContext("2d");
	myCanvas.beginPath();
	myCanvas.lineWidth = 5;
	myCanvas.strokeStyle = 'yellow'; 
	myCanvas.shadowColor = 'white';
	myCanvas.shadowBlur = 5;
	
	myCanvas.moveTo(50,50);
	myCanvas.lineTo(75,170);
	myCanvas.stroke();
	
	myCanvas.moveTo(75,170);
	myCanvas.lineTo(120,50);
	myCanvas.stroke();
	
	myCanvas.moveTo(150,50);
	myCanvas.lineTo(150,170);
	myCanvas.stroke();
	
	myCanvas.moveTo(190,170);
	myCanvas.lineTo(220,50);
	myCanvas.stroke();
	
	myCanvas.moveTo(220,50);
	myCanvas.lineTo(250,170);
	myCanvas.stroke();
	
	myCanvas.moveTo(250,130);
	myCanvas.lineTo(190,130);
	myCanvas.stroke();
	
	myCanvas.moveTo(290,50);
	myCanvas.lineTo(290,170);
	myCanvas.stroke();
	
	myCanvas.moveTo(290,50);
	myCanvas.lineTo(360,170);
	myCanvas.stroke();
	
	myCanvas.moveTo(360,50);
	myCanvas.lineTo(360,170);
	myCanvas.stroke();
}


