window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
};

gtag('js', new Date());
gtag('config', 'G-VFHNYPEG0S');

const song = document.querySelector('#back_song');
const play_text = document.querySelector('#play_text');
const play_button = document.querySelector('#play_button')

play_button.addEventListener('click', () => {
    if(song.paused){
        song.play();
        song.volume = 0.1;
        play_button.src = "./assets/img/pause_icon.svg";
        play_text.innerText = "Click to pause the song";
    }else{
        song.pause();
        play_button.src = "./assets/img/play_icon.svg";
        play_text.innerText = "Click to play the song";
    }
});
