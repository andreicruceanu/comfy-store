import { CartItemsList, CartTotals, SectionTitle } from "@/components";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

function Cart() {
  const user = null;
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text="Emty cart" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Button asChild className="mt-8 w-full">
              <Link to="/checkout">Proceed to checkout</Link>
            </Button>
          ) : (
            <Button asChild className="mt-8 w-full">
              <Link to="/login">Plase Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
