import { useDispatch } from "react-redux"
import { AddtoCart } from "../redux/reducer/Cart"

function Events({product}){
    const dispatch = useDispatch()
    const handleDispatch = () => {
        dispatch(AddtoCart(product))
    }
    return <div>
        <div className="w-96 h-96 pl-10 ">
            <img className="56 h-56" src={product.image} alt="" />
            <div className="flex justify-between px-7 py-3">
                <h1>{product.website}</h1>
                <h1>${product.price}</h1>
            </div>
            <div>
                <button onClick={handleDispatch} className="w-full rounded-lg bg-blue-800 text-white">Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Events