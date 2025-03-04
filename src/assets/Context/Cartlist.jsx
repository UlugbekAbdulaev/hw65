import {useState, createContext } from "react";


export const CartList = createContext()

const CartListProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    return <CartList.Provider value={{ cartList, setCartList }}>
        {children}
    </CartList.Provider>
}
export default CartListProvider;