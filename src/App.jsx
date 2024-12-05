import { BrowserRouter, Routes, Route} from 'react-router';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nav from './components/Nav/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CartView from './components/CartView/CartView';
function App() {

  return (
    <>
      <CartContextProvider>

        <BrowserRouter>        
          <Nav/>      
          <Routes >
            <Route exact path="/" element= {<ItemListContainer/>}/>
            <Route exact path="/item/:id" element= {<ItemDetailContainer/>}/>
            <Route exact path="/category/:category" element= {<ItemListContainer/>}/>
            <Route exact path="/Cart" element= {<CartView/> } />
          </Routes>
        </BrowserRouter>
        
      </CartContextProvider>
    </>
  )
}

export default App