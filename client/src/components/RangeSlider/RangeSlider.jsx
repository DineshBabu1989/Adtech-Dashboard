import React from 'react';
import PropTypes from 'prop-types';

const RangeSlider = (props) => {
  return <div className="rangeSlider__wrapper">
      <input type='range' min="2" max="15"  onChange={ props.handleRangeSlider } className='rangeSlider'/>
  </div>;
};

RangeSlider.propTypes = {
   handleRangeSlider: PropTypes.func.isRequired
};
export default RangeSlider;
