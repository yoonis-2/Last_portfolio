function Service(props){
    return <div>
        {/* box */}
        <div>
            <img className="w-24 pb-3" src={props.img} alt="" />
            <h3 className="font-bold text-2xl pb-4">{props.name}</h3>
            <div className="flex gap-1 pb-4" >
                <p className="border-2 border-white px-7 py-2 rounded-2xl">UI/UX</p>
                <p className="border-2 border-white px-7 py-2 rounded-2xl">DEVELOPMENT</p>
            </div>
            <p>We always ensure that it combines a clean <br /> and beautiful visual design.</p>
        </div>

    </div>
}

export default Service