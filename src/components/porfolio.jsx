import image4 from "../images/photo_5819181362228349138_w.jpg"

function Portfolio(props){
    return <div>
        <div className="bg-white text-black w-80">
            <img className="w-80 h-36" src={props.image} alt="" />
            <h3 className="font-bold ml-3 pt-5 pb-3">{props.website}</h3>
            <p className="w-96 text-[12px] ml-3">A domain is the unique name that identifies a website <br /> on the internet, such as <strong>example.com</strong>. It allows people <br />  to easily access your site without typing a long IP address.</p>
            <div className="flex gap-3 ml-3 pt-3 pb-3">
                <p className="bg-[#EFF6FF] px-2 py-1 rounded-lg text-blue-800">Html</p>
                <p className="bg-[#EFF6FF] px-2 py-1 rounded-lg text-blue-800">Tailwind Css</p>
                <p className="bg-[#EFF6FF] px-2 py-1 rounded-lg text-blue-800">Javascript</p>
            </div>
            <div className="ml-3 pb-5">
                <a href={props.link}target="_blank"><button className="bg-[#1D4ED8] rounded-lg px-7 py-2 text-white ">{props.live}</button></a>
                <a href={props.view}target="_blank"><button className="bg-[#1D4ED8] rounded-lg px-7 py-2 text-white ml-3 ">{props.code}</button></a>
                
            </div>
        </div>

    </div>
}

export default Portfolio