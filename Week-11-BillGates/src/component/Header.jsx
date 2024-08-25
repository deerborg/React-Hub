import { useState } from "react";
import product from "../product";

function Header() {
  const [billion, setBillion] = useState(100000000000);
  const [prod, setProd] = useState(product);
  function handleClick(cost, productId) {
    if (billion > cost) {
      setBillion(billion - cost);
    }
  }
  return (
    <>
      <div className="total-money">
        <h1>{billion}$</h1>
      </div>

      <div className="content">
        {product.map((pr) => {
          return (
            <>
              <div className="items">
                <div className="product">{pr.product}</div>
                <div className="cost">{pr.cost}$</div>
                <div className="btn">
                  <button className="sell">Sell</button>
                  <h3 className="count">{pr.count}</h3>
                  <button
                    onClick={() => handleClick(pr.cost, pr.id)}
                    className="buy"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Header;
