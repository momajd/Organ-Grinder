var React = require('react');
var ReactDOM = require('react-dom');
var Note = require('./util/Note.js');
var KeyListener = require('./util/KeyListener.js');
var Organ = require('./components/Organ.jsx');

// TODO remove after testing
// window.note = new Note(260);
// window.dispatcher = require("../dispatcher/dispatcher.js");

KeyListener();


document.addEventListener ("DOMContentLoaded", function(){
    ReactDOM.render(<Organ />, document.getElementById("root"));
  });
