import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </ Router>
  );
}

export default App;
