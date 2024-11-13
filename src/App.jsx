import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <>
      <BrowserRouter>

        <Nav/>      
        <Routes >
          <Route exact path="/" element= {<ItemListContainer/>}/>
          <Route exact path="/item/:id" element= {<ItemDetailContainer/>}/>
          <Route exact path="/category/:category" element= {<ItemListContainer/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App