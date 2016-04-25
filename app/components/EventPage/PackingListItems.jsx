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
  console.log(props.userList);
  if (props.item.user_id) {
    var packer = props.userList.map(function(user){
      console.log('packer');
        console.log(props.item);
      console.log(user);
      if (user.id === props.item.user_id){
        return user;
      }
    });
    console.log(packer);
  }
  console.log('hello nurse')

  return(
    <div 
      className={classNames({ 'item-packed': props.item.user_id ? true: false }, {"list-item": true})} 
      onClick={handleUserPacksItem}>{'+ ' + props.item.label}{props.item.user_id && <p>Suck it</p>}
    </div>
  )

};

module.exports = PackingListItem;
