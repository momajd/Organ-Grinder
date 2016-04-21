var React = require('react');
var OrganKey = require('./OrganKey.jsx');
var TONES = require('../constants/Tones.js');

var Organ = React.createClass({
  render: function () {
    var noteNames = Object.keys(TONES).map(function (noteName) {
      return noteName;
    });

    return (
      <div className="keys">
        {
          noteNames.map(function(note, idx) {
            return <OrganKey noteName={note} key={idx} />;
          })
        }
      </div>
    );
  }
});

module.exports = Organ;

// mapping outside return
// var tones = noteNames.map(function(note, idx) {
//   return <OrganKey noteName={note} key={idx} />;
// });
