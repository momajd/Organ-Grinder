var AppDispatcher = require("../dispatcher/dispatcher.js");

var KeyActions = {
  pressed: function(note){
    AppDispatcher.dispatch({
      actionType: 'PRESSED',
      note: note
    });
  },
  released: function(note) {
    AppDispatcher.dispatch({
      actionType: 'RELEASED',
      note: note
    });
  }
};

module.exports = KeyActions;
