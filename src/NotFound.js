import { t } from 'i18next';
import { Link } from 'react-router-dom';
import btn from "./assets/button.mp3";

const NotFound = () => {
  const btnBeep = () => new Audio(btn).play()

  return ( 
    <div className="not-found">
      <h2>{t('ERROR')}</h2>
      <p>{t('That page cannot be found')}</p>
      <Link to="/" onClick={btnBeep}>{t('Back to the homepage')}</Link>
    </div>
   );
}
 
export default NotFound;