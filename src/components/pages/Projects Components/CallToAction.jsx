import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's build something together
            </h2>
            <Link
              className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              to="/contact"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
