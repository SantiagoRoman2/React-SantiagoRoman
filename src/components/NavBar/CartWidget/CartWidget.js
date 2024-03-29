import { useContext, useState, useEffect } from "react";
import CartContext from "../../../context/CartContext";
import { Link, NavLink } from "react-router-dom";

const CartWidget = () => {

    const { cart, cantidad } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
    }, [cart])

    return (
        <Link to={'/cart'}> 
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg>
            {cantidad}
            </div>
        </Link>
    )
}

export default CartWidget