import PropTypes from "prop-types";

function ProjectCard({ name, desc, imgSrc }) {
  return (
    <>
      <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
          <div className="d-flex align-items-center flex-wrap-reverse">
            <div className="p-5 col-12 col-md-7">
              <h2 className="fw-bolder">{name}</h2>
              <p>{desc}</p>
            </div>
            <img
              className="img-fluid col-12 col-md-5"
              src={imgSrc}
              alt={`${name} image`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default ProjectCard;
