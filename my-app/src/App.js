import logo from './logo.svg';
import './css/App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Signin from './Sigin.js';
import Profile from './Profile.js';
import Category from './view/Category.js';
import NewCatalog from './view/newCatalog.js';


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
        <Route path="/" element={<NewCatalog />} />
        <Route path="/abc" element={<Signin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
