import React, { useState } from 'react';
import './App.scss';
import Cart from './Cart';

export default function App() {
  const [data, setData] = useState(
    [
      {
        id: 1,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12.800',
        brand: "nike"
      },
      {
        id: 4,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12.800',
        brand: "nike"
      },
      {
        id: 2,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12.800',
        brand: "nike"
      },
      {
        id: 3,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12.800',
        brand: "nike"
      },
    ]
  )
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, number: item.number + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, number: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + parseFloat(item.price.replace(',', '.')) * parseInt(item.number);
    }, 0);
  };

  return (
    <div className="container">
      <button className="open-cart-button" onClick={() => setOpenCart(true)}>
        Open Cart
      </button>
      <h1>Our products</h1>
      <div className="container-grid">
        {data.map((product) => (
          <div className="container-block" key={product.id}>
            <div className="container-Left">
              <span>{product.brand}</span>
              <img src={product.image} alt={product.title} />
            </div>
            <div className="container-Right">
              <h3>{product.title}</h3>
              <span>RUNNING COLLECTION</span>
              <p className="container-desc">{product.description}</p>
              <div className="container-footer">
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openCart && (
        <Cart
          cart={cart}
          total={calculateTotalPrice()}
          onRemove={removeFromCart}
          onClose={() => setOpenCart(false)}
          onClear={clearCart}
        />
      )}
    </div>
  );
}
