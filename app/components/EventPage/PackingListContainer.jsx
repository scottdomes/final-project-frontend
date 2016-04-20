var React = require('react');
var transparentBg = require('../../styles/index.jsx').transparentBg;
var PackingListItem = require('./PackinglistItems.jsx');
var classNames = require('classnames');




var PackingListContainer = React.createClass({
  getInitialState() {
      return {
        packingList: [{label: 'buy milk', packedBy: null}, {label: 'Clean Room', packedBy: null}, {label: 'Do stuff', packedBy: null}],
        newPackingItem: 'Not Working',
        addMore: false
      }
  },
  handleOnClick: function (key, e, itemLabel){
    // e.preventDefault();
    console.log(arguments);
    console.log('click');
    // console.log(this.state);
    var currentState = this.state.packingList
    var currentItemState = this.state.packingList[key];
    //Change this to user id or user info of who is packing it
    currentItemState.packedBy = !currentItemState.packedBy; 
    currentState[key] = currentItemState;
    // console.log(currentState[key]);
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
    // console.log(addMore);

    var ItemList = this.state.packingList;
    var PackingItems = ItemList.map((item, index) => {
      console.log(item);
      return <PackingListItem onClick={this.handleOnClick.bind(this, index)} key={index} item={item} />
    });

    return (
      <div className='large-3 columns' id="packing-list-container">
        <div>
          <h2 id="packing-list-header">Packing List</h2>
        </div>
        {PackingItems}
        {!addMore && <div id="packing-list-add-more" onClick={this.handleAddMoreClick}> + Add More! ERROR IS HERE </div>}
        <input type="text" name="text" value={newPackingItem} id="packing-list-add-more" onChange={this.handleChangePackingItem}/>
      </div>
    
    )
  }
});

module.exports = PackingListContainer;



// <PackinglistItems 
//           packingList={packingList}
//           onClick={this.handleOnClick} />
