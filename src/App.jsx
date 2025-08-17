import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Prtfolio from "./pages/prtfolio"
import Carts from "./pages/Carts"
import Blog from "./pages/blog"
import Contact from "../src/pages/contact"
import About from "../src/pages/About"


function App(){
  return <div>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/page" element={<About/>}/>
    <Route path="/prtfolio" element={<Prtfolio/>}/>
    <Route path="/view" element={<Prtfolio/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/cart" element={<Carts/>}/>
    <Route path="/contact " element={<Contact/>}/>
   </Routes>
  </div>
}

export default App