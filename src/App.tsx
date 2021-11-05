import React, { useState } from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product/Product";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const App = () => {
  interface Provider {
    id: number;
    image: string;
    title: string;
    amount: number;
    quantity: number;
  }

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

  const [cartProducts, setCartProducts] = useState<Provider>({
    id: 0,
    image: "",
    title: "",
    amount: 0,
    quantity: 0,
  });
  const [total, setTotal] = useState({});

  const sendTotalAddedProductToApp = (index: any) => {
    setTotal(index);
  };
  let number: Array<object>;
  number = [{ id: 0, title: "", amount: 0, quantity: 0 }];
  number.push([total]);
  console.log(number);

  return (
    <div className="App">
      <header className="App-header">
        <div className="cart">
          <Badge badgeContent={number.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </div>
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <div key={product.id}>
              <Product
                key={product.id}
                product={product}
                number={number}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                sendTotalAddedProductToApp={sendTotalAddedProductToApp}
              />
            </div>
          ))}
        </Carousel>
      </header>
    </div>
  );
};

export default App;
