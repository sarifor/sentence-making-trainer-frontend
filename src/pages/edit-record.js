import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';

function Edit() {
  let navigate = useNavigate();

  // Get parameter
  const params = useParams();
  const index = parseInt(params.index);

  // GQL
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
  /* const EDIT_RECORD = gql`
    mutation editRecord($editedRecord: EditRecordDtoInput!) {
      editRecord(editedRecord: $editedRecord) {
        error
        ok
      }
    }
  `*/
  const DELETE_RECORD = gql`
    mutation deleteRecord($index: Float!) {
      deleteRecord(index: $index) {
        ok
      }
    }
  `

  // Access DB
  const { loading, error, data } = useQuery(GET_RECORD, {
    variables: { index: index },
  });

  // const [editRecord] = useMutation(EDIT_RECORD);

  const [deleteRecord] = useMutation(DELETE_RECORD);

  // useForm
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  // Rendering
  if (loading) {
    return <p>Loading ...</p>;
  } else {
    if (error) return <p>${error.message}</p>

    const record = data.getRecord.record;

    /* const handleEditClick = () => {
      editRecord({ 
        variables: { 
          editedRecord: {
            index: index,
            sentence: "test",
            translated: "test2",
            source: "test3",
          }
        }
      });      
      navigate("/records");
    } */

    const handleClick = () => {
      console.log("method comming")
      deleteRecord({
        variables: {
          index: 37,
        }
      });
      navigate("/records");
    };

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
  
        <div className="form">
          <form method="POST" enctype="application/x-www-form-urlencoded" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input">
              <label>Sentence:</label>
              <input name="sentence" type="text" defaultValue={record.sentence} {...register("sentence")} />

              <label>Translated:</label>
              <input name="translated" type="text" defaultValue={record.translated} {...register("translated")} />

              <label>Source:</label>
              <input name="source" type="text" defaultValue={record.source} {...register("source")}/>

              <label>Uploaded:</label>
              <span name="uploaded" type="text">{record.uploaded}</span>
            </div>

            <div className="form__buttons">
              <input type="submit" className="btn" value="Edit" />
            </div>

            <div className="form__buttons">         
              <input className="btn" value="Delete" onClick={() => handleClick()} />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Edit;
