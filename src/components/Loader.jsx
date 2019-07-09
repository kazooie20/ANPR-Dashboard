import React from "react";
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const pStyle = {
  width: '5rem',
  height: '5rem',
  
};


function Loader() {
  return (
    <div>
      <Navbar />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div><br/></div>   
          <div><br/></div> 
          <div><br/></div>     
          <div><br/></div> 
          <div><br/></div>
          <div><br/></div>   
          <div><br/></div> 
          <div><br/></div>     
          <div><br/></div> 
          <div><br/></div>
          <div><br/></div> 
          <div><br/></div>  
          <div className ="text-center" >
            <div className ="spinner-border" style={pStyle} role="status">
              <span className="sr-only">Loading...</span>
            
            </div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Loader;
