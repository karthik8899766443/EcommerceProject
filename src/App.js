import Home from './pages/Home'
import './App.css';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom';
import Search from './components/Search';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Register from './pages/Register';



function App() {
  const [cardItems,setCardItems]=useState([]);
 
  
  return (
    
    <div className="App">
    
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
        <Header cardItems={cardItems || []} ></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
           <Route path="/login" element={<LoginPage/>} />
           <Route path="/register" element={<Register/>} />
          <Route path='/search' element={<Home></Home>}/>
          <Route path='/product/:id' element={<ProductDetails cardItems={cardItems} setCardItems={setCardItems}/>}/>
          <Route path='/cart' element={<Cart cardItems={cardItems} setCardItems={setCardItems}/>}/>
        </Routes>
        </div>
      </Router>
     <Footer></Footer>
   
   
    </div>  
  );
}


export default App;
