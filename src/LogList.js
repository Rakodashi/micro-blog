import { t } from "i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import acess from "./assets/acess.mp3";
import { useState } from "react";

const LogList = ({ logs, title }) => {
  const acessFile = () => new Audio(acess).play()

  const [query, setQuery] = useState("");

  return ( 
    <div className="log-list">

      <div className="searchDiv">
      <input type="text" logs={logs} placeholder={t('Search title, stardate or author')} className="search" onChange={e => setQuery(e.target.value)} />
      </div>
      

      <div className="log-title">
        <h2>{ title }</h2>
      </div>

      {logs.filter(log => log.title.toLowerCase().includes(query) || log.stardate.toLowerCase().includes(query) || log.author.toLowerCase().includes(query)
      ).map((log) => (
        <div className="log-preview" key={log.id} onClick={acessFile}>
          <Link to={`/logs/${ log.id }`}>
          <h2> {log.title} </h2>
          <h3>{t('Stardate')} {log.stardate} </h3>
          <h3>{t('By ')} {log.author} </h3>
          </Link>
        </div>
      ))}

      {/* {logs.map((log) => (
        <div className="log-preview" key={log.id} onClick={acessFile}>
          <Link to={`/logs/${ log.id }`}>
          <h2> {log.title} </h2>
          <h3>{t('Stardate')} {log.stardate} </h3>
          <h3>{t('By ')} {log.author} </h3>
          </Link>
        </div>
      ))} */}
    </div>
   );
}
 
export default LogList;