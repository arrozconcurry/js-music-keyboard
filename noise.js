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

  // keyDown plays associated song
  $('body').keydown(function(event) {
    var soundId = sounds[event.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
  });
});
