import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Prtfolio from "./pages/prtfolio"


function App(){
  return <div>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prtfolio" element={<Prtfolio/>}/>
   </Routes>
  </div>
}

export default App