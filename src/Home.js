import LogList from "./LogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: logs, isPending, error } = useFetch('http://localhost:8000/logs');

  return (
    <div className="home">
      { error && <div className="error">{ error }</div> }
      { isPending && <div className="loading">Loading...</div>}
      {logs && <LogList logs={logs} title="All Logs" />}
      {logs && <LogList logs={logs.filter((log) => log.author === 'Capt. Janeway')} title="Delta Quadrant" />}
    </div>
  );
}
 
export default Home;