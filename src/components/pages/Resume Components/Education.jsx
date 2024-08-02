import EducationCard from "./EducationCard";

function Education() {
  return (
    <>
      <section>
        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
        {/* <!-- Education Card 1--> */}
        <EducationCard
          startYear={2017}
          endYear={2019}
          school="Barnett College"
          location="Fairfield, NY"
          degree="Master's"
          field="Web Development"
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />
        {/* <!-- Education Card 2--> */}
        <EducationCard
          startYear={2017}
          endYear={2019}
          school="ULA"
          location="Los Angeles, CA"
          degree="Undergraduate"
          field="Computer Science"
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />
      </section>
    </>
  );
}

export default Education;
