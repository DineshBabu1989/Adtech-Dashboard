import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = props => {
  return <div className="error">{props.msg}</div>;
};

ErrorMsg.propTypes = {
  msg: PropTypes.string
};

export default ErrorMsg;
