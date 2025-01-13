import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required!");
      return;
    }

    const data = {
      email,
      password,
    };

    // Simulate login (add your API call or logic here)
    console.log(data);

    // Navigate to the home page and show alert
    alert("Login successfully");
    navigate("/");
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="space-y-5 max-w-sm mx-auto pt-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />

          {message && <p className="text-red-500">{message}</p>}

          <button
            type="submit"
            className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded"
          >
            Login
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-700 px-1 underline">
            Register
          </Link>
          here.
        </p>
      </div>
    </section>
  );
}

export default Login;
