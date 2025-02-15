import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  My name is Start Bootstrap and I help brands grow.
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit dolorum itaque qui unde quisquam consequatur autem.
                  Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa!
                  Praesentium ratione atque dolorem?
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <Link className="text-gradient" to="#!">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link className="text-gradient" to="#!">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link className="text-gradient" to="#!">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
