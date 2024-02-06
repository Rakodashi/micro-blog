import { useEffect, useState } from "react";
import LogList from "./assets/LogList";

const Home = () => {
  const [logs, setLogs] = useState(null);

  const [name, setName] = useState('Data');

  const handleDelete = (id) => {
    const newLogs = logs.filter(log => log.id !== id);
    setLogs(newLogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/logs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLogs(data);
      })
  }, []);

  return (
    <div className="home">
      {logs && <LogList logs={logs} handleDelete={handleDelete} title="All Logs" />}
      {logs && <LogList logs={logs.filter((log) => log.author === 'Capt. Janeway')} title="Delta Quadrant" handleDelete={handleDelete} />}
    </div>
  );
}
 
export default Home;