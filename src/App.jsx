import './App.css'
import ItemListConainter from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav/Navbar';

function App() {

  return (
    <>
      <Nav/>
      <ItemListConainter title="Mi pagina" description= "ecommerce"/>
    </>
  )
}

export default App