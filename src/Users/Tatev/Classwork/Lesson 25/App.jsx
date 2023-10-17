import { useState } from "react"
import "./App.scss"
import { useEffect } from "react"


// export default function App() {
//   // const saveToStorage = () => {
//   //   const products = [
//   //     {
//   //       id: 1, title: "Samsung", price: 4300, currensy: "usd"
//   //     }
//   //   ]
//   //   localStorage.setItem("prdocuts", JSON.stringify(products))
//   // }

//   const [data, setData] = useState(
//     JSON.parse(localStorage.getItem("prdocuts" || "[]"))
//   )



//   return (
//     <div>
//       <pre>
//         {JSON.stringify(data, null, 1)}
//       </pre>
//       {/* <button onClick={saveToStorage}>Add to storage</button> */}
//     </div>
//   )
// }



export default function App() {
  const [data, setData] = useState(
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
    localStorage.setItem("products", JSON.stringify([]))
  
    return () => {
      localStorage.removeItem("products")
    }
  }, [])
  

  const addToCard =(id) => {
    const products = JSON.parse(localStorage.getItem("products"))
    const localProduct = products.find(product => product.id === id)
    if(localProduct){
      localProduct.count += 1
    }else{
      const p = {...data.find(product => product.id === id)}
      p.count = 1
      products.push(p)
    }
    localStorage.setItem("products", JSON.stringify(products))
  }

  return (
    <div className="container">
      <h1>Our products</h1>
      <div className="container-grid">
        {
          data.map(product => {
            return (
              <div key={product.id} className="container-block">
                <div className="container-Left">
                  <span>{product.brand}</span>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="container-Right">
                  <h3>{product.title}</h3>
                  <span>RUNNING COLLECTION</span>
                  <p className="container-desc">
                    {product.description}
                  </p>
                  <div className="container-footer">
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
