import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='notes_header'>
        <h3>The Notes App</h3>
        <input type="text" placeholder='Search....' />
        <button className='btn'><i class="fas fa-search"></i></button>
    </header>
  )
}

export default Header