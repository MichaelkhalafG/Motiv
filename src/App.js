import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Booking from './componenets/Booking'
import Topnav from './componenets/Topnav';
function App() {
  fetch('https://myfakeapi.com/api/cars/name/Mitsubishi').then((res) => res.json()).then((data) => console.log(data));
  return (
    <div className="App row bg-light m-0 p-0">
      <Navbar />
      <div className="row col-xl-10 col-lg-9 col-md-8 col-12 bg-light p-0 m-0">
        <Topnav />
        <Routes>
          <Route path='/' element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
