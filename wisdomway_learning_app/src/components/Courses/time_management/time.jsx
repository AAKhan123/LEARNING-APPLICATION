import React, { useState, useEffect } from "react";
import "./time.css";
import { Link } from "react-router-dom";

const Time = () => {
  const modules = [
    { id: 1, name: " Prioritizing Tasks" },
    { id: 2, name: " Setting Goals" },
    { id: 3, name: "  Planning a Daily Schedule" },
    { id: 4, name: "  Using Tools for Organization" },
    { id: 5, name: "Managing Distractions" },
    { id: 6, name: " Understanding Deadlines" },
    { id: 7, name: " Staying Organized at Home" },
    { id: 8, name: "Taking Breaks Strategically" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "timesModules"; // Unique key for this course
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
            <h2 className="m">TIME MANAGEMENT AND ORGANIZATION</h2>
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
           "Module 1: Prioritizing Tasks",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">PRIORITIZING TASK</h1>
        <p className="per" style={{fontSize:'18px'}}>
        1.A: Must do (e.g., homework due tomorrow).        
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.B: Should do (e.g., study for a test next week).     
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.C: Nice to do (e.g., play video games or watch TV).    
        </p>
        <br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/czh4rmk75jc?si=F0OQLrhWu3RtwMJD"
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
            "Module 2: Setting Goals",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">SETTING GOALS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Break big tasks into smaller, achievable goals (e.g., "Finish one chapter today").      
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        Use the SMART method:     
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        1.Specific, Measurable, Achievable, Relevant, Time-bound.   
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/XpKvs-apvOs?si=FGOysJGryEv2_JcM"
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
            "Module 3:  Planning a Daily Schedule",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">PLANNING</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Morning: School prep, breakfast.      
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Afternoon: Homework and playtime.    
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Evening: Reading, family time, or creative hobbies.  
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/4ysyybi4068?si=cXXXF53d_iAubmi9"
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
            "Module 4: Using Tools for Organization",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">TOOLS FOR ORGANIZATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Use notebooks or apps to track tasks.      
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Color-code assignments by subjects or urgency (e.g., red for urgent tasks).    
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Sticky notes or reminders can help remember important deadlines.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/gKYt2wJUmiQ?si=lBj-eLvcdc2LD9yI"
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
            "Module 5: Managing Distractions",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">MANAGING DISTRACTIONS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Identify common distractions (e.g., TV, video games).     
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Create a quiet, dedicated workspace for study or focus.   
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Set time limits for breaks and fun activities.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/KZGVgz9b2fw?si=OXp9PdD8WsKMaG1E"
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
            "Module 6: Understanding Deadlines",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">UNDERSTANDING DEADLINES</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Write down due dates for projects or assignments.     
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Always aim to finish tasks one day early to avoid last-minute stress.  
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Use alarms or countdowns for reminders.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZAION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/51sEiZ6am2Q?si=zyNblYBHRitwb40q"
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
            "Module 7:  Staying Organized at Home",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">STAY ORGANIZED</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Keep books, notebooks, and supplies in one place.     
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.Label items to find them easily. 
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Declutter regularly (e.g., remove old papers or broken items).
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORRGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/tlFGOSEI_lo?si=Mxt_xcRK9UBh97Z1"
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
            "Module 8:  Taking Breaks Strategically",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">TAKING BREAK</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1.Work for 25 minutes, then take a 5-minute break.    
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        2.After 4 sessions, take a longer break (15–30 minutes).
        </p>
        <p className="per" style={{fontSize:'18px'}}>
        3.Use breaks for stretching, hydration, or a short walk.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TIME MANAGEMENT AND ORGANIZATION WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/GQ0WxOGzpPg?si=YRPDYvCoFHOuS-1s"
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
      <h1 id="hi">Time Management And Organization Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/time-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Time;
