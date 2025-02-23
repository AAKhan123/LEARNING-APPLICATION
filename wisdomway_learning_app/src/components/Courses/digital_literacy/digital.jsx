import React, { useState, useEffect } from "react";
import "./digital.css";
import { Link } from "react-router-dom";

const Digital = () => {
  const modules = [
    { id: 1, name: " Understanding Digital Literacy" },
    { id: 2, name: "Importance of Digital Literacy in Modern Life" },
    { id: 3, name: " Components of Digital Literacy" },
    { id: 4, name: "  The Role of Digital Literacy in Education" },
    { id: 5, name: " Digital Literacy and Employment" },
    { id: 6, name: "  Digital Safety and Security" },
    { id: 7, name: " Evaluating Online Information" },
    { id: 8, name: " Ethical Use of Digital Resources" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "digitalModules"; // Unique key for this course
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
            <h2 className="m">DIGITAL LITERACY</h2>
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
           "Module 1:   Understanding Digital Literacy",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">DIGITAL LITERACY</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Digital literacy is more than just the ability to use a computer or smartphone; it encompasses understanding how to navigate the digital landscape effectively, safely, and responsibly. It includes skills like browsing the internet, managing emails, creating content, and engaging on social media. Digital literacy also involves understanding the broader implications of technology, such as data privacy, ethical usage, and the impact of algorithms on the content we see. In an increasingly digital world, being digitally literate allows individuals to thrive academically, socially, and professionally.
         </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/_LElWqXi7Ag?si=LbYiQ0wX33lfhLPu"
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
            "Module 2:  Importance of Digital Literacy in Modern Life",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Communicate efficiently: Using tools like email, video calls, and social media.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Access information: From news to online banking and government services.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Participate in society: Voting online, engaging in digital communities, or accessing healthcare services through telemedicine.
        </p>
       <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/90MjFVwN2aU?si=wzTibf5EtViHJU-4"
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
            "Module 3:  Components of Digital Literacy",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">COMPONENTS OF DIGITAL LITERACY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Technical Skills: Operating devices like smartphones, computers, and tablets effectively.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Information Literacy: Understanding how to search, evaluate, and use digital information. For instance, knowing which websites are reliable and which might spread misinformation.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Communication Skills: Navigating digital platforms for communication, such as crafting professional emails or understanding online etiquette.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/5WFaBKScE9w?si=9-eYSiXM9VhsOww3"
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
            "Module 4:   The Role of Digital Literacy in Education",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">THE ROLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Research: Students can find information quickly using search engines and online databases.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Collaboration: Platforms like Google Workspace enable teamwork through shared documents and virtual discussions.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Presentation: Tools like PowerPoint or Canva allow students to present their ideas creatively.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/b3592Ibfuig?si=83Oby6IvZgJ65H3_"
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
            "Module 5:   Digital Literacy and Employment",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">DIGITAL LITERACY AND EMPLOYMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Administrative Work: Using software like Microsoft Office for word processing, spreadsheets, and presentations.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Data Analysis: Interpreting trends using tools like Excel, Tableau, or Google Analytics.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Remote Collaboration: Platforms like Zoom, Slack, or Microsoft Teams enable teamwork across distances.
        </p>
       <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/GgEGbMPJcAo?si=4VQWWhNrV5sx90VK"
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
            "Module 6:  Digital Safety and Security",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">DIGITAL SAFETY AND SECURITY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Using Strong Passwords: Avoiding simple passwords and enabling two-factor authentication for added security.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Avoiding Suspicious Links: Not clicking on unknown links in emails or messages.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Privacy Settings: Adjusting social media privacy settings to control what personal information is shared.
        </p>
        <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/se9i6b50jRI?si=uheoJpY9vrqvuCXn"
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
            "Module 7:  Evaluating Online Information",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">EVALUATING ONLINE INFORMATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Check Credibility: Verify sources, authorship, and publication date of content.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Cross-Check Information: Compare data across multiple reputable sources.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Recognize Misinformation: Be aware of biases, fake news, and clickbait headlines.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/U_tICKA6LPM?si=QeKiv0qt_DZe6yVE"
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
            "Module 8:  Ethical Use of Digital Resources",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">ETHICAL USE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Respecting Intellectual Property: Avoiding plagiarism and properly citing sources.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Practicing Netiquette: Maintaining civility in online discussions and avoiding cyberbullying.
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Being Mindful of Digital Citizenship: Ensuring that online activities contribute positively to the digital community.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT DIGITAL LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/tjC-rGmwj3s?si=3uLpGVvy82rQxPjg"
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
      <h1 id="hi">Digital Literacy Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/digital-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Digital;
