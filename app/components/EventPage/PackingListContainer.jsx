var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackingListItems.jsx');
var classNames = require('classnames');
var AddMorePackingItemsForm = require('./AddMorePackingItemsForm.jsx');

var PackingListContainer = React.createClass({
  getInitialState() {
      return {
        newPackingItem: 'Add More'
      }
  },
  handleUserPacksItem: function (key, e, itemLabel){
    var currentItem = this.props.packingList[key];
    this.props.onUserPacksItem(currentItem, key);
  },
  handleNewPackingItemChange: function (value){
    this.setState({
      newPackingItem: value
    })
  },
  handleEnterNewItem: function (value){
    this.props.onEnterNewItem(value);
  },
  render: function () {
    // console.log('PackingListContainer')
    const {newPackingItem} = this.state
    // var ItemList = this.state.packingList;
    var ItemList = this.props.packingList;

    var PackingItems = ItemList.map((item, index) => {
      return <PackingListItem userList={this.props.userList} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={index} item={item} />
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







