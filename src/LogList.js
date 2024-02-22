import { t } from "i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogList = ({ logs, title }) => {

  return ( 
    <div className="log-list">
      <div className="log-title">
        <h2>{ title }</h2>
      </div>
      {logs.map((log) => (
        <div className="log-preview" key={log.id}>
          <Link to={`/logs/${ log.id }`}>
          <h2> {log.title} </h2>
          <h3>{t('Stardate')} {log.stardate} </h3>
          <h3>{t('Author: ')} {log.author} </h3>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default LogList;