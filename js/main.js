const smartphone = [
   { Model: 'Motorola E7', Price: 4699, Memory: 64, Color: 'blue' },
   { Model: 'Xiaomi 11T', Price: 15999, Memory: 256, Color: 'Gray' },
]
console.table( smartphone [1] );

document.querySelector('.model').innerHTML = smartphone [0].Model;
document.querySelector('.price').innerHTML = smartphone [0].Price;
document.querySelector('.memory').innerHTML = smartphone [0].Memory;
document.querySelector('.color').innerHTML = smartphone [0].Color;

document.querySelector('.model2').innerHTML = smartphone [1].Model;
document.querySelector('.price2').innerHTML = smartphone [1].Price;
document.querySelector('.memory2').innerHTML = smartphone [1].Memory;
document.querySelector('.color2').innerHTML = smartphone [1].Color;

document.querySelector('button').onclick = result;
   function result(){
      document.querySelector('.result').innerHTML = smartphone [0].Price*0.75;
      document.querySelector('.result2').innerHTML = smartphone [1].Price*0.75;
   
   }