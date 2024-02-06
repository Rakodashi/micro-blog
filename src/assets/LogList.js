const LogList = ({ logs, title }) => {

  return ( 
    <div className="log-list">
      <h2>{ title }</h2>
      {logs.map((log) => (
        <div className="log-preview" key={log.id}>
          <h2> {log.title} </h2>
          <h3>Stardate {log.stardate} </h3>
          <h3>Written by {log.author} </h3>
        </div>
      ))}
    </div>
   );
}
 
export default LogList;