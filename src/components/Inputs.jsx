import React from "react";

const InputGroup = ({ title, handleInputs, value }) => {
  return (
    <React.Fragment>
      <div className="col">
        <label>{title}</label>
        <input
          type="text"
          className="form-control"
          placeholder={`${title}`}
          name={title}
          onChange={(e) => handleInputs(e)}
          value={value}
        />
      </div>
    </React.Fragment>
  );
};

export default InputGroup;
