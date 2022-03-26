
function myFun(){
    var ej1 = document.getElementById("lienzo1");	
    x = 0;
    y = 0;
	
	lienzo1 = ej1.getContext('2d');
	lienzo1.lineWidhr=1;
	lienzo1.strokeStyle='#000';
    lienzo2 = ej1.getContext('2d');
	
	lienzo1.beginPath();
	lienzo1.moveTo(30,0);
	lienzo1.lineTo(30,300);
	lienzo1.stroke();
	lienzo1.closePath();
	
	lienzo1.beginPath();
	lienzo1.moveTo(0,270);
	lienzo1.lineTo(600,270);
	lienzo1.stroke();
	lienzo1.closePath();	
	
    //lienzo2.beginPath();	
    //lienzo2.arc(550,270,30,0,2*Math.PI);
    //lienzo2.fillStyle = "blue";
    //lienzo2.fill();
    //lienzo2.stroke();
    //lienzo2.closePath();	
	
    //lienzo2.beginPath();	
    //lienzo2.arc(550,270,15,0,2*Math.PI);
    //lienzo2.fillStyle = "red";
    //lienzo2.fill();
    //lienzo2.stroke();
    //lienzo2.closePath();
    //setInterval(function () {
    //    lienzo2.clearRect(0, 0, 100, 100);
    //    x = x >= 100 ? 0 : x + 1;
    //    y = y >= 100 ? 0 : y + 1;
    //    lienzo2.fillRect(y, y, 50, 50);
    //}, 1000 / 24);

};
myFun();