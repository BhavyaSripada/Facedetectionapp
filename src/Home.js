import React,{useState} from 'react';
import './custom.scss';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import RealTime from './RealTime';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Home=()=> {

  const[gotoDetect,setGotoDetect]=useState(false);
 
  if(gotoDetect)
  {
    return <Navigate to="/RealTime" />
  }
  return (
    <div className="App">
    <Container>
    <Navbar.Brand href="#"><Image src={require("./IdentifyIO.png")}  className="brandname"/></Navbar.Brand>
    </Container>
     
    <Container className="main-page">
  
        
      
        <div className="buttons">
        <Button variant="primary" className="btn-1" onClick={()=>setGotoDetect(true)}>Detect my face</Button>
        {<Button variant="primary" className="btn-2">Show me a sample</Button>}
        </div>
        
        <Image src={require("./image_1.png")} className="main-img" />
       
        
      
      </Container>
    </div>
  );
}

export default Home;