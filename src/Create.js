import { t } from "i18next";
import './lib/i18n';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState('');
  const [stardate, setStardate] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Adm. Picard');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e)=> {
    e.preventDefault();
    const log = { title, stardate, body, author};
    

    setIsPending(true);

    fetch('https://fake-api-neon.vercel.app/logs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    }).then(() => {
      console.log('new log added');
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

        <label>{t('Stardate')}</label>
        <input 
        type="text"
        required
        value={stardate}
        onChange={(e) => setStardate(e.target.value)}
         />

        <label>{t('Log Body')}</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        >

        </textarea>

        <label>{t('Log Author')}</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Adm. Picard">Adm. Picard</option>
          <option value="Cdre. La Forge">Cdre. La Forge</option>
          <option value="Adm. Janeway">Adm. Janeway</option>
        </select>

        { !isPending && <button>{t('CREATE')}</button> }
        { isPending && <button disabled>Adding Log...</button> }
      </form>
    </div>
   );
}
 
export default Create;