import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rampurhat One</h1>
      <p>Your local superapp</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/signup-customer"><button>Create account as Customer</button></Link>
        <br /><br />
        <Link to="/signup-merchant"><button>Create account as Merchant</button></Link>
        <br /><br />
        <Link to="/login"><button>Already a user? Login</button></Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
