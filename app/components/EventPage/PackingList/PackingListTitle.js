import React, {Component, PropTypes} from 'react';

const PackingListTitle = (props) => {
  
  return (
    <div>
      <h2 id="packing-list-header">{props.title}</h2>
    </div>
  );
}

export default PackingListTitle;