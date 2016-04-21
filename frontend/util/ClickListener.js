var AppDispatcher = require("../dispatcher/dispatcher.js");
var KeyActions = require("../actions/keyActions.js");

// NOT COMPLETE!!!!
var ClickListener = function() {
  $("body").click(function(keyEvent) {
    var keycode = keyEvent.keyCode;
    var note = Mapping[keycode];
    if (note) {
      KeyActions.pressed(note);
    }
  });
  $(document).keyup(function(keyEvent) {
    var keycode = keyEvent.keyCode;
    var note = Mapping[keycode];
    if (note) {
      KeyActions.released(note);
    }
  });
};

var Mapping = {
  81: "C4",
  87:"C#4",
  69: "D4",
  82: "D#4",
  84: "E4",
  89: "F4",
  85:"F#4",
  73: "G4",
  79: "G#4",
  80: "A4",
  219: "A#4",
  221: "B4"
};

module.exports = ClickListener;
