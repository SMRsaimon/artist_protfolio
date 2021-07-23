import React from 'react';
import "./SubmitButton.css"

const SubmitButton = ({text}) => {
    return (
        <>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              {text}
            </button>
          </div>
            
        </>
    );
};

export default SubmitButton;