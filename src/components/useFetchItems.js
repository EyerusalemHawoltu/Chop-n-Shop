import { useState, useEffect } from 'react';
import { fetchItems } from '../services/api';

const useFetchItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);

  return items;
};

export default useFetchItems;
