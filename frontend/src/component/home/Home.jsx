import React from 'react'
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate=useNavigate();

  return (
    <div className='home-body'>
    <h1>Welcome to Scribble..!!</h1>
    <div className='home-menu'>
    <button id="allTodo" onClick={()=>{navigate('/show')}}>all notes</button>
        <button id="create" onClick={()=>{navigate("/addData")}} >create</button>
        
    </div>
    </div>

    
  )
}

export default Home