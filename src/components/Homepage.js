import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="protrude-home">
        <h1>Well hello there!</h1>
        <h4>New to Protrude?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h4>YOU MADE IT!</h4>
    </div>
  );
};

export default Homepage;
