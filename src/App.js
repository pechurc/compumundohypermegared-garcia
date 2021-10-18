import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </ Router>
  );
}

export default App;
