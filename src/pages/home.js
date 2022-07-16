import { useQuery, gql } from '@apollo/client';

function Home() {
  const records = {
    index: 1,
    sentence: "aaa",
    translated: "bbb",
    source: "ccc",
    uploaded: "ddd",
  };

  const GET_RECORDS = gql`
    {
      showAllRecords {
        records {
          index
          sentence
          translated
          source
          uploaded
        }
      }
    }
  `

  const result = useQuery(GET_RECORDS);
  console.log(result);

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
            <div><h4><a href={`/records/${records.index}/edit`}>{records.index}</a></h4></div>
            <div><h4>{records.sentence}</h4></div>
            <div><h4>{records.translated}</h4></div>
            <div><h4>{records.source}</h4></div>
            <div><h4>{records.uploaded}</h4></div>          
          </>
        ) : (
          <div><h4>No Value yet</h4></div>
        )}
      </div>
    </div>
  );
}

export default Home;
