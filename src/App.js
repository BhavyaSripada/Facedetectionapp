import React,{useState} from 'react';
import Home from './Home';
import RealTime from './RealTime';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {

  
  

  return (
    <div className="App">
    
     <Router >
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/RealTime' element={<RealTime/>}/>

          <Route/>
        
        
        
        
        </Routes>
     </Router>



    </div>
  );
}

export default App;
