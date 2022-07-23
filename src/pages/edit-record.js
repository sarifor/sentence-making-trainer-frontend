import { useParams, useNavigate } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

function Edit() {
  let navigate = useNavigate();

  // Get parameter
  const params = useParams();
  const index = parseInt(params.index);

  // Use DB
  const GET_RECORD = gql`
    query GetRecord($index: Float!) {
      getRecord(index: $index) {
        record {
          index
          sentence
          translated
          source
          uploaded
        }
      }
    }
  `
  
  const record = useQuery(GET_RECORD, {
    variables: { index: index },
  });
  console.log(record);

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

      {record ? (
        <div className="form">
          <form method="POST" enctype="application/x-www-form-urlencoded">
            <div className="form__input">
              <label>Sentence:</label>
              <input name="sentence" type="text" value={record.sentence} />

              <label>Translated:</label>
              <input name="translated" type="text" value={record.translated} />

              <label>Source:</label>
              <input name="source" type="text" value={record.source} />

              <label>Uploaded:</label>
              <span name="uploaded" type="text">{record.uploaded}</span>
            </div>

            <div className="form__buttons">
              <input className="btn" value="Update" onClick={() => {
                // editRecord(record);
                navigate("/records");                
              }} />
              <input className="btn" value="Delete" onClick={() => {
                // deleteRecord(record.index);
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
