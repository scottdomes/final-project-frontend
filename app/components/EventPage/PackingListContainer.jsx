var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackingListItems.jsx');
var classNames = require('classnames');
var AddMorePackingItemsForm = require('./AddMorePackingItemsForm.jsx');

var PackingListContainer = React.createClass({
  getInitialState() {
    console.log("Packing List Container Called Props")
    console.log(this.props);
      return {
        // packingList: [{label: 'buy milk', user_id: null}, {label: 'Clean Room', user_id: null}, {label: 'Do stuff', user_id: null}],
        packingList: [],
        newPackingItem: 'Add More'
      }
  },
  componentWillReceiveProps: function() {
    console.log('Props UPdate is called');
    if (this.props.packingList){  
      this.setState({
      packingList: this.props.packingList
    })}
  
    console.log(this.props);
  },
  handleUserPacksItem: function (key, e, itemLabel){
    console.log("here motherfucker")
    console.log(arguments)
    var currentState = this.state.packingList
    var currentItemState = this.state.packingList[key];
    //!!! Change this to user id or user info of who is packing it
    currentItemState.user_id = !currentItemState.user_id; 
    currentState[key] = currentItemState;
    //!!! Remove State
    this.setState({
      packingList: currentState
    });
    this.props.onUserPacksItem();

  },
  handleNewPackingItemChange: function (value){
    this.setState({
      newPackingItem: value
    })
  },
  handleEnterNewItem: function (value){
    var newItem = {label: value, user_id: null}
    var currentPackingList = this.state.packingList;
    var newPackingList = currentPackingList.concat(newItem);
    //!!! remove this state
    this.setState({
      packingList: newPackingList
    });
    this.props.onEnterNewItem(value);
  },
  render: function () {
    const {packingList, newPackingItem} = this.state

    var ItemList = this.state.packingList;
    var PackingItems = ItemList.map((item, index) => {
      return <PackingListItem onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={index} item={item} />
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







