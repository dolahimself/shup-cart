import React, { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Product = (props: any) => {
  const { product, addToCart } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="products">
      <div className="products-grid">
        <div className="product">
          <div className="product-img">
            <img src={product.image} alt="" />
            <p className="review">${product.amount}</p>
            <p className="overview">{product.title}</p>
          </div>
          <br />
          <div className="product-cart">
            <ButtonGroup
              key={product.id}
              size="small"
              aria-label="small outlined button group"
            >
              <Button onClick={handleIncrement}>+</Button>
              {counter > 0 ? <Button>{counter}</Button> : <Button>0</Button>}
              {counter > 0 ? (
                <Button onClick={handleDecrement}>-</Button>
              ) : (
                <Button disabled>-</Button>
              )}
            </ButtonGroup>
          </div>
          <br />
          <Button variant="contained" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
