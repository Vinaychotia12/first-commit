import React from 'react'
import PropsSample from './PropsSample'
import Nav from './Nav'
import logo from './photo/image.jpg'
import MyApi from './MyApi'
export default function Home(){
   
    return(
        <>
       
        <Nav/>
        <h1>Home</h1>

       <img src={logo} alt={'peace'} width={'200px'}/> 
       {/* <PropsSample/> */}
       <MyApi/>
        </>
       )
        
    
}
