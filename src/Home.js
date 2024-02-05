import { useState } from "react";

const Home = () => {
  const [logs, setLogs] = useState([
    {title: "Jean-Luc Picard", stardate: "20242.2",
      body: 'Jean-Luc Picard was a celebrated Starfleet officer, archaeologist, writer, historian, diplomat, and philanthropist, who served throughout much of the 24th century. The highlights of his career were centered around assignments as commanding officer of the Federation starships USS Stargazer, USS Enterprise-D, and the USS Enterprise-E. In these roles, Picard not only witnessed major turning points of recent galactic history, but played a key role in them also, from making first contact as captain of the Federations flagship with no fewer than 27 alien species, including the Ferengi and the Borg. His successful contact with the Children of Tama resulted in his name being incorporated into the Tamarian language through the metaphor "Picard and Dathon at El-Adrel".' ,
      author: 'Cmdr. Rafaela', id: 3},

    {title: "Voyager", stardate: "20242.3",
      body: "The USS Voyager (NCC-74656) was a 24th century Federation Intrepid-class starship operated by Starfleet from 2371 to 2378. One of the most storied starships in the history of Starfleet, Voyager was famous for completing an unscheduled seven-year journey across the Delta Quadrant, the first successful exploration of that quadrant by the Federation, as well as numerous technological innovations and first contacts. It was the first ship in a long line to bear the name Voyager with this registry.",
      author: 'Cmdr. Rafaela', id: 2},

    {title: "Deanna Troi", stardate: "20242.4",
      body: "Deanna Troi was a female Betazoid–Human hybrid Starfleet officer. Under the command of Captain Jean-Luc Picard, she served as the counselor aboard the USS Enterprise-D and the USS Enterprise-E. In 2379, Troi transferred to the USS Titan (Star Trek: The Next Generation; Star Trek Nemesis). By 2399, she and her husband William T. Riker lived on the planet Nepenthe with their daughter, Kestra Troi-Riker. Their son, Thaddeus Troi-Riker, died of Mendaxic neurosclerosis soon after their arrival on Nepenthe." ,
      author: 'Cmdr. Rafaela', id: 1}
  ]);

  return (
    <div className="home">
      {logs.map((log) => (
        <div className="log-preview" key={log.id}>
          <h2> {log.title} </h2>
          <h3> {log.stardate} </h3>
          <h3> {log.author} </h3>
        </div>
      ))}
    </div>
  );
}
 
export default Home;