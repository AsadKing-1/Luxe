import "./cart.css"

import { CardProducts } from "./cartProduct/cartProduct";
import Footer from "../footer/footer";

export default function Cart() {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    
    return (
        <>
            <div className="cart-page">
                <div className="container">
                    <h1 className="page-title">Cart</h1>
                    <p className="page-subtitle">Your selected products</p>

                    {cartItems.length !== 0 && (
                        <CardProducts/>
                    )}

                    <div className="cart-total" id="cartTotal">
                        <h3>Итого к оплате:</h3>
                        <div id="totalAmount">₽0</div>
                        <button className="submit-btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
