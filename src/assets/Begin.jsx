import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1); 
  const limit = 20; 

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page = 1) => {
    try {
      const skip = (page - 1) * limit; 
      const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      
      setProducts(response.data.products);
      setTotal(response.data.total); 
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  const searchProducts = async (search) => {
    if (search.length > 3) {
      const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      setProducts(res.data?.products);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>

 
      <div className="flex gap-1">
        <input
          onChange={(val) => searchProducts(val.target.value)}
          className="border py-1 px-3 my-2"
          type="text"
          placeholder="Mahsulot qidirish..."
        />
      </div>

   
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product+categories`}>
            <div className="border p-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-blue-500">
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

      
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(total / limit) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`border py-1 px-2 mx-1 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
