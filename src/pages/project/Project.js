import { useState } from 'react';
import Logo from '../../assets/AlCommitLogo.png';
import Config from '../../assets/configs.png';
import Back from '../../assets/back.png';
import Correct from '../../assets/correct.png';
import Circle from '../../assets/circle.png';
import Clock from '../../assets/clock.png';
import Brain from '../../assets/brain.png';
import CircleX from '../../assets/circle-close.png';

import './Project.css';

function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Finshed');

  const statusOptions = [
    { label: 'Finshed', icon: Correct },
    { label: 'In Progress', icon: Circle },
    { label: 'Paused', icon: Clock },
    { label: 'Thinking', icon: Brain },
    { label: 'Canceled', icon: CircleX },
  ];

  return (
    <div className="Project">
      <div className="top">
        <div className="left-top">
          <h1 className="tittle-aplication">AlCommit</h1>
          <img src={Logo} alt="AlCommit Logo" className="logo-top" />
        </div>
        <div className="right-top">
          <img src={Config} alt="Configuration Icon" className="setting-top" />
        </div>
      </div>

      <div className="all-content">
        <img src={Back} alt="Back" className="back-icon" />

        <div className="center-content">
          <div className="input-top">
            <div className="input-project-name">
              <label className="label-project-name">Project Name</label>
              <br />
              <input
                type="text"
                className="input-project-name"
                placeholder="My Project"
              />
            </div>

            <div className="input-project-status">
              <label className="label-project-name">Status</label>
              <br />
              <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
                <div className="selected-option">
                  {statusOptions.find((opt) => opt.label === selectedStatus)?.icon && (
                    <img
                      src={statusOptions.find((opt) => opt.label === selectedStatus).icon}
                      alt=""
                      className="icons-select"
                    />
                  )}
                  {selectedStatus}
                  <span className="arrow">▼</span>
                </div>

                {isOpen && (
                  <div className="options-list">
                    {statusOptions.map((option) => (
                      <div
                        key={option.label}
                        className={`option-item ${
                          selectedStatus === option.label ? 'selected' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStatus(option.label);
                          setIsOpen(false);
                        }}
                      >
                        {option.icon && (
                          <img src={option.icon} alt="" className="icons-select" />
                        )}
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='input-bottom'>
            <div className='repository-technology'>
              <label className="label-project-name">Repository</label>
              <br />
              <input
                type="text"
                className="input-project-name"
                placeholder="Repository Link"
              />
              <br />
              <label className="label-project-name">Technology</label>
              <br />
              <input
                type="text"
                className="input-project-name"
                placeholder="Technology Used"
              />
              <input
                type="button"
                className="input-project-name"
                id='ok-technology'
                value=">"
              />
              <br />


              <button className='save-project'>Save Project</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;