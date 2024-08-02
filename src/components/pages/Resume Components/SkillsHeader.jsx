import PropTypes from "prop-types";

function SkillsHeader({ icon, title }) {
  return (
    <>
      <header className="d-flex align-items-center mb-4 flex-wrap row-gap-3">
        <div className="col-12 col-md-1 ">
          <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3">
            <i className={`bi ${icon}`}></i>
          </div>
        </div>

        <h3 className="fw-bolder mb-0 col-12 col-md-11 ps-md-3 ps-lg-0">
          <span className="text-gradient d-inline">{title}</span>
        </h3>
      </header>
    </>
  );
}
SkillsHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillsHeader;
