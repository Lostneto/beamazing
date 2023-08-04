import React from "react";

interface ShirtCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ShirtCard: React.FC<ShirtCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="shirt-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <a
        href="https://www.instagram.com/amazingtshirts_/"
        target="_blank" // Abre o link em uma nova aba
        rel="noopener noreferrer" // Boa prática para links em nova aba
        className="add-to-cart-button"
      >
        <button>Add to Cart</button>
      </a>
    </div>
  );
};

export default ShirtCard;
