import product from "../product";

function Content() {
  return (
    <>
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
                  <button id="btn" className="buy">
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
export default Content;
