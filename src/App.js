import './App.css';
import './styles.css';
import React from 'react';
import Contact from './components/Contact';
import Category from './components/Category';
import Offers from './components/Offers';
import BuyingGuides from './components/BuyingGuides';
import Home from './components/Home';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { incrementTimerAction, decrementTimerAction } from './redux/actions/createActions';
import {connect} from 'react-redux';

// export const mapStateToProps = (state) => {
//   return {
//     timer : state.timer
//   }
  
// }
// export const mapDispatchToProps = (dispatch) => ({ 
//   incrementTimerAction :  dispatch(incrementTimerAction()),
//   decrementTimerAction :  dispatch(decrementTimerAction())
// })
function App() {
  
  
  return (
    <React.Fragment>
     <BrowserRouter>
      <Routes>
          <Route path='/contactus' element={<Contact />} />
          <Route path="/category" element={<Category />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/buying-guides" element={<BuyingGuides />}></Route>
          <Route path="/product" ></Route>
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
