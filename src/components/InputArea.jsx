import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.submit} type="text" value={props.text} />
      <button onClick={props.click}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
