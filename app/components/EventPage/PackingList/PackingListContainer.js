import React, {Component, PropTypes} from 'react'; //import library and components of library
import classNames from 'classnames';
import PackingListTitle from './PackingListTitle';
import PackingListItem from './PackingListItems';
import AddMorePackingItemsForm from './AddMorePackingItemsForm';

export default class PackingListContainer extends Component {

  constructor (props) {
    super(props);
  }

 handleUserPacksItem = (key, e, itemLabel, listType) => {
    e.preventDefault();
    e.stopPropagation();
    if (listType === 'public') {
      var currentItem = this.props.packingList.publicPackingList[key];
    } else {
      var currentItem = this.props.packingList.privatePackingList[key];
    }
    this.props.onUserPacksItem(currentItem, key);
  }

  handleEnterNewItem = (value, listType) => {
    this.props.onEnterNewItem(value, listType);
  }

  getPackingListItems = (packingList, listType) => {

    if (packingList){ 
      var PackingItems = packingList.map((item, index) => {
      
        var packer = null;
        if (listType === 'public'){
          if (item.user_id){
            packer = this.props.userList.filter(function(user){
              return item.user_id == user.id ? true : false;
            });
          }
        }
        return <PackingListItem packer={packer} listType={listType} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={item.id} item={item} />
      });
    }

    return PackingItems;
  }

  render () {

    var publicPackingItems = this.getPackingListItems(this.props.packingList.publicPackingList, 'public');
    var privatePackingItems = this.getPackingListItems(this.props.packingList.privatePackingList, 'private');

    return (
      <div id="packing-list-container">
        
        <div>
          <PackingListTitle title="Group Packing List"/>

          <div className="packing-list-section-heading">
            <h5>Group Packing List</h5>
          </div>
          <div>
            {publicPackingItems}
          </div>
          <AddMorePackingItemsForm 
            packingType='public'
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
            onKeyDown={this.handleEnterNewItem}/>
        </div>
      </div>
    )
  }

}

module.exports = PackingListContainer;





