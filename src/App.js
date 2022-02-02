import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';





function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="row"> 
                  <div>
                      <a className="brand" href="/" >amazona</a>
                  </div>
                  <div>
                      <a href="/cart">Cart</a>
                      <a href="/signin">Sign In</a>
                  </div>
  
              </header>
              <main>
                <Routes>
                  <Route path='/' element={<HomeScreen />} exact={true}></Route>   
                  <Route path='/product/:id' component={ProductScreen}></Route>
                </Routes>
              </main> 
              <footer className="row center">All Rights Reserved</footer> 
      </div>
    </BrowserRouter>
  );
}

export default App;
