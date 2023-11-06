import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { state } = useAuthContext();
  return (
    <nav className="borderm border-b mb-5 bg-gray-50">
      <div className=" p-5 flex justify-between">
        <h1>Nav</h1>
        {state.user ? (
          state.user.email
        ) : (
          <Link
            to="/login"
            className="px-5 py-2 bg-blue-500 rounded text-white"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
