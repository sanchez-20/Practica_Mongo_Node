import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-800 my-3 flex justify-between py-5 px-10 rounded-lg shadow-xl border border-zinc-700">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold tracking-tight hover:text-indigo-400 transition-colors">
          Tasks Manager
        </h1>
      </Link>
      <ul className="flex items-center gap-x-6">
        {isAuthenticated ? (
          <>
            <li className="text-zinc-400 font-medium">
              Welcome, <span className="text-white">{user.username}</span>
            </li>
            <li>
              <Link
                to="/tasks/new"
                className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-all font-semibold"
              >
                Add Task
              </Link>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="text-zinc-400 hover:text-red-400 transition-colors font-semibold"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="text-zinc-400 hover:text-white transition-colors font-semibold"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-indigo-500/20"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
