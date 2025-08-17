
import { useState } from "react";
import Events from "./events";
import Xog from "../components/data";

function About(){
    const[search,setSearch] = useState("")
    const[category,setCategory] = useState("")

    const FilterXog = Xog.filter((data) => {
        const SearchData = data.website.toLowerCase().includes(search.toLowerCase()) || data.category.toLowerCase().includes(search)
        const CategoryData = category ? data.category === category : true
        return SearchData && CategoryData

    })
    
    return <div className="bg-[linear-gradient(to_bottom_right,#781F07,#0E0E0E,#0E0E0E,#0E0E0E)] text-white">
        <div className="flex gap-28 ml-32 pt-[3%] pb-[5%]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white  outline-none pl-7 rounded-lg text-black" type="search" placeholder="Enter Your Product" />
            <div className="text-2xl space-x-10">
                <input onChange={() => setCategory("")} className="scale-110" name="category" type="radio"/> All
                <input onChange={() => setCategory("men's clothing")} className="scale-110"  name="category" type="radio"/> men's clothing
                <input onChange={() => setCategory("Elegant Necklace")} className="scale-110"  name="category" type="radio"/> Elegant Necklace
                <input onChange={() => setCategory("electronics")} className="scale-110"  name="category" type="radio"/> electronics
            </div>
        </div>
        <div className="flex flex-wrap ">

       {
          FilterXog.length >0 ? FilterXog.map((item) => {
               return (
                   <Events product={item}/>
                )
            })
            :
            <p className="mt-[2%] ml-[45%] font-bold text-2xl">Ther's Empty</p>
        }
        </div>
    </div>
}

export default About