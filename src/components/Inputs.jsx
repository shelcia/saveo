import React from "react";

const InputGroup = ({ title }) => {
  return (
    <React.Fragment>
      <div className="col">
        <label>{title}</label>
        <input
          type="text"
          className="form-control"
          placeholder={`${title}`}
          name={title}
        />
      </div>
    </React.Fragment>
  );
};

export default InputGroup;
