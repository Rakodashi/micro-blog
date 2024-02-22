import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { t } from 'i18next';

const LogDetails = () => {
  const { id } = useParams();
  const { data: log, error, isPending } = useFetch(`https://fake-api-neon.vercel.app/logs/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch(`https://fake-api-neon.vercel.app/logs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return ( 
    <div className="log-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { log && (
        <article>
          <h2>{ log.title }</h2>
          <h3>{t('Stardate')} { log.stardate }</h3>
          <h3>{t('Author: ')} { log.author }</h3>
          <div>{ log.body }</div>

          <button onClick={handleClick} className='button'>DELETE</button>
        </article>
      )}
    </div>
   );
}
 
export default LogDetails;