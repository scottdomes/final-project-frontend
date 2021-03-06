import React, {Component, PropTypes} from 'react'; //import library and components of library
import classNames from 'classnames';
import PackingListTitle from './PackingListTitle';
import PackingListItem from './PackingListItems';
import AddMorePackingItemsForm from './AddMorePackingItemsForm';
import PackingListContainerTitle from './PackingListContainerTitle';
import { connect } from 'react-redux';

import PackingListHelpers from '../../../utils/PackingListHelpers';

class PackingListContainer extends Component {

  constructor (props) {
    super(props);

    //do api call to get the packing items
      console.log("Filip we are here");
      console.log(this.props);
      PackingListHelpers.getPackingList(this.props.eventId);
      //Do Api call to get the users? Or move to container?
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
    PackingListHelpers.packItem(value, listType, this.props.eventId);
    // this.props.onEnterNewItem(value, listType);
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
    // var publicPackingItems = this.getPackingListItems(this.props.packingList.publicPackingList, 'public');
    // var privatePackingItems = this.getPackingListItems(this.props.packingList.privatePackingList, 'private');

    var publicPackingItems = this.getPackingListItems(this.props.publicPackingList, 'public');
    var privatePackingItems = this.getPackingListItems(this.props.privatePackingList, 'private');

    return (
      <div id="packing-list-container">
        
        <div>
          <PackingListContainerTitle title=" Packing List" />
          <PackingListTitle title="Group Packing List" />
          <div>
            {publicPackingItems}
          </div>
          <AddMorePackingItemsForm 
            packingType='public'
            onKeyDown={this.handleEnterNewItem}/>
        </div>
        <div>
          <PackingListTitle title="My Packing List" />
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

const mapStateToProps = (state, props) => {
  console.log('hey');
  console.log(props);
  return {
    eventId: state.EventConfigReducer.eventId,
    publicPackingList: state.PackingListReducer.publicPackingList,
    privatePackingList: state.PackingListReducer.privatePackingList
  }
}

module.exports = connect(mapStateToProps)(PackingListContainer);





