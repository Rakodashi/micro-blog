import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const LogDetails = () => {
  const { id } = useParams();
  const { data: log, error, isPending } = useFetch('http://localhost:8000/logs/' + id);

  return ( 
    <div className="log-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { log && (
        <article>
          <h2>{ log.title }</h2>
          <h3>Stardate { log.stardate }</h3>
          <h3>Written by { log.author }</h3>
          <div>{ log.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default LogDetails;