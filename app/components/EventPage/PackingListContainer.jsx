var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackingListItems.jsx');
var classNames = require('classnames');
var AddMorePackingItemsForm = require('./AddMorePackingItemsForm.jsx');

var PackingListContainer = React.createClass({
  getInitialState: function() {
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
  getPackingListType: function (listType){


    if (listType === 'public'){
      if (this.props.packingList){
        var ItemList = this.props.packingList;
        //creates an array of components to display
        var PackingItems = ItemList.map((item, index) => {
        
        //if the item has a user id, goes through user list and gets the packer which is a user item (public only)
        if (item.user_id){
          var packer = this.props.userList.filter(function(user){
            return item.user_id == user.id ? true : false;
          });
        }

        return <PackingListItem packer={packer} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={index} item={item} />
      });
      }
    }

    return PackingItems;
  
  },
  render: function () {
    const {newPackingItem} = this.state
    // var PackingList = [];
    // if (this.props.packingList){
    //   var ItemList = this.props.packingList;
    //   var PackingItems = ItemList.map((item, index) => {
      
    //   if (item.user_id){
    //     var packer = this.props.userList.filter(function(user){
    //       return item.user_id == user.id ? true : false;
    //     });
    //   }
    //   return <PackingListItem packer={packer} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={index} item={item} />
    // });
    // }

    PackingItems = this.getPackingListType('public');

    return (
      <div id="packing-list-container">
        <div>
          <h2 id="packing-list-header">Packing List</h2>
        </div>
        <div id="public-packing-list">
          <h5>My Packing List</h5>
        </div>
        <div>
          {PackingItems}
        </div>
        <AddMorePackingItemsForm 
          itemDescription={newPackingItem} 
          onChange={this.handleNewPackingItemChange}
          onKeyDown={this.handleEnterNewItem}/>
      </div>


    
    )
  }
});

module.exports = PackingListContainer;







