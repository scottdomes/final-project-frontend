var React = require('react');

var AddMorePackingItemsForm = React.createClass({
  handleChange (event){
    this.props.onChange(event.target.value, this.props.packingType);
  },
  handleEnterNewItem (event) {
    if(event.keyCode == 13){ //Enter key clicked
      this.props.onKeyDown(event.target.value, this.props.packingType);  
      event.target.value = ''
      event.target.placeholder = 'Add More'
    }
  },
  render: function(){
    return (
        <input 
        id='packing-list-add-more-form' 
        type="text" 
        name="text" 
        placeholder={this.props.itemDescription} 
        onChange={this.handleChange}
        onKeyDown={this.handleEnterNewItem}/>
      )
  }

});

module.exports = AddMorePackingItemsForm;



 