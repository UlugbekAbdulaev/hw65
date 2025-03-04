import React, { useContext } from "react";
import { CartList } from "./Context/Cartlist.jsx";

function Savat() {
  const { cartList, setCartList } = useContext(CartList);

  if (cartList.length === 0) {
    return <p className="text-2xl text-center text-red-500 p-10">Savatda hech nima yo'q</p>;
  }


  const deleteItem = (index) => {
    const yangilash = cartList.filter((_, i) => i !== index);
    setCartList(yangilash);
  };

  
  const incr = (index) => {
    const updatedCart = cartList.map((item, i) => 
      i === index ? { ...item, sanoq: (item.sanoq || 1) + 1 } : item
    );
    setCartList(updatedCart);
  };

  
  const decr = (index) => {
    const updatedCart = cartList.map((item, i) => 
      i === index && (item.sanoq || 1) > 1 ? { ...item, sanoq: item.sanoq - 1 } : item
    );
    setCartList(updatedCart);
  };

  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-2 gap-x-3">
        <div>
          {cartList?.map((product, index) => (
            <div key={product?.id} className=" ">
              <div className="grid grid-cols-3 bg-[#f5f5f5] my-2 p-3">
                <div className="col-span-1">
                  <img src={product?.images[0]} alt={product?.title} className="w-20 h-20 object-cover" />
                </div>
                <div className="col-span-2 ">
                  <h2>{product?.title}</h2>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="border rounded-lg px-2 py-0.5 active:bg-gray-200 bg-gray-400 mr-1"
                      onClick={() => decr(index)}
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">{product?.sanoq || 1}</span>
                    <button 
                      className="border rounded-lg px-2 py-0.5 active:bg-gray-200 bg-gray-400 ml-1"
                      onClick={() => incr(index)}
                    >
                      +
                    </button>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <p className="text-green-600 font-extrabold">{product?.price * (product?.sanoq || 1)} $</p>
                    <i
                      onClick={() => deleteItem(index)}
                      className="fa-solid fa-trash text-red-600 cursor-pointer"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>Ro'yxatdan o'tish</h1>
          <input className="border" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Savat;
