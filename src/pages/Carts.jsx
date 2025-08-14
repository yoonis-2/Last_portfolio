import {useSelector } from "react-redux"

function Carts() {
    const cartItems = useSelector((state) => state.NewsCart.item)
  return (
    <div>
        {
            cartItems.map((data) => {
                return <div className="flex justify-between mx-32 my-10 bg-blue-800 text-white py-7 px-7">
                     <img className="w-44" src={data.image} alt="" />
                     <h3 className="font-bold mt-5">{data.title}</h3>
                    <h3 className="font-bold mt-5">{data.price}</h3>
                    <div>
                    <button className="bg-red-500 px-7 text-white py-1 rounded-md mt-5">Remove</button>
                    </div>
                </div>
            })

        }
    </div>
  )
}

export default Carts
