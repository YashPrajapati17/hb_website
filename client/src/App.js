import './App.css';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Newnav from './components/newnav/Newnav';
import SignUp from './components/signup_signin/SignUp';
import SignIn from './components/signup_signin/SignIn';
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import { Routes, Route } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <Routes>
              <Route path="/" element={<Maincomp />}>

              </Route>
              <Route path="/register" element={<SignUp />}>

              </Route>
              <Route path="/login" element={
                <SignIn />
              }>

              </Route>
              <Route path="/getproductsone/:id" element={<Cart />}>

              </Route>
              <Route path="/Buynow" element={<Buynow />}>

              </Route>
              
            </Routes>
            <Footer />
          </>
        ) : (
          <div className="load">
            <CircularProgress />
            <h2> Loading...</h2>
          </div>
        )
      }

    </>
  );
}


export default App;



