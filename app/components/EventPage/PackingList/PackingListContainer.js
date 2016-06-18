// var React = require('react');
// // var PackingListItem = require('./PackingListItems');
// var classNames = require('classnames');
// // var AddMorePackingItemsForm = require('./AddMorePackingItemsForm');

// import PackingListTitle from './PackingListTitle'; //not sure if this is right import
// import PackingListItem from './PackingListItems';
// import AddMorePackingItemsForm from './AddMorePackingItemsForm';

// var PackingListContainer = React.createClass({
//   getInitialState: function() {
//       return {
//         newPublicPackingItem: 'Add More',
//         newPrivatePackingItem: 'Add More'
//       }
//   },
//   handleUserPacksItem: function (key, e, itemLabel, listType){
//     e.preventDefault();
//     e.stopPropagation();
//     if (listType === 'public') {
//       var currentItem = this.props.packingList.publicPackingList[key];
//     } else {
//       var currentItem = this.props.packingList.privatePackingList[key];
//     }
//     this.props.onUserPacksItem(currentItem, key);
//   },
//   handleNewPackingItemChange: function (value, listType){
//     if (listType === 'public'){
//       this.setState({
//         newPublicPackingItem: value
//       });
//     } else if (listType === 'private') {
//       this.setState({
//         newPrivatePackingItem: value
//       });
//     }
//   },
//   handleEnterNewItem: function (value, listType){
//     this.props.onEnterNewItem(value, listType);
//   },
//   getPackingListItems: function (packingList, listType){

//     if (packingList){ 
//       var PackingItems = packingList.map((item, index) => {
      
//         var packer = null;
//         if (listType === 'public'){
//           if (item.user_id){
//             packer = this.props.userList.filter(function(user){
//               return item.user_id == user.id ? true : false;
//             });
//           }
//         }
//         return <PackingListItem packer={packer} listType={listType} onUserPacksItem={this.handleUserPacksItem.bind(this, index)} key={item.id} item={item} />
//       });
//     }

//     return PackingItems;
//   },
//   handleFormBlur: function (value, listType){
//     if (listType === 'public' && value === ''){
//       this.setState({
//         newPublicPackingItem: 'Add More'
//       });
//     } else if (listType === 'private'  && value === '') {
//       this.setState({
//         newPrivatePackingItem: 'Add More'
//       });
//     }
//   },
//   render: function () {
//     var {newPublicPackingItem, newPrivatePackingItem} = this.state

//     var publicPackingItems = this.getPackingListItems(this.props.packingList.publicPackingList, 'public');
//     var privatePackingItems = this.getPackingListItems(this.props.packingList.privatePackingList, 'private');

//     return (
//       <div id="packing-list-container">
        
//         <div>
//           <PackingListTitle title="Group Packing List"/>

//           <div className="packing-list-section-heading">
//             <h5>Group Packing List</h5>
//           </div>
//           <div>
//             {publicPackingItems}
//           </div>
//           <AddMorePackingItemsForm 
//             packingType='public'
//             onBlur={this.handleFormBlur}
//             itemDescription={newPublicPackingItem} 
//             onChange={this.handleNewPackingItemChange}
//             onKeyDown={this.handleEnterNewItem}/>
//         </div>
//         <div>
//           <div className="packing-list-section-heading">
//             <h5>My Packing List</h5>
//           </div>
//           <div>
//             {privatePackingItems}
//           </div>
//           <AddMorePackingItemsForm 
//             packingType='private'
//             onBlur={this.handleFormBlur}
//             itemDescription={newPrivatePackingItem} 
//             onChange={this.handleNewPackingItemChange}
//             onKeyDown={this.handleEnterNewItem}/>
//         </div>
//       </div>
//     )
//   }
// });

// module.exports = PackingListContainer;

import React, {Component, PropTypes} from 'react'; //import library and components of library
import classNames from 'classnames';
import PackingListTitle from './PackingListTitle';
import PackingListItem from './PackingListItems';
import AddMorePackingItemsForm from './AddMorePackingItemsForm';

export default class PackingListContainer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      newPublicPackingItem: 'Add More',
      newPrivatePackingItem: 'Add More'
    }

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

  handleNewPackingItemChange = (value, listType) => {
    if (listType === 'public'){
      this.setState({
        newPublicPackingItem: value
      });
    } else if (listType === 'private') {
      this.setState({
        newPrivatePackingItem: value
      });
    }
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

  handleFormBlur = (value, listType) => {
    if (listType === 'public' && value === ''){
      this.setState({
        newPublicPackingItem: 'Add More'
      });
    } else if (listType === 'private'  && value === '') {
      this.setState({
        newPrivatePackingItem: 'Add More'
      });
    }
  }

  render () {
    var {newPublicPackingItem, newPrivatePackingItem} = this.state

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

}

module.exports = PackingListContainer;





