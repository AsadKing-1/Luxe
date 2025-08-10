export interface ProductCardsType {
    id: string;
    clothes_type: string;
    title: string;
    price: number;
    emoji?: string
    desc?: string;
}

export interface CartItem extends ProductCardsType {
    quantity: number;
}

export const Products: ProductCardsType[] = [
    {
        id: "1",
        clothes_type: "Men's Clothing",
        title: "Classic Shirt",
        price: 18900,
        desc: "Elegant shirt made of premium quality natural cotton with a perfect fit.",
        emoji: "👔"
    },
    {
        id: "2",
        clothes_type: "Women's Clothing",
        title: "Silk dress",
        price: 24500,
        desc: "An exquisite dress made of natural silk with an elegant cut and sophisticated design.",
        emoji: "👗"
    },
    {
        id: "3",
        clothes_type: "Men's Clothing",
        title: "Cashmere coat",
        price: 45000,
        desc: "A luxurious 100% cashmere coat with impeccable cut and excellent quality.",
        emoji: "🧥"
    },
    {
        id: "4",
        clothes_type: "Accessories",
        title: "Leather bag",
        price: 32000,
        desc: "Exclusive handbag made of genuine Italian leather.",
        emoji: "👜"
    },
    {
        id: "5",
        clothes_type: "Women's Clothing",
        title: "Cashmere coat",
        price: 28900,
        desc: "A soft cashmere sweater with a sophisticated design and perfect fit.",
        emoji: "🧶"
    },
    {
        id: "6",
        clothes_type: "Accessories",
        title: "Premium sneakers",
        price: 21500,
        desc: "Exclusive sneakers made of genuine leather with innovative comfort technologies.",
        emoji: "👟"
    },
];

