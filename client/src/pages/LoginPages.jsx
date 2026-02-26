import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-xl shadow-2xl border border-zinc-700">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>

        {signinErrors.map((error, i) => (
          <div
            className="bg-red-500/10 border border-red-500 p-2 text-red-500 text-center rounded-md mb-4"
            key={i}
          >
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-sm mb-1">Email Address</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-zinc-600"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-zinc-600"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 mt-6"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline font-semibold">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPages;
