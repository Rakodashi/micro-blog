import { t } from "i18next";
import LogList from "./LogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: logs, isPending, error } = useFetch('https://fake-api-neon.vercel.app/logs');

  return (
    <div className="home">
      { error && <div className="error">{ error }</div> }
      { isPending && <div className="loading">{t('Loading...')}</div>}
      {logs && <LogList logs={logs} title={t('All Logs')} />}
      {logs && <LogList logs={logs.filter((log) => log.author === "Adm. Janeway")} title={t('Delta Quadrant')} />}
    </div>
  );
}
 
export default Home;