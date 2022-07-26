AFRAME.registerComponent('audio-toggle', {
    init: function() {
        let playing = false;
        let audio = document.querySelector("#world-family-hymn");
        this.el.addEventListener('click', () => {
             if(!playing) {
                 audio.play();
              } else {
                 audio.pause();
                 //audio.currentTime = 0;
              }
              playing = !playing;
        });
    
    }
});