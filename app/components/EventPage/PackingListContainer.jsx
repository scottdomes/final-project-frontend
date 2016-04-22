var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackingListItems.jsx');
var classNames = require('classnames');
var AddMorePackingItemsForm = require('./AddMorePackingItemsForm.jsx');

var PackingListContainer = React.createClass({
  getInitialState() {
      return {
        packingList: [{label: 'buy milk', packedBy: null}, {label: 'Clean Room', packedBy: null}, {label: 'Do stuff', packedBy: null}],
        newPackingItem: 'Add More',
        addMore: false
      }
  },
  handleOnClick: function (key, e, itemLabel){
    var currentState = this.state.packingList
    var currentItemState = this.state.packingList[key];
    //Change this to user id or user info of who is packing it
    currentItemState.packedBy = !currentItemState.packedBy; 
    currentState[key] = currentItemState;
    this.setState({
      packingList: currentState
    });
  },
  handleNewPackingItemChange: function (value){
    this.setState({
      newPackingItem: value
    })
  },
  handleEnterNewItem: function (value){

    console.log('LOOK AT ME')
    console.log(this.props)

    var newItem = {label: value, packedBy: null}
    var currentPackingList = this.state.packingList;
    var newPackingList = currentPackingList.concat(newItem);
    //!!! remove this state
    this.setState({
      packingList: newPackingList
    });
    //call props over here
    this.props.onEnterNewItem(value);


  },
  render: function () {
    const {packingList, newPackingItem, addMore} = this.state

    var ItemList = this.state.packingList;
    var PackingItems = ItemList.map((item, index) => {
      // console.log(item);
      return <PackingListItem onClick={this.handleOnClick.bind(this, index)} key={index} item={item} />
    });

    return (
      <div id="packing-list-container">
        <div>
          <h2 id="packing-list-header">Packing List</h2>
        </div>
        {PackingItems}
        <AddMorePackingItemsForm 
          itemDescription={newPackingItem} 
          onChange={this.handleNewPackingItemChange}
          onKeyDown={this.handleEnterNewItem}/>
      </div>
    
    )
  }
});

module.exports = PackingListContainer;







