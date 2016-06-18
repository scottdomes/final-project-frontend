import React, {Component, PropTypes} from 'react'; //import library and components of library

export default class AddMorePackingItemsForm extends Component {

  constructor (props) {
    super(props);
  }

  handleEnterNewItem = (event) => {
    if ( event.keyCode == 13 ){ //Enter key clicked
      this.props.onKeyDown(event.target.value, this.props.packingType);  
      event.target.value = ''
      event.target.placeholder = 'Add More'
    }
  }

  render () {
    return (
      <input 
      id='packing-list-add-more-form' 
      type="text" 
      name="text" 
      onBlur={this.handleFormBlur}
      placeholder={"Add More"} 
      // onChange={this.handleChange}
      onKeyDown={this.handleEnterNewItem}/>
    )

  }

}


 