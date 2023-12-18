

var numberOfDrum = document.querySelectorAll('button').length;
for (let i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (i) {
        var buttonHtml = this.innerHTML;
        
        makeSound(buttonHtml);

    });
}
document.addEventListener('keydown', function(event){
     
    var key = event.key;
    makeSound(key);

   })

function makeSound(key){

        
    switch (key) {
        case 'w':
            var playAudio = new Audio('./sounds/tom-1.mp3');
            playAudio.play();
            break;
        case 'a':
            var playAudio = new Audio('./sounds/tom-2.mp3');
            playAudio.play();
            break;
        case 's':
            var playAudio = new Audio('./sounds/tom-3.mp3');
            playAudio.play();
            break;
        case 'd':
            var playAudio = new Audio('./sounds/tom-4.mp3');
            playAudio.play();
            break;
        case 'j':
            var playAudio = new Audio('./sounds/snare.mp3');
            playAudio.play();
            break;
        case 'k':
            var playAudio = new Audio('./sounds/kick-bass.mp3');
            playAudio.play();
            break;
        case 'l':
            var playAudio = new Audio('./sounds/crash.mp3');
            playAudio.play();
            break;
    }
        
}