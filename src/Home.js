const Home = () => {

  const handleClick = () => {
    console.log('Stardate 55714.1');
  }

  const handleClickAgain = (name) => {
    console.log('Hello ' + name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick} className='button'>Click me</button>
      <button onClick={ () => { handleClickAgain('Deanna') }} className='button'>Click me again</button>
    </div>
  );
}
 
export default Home;