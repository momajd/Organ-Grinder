var React = require('react');
var OrganKey = require('./OrganKey.jsx');
var TONES = require('../constants/Tones.js');

var Organ = React.createClass({
  render: function () {
    var noteNames = Object.keys(TONES).map(function (noteName) {
      return noteName;
    });

    var tones = noteNames.map(function(note, idx) {
      return <OrganKey className="key" noteName={note} key={idx} />;
    });

    return (
      <div>
        {tones}
      </div>
    );
  }
});

module.exports = Organ;
