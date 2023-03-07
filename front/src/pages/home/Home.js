import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'

import Item from '../../components/Item/Item'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Header />
        <main className='notes_container'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        </main>
        <Link to="/create" className='add_btn' ><i class="fas fa-plus-circle"></i></Link>
    </div>
  )
}

export default Home