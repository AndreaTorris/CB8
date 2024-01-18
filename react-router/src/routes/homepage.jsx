import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.products.filter(
            (product) => product.category === selectedCategory
          )
        )
      );
  }, [selectedCategory]);

  return (
    <div style={style}>
      <div className="navbar">
        <Link to={`/contacts`}>
          <h3>Contacs</h3>
        </Link>
        <Link to={"/about"}>
          <h3>about</h3>
        </Link>
      </div>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory("smartphones")}>
            Smartphone
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedCategory("laptops")}>
            Laptops
          </button>
        </li>
      </ul>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <div className="Product">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
