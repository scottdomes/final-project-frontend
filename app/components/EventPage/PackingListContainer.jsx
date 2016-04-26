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
    e.preventDefault();
    e.stopPropagation();
    console.log('handle user packs item called')
    console.log(key)
    console.log(itemLabel)
    var currentItem = this.props.packingList[key];
    console.log(this.props.packingList)
    console.log(currentItem);
    this.props.onUserPacksItem(currentItem, key);
  },
  handleNewPackingItemChange: function (value, listType){
    console.log('handle item form change')
    console.log(value)
    console.log(listType)
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
    console.log('handle Enter new item')
    console.log(value)
    console.log(listType)
    this.props.onEnterNewItem(value, listType);
  },
  getPackingListType: function (listType, indexStart){

    //Do an initial filter for public or private
    //then map to create a packingListItem array
    //have a filter if public to check get the users
    console.log('start');
    if (this.props.packingList){

      var filteredPackingList = this.props.packingList.filter(function (item){
        return item.list_type === listType ? true : false;
      });

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
        var keyValue = index + indexStart;
        console.log(item.label + ' ' + keyValue)
        return <PackingListItem packer={packer} onUserPacksItem={this.handleUserPacksItem.bind(this, keyValue)} key={keyValue} item={item} />
      });
    }

    return PackingItems;
  
  },
  handleFormBlur: function (value, listType){
    console.log('handle Form Blur')
    console.log(value)
    console.log(listType)
    if (listType === 'public' && value === ''){
      this.setState({
        newPublicPackingItem: 'Add More'
      });
    } else if (listType === 'private'  && value === '') {
      this.setState({
        newPrivatePackingItem: 'Add More'
      });
    }
  },
  render: function () {
    const {newPublicPackingItem, newPrivatePackingItem} = this.state

    publicPackingItems = this.getPackingListType('public', 0);
    // console.log('public length is ')
    // console.log(this.props.packingList.length);
    var privateIndexStart = 0;
     this.props.packingList.forEach(function(listItem){
      listItem.list_type === 'public' ? privateIndexStart++ : false;
    });
    console.log('private index start is : ' + privateIndexStart);
    //this does not work, woooh!
    privatePackingItems = this.getPackingListType('private', privateIndexStart);
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
            onBlur={this.handleFormBlur}
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
            onBlur={this.handleFormBlur}
            itemDescription={newPrivatePackingItem} 
            onChange={this.handleNewPackingItemChange}
            onKeyDown={this.handleEnterNewItem}/>
        </div>


      </div>


    
    )
  }
});

module.exports = PackingListContainer;







