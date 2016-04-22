var React = require('react');
var classNames = require('classnames');


function PackingListItem(props) {
  function handleOnClick(e){
    console.log('click');
    // debugger;
    // console.log(e);
    // console.log(props);
    // console.log(arguments);
    // console.log(props.onClick.__reactBoundArguments[0]);
    // props.onClick(e, props.item.label, props.onClick.__reactBoundArguments[0]);
    props.onClick(e, props.item.label);

  }
  return(
    <div 
      className={classNames({ 'item-packed': props.item.packedBy }, {"list-item": true})} 
      onClick={handleOnClick}>{'+ ' + props.item.label}
    </div>
  )

};

module.exports = PackingListItem;
