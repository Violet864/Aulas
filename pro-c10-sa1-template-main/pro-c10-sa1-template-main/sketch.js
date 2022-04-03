var notas = [7,15,45,50,6,97,4]
 function media(){
   var soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5] + notas[6]
   var media = soma/notas.length
   console.log(media)
 }
 media()



function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

