import React from 'react'; // Import React

function TodoList(props) {
  return (
    <div className="list-item">
      <span>{props.item}</span>
      <span 
        className="icon-delete" 
        onClick={() => props.deleteItem(props.index)} // Call deleteItem on click
      >
        ❌
      </span>
    </div>
  );
}

export default TodoList; // Export TodoList component
