import React, {Component, PropTypes} from 'react';

const PackingListTitle = (props) => {
  
  return (
    <div className="packing-list-section-heading">
      <h5>{props.title}</h5>
    </div>
  );
}

export default PackingListTitle;