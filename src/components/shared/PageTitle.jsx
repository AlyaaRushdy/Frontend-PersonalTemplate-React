import PropTypes from "prop-types";

function PageTitle({ title }) {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">{title}</span>
        </h1>
      </div>
    </>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
