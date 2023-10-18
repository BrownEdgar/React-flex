import { useEffect, useState } from "react"
import "./Card.scss"

export default function Card() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")))
  }, [])
  
  const total = () => {
    return data.reduce((acc, currentValue) => {
      const count = currentValue.count;
      const price = +currentValue.price.replace(/,/g, "")
      return acc + (count * price)
    }, 0)
  }

  const countMinus =(id) =>{
    const currentProduct = data.find(product => product.id === id)
    currentProduct.count > 1 ? currentProduct.count -= 1 : currentProduct.count = 1
    localStorage.setItem("products", JSON.stringify(data));
    setData(JSON.parse(localStorage.getItem("products")))
  }

  const countPlus =(id) =>{
    const currentProduct = data.find(product => product.id === id)
    currentProduct.count += 1
    localStorage.setItem("products", JSON.stringify(data));
    setData(JSON.parse(localStorage.getItem("products")))
  }

  return (
    <div className="Card">
      <div className="Card-product">
        {
          data.map(product => {
            return (
              <div key ={product.id} className="Card-item">
                <img src={product.image} alt={product.title} />
                <div className="Card-info">
                  <h3>{product.title}</h3>
                  <span onClick={() => countMinus(product.id)} className="minus">-</span>
                  <span>Count: {product.count}</span>
                  <span onClick={() => countPlus(product.id)} className="plus">+</span>
                  <span>Price: {product.price}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      {data.length > 0 
      ? 
      <div className="Card-total">
        <h3>Total: </h3>
        <span>{total()}</span>
      </div>
      : null}
    </div>
  )
}
