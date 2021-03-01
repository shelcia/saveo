import React from "react";

const InputGroup = ({ title }) => {
  return (
    <React.Fragment>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder={`Enter ${title}`}
          name={title}
        />
      </div>
    </React.Fragment>
  );
};

export default InputGroup;
