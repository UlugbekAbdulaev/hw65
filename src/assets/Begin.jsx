import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await axios.get("https://dummyjson.com/products");
        setProducts(productsResponse.data.products);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product+categories`}>
            <div className="border p-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300  hover:bg-blue-500">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold text-green-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;

