import { useState } from 'react';
import Logo from '../../assets/AlCommitLogo.png';
import Config from '../../assets/configs.png';
import Terminal from '../../assets/terminal.png';

import './Home.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Função que envia os dados para o backend Spring Boot
  const handleSave = async () => {
    try {
      console.log('Enviando dados:', { username, email, password })
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          passwordHash: password,
          email: email,
        }),

        
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Configurações salvas com sucesso:', data);
        alert('Configurações salvas com sucesso!');
        setShowPopup(false);
      } else {
        console.error('❌ Erro ao salvar:', response.status);
        alert('Erro ao salvar as configurações.');
      }
    } catch (error) {
      console.error('⚠️ Erro de conexão com o servidor:', error);
      alert('Não foi possível conectar ao servidor.');
    }
  };

  return (
    <div className="Home">
      <div className='top'>
        <div className='left-top'>
          <h1 className='tittle-aplication'>AlCommit</h1>
          <img src={Logo} alt="AlCommit Logo" className='logo-top'/>
        </div>
        <div className='right-top'>
          <button className='btn-terminal'>
            <img src={Terminal} className='setting-top' alt="Terminal"/>Terminal
          </button>
          <img
            src={Config}
            alt="Configuration Icon"
            className='setting-top'
            id='icon-setting'
            onClick={togglePopup}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <div className='title-home'>
        <div className='title-home-page'>
          <h2>My Projects:</h2>
        </div>
        <div className='actions-home'>
          <select className='select-filter'>
            <option value="all">None</option>
            <option value="finished">Finished</option>
            <option value="progress">In Progress</option>
            <option value="paused">Paused</option>
            <option value="thinking">Thinking</option>
            <option value="canceled">Canceled</option>
          </select>
          <button className='btn-add-project'>+ New Project</button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Settings</h3>

            <input
              type="text"
              placeholder="Username Github"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Github"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password Github"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='buttons-popup'>
              <button onClick={togglePopup}>Fechar</button>
              <button onClick={handleSave}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
