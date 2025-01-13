import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate fields before submitting
    if (!email || !password || !username) {
      setMessage("All fields are required!");
      return;
    }

    const data = {
      email,
      username,
      password,
    };

    // Simulate form submission
    console.log(data);

    // Reset fields and message
    setMessage("");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5 max-w-sm mx-auto pt-5"
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Full Name"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
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
            <Link to="/login"> Register </Link>
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Already have an account?
          <Link to="/login" className="text-red-700 px-1 underline">
            Log in
          </Link>
          here.
        </p>
      </div>
    </section>
  );
}

export default Register;
