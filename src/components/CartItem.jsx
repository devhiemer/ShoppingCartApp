
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex border-b-2 border-gray-400">

      <div className="flex  mt-8 mb-8 space-x-8 ">

        <div className="h-48 w-[25%]">
          <img src={item.image} className="h-full w-full" />
        </div>
        <div className="w-[65%]">
          <h1  className="text-gray-700 font-semibold text-lg  mt-1">{item.title}</h1>
          <p className="text-lg pt-4">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          <div className="pt-4 flex justify-between">
            <p className="text-green-600 font-bold">${item.price}</p>
            <div
            onClick={removeFromCart} >
              <FcDeleteDatabase size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
