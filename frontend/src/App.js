import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import PrivateComponent from './components/privateComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/login';
import Addproduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      {/* below route disables buttons as per the privatecomponent entry that is if the user is already registered he will able to click and 
      navigate to the routes but if he is not signed up he only see signup page on all the tabs*/}
        <Route element={<PrivateComponent />}>
        <Route path='/' element={<h1>Product Listing component</h1>} />
        <Route path='/add' element={<h1>{<Addproduct />}</h1>} />
        <Route path='/update' element={<h1>Update Product component</h1>} />
        <Route path='/logout' element={<h1>logout component</h1>} />
        <Route path='/profile' element={<h1>Profile component</h1>} />
        </Route>
        {/* this route is not part of private component. */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
