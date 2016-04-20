var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackinglistItems = require('./PackinglistItems.jsx');




var PackingListContainer = React.createClass({
  getInitialState() {
      return {
        packingList: [{label: 'buy milk', selected: false}, {label: 'Clean Room', selected: false}, {label: 'Do stuff', selected: false}],
        newPackingItem: 'Not Working',
        addMore: false
      }
  },
  handleOnClick: function (e, itemLabel, itemIndex){
    e.preventDefault();
    // console.log(this.state);
    var currentState = this.state.packingList
    var currentItemState = this.state.packingList[itemIndex];
    currentItemState.selected = !currentItemState.selected;
    currentState[itemIndex] = currentItemState;
    // console.log(currentState[itemIndex]);
    // console.log(currentState);
    // console.log(currentState.packingList);
    this.setState({
      packingList: currentState
    });
  },
  handleAddMoreClick: function (e) {
    console.log('click');
    this.setState({
      addMore: true
    });
  },
  handleChangePackingItem: function (value){
    console.log(event.target);
    // this.setState({
    //   newPackingItem: value
    // })
  },
  render: function () {
    const {packingList, newPackingItem, addMore} = this.state

    // if (addMore){
    //   console.log('nope');
    //   // var addMoreButton = <div id="packing-list-add-more" onClick={this.handleAddMoreClick}> + Add More! ERROR IS HERE </div>
    // } else {
    //   console.log('yo');

    // }
    console.log(addMore);

    return (
      <div className='large-3 columns' id="packing-list-container">
        <div>
          <h2 id="packing-list-header">Packing List</h2>
        </div>
        <PackinglistItems 
          packingList={packingList}
          onClick={this.handleOnClick} />
        {!addMore && <div id="packing-list-add-more" onClick={this.handleAddMoreClick}> + Add More! ERROR IS HERE </div>}
        <input type="text" name="text" value={newPackingItem} id="packing-list-add-more" onChange={this.handleChangePackingItem}/>
      </div>
    
    )
  }
});

module.exports = PackingListContainer;


