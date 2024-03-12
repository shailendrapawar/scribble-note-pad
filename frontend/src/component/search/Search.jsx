import React from 'react'
import { useNavigate } from 'react-router-dom'
import './search.css'
import NoteCard from '../noteCard/NoteCard';

function Search() {


  const navigate=useNavigate();
  return (

    <div className='search-page-body'>
    <div className='search-body'>
      <input className='search-input' type='text'></input><button onClick={()=>{navigate("/search")}} className='search-btn' >S</button>
    </div>

    <div className='search-result-body'>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    </div>

    </div>
  )
}

export default Search