import React from 'react';
import Layout from '@theme/Layout';
export default function Hello() {
  return (
  <Layout title="Hello" description="Hello React Page">
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"column",
      gap:"20px",
      height: "calc(100vh - 98.39px)",
      fontSize: '20px',
    }}>

        <img 
        src={"./img/mecha-comet.png"}  
        alt="mecha-banner" 
        className="landing-page-image"
      />
 
    
    <span  className="landing-page-heading">Work in Progress</span>
    <span className="landing-page-description">We are working on releasing our documentation for the Mecha Comet and our Cloud Services, meanwhile you can review the WIP docs here and on our code repository at Github.</span >
  </div>
</Layout>
  );
}