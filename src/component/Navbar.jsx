import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-transparent bg-clip-text bg-linear-to-l from-red-500 to-blue-600 text-xl font-bold sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPING CART
            </h1>
          </div>
        </Link>
       <ul className="flex list-none items-center font-bold space-x-10">
        <Link to={"/"}>
          <li className="text-3xl text-blue-600 hover:text-transparent bg-clip-text bg-linear-to-l from-red-500 to-blue-600">Home</li>
        </Link>
         <Link to={"/cart"}>
          <li><FaCartArrowDown size={40}  className="text-blue-600 hover:text-blue-800" /></li>
        </Link>

       </ul>
        
      </nav>
    </div>
  );
};

export default Navbar;
