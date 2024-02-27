import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { t } from 'i18next';
// import confirm from './assets/'

const LogDetails = () => {
  const { id } = useParams();
  const { data: log, error, isPending } = useFetch(`https://fake-api-neon.vercel.app/logs/${id}`);
  const history = useHistory();

  // const confirm = () => new Audio(confirm).play()

  const handleClick = () => {
    fetch(`https://fake-api-neon.vercel.app/logs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return ( 
    <div className="log-details">
      { isPending && <div className="loading">{t('Loading...')}</div> }
      { error && <div>{ error }</div> }
      { log && (
        <article>
          <span className='logDetailsSpan'>
          <h2>{ log.title }</h2>
          <div className="logImg"></div>
          </span>
          <span className='logDetailsSpan'>
            <h3>{t('Stardate')} { log.stardate }</h3>
            <h3>{t('Author: ')} { log.author }</h3>
          </span>
          <div>{ log.body }</div>

          <button onClick={handleClick} className='button'>{t('DELETE')}</button>
        </article>
      )}
    </div>
   );
}
 
export default LogDetails;