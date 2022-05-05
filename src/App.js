import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Components/Main/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Main/Inventory/Inventory';
import Blogs from './Components/Main/Blogs/Blogs';
import SignIn from './Components/Main/SignIn/SignIn';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>


        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
