var slides =[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

var startAlert = alert("Vous pouvez utiliser:\nla souris\nou\nle clavier avec les touches:\n-> : image suivante\n<- : image précédente\nP : play\nR : image aléatoire")
// Selection d'élément:
var timer = -1; // Variable utilisé pour play pause
var index = 0; // Variable utilisé pour next image - last image
var nextBtn = document.querySelector('button#slider-next'); 
var imageElt = document.querySelector('figure img'); 
var titleElt = document.querySelector('figure.slider figcaption'); 
var backBtn = document.querySelector('button#slider-previous'); 
var randomBtn = document.querySelector('button#slider-random'); 
var playBtn = document.querySelector('button#slider-toogle');
var icon = document.querySelector('button#slider-toogle i');
var colorIcon = document.querySelector('button.btn-success');
console.log('icon');
console.log('colorIcon');
console.log('nextBtn');
console.log('imageElt');
console.log('titleElt');

// Fonction Next Image
function nextImage (){
    index ++; 
    if(index > slides.length -1){
        index = 0;
       }   
    imageElt.src = slides[index].image;
    titleElt.textContent =  slides[index].legend;
    }
// End Fonction Next Image

// Fonction Last Image
function lastImage(){
    index --;
    if(index < 0){
        index = slides.length -1
    }
    imageElt.src = slides[index].image;
    titleElt.textContent =  slides[index].legend;
}
// End Fonction Last Image

// Fonction Play Pause
function playPause(){
    if(timer == -1){
        timer = setInterval(nextImage, 1000);
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause'); 
        colorIcon.classList.remove('btn-success');
        colorIcon.classList.add('btn-danger');
    } else {
        clearInterval(timer);
        timer = -1;
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        colorIcon.classList.remove('btn-danger');
        colorIcon.classList.add('btn-success');
     } 
 }
 // End Fonction Play Pause

// Fonction Display
function display(){
    var randomIndex = getRandomInt(0, slides.length -1);
    while(randomIndex == index){
        randomIndex = getRandomInt(0, slides.length -1);
    }
    index = randomIndex;
    imageElt.src = slides[index].image;
    titleElt.textContent =  slides[index].legend;
}
// End Fonction Display

//Fonction keyboard
function onKeyup(event){
    console.log(event.code);
    switch(event.code){
        case'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            lastImage();
            break;
        case 'KeyR':
            display();
            break;
        case 'KeyP':
            playPause();
            break;
        default:
            alert('Veuillez utiliser les touches suivantes: ->, <-, Touche R, Touche P')
    }
}


// Ecouteurs d'évenement:
nextBtn.addEventListener('click', nextImage)
backBtn.addEventListener('click', lastImage)
randomBtn.addEventListener('click', display)
playBtn.addEventListener('click',playPause)
document.addEventListener('keyup', onKeyup)





/* 
Evenements:
Keydown: event qui se declenche quand touche est enfoncée
Keyup: event qui se declenche quand une touche est relachée


Fleche de gauche: executer previousImage()
Fleche de droite: excecuter nextImage()
Touche p: excecuter palypause()
Touche r: excecuter random()
*/

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


