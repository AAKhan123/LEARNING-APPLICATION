import React, { useState, useEffect } from "react";
import "./social.css";
import { Link } from "react-router-dom";

const Social = () => {
  const modules = [
    { id: 1, name: "Introduction to Social Responsibility" },
    { id: 2, name: " Key Components of Social Responsibility" },
    { id: 3, name: "Benefits of Social Responsibility" },
    { id: 4, name: "Examples of Social Responsibility in Everyday Life" },
    { id: 5, name: "How to Foster Social Responsibility" },
    { id: 6, name: " Challenges of Social Responsibility" },
    { id: 7, name: " Long-Term Impact of Social Responsibility" },
    { id: 8, name: "Social Responsibility and Technology" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules

  // Step 1: Initialize the state from `localStorage`
  // Step 2: Fallback to empty object if not found in localStorage
  
  const courseKey = "socialResponsibilityModules"; // Unique key for this course
const initialState = JSON.parse(localStorage.getItem(courseKey)) || {};
  
  const [completedModules, setCompletedModules] = useState(initialState);
  const [progress, setProgress] = useState(0);
  
  // Step 3: Calculate Progress whenever `completedModules` state changes
  useEffect(() => {
    const completedCount = Object.values(completedModules).filter(status => status).length;
    const newProgress = Math.min(100, Math.max(0, Math.round((completedCount / totalChapters) * 100)));
    setProgress(newProgress);
  }, [completedModules]);
  
  // Step 4: Save completedModules to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(courseKey, JSON.stringify(completedModules));
  }, [completedModules]);
  
  // Step 5: Toggle checkbox state for specific module
  const handleCheckboxChange = (moduleId) => {
    setCompletedModules((prevState) => {
      // Step 6: Ensure only the changed module's state is toggled
      const updatedModules = { ...prevState };
      updatedModules[moduleId] = !updatedModules[moduleId];  // Toggle checkbox state
      return updatedModules;  // Update state with only the changed module
    });
  };
  
  // Step 7: Render each module with its checkbox
  const renderModule = (id, title, content) => (
    <section id={`module${id}`} key={id}>
      <h1 className="A">{title}</h1>
      <div className="art">{content}</div>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completedModules[id] || false}  // Use the specific state for the module
          onChange={() => handleCheckboxChange(id)}  // Toggle only the clicked module
        />
      </label>
    </section>
  );
  

  return (
    <div className="split-window">
      {/* Sidebar */}
      <div className="pane left-pane" style={{ width: `${25}%` }}>
        <div className="app-container">
          <div className="sidebar">
            <h2 className="m">SOCIAL RESPONSIBILITIES</h2>
            <hr />
            <ul>
            <ul>
              {modules.map((module) => (
                <li key={module.id}>
                  
              <input
              type="checkbox"
              className="completion-checkbox"
              checked={Boolean(completedModules[module.id])}  // Ensures proper boolean value
              onChange={() => handleCheckboxChange(module.id)}
              />
                  <a href={`#module${module.id}`}>
                    Module {module.id}: {module.name}
                  </a>
                </li>
              ))} 
            </ul>
            </ul>
            <hr />
            <h3 className="n">Course Progress</h3>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                id="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p id="progress-text">{progress}% Completed</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="pane right-pane" style={{ width: `${100 + 25}%` }}>
        <div className="content">
          {/* Module 1 */}
          {renderModule(
            1,
           "Module 1: Introduction to Social Responsibility",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">WHAT IS SOCIAL RESPONSIBLITIES?</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Social responsibility is the idea of contributing positively to society and taking actions that benefit others, the environment, and the community. It means being aware of how your choices and actions affect the people and world around you. Developing a sense of social responsibility at an early age helps build empathy, kindness, and a desire to make the world a better place. It can involve anything from helping neighbors to supporting causes that promote sustainability and equality.
        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/AzHaDKZ-iiI?si=DQFe9B34eeZ1bo9V"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
        </div>
        <br/>
      </div>
            </>
          )}

          <br/>
          <hr/>
          <br/>

          {/* Module 2 */}
          {renderModule(
            2,
            "Module 2: Key Components of Social Responsibility",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. HELPING OTHERS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Lending a hand to those in need, whether it’s assisting a friend, supporting a local charity, or helping family members. Small acts of kindness, like volunteering at a food drive or donating clothes, can make a big impact.
      </p><br/>
      <h1 id="hi">2. ENVIRONMENTAL RESPONSIBILITIES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Protecting the planet by reducing waste, recycling, saving energy, and conserving water. Actions like planting trees, avoiding single-use plastics, and cleaning up litter show care for the environment.
      </p><br/>
      <h1 id="hi">3. SUPPORTING EQUALITY AND FAIRNESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Standing up for what’s right by treating everyone with respect, regardless of their background, race, gender, or beliefs. Promoting fairness and inclusion fosters a better, more understanding society.
      </p><br/>
      <h1 id="hi">4. CIVIC ENGAGEMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Being involved in your community, like participating in local events, voting (when old enough), or simply staying informed about issues that affect the area where you live.
      </p><br/>
      <h1 id="hi">5. RESPONSIBILITIES TO FUTURE GENERATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Making choices today that ensure a better world for future generations, like advocating for renewable energy, promoting education, and preserving natural resources.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/_cWNDQ7qmMY?si=rcN5MBYMUggMtXzv"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
          )}

          <br/>
          <hr/>
          <br/>

          {/* Module 3 */}
          {renderModule(
            3,
            "Module 3: Benefits of Social Responsibility",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. BUILD EMPATHY AND KINDNESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Helping others allows you to understand their challenges and builds a sense of compassion.
      </p><br/>
      <h1 id="hi">2. CREATE STRONGER COMMUNITIES</h1>
      <p className="per" style={{fontSize:'18px'}}>When everyone takes responsibility, communities thrive. From volunteering to mentoring, these actions create a supportive environment.</p><br/>
      
      <h1 id="hi">3. PROTECTS THE PLANET</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Taking responsibility for the environment ensures future generations can enjoy a healthy, sustainable world.
      </p><br/>
      <h1 id="hi">4. PROMOTES PERSONAL GROWTH</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Engaging in socially responsible activities helps develop leadership, teamwork, and problem-solving skills.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/-RkIYO5UhpE?si=zqAje4ahxkCmQdLV"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
          )}
          <br/>
          <hr/>
          <br/>

          {/* module 4 */}

          {renderModule(
            4,
            "Module 4: Examples of Social Responsibility in Everyday Life",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. HELPING AT HOME</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Doing chores without being asked, helping siblings with homework, or taking care of family pets.
      </p>
      <br/>
      <h1 id="hi">2. VOLUNTEERING</h1>
      <p className="per" style={{fontSize:'18px'}}>Joining community clean-ups, helping at a shelter, or working with a charity to support those in need.</p><br/>
      <h1 id="hi">3. ENVIRONMENTAL ACTION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Recycling, composting, turning off lights when not needed, and walking or biking instead of using a car.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/N0WuOGD79eI?si=4GYWGGLCd-6ONWJV"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
            )}
            <br/>
            <hr/>
            <br/>

            {/* module 5 */}
            {renderModule(
            5,
            "Module 5: How to Foster Social Responsibility",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. START SMALL</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Begin with simple actions like holding the door for someone, sharing resources, or cleaning your local park.
      </p><br/>
      <h1 id="hi">2. STAY INFORMED</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Learn about social issues, like poverty, climate change, and equality. Knowledge inspires action.
      </p><br/>
      <h1 id="hi">3. GET INVOLVED</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Participate in school or local initiatives, like donation drives, educational workshops, or environmental projects.
      </p><br/>
      <h1 id="hi">4. COLLABORATE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Work with friends or family to plan activities, like organizing a book donation or hosting a recycling day.
      </p><br/>
      <h1 id="hi">5. SET GOAL</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Identify causes you care about and set achievable goals, like volunteering a few hours each month or reducing your plastic use.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/uJ2ZEEFlvik?si=1zZBTPbrAkdzoOPl"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
            )}
            <br/>
            <hr/>
            <br/>

            {/* module 6 */}

            {renderModule(
            6,
            "Module 6: Challenges of Social Responsibility",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">1. TIME CONSTRAINT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Balancing responsibilities like school, work, and social engagement can be challenging. Starting with small, consistent actions can help.
      </p><br/>
      <h1 id="hi">2. LACK OF AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Some people may not realize the importance of social responsibility or how they can contribute. Education and discussions are key.
      </p><br/>
      <h1 id="hi">3. LIMITED RESOURSES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Not everyone has access to the resources they need to make big changes. Focusing on what you can do makes a difference, no matter how small.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/vxiQy8ChJQc?si=RDPAb1zn_W_gs8iL"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
            )}
            <br/>
            <hr/>
            <br/>

            {/* module 7 */}
            {renderModule(
            7,
            "Module 7:  Long-Term Impact of Social Responsibility",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">LONG-TERMS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.For Individuals: It fosters a sense of purpose, gratitude, and connection to others.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.For Communities: It creates a stronger, more supportive environment.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.For the World: It helps tackle global challenges like climate change, inequality, and poverty
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/Z5KZhm19EO0?si=B26mrR1JmWBjX7-C"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
            )}
            <br/>
            <hr/>
            <br/>

            {/* module 8 */}

            {renderModule(
            8,
            "Module 8: Social Responsibility and Technology",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">TECHNOLOGIES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology provides powerful tools for promoting social responsibility. Social media platforms can spread awareness about global issues like climate change, poverty, and equality. Crowdfunding platforms enable people to support charitable causes, and apps can encourage eco-friendly behaviors, like tracking carbon footprints or promoting recycling. Using technology responsibly ensures that its benefits are shared widely and ethically.
      </p>
      <br/>
      
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT SOCIAL RESPONSIBILITIES WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/mPWF-IGZQu0?si=_GK1QOoyeUnMGua3"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
      <br/>
    </div>
            </>
            )}
            <br/>
            <hr/>
            <br/>

            {/* module 9 */}
            {renderModule(
            9,
            "Module 9: QUIZES ",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">Social Responsibilities Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/social-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Social;
