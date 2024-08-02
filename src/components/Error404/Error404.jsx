import PageTitle from "../shared/PageTitle";

function Error404() {
  return (
    <>
      <section className="bg-light vh-75 ">
        <div className="container  p-5 d-flex flex-column align-items-center justify-content-center h-100">
          <PageTitle title="Error 404!" />
          <p className="text-center fs-4 fw-bold">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            the page you requested doesn't exist.
          </p>
        </div>
      </section>
    </>
  );
}

export default Error404;
