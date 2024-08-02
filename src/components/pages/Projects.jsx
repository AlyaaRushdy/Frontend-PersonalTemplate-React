import PageTitle from "../shared/PageTitle";
import CallToAction from "./Projects Components/CallToAction";
import ProjectCard from "./Projects Components/ProjectCard";

function Projects() {
  return (
    <>
      <section className="bg-light ">
        <div className="container py-5">
          <PageTitle title={"Projects"} />
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <ProjectCard
                name={"first project"}
                imgSrc={"https://dummyimage.com/300x400/343a40/6c757d"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!"
                }
              />
              <ProjectCard
                name={"second project"}
                imgSrc={"https://dummyimage.com/300x400/343a40/6c757d"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!"
                }
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default Projects;
