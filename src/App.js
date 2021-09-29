import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido!!"></ItemListContainer>
    </>
  );
}

export default App;
