import Logo from '../../assets/AlCommitLogo.png';
import Config from '../../assets/configs.png';

import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className='top'>
        <div className='left-top'>
          <h1 className='tittle-aplication'>AlCommit</h1>
          <img src={Logo} alt="AlCommit Logo" className='logo-top'/>
        </div>
        <div className='right-top'>
          <img src={Config} alt="Configuration Icon" className='setting-top'/>
        </div>
      </div>

      <div className='title-home'>
        <div className='title-home-page'>
          <h2>My Projects:</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
