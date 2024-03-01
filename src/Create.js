import { t } from "i18next";
import './lib/i18n';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import confirm from "./assets/confirm.mp3";

const Create = () => {
  const [title, setTitle] = useState('');
  const [stardate, setStardate] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Adm. Picard');
  const [url, setUrl] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const Confirm = () => new Audio(confirm).play()

  const handleSubmit = (e) => {
    e.preventDefault();
    const log = { title, url, stardate, body, author };

    setIsPending(true);

    fetch('https://fake-api-neon.vercel.app/logs', {
      method: 'POST',
      // method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
    
  }

  return ( 
    <div className="create">
      <div className="create-title">
        <h2>{t('Add a new Log')}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        
        <label>{t('Log Title')}</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />
        <label>{t('Log Image')}</label>
        <input 
        type="text"
        required
        value={url}
        onChange={(e) => setUrl(e.target.value)}
         />

        <span>
          <span className="span-adjust">

            <label>{t('Stardate')}</label>
            <input 
            type="text"
            required
            value={stardate}
            className="stardateInput"
            onChange={(e) => setStardate(e.target.value)}
            />
          </span>

          <span className="span-adjust">
            <label>{t('Log Author')}</label>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Adm. Picard">Adm. Picard</option>
              <option value="Cdre. La Forge">Cdre. La Forge</option>
              <option value="Adm. Janeway">Adm. Janeway</option>
            </select>
          </span>
        </span>
        

        <label>{t('Log Body')}</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        >
        </textarea>

        { !isPending && <button onClick={Confirm}>{t('CREATE')}</button> }
        { isPending && <button disabled>Adding Log...</button> }
      </form>
    </div>
   );
}
 
export default Create;