import React, { useState } from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product/Product";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export type CartProductsType = {
  id: number;
  image: string;
  title: string;
  amount: number;
  quantity: number;
};

const App = () => {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "product1",
      amount: 100,
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
      title: "product2",
      amount: 200,
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      title: "product3",
      amount: 300,
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300",
      title: "product4",
      amount: 400,
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
      title: "product5",
      amount: 500,
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300",
      title: "product6",
      amount: 600,
    },
    {
      id: 7,
      image: "https://picsum.photos/200/300",
      title: "product7",
      amount: 700,
    },
    {
      id: 8,
      image: "https://picsum.photos/200/300",
      title: "product8",
      amount: 800,
    },
    {
      id: 9,
      image: "https://picsum.photos/200/300",
      title: "product9",
      amount: 900,
    },
    {
      id: 10,
      image: "https://picsum.photos/200/300",
      title: "product10",
      amount: 1000,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const [cartProducts, setCartProducts] = useState([] as CartProductsType[]);

  const addToCart = (addedProduct: CartProductsType) => {
    setCartProducts((prev) => {
      const checkproductInCart = prev.find(
        (prod) => prod.id === addedProduct.id
      );

      if (checkproductInCart) {
        return prev.map((prod) =>
          prod.id === addedProduct.id
            ? { ...prod, amount: prod.amount + 1 }
            : prod
        );
      }
      return [...prev, { ...addedProduct, amount: 1 }];
    });
  };
  console.log(cartProducts);

  const getTotalProducts = (products: CartProductsType[]) =>
    products.reduce((tot: number, product) => tot + product.amount, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="cart">
          <Badge badgeContent={getTotalProducts(cartProducts)} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </div>
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <div key={product.id}>
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            </div>
          ))}
        </Carousel>
      </header>
    </div>
  );
};

export default App;
