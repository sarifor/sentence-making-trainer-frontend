function Edit() {
  const records = {
    index: 1,
    sentence: "aaa",
    translated: "bbb",
    source: "ccc",
    uploaded: "ddd",
  }

  return (
    <div className="Edit">
      <div className="table__top">
        <h1 className="table__top__title">
          Edit
        </h1>
        <a className="btn" href="/records">
          List
        </a>
      </div>

      {records ? (
        <div className="form">
          <form method="POST" enctype="application/x-www-form-urlencoded">
            <div className="form__input">
              <label>Sentence:</label>
              <input name="sentence" type="text" value={records.sentence} />

              <label>Translated:</label>
              <input name="translated" type="text" value={records.translated} />

              <label>Source:</label>
              <input name="source" type="text" value={records.source} />

              <label>Uploaded:</label>
              <span name="uploaded" type="text">{records.uploaded}</span>
            </div>

            <div className="form__buttons">
              <input className="btn" type="submit" value="Update" />
              <a className="btn" href={`/records/${records.index}/delete`}>Delete</a>
            </div>
          </form>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default Edit;
