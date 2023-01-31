import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect } from 'react';
import Listitem from './Listitem';
import Product from './Product';
import MUI from './MUI';
import Personal from './Personal';
import DevelopLang from './DevelopLang';
// import Header from './HotelRoom/BookingSystem/Header';

function App() {

  
  return (
    <div>
   
      {/* <Header/>
      <Listitem/>
      <Product/> */}

      
      
      <MUI/>
      <Personal/>
      <DevelopLang/>

      {/* Hotel Room Booking */}
      {/* <Header/> */}
    </div>
  );
}

export default App;
