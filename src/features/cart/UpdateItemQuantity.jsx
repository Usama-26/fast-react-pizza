import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-2 md:gap-2">
      <Button onClick={handleDecreaseQuantity} type={"round"}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={handleIncreaseQuantity} type={"round"}>
        +
      </Button>
    </div>
  );
}
