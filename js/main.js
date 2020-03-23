        var slides =[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

var index = 0;
var nextBtn = document.querySelector('button#slider-next');
var imageElt = document.querySelector('figure img');
var titleElt = document.querySelector('figure.slider figcaption');
var backBtn = document.querySelector('button#slider-previous');
var randomBtn = document.querySelector('button#slider-random');
var playBtn = document.querySelector('button#slider-toogle');
console.log('nextBtn')
console.log('imageElt')
console.log('titleElt')


function nextImage (){
    index ++; 
    if(index > slides.length -1){
        index = 0;
       }   
    imageElt.src = slides[index].image;
    titleElt.textContent =  slides[index].legend;
    }

function lastImage(){
    index --;
    if(index < 0){
        index = slides.length -1
    }
    imageElt.src = slides[index].image;
    titleElt.textContent =  slides[index].legend;
}

function randomSelect(){
    index = slides[Math.floor(random(0,slides.lenght -1))];
}

function playPause(){
    var id = setInterval(nextImage, 1000);
   
}

nextBtn.addEventListener('click', nextImage)
backBtn.addEventListener('click', lastImage)
randomBtn.addEventListener('click', randomSelect)
playBtn.addEventListener('click',playPause)
/*
Excecute fonction après un délais déterminé: setTimeout(function,delay)
function sayHello(){
    alert('Hello')
}
setTimeout(sayHello,3000)*/


/*Excecute fonction tout les délais déterminé: setInterval(function,delay)
set Interval renvoi un ID unique qui est une valeur numérique
On peut stopper un interval avec la fonction clearInterval(32)
var counter = 0;

function increment(){
    counter ++;
    document.querySelector('p').textContent = counter;
}

var id = setInterval(increment, 1000);
clearInterval(id) ne pas oublier de mettre setInterval pour récupérer l'ID
*/


