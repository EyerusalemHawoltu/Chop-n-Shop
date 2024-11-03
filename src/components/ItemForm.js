import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
