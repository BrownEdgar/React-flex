import { useEffect, useState } from 'react'

import "./App.scss"

export default function App() {
  const [data, ] = useState(
    [
      {
        id: 1,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12,800',
        brand: "nike"
      },
      {
        id: 4,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12,800',
        brand: "nike"
      },
      {
        id: 2,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12,800',
        brand: "nike"
      },
      {
        id: 3,
        image: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
        title: 'Jordan Proto-Lyte',
        description: 'Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides breathable support. Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.',
        price: '12,800',
        brand: "nike"
      },
    ]
  )

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify([]))
    return () => {
      localStorage.removeItem("products")
    }
  }, [])


  const addToCard = (id) => {
    const products = JSON.parse(localStorage.getItem('products'));
    const loacaleProduct = products.find(product => product.id === id);
    if (loacaleProduct) {
      loacaleProduct.count += 1;
    } else {
      const p = { ...data.find(product => product.id === id) };
      p.count = 1
      products.push(p)
    }
    localStorage.setItem('products', JSON.stringify(products))

  }

  return (
    <div className='container'>
      <h1>Our products</h1>
      <div className="container-grid">
        {
          data.map(product => {
            return (
              <div className="container-block" key={product.id}>
                <div className="container-Left">
                  <span>{product.brand}</span>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="container-Right">
                  <h3>{product.title}</h3>
                  <span>RUNNING COLLECTION</span>
                  <p className='container-desc'>
                    {product.description}
                  </p>
                  <div className="container-Footer">
                    <p>{product.price}</p>
                    <button onClick={() => addToCard(product.id)}>add to card</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

