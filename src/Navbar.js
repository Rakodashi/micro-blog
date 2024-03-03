import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './lib/i18n';
import transl from "./assets/translate.mp3";
import btn from "./assets/button.mp3";

const Navbar = () => {

  const { t, i18n: {changeLanguage, language} } = useTranslation()

  const [currentLang, setCurrentLang] = useState(language)

  const translate = () => new Audio(transl).play()
  const btnBeep = () => new Audio(btn).play()

  const handleChangeLanguage = () => {
    const newLanguage = currentLang === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLang(newLanguage)
    translate()
  }

  return (
    <nav className="navbar">
        <Link to="/" className='homeBtn' onClick={btnBeep}>Micro Blog</Link>
      <div className="links">
        <Link to="/login" onClick={btnBeep}>{t('LOGIN')}</Link>
        <button type='button' onClick={handleChangeLanguage}>{t('TRANSLATE')}</button>
        <Link to="/create" onClick={btnBeep}>{t('NEW LOG')}</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;