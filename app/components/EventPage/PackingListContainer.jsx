var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackinglistItems = require('./PackinglistItems.jsx');




var PackingListContainer = React.createClass({
  getInitialState() {
      return {
        packingList: [{label: 'buy milk', selected: false}, {label: 'Clean Room', selected: false}, {label: 'Do stuff', selected: false}]
      }
  },
  handleOnClick: function (e, itemLabel, itemIndex){
    e.preventDefault();
    console.log(this.state);
    var currentState = this.state.packingList
    var currentItemState = this.state.packingList[itemIndex];
    currentItemState.selected = !currentItemState.selected;
    currentState[itemIndex] = currentItemState;
    console.log(currentState[itemIndex]);
        console.log(currentState);

    // console.log(currentState.packingList);

    this.setState({
      packingList: currentState
    });
  },
  render: function () {
    const {packingList} = this.state
    return (
      <div className='large-3 columns' id="packing-list-container">
        <PackinglistItems 
          packingList={packingList}
          onClick={this.handleOnClick} />
      </div>
    )
  }
});

module.exports = PackingListContainer;
