import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="" >
  {
    cart.length > 0  ? 
    (
    <div className="flex  mx-auto max-w-6xl p-4 gap-6  ">


      <div className="w-[60%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between pt-16">

        <div >
          <div className="text-green-700 font-bold">Your Cart</div>
          <div className="text-green-700 font-semibold uppercase text-4xl">Summary</div>
          <p className="mt-8 font-semibold">
            <span className="text-gray-700">Total Items: </span> {cart.length}
          </p>
        </div>

        <div>
          <p className="font-bold "><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
          <button className="bg-green-700 text-white text-center p-3 rounded-lg pl-12 pr-12">
            CheckOut Now
          </button>
        </div>

      </div>


         </div>) : 
    (
    <div className="mx-auto max-w-6xl h-full flex  justify-center items-center pt-72">

   
    <div>
      <h1 className="text-gray-700 font-semibold ">Your Cart is Empty !</h1>
      <Link to={"/"}>
        <button className="bg-green-700 mt-4 p-2 pl-7 pr-7 rounded-lg text-white font-semibold uppercase">
          Shop Now
        </button>
      </Link>
    </div>
    </div>)
  }
    </div>
  );
};

export default Cart;
