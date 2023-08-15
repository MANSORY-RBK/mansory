import './App.css';
import Search from "./components/Search";
import CartList from './components/CartList';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import axios from 'axios';
import CarDetails from './components/CarDetails';
import SignIn from './components/LoginAdmin';
import React from 'react';
import AdminHome from './components/AdminHome';
import UpdateProduct from './components/Update';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("Login");
  const [data, setData] = useState([]);
  const [USV, setUSV] = useState([]);
  const [SUPERCAR, setSUPERCAR] = useState([]);
  const [CLASS, setCLASS] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [oneProduct, setOneProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [Logged,setLogged] =useState(false)
  const [prodN, setprodN] = useState("")

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((resp) => {
        setUSV(resp.data.filter((e) => e.category === "SUV"));
        setSUPERCAR(resp.data.filter((e) => e.category === "SUPERCAR"));
        setCLASS(resp.data.filter((e) => e.category === "CLASS"));
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);
  console.log(trigger,"trigger");
  const upProduct = (newprod) => {
  console.log("🚀 ~ file: App.js:34 ~ upProduct ~ newprod:", newprod)

  console.log("🚀 ~ file: App.js:41 ~ upProduct ~ prodN:", prodN)


    axios.put(`http://localhost:5000/api/products/${prodN}`, newprod).then((result) => { console.log(result); switchView("AdminHome"); toggletrigger() }).catch((err) => {
      console.log(err);


    })
  }
  const toggletrigger = () => {
    setTrigger(!trigger)
  }
  const deleteProd = (id) => {
    console.log(" ✌️~ file: App.js:47 ~ deleteProd ~ name:",id )
    
    axios.delete(`http://localhost:5000/api/products/${id}`)
    toggletrigger()
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const sUpdates = (name) => {
    setprodN(name)
    setView("UpdateProduct")

  }
  const switchView = (x) => {
    setView(x);
  };

  const stal = (x) => {
    setOneProduct(x);
    switchView("Details");
  };
/////////////////////////////////////////////CartDetails //////////////////////////////////

  const cartp = (x) => {
    setCart([...cart, x]);
  };
///////////////////////////////////////////// checkout and remove from cart //////////////////////////////
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const Checkout = () => {
    alert("YOUR CAR IS WAITING FOR YOU !");
    setCart([]);
  };
//////////////////////////////////////////// SEARCH ////////////////////////
  const search = (input) => {
    if (!input) {
      setTrigger(!trigger);
    }
    const filteredData = data.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    setData(filteredData);
  };

 return (
  <div className="app-container">
    <div className="app-nav">
      <span className="app-logo" src="" onClick={() => { switchView("Home"); setTrigger(!trigger); }}>MANSORY</span>

      {view === "Home" && (
        <div className="pp-search">
          <Search search={search} />
        </div>
      )}

      {view === "Home" && <span className="app-items" onClick={toggleMenu}>CATEGORIES</span>}
      { view !=="AdminHome" &&view !=="Login"&& <span className="app-items" onClick={() => switchView("cart")}>CART</span>}
    </div>
    {menuOpen && <div className="app-menu">
      <span className='app-menu-item' onClick={() => { setData(USV); }}>SUV</span>
      <span className='app-menu-item' onClick={() => { setData(CLASS); }}>CLASS</span>
      <span className='app-menu-item' onClick={() => { setData(SUPERCAR); }}>SUPERCAR</span>
    </div>}
    {view === "Home" && <Home product={data} stal={stal} cartp={cartp} trigger={trigger} setTrigger={setTrigger} />}
    {view === "cart" && <CartList product={cart} removeFromCart={removeFromCart} Checkout={Checkout} />}
    {view === "Details" && <CarDetails product={oneProduct} cartp={cartp} />}
    {view==="Login" && <SignIn chanV={switchView} setlogged={setLogged}/>}
    {view==="AdminHome"&& Logged ===true &&<AdminHome  upProd={sUpdates} delete={deleteProd}  chanV={switchView} product ={data} /> }
    {view==="UpdateProduct"&&  <UpdateProduct uprod={upProduct} />}
  </div>
);

};

export default App;
