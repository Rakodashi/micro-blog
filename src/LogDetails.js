import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createUseStyles } from "react-jss";
import { t } from 'i18next';
import ImageWebp from './ImageWebp';
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

  // const useStyles = (dominantColor = log.url) =>
  //   createUseStyles({
  //       "logImg::after": {
  //         backgroundImage: "#373750"
  //       }
  //   });

  return ( 
    <div className="log-details">
      { isPending && <div className="loading">{t('Loading...')}</div> }
      { error && <div>{ error }</div> }
      { log && (
        <article>
          <span className='Col'>
            <span className='Col'>

              <h2>{ log.title }</h2>

              <span className='logDetailsSpan'>
                <div className="logImg">
                  <img className="logImgImage" src={log.url} alt={ log.title } />
                  {/* <ImageWebp width="10rem" height="10rem" className="logImgImage" src={log.url} srcWebp={log.url} alt={ log.title }></ImageWebp> */}
                </div>

                <span className='logDetailsRow'>
                  <h3>{t('Stardate')} { log.stardate }</h3>
                  <h3>{t('By ')} { log.author }</h3>
                </span>

              </span>
            </span>
          </span>


          
          {/* <span className='logDetailsRow'>
          <span className='logDetailsCol'>
          <h2>{ log.title }</h2>
            <h3>{t('Stardate')} { log.stardate }</h3>
            <h3>{t('Author: ')} { log.author }</h3>
          </span>
          <span className='logDetailsCol'>
            <div className="logImg">
              <img className="logImgImage" src={log.url} alt={ log.title } />
            </div>
          </span>
          </span> */}

          <div>{ log.body }</div>

          <button onClick={handleClick} className='button'>{t('DELETE')}</button>
        </article>
      )}
    </div>
   );
}
 
export default LogDetails;