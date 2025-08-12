import Portfolio from "../components/porfolio"
import imge from "../images/a-cartoon-man-sitting-on-a-chair-with-a-laptop-free-png.webp"
import Service from "./service"
import image4 from "../images/photo_5819181362228349138_w.jpg"
import image5 from "../images/photo_5819181362228349139_w.jpg"
import image6 from "../images/photo_5819181362228349140_w.jpg"
import { Link } from "react-router-dom"


function Home(){
    return <div>
    <div className="bg-[linear-gradient(to_bottom_right,#781F07,#0E0E0E,#0E0E0E,#0E0E0E)] text-white h-[90vh]">
        {/* section-1 */}
        <div className="flex justify-evenly pt-[5%]">
            {/* left */}
            <div>
                <h3 className="font-medium text-xl pb-3">✌️ Hello! there</h3>
                <h1 className="font-bold text-4xl pb-3">I'm Yoonis <span className="text-[#FD5B38]">Gallad</span></h1>
                <h3 className="font-medium text-xl pb-3">I am a Software-Developer</h3>
                <p className="pb-10">From the inception of a project to it's completion, we employ <br />comprehensive and holistic approach</p>
                <button className="border-2 border-white px-8 py-2 rounded-lg">Contact Me</button>

                
            </div>
            {/* right */}
            <div>
                <img className="w-96 -mt-5" src={imge} alt="" />
                
            </div>
        </div>
    </div>
    {/* section-2 */}
    <div className="bg-[#0F0F0F] text-white flex justify-evenly pt-[6%]">
        {/* left */}
        <div>
            <img className="w-96" src={imge} alt="" />

        </div>
        {/* right */}
        <div className="mt-16">
            <p className="text-[#FD5B38] pb-4">ABOUT ME</p>
            <h2 className="text-4xl"><span className="font-bold">I'm</span> Software Developer From Somali  <br /><span className="font-bold">specializing Working in Web <br />development and Graphic designer</span></h2>
        </div>
    </div>
    {/* section-3 */}
   <div className="flex justify-between px-14 py-[7%] bg-[#0F0F0F] text-white">
    <Service img="https://webfolio-nextjs.vercel.app/assets/imgs/serv-icons/3.png" name="UI/UX Designer"/>
    <Service img="https://webfolio-nextjs.vercel.app/assets/imgs/serv-icons/4.png" name="Brand Strategy"/>
    <Service img="https://webfolio-nextjs.vercel.app/assets/imgs/serv-icons/5.png" name="SEO / Marketing"/>
   </div>
   {/* section-4 */}
   <div className="bg-[linear-gradient(to_top_left,#781F07,#0E0E0E,#0E0E0E,#0E0E0E)] h-[110vh] text-white">
    <h1 className="text-center font-bold text-xl pt-[5%]">Projects</h1>
    <div>
        {/* box */}
        <div className="flex justify-center gap-20 pt-[3%]">
           <Portfolio image={image4} website="Domain-Website" live="Live Demo" link="https://yoonis-2.github.io/Domain-Website/"  code="View Code" view="https://github.com/yoonis-2/Domain-Website/blob/master/index.html"/>
           <Portfolio image={image5} website="Organization-Website" live="Live Demo" link="https://yoonis-2.github.io/organization/" code="View Code" view="https://github.com/yoonis-2/organization/blob/master/index.html" />
            <Portfolio image={image6} website="Portfolio-Website" live="Live Demo" link="https://portfolio-react-opal-three.vercel.app/" code="View Code" view="https://github.com/yoonis-2/portfolio-react222/blob/main/index.html"/>
        </div>
        <Link to="/view"><button className="border-2 border-white px-7 py-2 rounded-lg mt-10 ml-[40%]">View More <i class="fa-solid fa-arrow-right"></i></button></Link>
    </div>
   </div>
    </div>
    
   

}

export default Home