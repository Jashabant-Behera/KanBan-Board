import React, { useState } from 'react'; // Import React and useState

function TodoInput(props) {
  const [inputText, setInputText] = useState(''); // State to hold input text

  return (
    <div className='input-container'> {/* Container for input and button */}
      <textarea
        type='text'
        className='input-box-todo'
        placeholder='Enter your Todo'
        value={inputText}
        onChange={(e) => { setInputText(e.target.value); }} // Update input text on change
        onKeyDown={(e) => {
          if (e.key === 'Enter') { // Check for Enter key press
            props.addList(inputText); // Call addList function
            setInputText(''); // Clear input field
          }
        }}
      />
      <button
        className='btn'
        onClick={() => {
          props.addList(inputText); // Call addList function
          setInputText(''); // Clear input field
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput; // Export TodoInput component
