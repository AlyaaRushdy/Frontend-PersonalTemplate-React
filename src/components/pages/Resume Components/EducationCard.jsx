import PropTypes from "prop-types";

function EducationCard({
  startYear,
  endYear,
  school,
  location,
  degree,
  field,
  desc,
}) {
  return (
    <>
      <div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
          <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
              <div className="bg-light p-4 rounded-4">
                <div className="text-secondary fw-bolder mb-2">
                  {startYear} - {endYear}
                </div>
                <div className="mb-2">
                  <div className="small fw-bolder">{school}</div>
                  <div className="small text-muted">{location}</div>
                </div>
                <div className="fst-italic">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <div className="small text-muted">{degree}</div>
                  <div className="small text-muted">{field}</div>
                </div>
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

EducationCard.propTypes = {
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  degree: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default EducationCard;
