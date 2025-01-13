import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../Redux/Store";
import { clearCart } from "../../../Redux/features/cart/CartSlice";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cart.products);
  const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector(
    (store) => store.cart
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-primary-light mt-5 rounded text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-xl text-text-dark">Order Summery</h2>
        <p className="text-text-dark mt-2">selectedItems: {selectedItems}</p>
        <p>totalPrice: ${totalPrice.toFixed(2)}</p>
        <p>
          Tax ({taxRate * 100}%): ${tax.toFixed(2)}
        </p>
        <p className="font-bold">GrandTotal: ${grandTotal.toFixed(2)}</p>
        <div className="px-4 mb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
          >
            Clear cart
          </button>
          <button className="bg-green-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
