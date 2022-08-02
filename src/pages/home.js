import { useQuery, gql } from '@apollo/client';

function Home() {
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

  const { loading, error, data } = useQuery(GET_RECORDS);

  if (loading) {
    return <p>Loading ...</p>;
  } else {
    if (error) return <p>${error.message}</p>

    const records = data.showAllRecords.records;

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
            records.map((record) => 
              <>
                <div><h4><a href={`/records/${records.index}/edit`}>{record.index}</a></h4></div>
                <div><h4>{record.sentence}</h4></div>
                <div><h4>{record.translated}</h4></div>
                <div><h4>{record.source}</h4></div>
                <div><h4>{record.uploaded}</h4></div>          
              </>
            )
          ) : (
            <div><h4>No Value yet</h4></div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
