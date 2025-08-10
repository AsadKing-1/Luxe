import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { CartItem, ProductCardsType } from '../../catalog/catalog-vars';

export const CardProducts: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const loadCart = useCallback(() => {
        const rawItems: ProductCardsType[] = JSON.parse(localStorage.getItem("cart") || "[]");

        const groupedItems = rawItems.reduce((acc: CartItem[], item) => {
            const existingIndex = acc.findIndex(i => i.id === item.id);
            if (existingIndex >= 0) {
                acc[existingIndex].quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);

        setCartItems(groupedItems);
    }, []);
    useEffect(() => {
        loadCart();
        const handleStorageChange = () => loadCart();
        window.addEventListener('storage', handleStorageChange);

        return () => window.removeEventListener('storage', handleStorageChange);
    }, [loadCart]);
    const updateQuantity = useCallback((id: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        setCartItems(prev => {
            const updated = prev.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ).filter(item => item.quantity > 0);

            localStorage.setItem("cart", JSON.stringify(
                updated.flatMap(item =>
                    Array(item.quantity).fill({
                        id: item.id,
                        clothes_type: item.clothes_type,
                        title: item.title,
                        price: item.price,
                        emoji: item.emoji,
                        desc: item.desc
                    })
                )
            ));

            return updated;
        });
    }, []);
    const removeItem = useCallback((id: string) => {
        setCartItems(prev => {
            const updated = prev.filter(item => item.id !== id);

            localStorage.setItem("cart", JSON.stringify(
                updated.flatMap(item =>
                    Array(item.quantity).fill({
                        id: item.id,
                        clothes_type: item.clothes_type,
                        title: item.title,
                        price: item.price,
                        emoji: item.emoji,
                        desc: item.desc
                    })
                )
            ));

            return updated;
        });
    }, []);
    if (cartItems.length === 0) {
        return (
            <div id="cartItems">
                <div className="empty-cart-message">
                    <div className="empty-cart-icon">🛒</div>
                    <h3>Cart is empty</h3>
                    <p>Add products from the catalog to place an order</p>
                    <Link to="/catalog" className="cta-button empty-cart-link">Go to catalog</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="cart-container">
            {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                    <div className="cart-item-image">{item.emoji || '🛍️'}</div>
                    <div className="cart-item-info">
                        <h3 className="cart-item-title">{item.title}</h3>
                        <p className="cart-item-type">{item.clothes_type}</p>
                        <div className="cart-item-price">
                            ₽{(item.price * item.quantity).toLocaleString()}
                            {item.quantity > 1 && (
                                <span className="price-per-item">
                                    ({item.price.toLocaleString()} ₽ за шт.)
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="quantity-controls">
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                        <span className="count-cart">
                            {item.quantity}
                        </span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="qty-btn" onClick={() => removeItem(item.id)}>×</button>
                </div>
            ))}
        </div>
    );
};