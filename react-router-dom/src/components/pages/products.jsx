import { Link, Outlet } from "react-router-dom";

function products() {
  return (
    <div className="flex w-fit flex-col items-center mx-auto gap-6 text-xl text-white mt-5 grow ">
      <div className="flex gap-8">
        <Link to="/products/menscollection">Men's</Link>
        <Link to="/products/womenscollection">Women's</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default products;
