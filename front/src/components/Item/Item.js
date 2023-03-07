import React from 'react'
import "./item.css"
import {Link} from "react-router-dom"

const Item = () => {
  return (
    <Link to="/edit/:id" className='note'>
        <h4>Note Title</h4>
        <p>Note Date</p>
    </Link>
  )
}

export default Item