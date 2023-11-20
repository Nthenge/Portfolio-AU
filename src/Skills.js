import React, { useState } from 'react';

const Skills = () => {
  const [skillsType, setSkillsType] = useState('skills');

  const skillsItems = [
    { imgUrl: 'https://via.placeholder.com/48', title: 'HTML5' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'CSS3' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'JavaScript' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'TypeScript' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'jQuery' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Bootstrap' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Angular' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'React' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Firebase' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'PugJS' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'SASS' },
  ];

  const toolsItems = [
    { imgUrl: 'https://via.placeholder.com/48', title: 'Ajax' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Gulp' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Webpack' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Git (Github)' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Npm' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Command Line' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'VS Code' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Trello' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'ClickUp' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Slack' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Photoshop' },
    { imgUrl: 'https://via.placeholder.com/48', title: 'Adobe XD' },
  ];

  return (
    <div className="skills-section section" tabIndex="-1">
      <div className="container">
        <div className="section-content row">
          {/* Text box */}
          <div className="col-lg-6">
            <div className="text-box-inline">
              <span className="subtitle">my skills</span>
              <h2>
                What My Programming
                <br />
                Skills Included?
              </h2>
              <p>
                I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
              </p>
              <div className="toggle-switch-btn">
                <input type="radio" value="skills" checked={skillsType === 'skills'} onChange={() => setSkillsType('skills')} />
                <label className="link-hover">Skills</label>
                <input type="radio" value="tools" checked={skillsType === 'tools'} onChange={() => setSkillsType('tools')} />
                <label className="link-hover">Tools</label>
                <span className="switcher-toggle" style={{ width: 'calc((100% - 8px) / 2)' }}></span>
              </div>
            </div>
          </div>

          {/* Skills items */}
          <div className="col-lg-6">
            {/* Skills list */}
            <ul style={{ display: skillsType === 'skills' ? 'block' : 'none' }}>
              {skillsItems.map((skill) => (
                <li key={skill.title} tabIndex="0" data-tooltip={skill.title} data-dir="top">
                  <div className="skill-icon">
                    <img src={skill.imgUrl} alt={skill.title} />
                  </div>
                </li>
              ))}
            </ul>

            {/* Tools list */}
            <ul style={{ display: skillsType === 'tools' ? 'block' : 'none' }}>
              {toolsItems.map((tool) => (
                <li key={tool.title} tabIndex="0" data-tooltip={tool.title} data-dir="top">
                  <div className="skill-icon">
                    <img src={tool.imgUrl} alt={tool.title} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
