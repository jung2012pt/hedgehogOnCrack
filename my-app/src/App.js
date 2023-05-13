import logo from './logo.svg';
import './css/App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Signin from './view/Sigin.js';
import Profile from './Profile.js';
import Category from './view/Category.js';
import NewCatalog from './view/newCatalog.js';
import Bottle from './view/Bottle.js';
import Login from './view/login.js';
import OrdersHistory from './view/ordersHistory.js';


function App() {
  const token = localStorage.getItem('accessToken');
  // if (!token) {
  //   return <Signin />
  // }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/profile">
    //       <Profile />
    //     </Route>

    //     <Route path="/abc">
    //       <Signin />
    //     </Route>
    //     <Route path="/category">
    //       <Category />
    //     </Route>
    //     <Route path="/">
    //       <Category />
    //     </Route>

    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/2" element={<Bottle />} />
        <Route path="/3" element={<Signin />} />
        <Route path="/4" element={<Login />} />
        <Route path="/5" element={<OrdersHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
