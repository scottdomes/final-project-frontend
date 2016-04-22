var React = require('react');

var AddMorePackingItemsForm = React.createClass({
  handleChange (event){
    // console.log(event.target.value);
    this.props.onChange(event.target.value);
  },
  handleEnterNewItem (event) {
    if(event.keyCode == 13){
      this.props.onKeyDown(event.target.value);  
      event.target.value = ''
      event.target.placeholder = 'Add More'
    }
  },
  render: function(){
    console.log('wtf')
    console.log(this.props)
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



 