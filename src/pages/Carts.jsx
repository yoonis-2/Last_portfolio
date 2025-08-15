// import {useSelector } from "react-redux"

// function Carts() {
//     const cartItems = useSelector((state) => state.NewsCart.item)
//   return (
//     <div>
//         {
//             cartItems.map((data) => {
//                 return <div className="flex justify-between mx-32 my-10 bg-blue-800 text-white py-7 px-7">
//                      <img className="w-44" src={data.image} alt="" />
//                      <h3 className="font-bold mt-5">{data.title}</h3>
//                     <h3 className="font-bold mt-5">{data.price}</h3>
//                     <div>
//                     <button className="bg-red-500 px-7 text-white py-1 rounded-md mt-5">Remove</button>
//                     </div>
//                 </div>
//             })

//         }
//     </div>
//   )
// }

// export default Carts


import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart, UpdateCart, ClearCart } from "../redux/reducer/Cart";

function Carts() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.NewsCart.item);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(RemoveFromCart(id));
  };

  const handleClear = () => {
    dispatch(ClearCart());
  };

  const handleQuantityChange = (id, value) => {
    if (value >= 1) {
      dispatch(UpdateCart({ id, quantity: value }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <>
          {/* Totals */}
          <div className="flex justify-between items-center bg-gray-100 p-5 rounded-lg mb-6 shadow-md">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Total Items:</span>
              <input
                type="number"
                value={totalQuantity}
                min="1"
                onChange={(e) => {
                  const multiplier = parseInt(e.target.value);
                  cartItems.forEach((item) => {
                    dispatch(UpdateCart({ id: item.id, quantity: item.quantity * multiplier }));
                  });
                }}
                className="w-20 text-center border rounded-md px-2 py-1"
              />
            </div>
            <div className="font-semibold text-lg">
              Total Price: ${totalPrice}
            </div>
            <button
              onClick={handleClear}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-bold transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((data) => (
              <div
                key={data.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col gap-3">
                  <h2 className="font-bold text-lg">{data.title}</h2>
                  <p className="text-gray-700 font-semibold">${data.price}</p>

                  {/* Individual Quantity */}
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Quantity:</span>
                    <input
                      type="number"
                      value={data.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(data.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center border rounded-md px-2 py-1"
                    />
                  </div>

                  <button
                    onClick={() => handleRemove(data.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-2xl font-bold mt-10 text-gray-600">
          Your Cart is Empty
        </p>
      )}
    </div>
  );
}

export default Carts;
