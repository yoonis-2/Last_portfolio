import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Prtfolio from "./pages/prtfolio"
import Carts from "./pages/Carts"


function App(){
  return <div>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prtfolio" element={<Prtfolio/>}/>
    <Route path="/view" element={<Prtfolio/>}/>
    <Route path="/cart" element={<Carts/>}/>
   </Routes>
  </div>
}

export default App