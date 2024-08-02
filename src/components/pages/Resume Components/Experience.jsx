import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <>
      <section>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0">Experience</h2>
          <Link className="btn btn-primary px-3 py-2" to="#!">
            <div className="d-inline-block bi bi-download me-2"></div>
            Download Resume
          </Link>
        </div>
        {/* <!-- Experience Card 1--> */}
        <ExperienceCard
          startYear={2019}
          endYear={"present"}
          company={"Stark Industries"}
          position={"Web Developer"}
          location={"Los Angeles, CA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />
        {/* <!-- Experience Card 2--> */}
        <ExperienceCard
          startYear={2017}
          endYear={2019}
          company={"SEM Specialist"}
          position={"Wayne Enterprisesr"}
          location={"Gotham City, NY"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />
      </section>
    </>
  );
}

export default Experience;
