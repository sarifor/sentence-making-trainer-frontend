import { useNavigate } from "react-router-dom";
import { uploadRecord } from "../data";

function Upload() {
  const tempSentence = "eee";
  const tempSource = "fff";

  let navigate = useNavigate();

  return (
    <div className="Upload">
      <div className="table__top">
        <h1 className="table__top__title">
          Upload
        </h1>
        <a className="btn" href="/records">
          List
        </a>
      </div>

      <div className="form">
        <form method="POST" enctype="application/x-www-form-urlencoded">
          <div className="form__input">
            <label>Sentence</label>
            <input name="sentence" type="text" />
            <label>Source:</label>
            <input name="source" type="text" />
          </div>

          <div className="form__buttons">
            <input className="btn" value="Upload" onClick={() => {
              uploadRecord(tempSentence, tempSource);
              navigate("/records");
            }}/>
            <input className="btn" value="Cancel" onClick={() => {
              navigate("/records");
            }} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
