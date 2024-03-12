import React, { useState } from 'react'
import './addData.css'
import {  useNavigate } from 'react-router-dom'
function AddData() {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  
  
  async function handleData(e){
    e.preventDefault();
    let res=await fetch("http://localhost:3000/send",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        title:title,content:content
      })
    })
    let result=await res.json();
    console.log(result)
    if(result._id){
      alert("note created")
      navigate('/show');
    }else{
      alert("error:----"+result.err)
    }
  }

  function emptyData(e){
    e.preventDefault()
    setContent("");
    setTitle("")
  }

  return (
    <div className='add-data-body'>

      <form className='todo-form'>
        <div id='form-title' className='form-title'><label id='title-label'>title:</label><input placeholder='entere title' className='title-input' value={title} onChange={(e) => setTitle(e.target.value)} type='text'></input></div>
        <div id='form-content' className='form-content'><label id='content-label'>content:</label><textarea placeholder='enter content' className='content-input' value={content} onChange={(e) => setContent(e.target.value)} ></textarea></div>
        <div className='form-btn-body'>
          <button id='clear-btn' onClick={(e)=>{emptyData(e)}} className='form-btn'>clear all</button>
          <button id='create-btn' onClick={(e)=>handleData(e)}  className='form-btn'>create</button>
        </div>

      </form>

    </div>
    
  )
}

export default AddData