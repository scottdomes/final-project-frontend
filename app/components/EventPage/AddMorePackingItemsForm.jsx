var React = require('react');

var AddMorePackingItemsForm = React.createClass({
  handleChange (event){
    // console.log(event.target.value);
    this.props.onChange(event.target.value);
  },
  handleEnterNewItem (event) {
    if(event.keyCode == 13){
      this.props.onKeyDown(event.target.value);        
    }
  },
  render: function(){
    return (
        <input 
        id='packing-list-add-more-form' 
        type="text" 
        name="text" 
        value={this.props.itemDescription} 
        id="packing-list-add-more" 
        onChange={this.handleChange}
        onKeyDown={this.handleEnterNewItem}/>
      )
  }

});

module.exports = AddMorePackingItemsForm;



 