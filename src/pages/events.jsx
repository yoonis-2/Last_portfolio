function Events(props){
    return <div>
        <div className="w-96 h-96 pl-10 ">
            <img className="56 h-56" src={props.image} alt="" />
            <div className="flex justify-between px-7 py-3">
                <h1>{props.title}</h1>
                <h1>${props.price}</h1>
            </div>
            <div>
                <button className="w-full rounded-lg bg-blue-800 text-white">Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Events