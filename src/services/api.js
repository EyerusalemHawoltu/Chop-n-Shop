export const fetchItems = async () => {
    const response = await fetch('/api/items');
    const data = await response.json();
    return data;
  };
  
  export const addItem = async (itemName) => {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: itemName })
    });
    const data = await response.json();
    return data;
  };
  