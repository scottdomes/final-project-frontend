var React = require('react');

var VoteActivatorButton = React.createClass({
  getInitialState: function () {
    return {
      isSelected: false
    }
  },
  handleClick: function () {
    if (this.state.isSelected) {
      this.setState({isSelected: false});
      this.props.onClick("deselected", this.props.label);
    } else {
      this.setState({isSelected: true});
      this.props.onClick("selected", this.props.label);
    }
  },
  render: function () {
    var style;
    if (this.state.isSelected) {
      style = { 'backgroundColor': '#3adb76', 'color': 'white'}
    } else {
      style = {};
    }
    return (
      <button className="button vote-activator radius" 
        style={style} 
        onClick={this.handleClick}>
          {this.props.label}
      </button>
    )
  }
});

module.exports = VoteActivatorButton;