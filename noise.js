var sounds = {
  67 : "cAudio",
  68 : "dAudio",
  69 : "eAudio",
  70 : "fAudio",
  71 : "gAudio",
  65 : "aAudio",
  66 : "bAudio"
};

$(document).ready( function() {
  // keyDown for c/d/e/f/g/a/b color changes to active
  $('body').keydown(function() {

  });
  // keyDown plays associated song
  $('body').keydown(function(event) {
    var soundId = sounds[event.keyCode];
      // event.keyCode returns the keyCode of the pressed key
      /* sounds[...] finds value in the sound object by matching
      the keyCode with the keys in the object.*/
    var currentSound = document.getElementById(soundId);
      /* have to call the document to play specified audio
      since the audio files exist in the HTML*/
    currentSound.currentTime = 0;
    currentSound.play();
  });
});

// borrowed from:
// https://stackoverflow.com/questions/12578379/play-a-sound-when-a-key-is-pressed
