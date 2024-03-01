import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createUseStyles } from "react-jss";
import { t } from 'i18next';
import deleteBtn from "./assets/delete.mp3";

const LogDetails = () => {
  const { id } = useParams();
  const { data: log, error, isPending } = useFetch(`https://fake-api-neon.vercel.app/logs/${id}`);
  const history = useHistory();

  const Delete = () => new Audio(deleteBtn).play()

  const handleClick = () => {
    fetch(`https://fake-api-neon.vercel.app/logs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
    Delete()
  }

  return ( 
    <div className="log-details">
      { isPending && <div className="loading">{t('Loading...')}</div> }
      { error && <div>{ error }</div> }
      { log && (
        <article>
          <span className='Col'>
            <span className='Col'>

              <h2 className='wordBreak'>{ log.title }</h2>

              <span className='logDetailsSpan'>
                <div className="logImg">
                  <img className="logImgImage" src={log.url} alt={ log.title } />
                </div>

                <span className='logDetailsRow'>
                  <h3 className='wordBreak'>{t('Stardate')} { log.stardate }</h3>
                  <h3 className='wordBreak'>{t('By ')} { log.author }</h3>
                </span>

              </span>
            </span>
          </span>

          <div>{ log.body }</div>

          <button onClick={handleClick} className='button'>{t('Delete')}</button>
        </article>
      )}
    </div>
   );
}
 
export default LogDetails;