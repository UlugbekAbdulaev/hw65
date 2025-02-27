import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [product , setProduct] = useState(null);

  const ProductDetail = async () => {
   
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      setProduct(response.data);
    
  };

  useEffect(() => {
    ProductDetail();
  }, []);

  return (
    
    <div key={product?.id} className="container mx-auto shadow-2xl p-10">
      
      
  
      <h2 className="font-extrabold">Brend : {product?.brand}</h2>
      <p className="text-gray-600">{product?.description}</p>


      <img className="w-[400px]" src={product?.images[0]} alt={product?.brand} />
      <h3 className="text-green-400 font-bold text-3xl">Price: ${product?.price}</h3>
      <h3 className="text-fuchsia-600 font-bold">Rating: {product?.rating}/5</h3>
      

      <button>Add to Cart</button>
      <button>Back to Home</button>
    </div>
  );
}

export default Detail;
