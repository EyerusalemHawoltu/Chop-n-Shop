import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import ItemForm from './components/ItemForm';
import RecipeSuggestions from './components/RecipeSuggestions';
import ShoppingList from './components/ShoppingList';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemsList />} />
          <Route path="/add-item" element={<ItemForm />} />
          <Route path="/recipes" element={<RecipeSuggestions />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
