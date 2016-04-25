var React = require('react');
var classNames = require('classnames');


function PackingListItem(props) {
  function handleUserPacksItem(e){
    console.log('click');
    // console.log(e);
    // console.log(props);
    // console.log(arguments);
    // console.log(props.onClick.__reactBoundArguments[0]);
    // props.onClick(e, props.item.label, props.onClick.__reactBoundArguments[0]);
    props.onUserPacksItem(e, props.item.label);
  }
  
  return(
    <div 
      className={classNames({ 'item-packed': props.item.user_id ? true: false }, {"list-item": true})} 
      onClick={handleUserPacksItem}>{'+ ' + props.item.label}{props.packer && <p>{props.packer[0].name}</p>}
    </div>
  )

};

module.exports = PackingListItem;
