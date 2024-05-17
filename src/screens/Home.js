import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousals from '../components/Carousals'
export default function Home() {
  return (
    <div>
      <div> <Navbar/> </div>
      <div><Carousals/></div>
      <div className='m-4'><Card/></div>
      <div className='m-4'><Card/></div>
      <div className='m-4'><Card/></div>
      <div><Footer/></div>
    </div>
  )
}
