import { useEffect, useState } from "react";
import "./Shop.scss";

export default function Shop({ setLength }) {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://static.nike.com/a/images/t_default/fc1e70db-709c-473b-aab9-6db028c61861/infinityrn-4-mens-road-running-shoes-wide-4hKwJW.png",
      title: "Infinitryn 4 Black",
      description:
        "Introducing the Nike Infinity Run 4 in sleek black - a perfect blend of style and performance. These running shoes are designed to elevate your running experience with cutting-edge technology.Elevate your running game with the Nike Infinity Run 4 in black, a perfect choice for those who demand both style and performance in their athletic footwear.",
      price: "13,500",
      brand: "nike",
    },
    {
      id: 2,
      image:
        "https://static.nike.com/a/images/t_default/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
      title: "Jordan Proto-Lyte",
      description:
        "The Jordan Proto-Lyte is a distinctive sneaker that's part of the Jordan Brand's lineup. While it's not directly related to your profile as a web developer and car enthusiast, I can still provide some information about these shoes.These sneakers have a modern and futuristic look with a unique combination of materials and textures.",
      price: "12,800",
      brand: "nike",
    },
    {
      id: 3,
      image:
        "https://static.nike.com.hk/resources/product/FJ7071-070/FJ7071-070_M1.png",
      title: "Air Max TW SE",
      description:
        "Elevate your running experience with the Nike Air Max Tailwind SE, a perfect fusion of performance and style.The Air Max Tailwind SE is equipped with Nike's signature Air Max cushioning, ensuring a supremely comfortable and responsive ride. Whether you're going for a jog or spending a day on your feet, these shoes have you covered.The outsole is engineered for long-lasting traction and durability, making these shoes perfect for various terrains.",
      price: "16,100",
      brand: "nike",
    },
    {
      id: 4,
      image:
        "https://static.nike.com/a/images/t_default/8945f05b-e5dd-4d36-b9e6-f979c59bd6d7/pegasus-40-road-running-shoes-HTDVsQ.png",
      title: "Star Runner",
      description:
        "Introducing the Nike Star Runner - the perfect combination of comfort, style, and performance for active kids.The Nike Star Runner is designed with ample cushioning to provide the support and comfort kids need for their active lifestyles. Whether they're running, playing sports, or just having fun, these shoes have them covered.The outsole is crafted for durability and traction, making it suitable for a variety of activities and terrains.",
      price: "9,200",
      brand: "nike",
    },
    {
      id: 5,
      image:
        "https://static.nike.com/a/images/t_default/6ff82326-c9cb-418d-8160-222691507671/air-max-sc-mens-shoes-LR42xg.png",
      title: "Air Max SC",
      description:
        "Step into a world of classic style and modern comfort with the Air Max SC, a versatile shoe that blends heritage design with contemporary technology.Drawing inspiration from the Air Max models of the past, these shoes showcase a retro aesthetic that's perfect for both athletic and casual wear.The Air Max SC features the legendary Air Max cushioning, providing exceptional comfort and impact protection. Whether you're running, walking.",
      price: "11,700",
      brand: "nike",
    },
    {
      id: 6,
      image:
        "https://static.nike.com/a/images/t_default/c31b3ec7-dbb4-4404-b166-d0bcd1a186fd/air-max-excee-shoes-vl97pm.png",
      title: "Air Max Excee",
      description:
        "The Air Max Excee pays homage to the iconic Air Max 90, taking inspiration from its design while adding a fresh and modern touch.These shoes feature Nike's Air Max cushioning technology, offering superior comfort and support with every step.The Air Max Excee is known for its contemporary design, making it a fashionable choice for both athletic and casual wear.Built to last, these sneakers are constructed with high-quality materials and attention to detail.",
      price: "8,900",
      brand: "nike",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify([]));
    setLength(0);
  }, []);

  const addToCart = (id) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const localProduct = products.find((product) => product.id === id);
    if (localProduct) {
      localProduct.count += 1;
    } else {
      const p = { ...data.find((product) => product.id === id) };
      p.count = 1;
      products.push(p);
    }
    localStorage.setItem("products", JSON.stringify(products));
    setLength(JSON.parse(localStorage.getItem("products")).length);
  };

  return (
    <div className="Shop">
      <h2 className="App__title">Our Products</h2>
      <div className="Shop__grid">
        {data.map((product) => {
          return (
            <div className="Shop__block" key={product.id}>
              <div className="Shop__left">
                <span>{product.brand}</span>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="Shop__right">
                <h3>{product.title}</h3>
                <span>RUNNING COLLECTION</span>
                <p className="Shop__description">{product.description}</p>
                <div className="Shop__footer">
                  <p>Rs. {product.price}</p>
                  <button onClick={() => addToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
