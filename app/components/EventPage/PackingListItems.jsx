var React = require('react');
var classNames = require('classnames');


function PackingListItem(props) {
  // const {packingList, onClick} = props;

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




// function PackingListItem(props) {
//   const {packingList, onClick} = props;

//   return(
//     <div>
//       <ul id="packing-unordered-list">
//       {packingList.map((item, index)=>{ 

//         function handleOnClick(e) {
//           onClick(e, item.label, index);
//         }
        
//         return (
//           <div 
//             className={classNames({ 'item-packed': item.packedBy }, {"list-item": true})} 
//             onClick={handleOnClick} 
//             key={index}>{'+ ' + item.label}</div>
//         ) 
//       })}
//       </ul>
//     </div>
//   )
// };