import React,{useState} from 'react';
import './custom.scss';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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

    </Container>
     
    <Container className="main-page">
  
        
       <Image src={require("./image_1.png")} className="main-img" />
        <Button variant="primary" className="btn-1" onClick={()=>setGotoDetect(true)}>Detect my face</Button>
       
       
      
        
      
      </Container>
    </div>
  );
}

export default Home;