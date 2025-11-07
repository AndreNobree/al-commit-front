import Logo from '../../assets/AlCommitLogo.png';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className='top'>
        <h1 className='tittle-aplication'>AlCommit</h1>
        <img src={Logo} alt="AlCommit Logo" className='logo-top'/>
      </div>
    </div>
  );
}

export default Home;
