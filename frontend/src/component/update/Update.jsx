import React, { useEffect, useState } from 'react'
import './update.css'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

  const navigate=useNavigate()
  const params=useParams();
  
  const[title,setTitle]=useState("");
  const[content,setContent]=useState("");

  async function searchSingle(){
    let res=await fetch(`http://localhost:3000/single/${params.id}`)
    let  result=await res.json();
    setTitle(result[0].title)
    setContent(result[0].content)
  }

  // searchSingle()
  async function updateData(e){

    e.preventDefault();
    let res= await fetch(`http://localhost:3000/update/${params.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title:title,content:content})
    });
    let result=await res.json();

    console.log(result);
    navigate('/show')

  }
 

  useEffect(()=>{
    searchSingle()
  },[])

  function emptyData(e){
    e.preventDefault()
    setContent("");
    setTitle("")
  }

  return (
    <div className='update-form-body'>

      <form className='todo-form'>
        <div id='form-title' className='form-title'><label>title:</label><input value={title} onChange={(e)=>setTitle(e.target.value)} type='text'></input></div>
        <div id='form-content' className='form-content'><label>content:</label><textarea value={content} onChange={(e)=>setContent(e.target.value)} ></textarea></div>
        <div className='form-btn-body'>
          <button id='clear-btn' onClick={(e)=>{emptyData(e)}} className='form-btn'>clear all</button>
          <button id='create-btn' onClick={(e)=>{updateData(e)}}  className='form-btn'>Update</button>
        </div>

      </form>
    </div>
  )
}

export default Update