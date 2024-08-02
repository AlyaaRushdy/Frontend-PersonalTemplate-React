import PropTypes from "prop-types";

function Skill({ name }) {
  return (
    <>
      <div className="col">
        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
          {name}
        </div>
      </div>
    </>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skill;
