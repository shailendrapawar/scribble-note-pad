
import './App.css'
import AddData from './component/addData/AddData'
import Home from './component/home/Home'
import Navbar from './component/navbar/Navbar'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './component/search/Search'
import AllData from './component/allData/AllData'
import Update from './component/update/Update'
function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path="/addData" element={<AddData/>}></Route>
        <Route exact path='/search' element={<Search/>}></Route>
        <Route exact path="/show" element={<AllData/>}></Route>
        <Route exact path="/update/:id" element={<Update/>}></Route>
        {/* <Route exact path='/single' element={}></Route> */}
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
