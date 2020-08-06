import React from "react";

const Error = (props) => {
  return (
    <div className="error-msg">
      <h1>{props.error}</h1>
    </div>
  );
};

export default Error;
