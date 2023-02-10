import Navbar from './components/Navbar';
import './App.css';

import SocialmediaBar from './components/SocialmediaBar';
import Studentbar from './components/Studentbar';
import {BrowserRouter , Routes , Route  } from 'react-router-dom'
import CountryBar from './components/CountryBar';

 function App() {
  return (
    <BrowserRouter>
       
       <Navbar/>
   
    <Routes>
        
          <Route path='/' element={<CountryBar/>}/> 
          <Route path='/socialmediaChart' element={<SocialmediaBar/>}/> 
          <Route path='/studentbar' element={<Studentbar/>}/> 
       

    </Routes>
    </BrowserRouter>
  );
}

export default App;
