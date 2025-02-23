import React, { useState, useEffect } from "react";
import "./ever.css";
import { Link } from "react-router-dom";

const Ever = () => {
  const modules = [
    { id: 1, name: "Understanding Everyday Science" },
    { id: 2, name: " The Role of Physics in Daily Life" },
    { id: 3, name: " The Importance of Chemistry in Daily Life" },
    { id: 4, name: " Biology in Everyday Life" },
    { id: 5, name: "  Earth Science and Environmental Awareness" },
    { id: 6, name: "  The Role of Technology in Everyday Science" },
    { id: 7, name: "  Everyday Science in Health and Medicine" },
    { id: 8, name: " Scientific Principles in Transportation" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "everydayModules"; // Unique key for this course
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
            <h2 className="m">EVERYDAY SCIENCE</h2>
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
           "Module 1:  Understanding Everyday Science",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">EVERYDAY SCIENCE</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Everyday science is the study of how scientific principles and concepts apply to our daily activities and surroundings. It helps us understand natural phenomena like gravity, evaporation, and the water cycle, as well as the technologies we use, such as smartphones and microwaves. For instance, science explains why ice melts in warm temperatures or why glasses help correct vision. By learning about everyday science, individuals become better equipped to solve practical problems, make informed decisions, and appreciate the role of science in improving quality of life.          </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/MrTxRn9MNWM?si=l7Xrbe_2Wc3a325Y"
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
            "Module 2:   The Role of Physics in Daily Life",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">THE ROLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Physics governs many aspects of daily life. For example, when you ride a bicycle, physics explains the balance (center of gravity), motion (kinetic energy), and friction that allow the bike to move and stop. Similarly, household devices like fans, toasters, and vacuum cleaners operate based on principles like electricity, heat transfer, and air pressure. Even natural phenomena, like the reflection of light in a mirror or the rainbow after rain, are rooted in physics. Understanding these concepts helps people troubleshoot issues, use energy efficiently, and stay safe.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/Hu-JL2J6ncE?si=uLUczxhjatZhsEdY"
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
            "Module 3:   The Importance of Chemistry in Daily Life",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">CHEMISTRY IN DAILY LIFE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Chemistry plays a vital role in everything from cooking to personal care. When cooking, chemical reactions like boiling, frying, and caramelizing transform raw ingredients into delicious meals. Cleaning agents like detergents and soaps use chemical properties to break down grease and dirt. Chemistry also explains why certain materials corrode, why batteries lose charge, and how medications work. For instance, understanding chemical reactions can help people safely mix cleaning products or choose eco-friendly alternatives that minimize environmental harm.          </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/L2Q2q20KaEk?si=I49GCMm4LY6FdVm2"
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
            "Module 4:  Biology in Everyday Life",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">BIOLOGY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Biology helps us understand how living organisms function and interact with their environment. It explains everyday processes like how plants produce oxygen through photosynthesis or how the immune system defends against infections. Simple activities like brushing teeth, exercising, or eating a balanced meal are grounded in biological principles. Knowledge of biology is crucial for making health-conscious decisions, such as getting vaccinated or understanding the benefits of probiotics. It also fosters a sense of responsibility for preserving biodiversity and protecting ecosystems.       </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/KiELlAyyh0s?si=V9Y5e2bKQiGy0ZMW"
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
            "Module 5:  Earth Science and Environmental Awareness",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">EARTH SCIENCE AND ENVIRONMENTAL AWARENESSS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Earth science explores the physical properties of the Earth and its environment. It helps us understand weather patterns, natural disasters, and the importance of conserving resources. For example, knowledge of the water cycle explains why conserving water is crucial, while understanding erosion and soil degradation highlights the need for sustainable farming practices. Everyday science also helps people prepare for natural disasters, such as hurricanes or earthquakes, by understanding early warning systems and adopting precautionary measures.       </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/2BYurw9FzUI?si=x0x9p3TIoOP1l49J"
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
            "Module 6:  The Role of Technology in Everyday Science",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">THE ROLE OF TECHNOLOGY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology is the practical application of scientific knowledge to create tools and devices that make life easier. Everyday science explains how technologies like smartphones, computers, and microwaves work. For instance, smartphones use electromagnetic waves to enable wireless communication, while microwaves heat food by causing water molecules to vibrate. Understanding these technologies helps users operate them efficiently, troubleshoot basic problems, and adopt safer practices, such as avoiding prolonged screen exposure or handling devices properly.
            </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/c7FMfQJw6Jk?si=WSTScMXjpscQlwRV"
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
            "Module 7:    Everyday Science in Health and Medicine",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">HEALTH AND MEDICINE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Science has revolutionized health and medicine, improving life expectancy and quality of life. Everyday science explains why vaccines prevent diseases, how antibiotics fight infections, and why a balanced diet supports immunity. Practices like regular handwashing and sanitizing surfaces are based on scientific knowledge of germs and bacteria. Understanding health-related science empowers individuals to adopt preventive measures, seek timely medical attention, and make informed choices about medications, treatments, and lifestyle habits.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/4Jtq5gccY4g?si=Z5OxF1IRdPTdsq1m"
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
            "Module 8:  Scientific Principles in Transportation",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">SCIENTIFIC PRINCIPLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Transportation relies heavily on scientific principles to ensure efficiency and safety. For example, aerodynamics determines how cars and airplanes move through air, while friction allows vehicles to brake. Everyday science also explains why proper tire pressure improves fuel efficiency or how hybrid engines reduce environmental impact. By understanding these principles, individuals can adopt eco-friendly driving habits, maintain vehicles properly, and ensure safety during travel.
            </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT EVERYDAY SCIENCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/aqhxqaXSvOE?si=CcnwIiZ4tXB7n-Zj"
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
      <h1 id="hi">Everyday Science Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/ever-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Ever;
