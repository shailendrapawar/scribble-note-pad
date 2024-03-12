import React, { useEffect, useState } from 'react'
import './noteCard.css'
import { useNavigate } from 'react-router-dom'

function NoteCard(props) {

  const navigate = useNavigate()
  const arr = ['5px solid green', '5px solid yellow', ' 5px solid blue', '5px solid red', '5px solid aqua', '5px solid beige', '5px solid seagreen', '5px solid orange', '5px solid voilet', '5px solid chartreuse', '5px solid deeppink', '5px solid lightseagreen'];

  const random = () => {
    let value = Math.floor(Math.random() * 10)
    let color = arr[value];
    return color;
  }

  async function deleteCard(id){
    

    let res=await fetch(`http://localhost:3000/remove/${id}`,{
      method:"DELETE"
    });

    let result=await res.json();
    console.log(result);
    // navigate('/show');
    props.help()
    
  }


  const propData = props.data;
  console.log(props)

  return (
    <div id='note-card' onDoubleClick={(e) => {
      navigate(`/update/${propData._id}`);
    }}  className='note-card' style={{ borderLeft:random(),borderTop:" 2px solid white",borderBottom:" 2px solid white"}}>
    
      <div className='note-card-content'>
        <h4 className='note-card-title'>{propData.title} </h4>
        <p className='note-card-note'> {propData.content}</p>
      </div>
      <h3 onClick={()=>{deleteCard(propData._id)}} >X</h3>
    </div>
  )
}

export default NoteCard