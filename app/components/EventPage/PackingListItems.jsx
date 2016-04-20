var React = require('react');
var classNames = require('classnames');


function PackingListItem(props) {
  const {packingList, onClick} = props;

  return(
    <div>
      <ul>
      {packingList.map((item, index)=>{ 

        function handleOnClick(e) {
          onClick(e, item.label, index);
        }

        return (
          <div 
            className={classNames({ 'item-packed': item.selected }, {"list-item": true})} 
            onClick={handleOnClick} 
            key={index}>{'+ ' + item.label}</div>
        ) 
      })}
      </ul>
    </div>
  )
};

module.exports = PackingListItem;


// { this.props.map((item, index)=>{ return <li key={index}>{item}</li> })}



// function PackingListItem(props) {
//   var {packingItem} = this.props;
//   return(
//     <div>
//       <ul>
//       { packingItem.map((item, index)=>{ return <li key={index}>{item}</li> })}
//       </ul>
//     </div>
//   )
// }

// module.exports = PackingListItem;