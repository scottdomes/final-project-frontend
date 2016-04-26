var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackingListItems.jsx');
var classNames = require('classnames');
var AddMorePackingItemsForm = require('./AddMorePackingItemsForm.jsx');

var PackingListContainer = React.createClass({
  getInitialState: function() {
      return {
        newPublicPackingItem: 'Add More',
        newPrivatePackingItem: 'Add More'
      }
  },
  handleUserPacksItem: function (key, e, itemLabel){
    var currentItem = this.props.packingList[key];
    this.props.onUserPacksItem(currentItem, key);
  },
  handleNewPackingItemChange: function (value, listType){
    if (listType === 'public'){
      this.setState({
        newPublicPackingItem: value
      });
    } else if (listType === 'private') {
      this.setState({
        newPrivatePackingItem: value
      });
    }
  },
  handleEnterNewItem: function (value, listType){
    this.props.onEnterNewItem(value, listType);
  },
  getPackingListType: function (listType){

    //Do an initial filter for public or private
    //then map to create a packingListItem array
    //have a filter if public to check get the users

    if (this.props.packingList){

      var filteredPackingList = this.props.packingList.filter(function (item){
        return item.list_type === listType ? true : false;
      });

      // var ItemList = this.props.packingList;
      //creates an array of components to display
      var PackingItems = filteredPackingList.map((item, index) => {
      
        //if the item has a user id, goes through user list and gets the packer which is a user item (public only)
        var packer = null;
        if (listType === 'public'){
          if (item.user_id){
            packer = this.props.userList.filter(function(user){
              return item.user_id == user.id ? true : false;
            });
          }
        }
        return <PackingListItem packer={packer} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={index} item={item} />
      });
    }

    return PackingItems;
  
  },
  render: function () {
    const {newPublicPackingItem, newPrivatePackingItem} = this.state
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

    publicPackingItems = this.getPackingListType('public');
    privatePackingItems = this.getPackingListType('private');
    return (
      <div id="packing-list-container">
        
        <div>
          <div>
            <h2 id="packing-list-header">Packing List</h2>
          </div>

          <div className="packing-list-section-heading">
            <h5>Group Packing List</h5>
          </div>
          <div>
            {publicPackingItems}
          </div>
          <AddMorePackingItemsForm 
            packingType='public'
            itemDescription={newPublicPackingItem} 
            onChange={this.handleNewPackingItemChange}
            onKeyDown={this.handleEnterNewItem}/>
        </div>
        <div>
          <div className="packing-list-section-heading">
            <h5>My Packing List</h5>
          </div>
          <div>
            {privatePackingItems}
          </div>
          <AddMorePackingItemsForm 
            packingType='private'
            itemDescription={newPrivatePackingItem} 
            onChange={this.handleNewPackingItemChange}
            onKeyDown={this.handleEnterNewItem}/>
        </div>


      </div>


    
    )
  }
});

module.exports = PackingListContainer;







