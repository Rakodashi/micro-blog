import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [stardate, setStardate] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Adm. Picard');

  return ( 
    <div className="create">
      <h2>Add a new Log</h2>
      <form>
        <label>Log Title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />

        <label>Stardate:</label>
        <input 
        type="text"
        required
        value={stardate}
        onChange={(e) => setStardate(e.target.value)}
         />
        <label>Log Body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        >

        </textarea>

        <label>Log Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Adm. Picard">Adm. Picard</option>
          <option value="Cdre. La Forge">Cdre. La Forge</option>
          <option value="Adm. Janeway">Adm. Janeway</option>
        </select>

        <button>Add Log</button>
        <p>{ title }</p>
        <p>{ stardate }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
   );
}
 
export default Create;