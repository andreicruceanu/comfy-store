import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import {
  HomeLayout,
  Landing,
  Error,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Login,
  Register,
  Products,
  Orders,
} from "./pages";

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <div>
      <h1 className="text-7xl font-bold ">App</h1>;
      <Button variant="destructive" size="lg">
        Click me
      </Button>
      <Cart />
    </div>
  );
}
export default App;
