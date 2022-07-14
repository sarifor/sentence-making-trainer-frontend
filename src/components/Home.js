function Home() {
  const records = "temporary value";

  return (
    <div className="Home">
      <div className="table__top">
        <h1 className="table__top__title">
          List
        </h1>
        <a className="btn" href="/records/upload">
          Upload
        </a>
      </div>

      <div className="table">
        <div><h4>No.</h4></div>
        <div><h4>Sentence</h4></div>
        <div><h4>Translated</h4></div>
        <div><h4>Source</h4></div>
        <div><h4>Uploaded</h4></div>

        {records ? (
          <>
            <div><h4>value</h4></div>
            <div><h4>value</h4></div>
            <div><h4>value</h4></div>
            <div><h4>value</h4></div>
            <div><h4>value</h4></div>          
          </>
        ) : (
          <div><h4>No Value yet</h4></div>
        )}
      </div>
    </div>
  );
}

export default Home;
