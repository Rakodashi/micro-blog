import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './lib/i18n';

const Navbar = () => {

  const { t, i18n: {changeLanguage, language} } = useTranslation()

  const [currentLang, setCurrentLang] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLang === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLang(newLanguage)
  }

  return (
    <nav className="navbar">
      <h1>Micro Blog</h1>
      <div className="links">
        <Link to="/">HOME</Link>
        <button type='button' onClick={handleChangeLanguage}>{t('TRANSLATE')}</button>
        <Link to="/create">{t('NEW LOG')}</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;