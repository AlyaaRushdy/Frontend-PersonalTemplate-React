import Skill from "./Skill";
import SkillsHeader from "./SkillsHeader";

function Skills() {
  return (
    <>
      <section>
        <div className="card shadow border-0 rounded-4 mb-5">
          <div className="card-body p-5">
            {/* <!-- Professional skills list--> */}
            <div className="mb-5">
              <SkillsHeader icon="bi-tools" title="Professional Skills" />
              <div className="row row-cols-1 row-cols-md-3 row-gap-4">
                <Skill name={"SEO/SEM Marketing"} />
                <Skill name={"Statistical Analysis"} />
                <Skill name={"Web Development"} />
                <Skill name={"Network Security"} />
                <Skill name={"Adobe Software Suite"} />
                <Skill name={"User Interface Design"} />
              </div>
            </div>
            {/* <!-- Languages list--> */}
            <div className="mb-0">
              <SkillsHeader icon="bi-code-slash" title="Languages" />
              <div className="row row-cols-1 row-cols-md-3 mb-4 row-gap-4">
                <Skill name={"HTML"} />
                <Skill name={"CSS"} />
                <Skill name={"JavaScript"} />
                <Skill name={"Python"} />
                <Skill name={"Ruby"} />
                <Skill name={"Node.js"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
