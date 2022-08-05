import React from "react";

interface FormProps {
  inputContent: string;
  changeInput(event: React.ChangeEvent<HTMLInputElement>): void;
  isEmpty: boolean;
  handleInput(): void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  error: boolean;
}

function Form({ inputContent, changeInput, isEmpty, handleInput, inputRef, error } : FormProps) {

  const errorStyles = {
    height: '3.8em',
    borderRadius: '.5em',
    paddingLeft: '1em',
    border: isEmpty ? '2px solid var(--red)' : 'none',
  }

  return (
    <div className="Form">
        <input ref={inputRef} type="text" name="inputContent" className={isEmpty || error ? "Form--input" : ""} value={inputContent} style={errorStyles} placeholder="Shorten a link here..." onChange={changeInput} />
        <button type="submit" className="Form--submit" onClick={handleInput}>Shorten it!</button>
        {isEmpty && <small className="Form--error-text">Please add a link</small>}
        {error && <small className="Form--error-text">Please check if your link is correct</small>}
    </div>  
  ); 
}

export default Form;
