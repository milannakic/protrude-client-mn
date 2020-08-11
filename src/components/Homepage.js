import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="protrude-home">
      <h1>Well hello there!</h1>
      <h4>New to Protrude?</h4>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </div>
  );
};

export default Homepage;
