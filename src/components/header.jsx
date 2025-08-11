import { Link } from "react-router-dom"

function Header(){
    return <div>
        <div className="flex justify-between px-10 py-2">
            <h1 className="font-bold text-2xl">Yoonka-folio</h1>
            <div className="flex">
                <ul className="flex gap-14 mt-1 text-[18px]">
                    <Link to="/"><li>Home</li></Link>
                    <li>Page</li>
                    <Link to="prtfolio"><li>Portfolio</li></Link>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#FD5B38] px-8 py-2 rounded-md text-white">Let's Contact</button>
            </div>
        </div> 
    </div>
}

export default Header