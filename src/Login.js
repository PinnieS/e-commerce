import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      if (email && password) {
        setIsLogin(true);
      } else {
        alert("Please enter a username and password.");
      }
    }
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">LOGIN</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button type="button" className="btn btn-dark btn-lg" onClick={handleLogin}>
                    {isLogin ? "Logout" : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
