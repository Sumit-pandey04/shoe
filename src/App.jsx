import { useState } from "react";

import "./App.css";

// Sample data for the shoes
const shoeData = [
  { id: 1, name: "Running Shoes", price: 50, image: "src/nike.png" },
  { id: 2, name: "Sneakers", price: 60, image: "src/nike.png" },
  { id: 3, name: "Sandals", price: 30, image: "src/nike.png" },
  { id: 4, name: "Chapl", price: 30, image: "src/nike.png" },
  { id: 5, name: "Loafers", price: 55, image: "src/nike.png" },
  { id: 6, name: "Boots", price: 80, image: "src/nike.png" },
  { id: 7, name: "Flip Flops", price: 20, image: "src/nike.png" },
  { id: 8, name: "Formal Shoes", price: 70, image: "src/nike.png" },
  { id: 9, name: "Casual Shoes", price: 65, image: "src/nike.png" },
  { id: 10, name: "Slippers", price: 25, image: "src/nike.png" },
  { id: 11, name: "High Heels", price: 90, image: "src/nike.png" },
  { id: 12, name: "Moccasins", price: 50, image: "src/nike.png" },
  { id: 13, name: "Ankle Boots", price: 85, image: "src/nike.png" },
  { id: 14, name: "Running Flats", price: 45, image: "src/nike.png" },
  { id: 15, name: "Clogs", price: 35, image: "src/nike.png" },
  { id: 16, name: "Espadrilles", price: 40, image: "src/nike.png" },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existingItem = cart.find((item) => item.id === shoe.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoe) => {
    const existingItem = cart.find((item) => item.id === shoe.id);
    if (existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== shoe.id));
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app">
      <h2 className="h2">Shoes Available for Purchase</h2>
      <div className="shoe-collection">
        {shoeData.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img src={shoe.image} alt={shoe.name} />
            <div className="style">
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            <button className="button" onClick={() => addToCart(shoe)}>Add to Cart</button></div>
          </div>
        ))}
      </div>
     
      <div className="shopping-cart">
      <h2 className="hj">Shopping Cart</h2>
        <br /><br />
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="img" src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>-</button>
            <p> {item.quantity}</p>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        ))}
        <br /><br />
        <h3>Total: ${getTotal().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default App;
