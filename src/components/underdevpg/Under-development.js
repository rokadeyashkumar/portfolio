import React from "react";
import "./underdevelopment.scss";

const Underdevelopment = ({ pageTitle }) => {
  return (
    <div className="under-development">
      <div className="icon">🚧</div>
      <h1>{pageTitle} Page</h1>
      <p>
        We’re working hard to bring you amazing content for this section. It’s currently under
        development and will be available soon.
      </p>
      <p className="note">Stay tuned — exciting updates are on the way!</p>
    </div>
  );
};

export default Underdevelopment;
