import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, updateNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    updateNewItem("");
  };
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => updateNewItem(e.target.value)}
          type="text"
          name=""
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
