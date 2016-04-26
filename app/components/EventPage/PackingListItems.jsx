var React = require('react');
var classNames = require('classnames');


function PackingListItem(props) {
  function handleUserPacksItem(e){
    props.onUserPacksItem(e, props.item.label);
  }
  return(
    <div>
      <div 
        className={classNames({ 'item-packed': props.item.user_id ? true: false }, {"list-item": true})} 
        onClick={handleUserPacksItem}>
        <div className="packer-left-div">
        {'+ ' + props.item.label}
        {props.packer && <span className="packer-name">Packed By: {props.packer[0].name.split(' ')[0]}</span>}
        </div>
        {props.packer && <img className='packer-image' src={props.packer[0].picture_path} />}

      </div>
    </div>
  )

};

module.exports = PackingListItem;
