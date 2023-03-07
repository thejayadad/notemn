import React from 'react'
import "./create.css"
import {Link} from "react-router-dom"

const Create = () => {
  return (
    <section>
      <div className='create-note-header'>
      <Link to="/" className='btn'><i class="fas fa-backspace"></i></Link>
      <button className='btn lg primary'>Save</button>
    </div>
    <form className='create-note-form'>
      <input type="text" placeholder='Title' />
      <textarea rows="28" placeholder='Note Detail'>

      </textarea>
    </form>
    </section>
  )
}

export default Create