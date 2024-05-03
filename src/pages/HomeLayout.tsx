import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <header>Header</header>
      <nav>Nav</nav>
      <Outlet />
    </>
  );
}
export default HomeLayout;
