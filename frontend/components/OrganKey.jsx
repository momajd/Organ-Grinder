var React = require("react");
var KeyStore = require("../stores/KeyStore.js");
var Note = require("../util/Note.js");
var Tone = require("../constants/Tones.js");

var OrganKey = React.createClass({
  getInitialState: function() {
    return {playing: false};
  },

  componentDidMount: function() {
    KeyStore.addListener(this._play);
    this.note = new Note(Tone[this.props.noteName]);
  },

  _play: function() {
    console.log(KeyStore.currentKeys());
    var keys = KeyStore.currentKeys();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
      this.setState({playing: true});
    } else {
      this.note.stop();
      this.setState({playing: false});
    }
  },

  // TODO: ADD UNMOUNT!!

  render: function() {
    var className;
    if (this.state.playing === true) {
      className = "pressed";
    } else {
      className = "unpressed";
    }

    return (
      <div className={className} onClick={this.clickToPlay}>
        {this.props.noteName}
      </div>
    );
  }
});

module.exports = OrganKey;
