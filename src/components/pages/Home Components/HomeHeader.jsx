import { Link } from "react-router-dom";
import DotsSVG from "./DotsSVG";

/* eslint-disable react/no-unknown-property */
function HomeHeader() {
  return (
    <>
      <header className="py-5">
        <div className="container pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* <!-- Header text content--> */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">
                    Design &middot; Development &middot; Marketing
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business to
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get online and grow fast
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    to="/resume"
                  >
                    Resume
                  </Link>
                  <Link
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* <!-- Header profile picture--> */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img
                    className="profile-img"
                    src="./src/assets/profile.png"
                    alt="Personal Image"
                  />
                  <div className="dots-1">
                    <DotsSVG />
                  </div>
                  <div className="dots-2">
                    <DotsSVG />
                  </div>
                  <div className="dots-3">
                    <DotsSVG />
                  </div>
                  <div className="dots-4">
                    <DotsSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
