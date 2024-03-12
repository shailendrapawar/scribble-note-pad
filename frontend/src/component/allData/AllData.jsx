import React, { useEffect, useState } from 'react'
import './allData.css'
import NoteCard from '../noteCard/NoteCard';
import { useNavigate } from 'react-router-dom';




function AllData() {
  const [data, setData] = useState([]);
  const [key,setKey]=useState("");

  async function getData() {
    const res = await fetch("http://localhost:3000/all", {
      method: "GET"
    });
    const result = await res.json();
    setData(result);
    console.log(data);
  }

  async function searchData(key){
    const res = await fetch(`http://localhost:3000/search/${key}`,{
      method:"GET"
    });

    const result = await res.json()
    setData(result)
  }

  useEffect(() => {
    getData()

  }, [key])

  if(data.length==[]){
    return(
      <>
        <h3 style={{display:"grid",color:"white", fontFamily:"cursive", height:"200px", placeContent:"center"}}>Notes not created yet</h3>
      </>
    )
  
  }else{
    return (
      <div  className='all-data-body'>
        <div className='search-body'>
          <input className='search-input' value={key} onChange={(e)=>setKey(e.target.value)} type='text'></input><button onClick={()=>searchData(key)}  className='search-btn' >S</button>
        </div>

        <div  className='note-body'>
          {data?.map((v, i) => {
            return <NoteCard help={getData} id={v._id} index={i} data={data[i]} />
          })}
        </div>
  
      </div>
    )
  }
}

export default AllData