import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    // <section className="error-page section">
    //   {/* <div className="error-container">
    //     <h1>Opps ! it's a dead end</h1>
    //     <Link to="/" className="btn btn-primary">back to home</Link>
    //   </div> */}

    // </section>
    <section className="error-page section">
      <div className="error-container">
        <div class="error">404</div>
        <br />
        <br />
        <span class="info">Opps ! it's a dead end</span>
        <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          class="static"
        />
        <Link to="/" className="btn btn-primary" style={{marginBottom:'230px'}}>
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
