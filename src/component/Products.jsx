import { useEffect, useState } from "react";
import { useProduct } from "../context/CartProvider";
import { useNavigate } from "react-router";
import { getUser } from "../helper/hooks/getUser";
import { useDispatch, useSelector } from "react-redux";
import { customIncrement, increment } from "../redux-toolkit/countSlice";

const Products = () => {
  const dispatch= useDispatch()
  const dataCount= useSelector(state=>state)
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()
  const allProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    allProducts();
  }, []);

// extract unique catagories
  const categories = [...new Set(products.map((item) => item.category))];


  // const {dispatch} = useProduct()
  const user =getUser()
  const handleAddToCart = (product) =>{
   
    console.log({user})
    if(!user?.username)navigate('/auth/login')
    dispatch(customIncrement(5))
  console.log({dataCount})
    // dispatch({type:"Add_To_Cart", payload: product})
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold py-6 uppercase">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products
                .filter((item) => item.category === category)
                .map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <img
                      src={product.image}
                      alt="ecommerce"
                      className="object-cover object-center w-48 h-48 mb-4 mx-auto"
                    />
                    <h3 className="text-gray-900 text-lg font-medium mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 mb-2">${Math.floor(product.price)}</p>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
