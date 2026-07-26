import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogin = () => {

    if(email.trim() === "admin@gmail.com" && password.trim() === "admin123")    {

      login();

      navigate("/");

    } 
    else {

      alert("Invalid Email or Password");

    }

  };


  return (
    <div>

      <h1>🔐 Employee Portal Login</h1>


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>


      <button onClick={handleLogin}>
        Login
      </button>


      <p>
        Demo Account:
        <br/>
        Email: admin@gmail.com
        <br/>
        Password: admin123
      </p>


    </div>
  );
}

export default Login;