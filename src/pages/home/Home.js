import Logo from '../../assets/AlCommitLogo.png';
import Config from '../../assets/configs.png';

import './Home.css';

function Home() {
  return (
    <div className="Home">
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
        <div className='actions-home'>
          <select className='select-filter'>
            <option value="all">None</option>
            <option value="all">Finshed</option>
            <option value="all">In Progress</option>
            <option value="all">Paused</option>
            <option value="all">Thinking</option>
            <option value="all">Canceled</option>
          </select>
          <button className='btn-add-project'>+ New Project</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
