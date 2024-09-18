import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <div style={{
        backgroundColor:"#FAEC78",
        color:"black",
        paddingLeft:"12px",
        paddingRight:"12px",
        paddingTop:"4px",
        paddingBottom:"4px",
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
      }}>Docs are work in progress</div>
      <Layout {...props} />
    </>
  );
}