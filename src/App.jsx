import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './emp/EmpListing.jsx';
import EmpCreate from './emp/EmpCreate.jsx';
import EmpDetail from './emp/EmpDetail.jsx';
import EmpEdit from './emp/EmpEdit.jsx';

function App() {

  return (
    <>
     <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
