import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const user = await axios.post(`http://localhost:4000/login`, { email, password });
    console.log(user);
  };

  return (
    <>
      <form onSubmit={login}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
