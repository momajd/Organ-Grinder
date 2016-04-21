var AppDispatcher = require("../dispatcher/dispatcher.js"),
    Store = require("flux/utils").Store,
    _CurrentKeys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.currentKeys = function() {
  return _CurrentKeys;
};

KeyStore.addKey = function(key) {
  if (_CurrentKeys.indexOf(key) === -1) {
    _CurrentKeys.push(key);
  }
  KeyStore.__emitChange();
};

KeyStore.removeKey = function(key) {
  var keyIdx = _CurrentKeys.indexOf(key);
  if (keyIdx !== -1) {
    _CurrentKeys.splice(keyIdx, 1);
  }
  KeyStore.__emitChange();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "PRESSED":
      KeyStore.addKey(payload.note);
      break;
    case "RELEASED":
    //call function
      KeyStore.removeKey(payload.note);
      break;
  }
};

module.exports = KeyStore;
