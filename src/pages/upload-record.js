import { useNavigate } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';

function Upload() {
  let navigate = useNavigate();

  const UPLOAD_RECORD = gql`
    mutation uploadRecord($record: UploadRecordDtoInput!) {
      uploadRecord(record: $record) {
        ok
      }
    }
  `

  const [uploadRecord] = useMutation(UPLOAD_RECORD);

  const handleClick = () => {
    const sentence = document.getElementById("sentence");
    const source = document.getElementById("source");    

    uploadRecord({ 
      variables: { 
        record: { 
          sentence: sentence.value,
          source: source.value,
        }
      }
    });
    navigate("/records");
  };

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
        <form method="POST" enctype="application/x-www-form-urlencoded" onSubmit={e => {
          e.preventDefault();
        }}>
          <div className="form__input">
            <label>Sentence</label>
            <input name="sentence" id="sentence" type="text" />
            <label>Source:</label>
            <input name="source" id="source" type="text" />
          </div>

          <div className="form__buttons">
            <input className="btn" value="Upload" onClick={() => handleClick()} />
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
