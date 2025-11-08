import Logo from '../../assets/AlCommitLogo.png';
import Config from '../../assets/configs.png';

import './Project.css';

function Project() {
  return (
    <div className="Project">
      <div className='top'>
              <div className='left-top'>
                <h1 className='tittle-aplication'>AlCommit</h1>
                <img src={Logo} alt="AlCommit Logo" className='logo-top'/>
              </div>
              <div className='right-top'>
                <img src={Config} alt="Configuration Icon" className='setting-top'/>
              </div>
            </div>
    </div>
  );
}

export default Project;
