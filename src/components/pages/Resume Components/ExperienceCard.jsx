import PropTypes from "prop-types";

function ExperienceCard({
  startYear,
  endYear,
  position,
  company,
  location,
  desc,
}) {
  return (
    <>
      <div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
          <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
              <div className="bg-light p-4 rounded-4">
                <div className="text-primary fw-bolder mb-2">
                  {startYear} - {endYear}
                </div>
                <div className="small fw-bolder">{position}</div>
                <div className="small text-muted">{company}</div>
                <div className="small text-muted">{location}</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div>{desc}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ExperienceCard.propTypes = {
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default ExperienceCard;
