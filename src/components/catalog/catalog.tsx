import { useState } from "react";
import { Products } from "./catalog-vars";
import type { ProductCardsType } from "./catalog-vars";
import "./catalog.css";
import Footer from "../footer/footer";

export default function Catalog() {
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const Products_Cards: React.FC<ProductCardsType> = ({ id, clothes_type, title, price, desc, emoji }) => {
        const addtoCart = () => {
            const products: ProductCardsType = { id, clothes_type, title, price, desc, emoji }
            const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
            const updateCart = [...currentCart, products];
            localStorage.setItem("cart", JSON.stringify(updateCart));

            const message = document.createElement("div");
            message.innerText = "Добавлено ✓";
            message.style.position = "fixed";
            message.style.width = "290px"
            message.style.textAlign = "center"
            message.style.top = "90%";
            message.style.right = "20px";
            message.style.padding = "10px 20px";
            message.style.color = "white";
            message.style.borderRadius = "3px";
            message.style.fontWeight = "bold";
            message.style.zIndex = "9999";
            message.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
            message.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
            message.style.opacity = "0";
            message.style.transition = "opacity 0.3s ease";

            document.body.appendChild(message);
            requestAnimationFrame(() => {
                message.style.opacity = "1";
            });
            setTimeout(() => {
                message.style.opacity = "0";
                setTimeout(() => {
                    message.remove();
                }, 300);
            }, 1500);
        }
        const likeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
            const button = e.currentTarget as HTMLElement;
            if (button) {
                const productId = button.dataset.productId;
                let likedProducts = JSON.parse(localStorage.getItem("liked") || "[]");

                const isLiked = likedProducts.includes(productId);

                if (isLiked) {
                    likedProducts = likedProducts.filter((id: string) => id !== productId);
                    localStorage.setItem("liked", JSON.stringify(likedProducts));
                    button.classList.remove("liked");
                    button.textContent = '♡';
                } else {

                    likedProducts.push(productId);
                    localStorage.setItem("liked", JSON.stringify(likedProducts));
                    button.classList.add("liked");
                    button.textContent = '❤️';
                }

                button.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 200);
            }
        };

        const isLiked = JSON.parse(localStorage.getItem("liked") || "[]").includes(id)
        return (
            <div className="product-card" data-category={clothes_type}>
                <button onClick={(e) => likeToggle(e)} className={`like-btn ${isLiked ? `liked` : ``}`} data-product-id={`${id}`}>{ isLiked ? "❤️" : "♡" }</button>
                <div className="product-image" data-emoji={emoji}>
                    <div className="product-overlay">
                        <button className="overlay-btn">Quick view</button>
                        <button className="overlay-btn">Add to favorites</button>
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-category">{clothes_type}</div>
                    <h3 className="product-title">{title}</h3>
                    <p className="product-price">₽{price}</p>
                    <p className="product-description">{desc}</p>
                    <button onClick={addtoCart} className="add-to-cart">Add to cart</button>
                </div>
            </div>
        )
    };

    const filteredProducts = filterCategory
        ? Products.filter(product => {
            const productCategory = product.clothes_type.toLowerCase().trim();
            const selectedCategory = filterCategory.toLowerCase().trim();
            if (selectedCategory === "men's clothing") {
                return productCategory === "men clothing" || productCategory === "men's clothing";
            } else if (selectedCategory === "women's clothing") {
                return productCategory === "women clothing" || productCategory === "women's clothing";
            } else if (selectedCategory === "accessories") {
                return productCategory === "accessories";
            }
            return false;
        })
        : Products;
    return (
        <>
            <div className="products-page">
                <div className="container">
                    <h1 className="page-title">Catalog</h1>
                    <p className="page-subtitle">Discover our exclusive collection of premium clothing</p>
                    <div className="filter-bar">
                        <button
                            className={`filter-btn ${filterCategory === null ? "active" : ``}`}
                            onClick={() => setFilterCategory(null)}
                        >
                            All
                        </button>
                        {["Men's Clothing", "Women's Clothing", "Accessories"].map((item) => (
                            <button
                                className={`filter-btn ${filterCategory === item ? "active" : ``}`}
                                onClick={() => setFilterCategory(item)}
                                key={item}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="product-grid" id="productGrid">
                        {filteredProducts.map((product, index) => (
                            <Products_Cards key={`${product.title}-${index}`} {...product} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}