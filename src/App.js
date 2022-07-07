
import './App.css';
import Home from '../src/pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import Donation from './pages/Donation/Donation';
import Event from './pages/Event/Event';
import Header from './Header/Header';
import Register from './pages/Register/Register';
import Volunter from './pages/Volunter/Volunter';
import Createaccount from './pages/Createaccount/Createaccount'
import { ToastContainer } from 'react-toastify';
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <div >
         <Header></Header>
        <Routes>
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="donation" element={<Donation></Donation>}></Route>
           <Route path="event" element={<Event></Event>}></Route>
           <Route path="register" element={<Register></Register>}></Route>
           <Route path="volunter" element={<Volunter></Volunter>}></Route>
           <Route path="account" element={<Createaccount></Createaccount>}></Route>
           <Route path="admin" element={<Admin></Admin>}></Route>
           
        </Routes>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
