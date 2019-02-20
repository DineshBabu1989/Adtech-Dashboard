import React from "react";

const ErrorMsg = (props) => {
    console.log(props)
  return (
    <div className="error">{props.msg}</div>
  );
};
export default ErrorMsg;