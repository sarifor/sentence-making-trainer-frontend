import { useNavigate } from "react-router-dom";
import { deleteRecord, editRecord } from "../data";

function Edit() {
  const records = {
    index: 1,
    sentence: "aaa",
    translated: "bbb",
    source: "ccc",
    uploaded: "ddd",
  }

  let navigate = useNavigate();

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
              <input className="btn" value="Update" onClick={() => {
                editRecord(records);
                navigate("/records");                
              }} />
              <input className="btn" value="Delete" onClick={() => {
                deleteRecord(records.index);
                navigate("/records");
              }} />
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
