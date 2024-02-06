import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogList = ({ logs, title }) => {

  return ( 
    <div className="log-list">
      <h2>{ title }</h2>
      {logs.map((log) => (
        <div className="log-preview" key={log.id}>
          <Link to={`/logs/${ log.id }`}>
          <h2> {log.title} </h2>
          <h3>Stardate {log.stardate} </h3>
          <h3>Written by {log.author} </h3>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default LogList;