import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

export default function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);

  const getCount = () => {
    return data.reduce((acc, currentValue) => {
      const count = currentValue.count;
      const price = +currentValue.price.replace(/,/g, "");
      return acc + count * price;
    }, 0);
  };

  const minusCount = (id) => {
    const product = data.find((product) => product.id === id);
    if (product.count > 1) {
      product.count -= 1;
    } else {
      product.count = 1;
    }

    localStorage.setItem("products", JSON.stringify(data));
    setData(JSON.parse(localStorage.getItem("products")));
  };

  const plusCount = (id) => {
    const product = data.find((product) => product.id === id);
    product.count += 1;
    localStorage.setItem("products", JSON.stringify(data));
    setData(JSON.parse(localStorage.getItem("products")));
  };

  return (
    <div className="Card">
      <h2 className="Card__title">My Shopping Card</h2>
      <div className="Card__items">
        {data.map((product) => {
          return (
            <ul className="Card__products" key={product.id}>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>
                    <p>{product.title}</p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Quantity</h3>
                <ul>
                  <li className="Card__prcount">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="Card__icons"
                      onClick={() => plusCount(product.id)}
                    />
                    <h4>{product.count}</h4>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="Card__icons"
                      onClick={() => minusCount(product.id)}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <h3>Price</h3>
                <ul>
                  <li>
                    <p>Rs. {product.price}</p>
                  </li>
                </ul>
              </li>
            </ul>
          );
        })}
        {data.length > 0 ? (
          <div className="Card__total">
            <h3>Rs. {getCount()} is you total.</h3>
            <button>Checkout</button>
          </div>
        ) : (
          "Your card is empty..."
        )}
      </div>
    </div>
  );
}
