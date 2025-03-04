import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartList } from "./Context/Cartlist";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const {cartList, setCartList} = useContext(CartList)

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const productsResponse = await axios.get("https://dummyjson.com/products " );
        setProducts(productsResponse.data.products);
        setFilteredProducts(productsResponse.data.products);
        
        
        const categoriesResponse = await axios.get("https://dummyjson.com/products/categories"  );


        const categoryList = Array.isArray(categoriesResponse.data)
          ? categoriesResponse.data.map(cat => (typeof cat === "object" ? cat.name || cat.slug : cat))
          : [];

        setCategories(categoryList);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchProducts();
  }, []);

  const filterByCategory = async (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}` );
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Kategoriya bo'yicha filterda xatolik:", error);
      }
    }

  };

  const searchProducts = async (search) => {
    if (search.length > 3) {
      const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
      setFilteredProducts(res.data?.products)
    }

  };

  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>

      <div className="flex gap-1">
        <input onChange={(val) => {
          searchProducts(val.target.value)


        }} className="border py-1 px-3 my-2 " type="text" />
        <button onClick={() => { searchProducts() }} className="border py-1 px-3 my-2 rounded-lg bg-blue-500 text-white active:bg-blue-300">Search</button>
      </div>

      <div className=" flex gap-4">

        <div className="w-1/5 bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Kategoriyalar</h3>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg mb-2 ${activeCategory === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => filterByCategory("all")}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-lg mb-2 ${activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 w-4/5 gap-4 ">
          {
            filteredProducts.length > 0 ?
              filteredProducts.map((product) => (

                <div key={product.id} className="border hover:border-none p-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300  hover:bg-blue-500 ">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-xl font-bold text-green-600">${product.price}</p>
                  <Link to={`/Product_detail/${product.id}`} className="font-bold underline text-fuchsia-600">In Detail </Link>
                <button onClick={()=>{
                  let current = [...cartList]
                  current.push(product)
                  setCartList(current)
                }} 
                className="mt-4 ml-2 bg-green-500 text-white px-4 py-2 rounded-lg ">Buy Now</button>
                </div>

              ))
              :
              <div className="text-center text-3xl text-red-600">
                <h3>Mahsulotlar topilmadi!</h3>
              </div>
          }
          
        </div>
        
      </div>



    </div>

    
  );
}

export default Products;
