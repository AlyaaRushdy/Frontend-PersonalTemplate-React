import PageTitle from "../shared/PageTitle";
import Education from "./Resume Components/Education";
import Experience from "./Resume Components/Experience";
import Skills from "./Resume Components/Skills";

function Resume() {
  return (
    <>
      <section className="bg-light ">
        <div className="container py-5">
          <PageTitle title={"Resume"} />
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <Experience />
              <Education />
              {/* <!-- Divider--> */}
              <div className="pb-5"></div>
              {/* <!-- Skills Section--> */}
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
