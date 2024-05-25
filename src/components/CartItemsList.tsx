import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import {
  FirstColumn,
  FourthColumn,
  SecondColumn,
  ThirdColumn,
} from "./CartItemsColumns";

function CartItemsList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const {
          cartID,
          title,
          price,
          image,
          amount,
          company,
          productColor,
          productID,
        } = cartItem;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-x-4 sm:flex-row flex-wrap p-6 mb-8"
          >
            <FirstColumn image={image} title={title} productID={productID} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
