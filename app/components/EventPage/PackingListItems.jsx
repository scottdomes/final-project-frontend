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
  console.log(props.packer)
  return(
    <div>
      <div 
        className={classNames({ 'item-packed': props.item.user_id ? true: false }, {"list-item": true})} 
        onClick={handleUserPacksItem}>
        <div className="packer-left-div">
        {'+ ' + props.item.label}
        {props.packer && <span className="packer-name">{props.packer[0].name}</span>}
        </div>
        {props.packer && <img className='packer-image' src={props.packer[0].picture_path} />}

      </div>
    </div>
  )

};

module.exports = PackingListItem;
