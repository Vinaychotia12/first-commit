import React from 'react'
import logo from './photo/natural.jpeg'
import Nav from './Nav'

export default function Nature() {
  return (
    <>
    <Nav/>

   <h1>Indian Nature</h1>
   <img src={logo} alt={'IndianNature'} width={'200px'}/>

    </>
   
  )
}
