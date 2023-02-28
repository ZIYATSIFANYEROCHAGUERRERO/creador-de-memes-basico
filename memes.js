var canvas = document.getElementById("canvas");
var textArriba;
var textAbajo;
function GenerarMeme(){
			textArriba=document.getElementById("txtTextoArriba").value;
			textAbajo=document.getElementById("txtTextoAbajo").value;
			var ContextoCanvas = canvas.getContext("2d");
			var ObjetoImagen = new Image();
				ObjetoImagen.onload = function(){
				canvas.width = ObjetoImagen.width * 1;
				canvas.height = ObjetoImagen.height * 1;
                ContextoCanvas.drawImage(ObjetoImagen, 0, 0,canvas.width ,canvas.height);
				
                // Datos texto Meme (font)
				ContextoCanvas.lineWidth  = 5;
				ContextoCanvas.font = '15pt sans-serif';
				ContextoCanvas.strokeStyle = 'black';
				ContextoCanvas.fillStyle = 'white';
				ContextoCanvas.textAlign = 'center';
				ContextoCanvas.lineJoin = 'round';
			
				textAbajo = textAbajo.toUpperCase(); 
				x = canvas.width/2;
				y = canvas.height - canvas.height/7.4;
				
				ContextoCanvas.strokeText(textAbajo, x, y);
				ContextoCanvas.fillText(textAbajo, x, y);
			
				textArriba = textArriba.toUpperCase();
				ContextoCanvas.strokeText(textArriba, x, 30);
				ContextoCanvas.fillText(textArriba, x, 30);
	};
	 ObjetoImagen.src = document.getElementById("image").src; 
};





function RedimencionarImagen(base64, maxWidth, maxHeight) {
  if(typeof(maxWidth) === 'undefined') var maxWidth = 100;
  if(typeof(maxHeight) === 'undefined') var maxHeight = 100;
  var canvas = document.createElement("canvas");


 
}
 GenerarMeme();

var imagen=document.getElementsByClassName("imgthumbnail");
for(i=0;i<imagen.length;i++){
	imagen[i].onclick = function() { document.getElementById("image").src=this.src;GenerarMeme(); };
}
