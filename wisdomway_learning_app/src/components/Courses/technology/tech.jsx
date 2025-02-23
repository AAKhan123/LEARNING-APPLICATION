import React, { useState, useEffect } from "react";
import "./tech.css";
import { Link } from "react-router-dom";

const Tech = () => {
  const modules = [
    { id: 1, name: "Definition and Importance of Technology" },
    { id: 2, name: "Evolution of Technology" },
    { id: 3, name: " Impact on Communication" },
    { id: 4, name: " Role in Education" },
    { id: 5, name: "Healthcare Advancements" },
    { id: 6, name: " Automation and Artificial Intelligence (AI)" },
    { id: 7, name: "Environmental Technology" },
    { id: 8, name: "Future of Technology" },
    { id: 9, name: "Quiz" },
  ];

   const totalChapters = modules.length;  // Total number of modules
   
     // Step 1: Initialize the state from `localStorage`
     // Step 2: Fallback to empty object if not found in localStorage
     
     const courseKey = "technologyModules"; // Unique key for this course
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
            <h2 className="m">TECHNOLOGY</h2>
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
           "Module 1:  Definition and Importance of Technology",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">IMPORTANCE OF TECHNOLOGY</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Technology is the application of scientific knowledge to create tools, systems, and solutions that solve problems or enhance life. It encompasses a wide range of fields, including information technology, healthcare, education, and engineering. Technology has become an integral part of modern life, improving productivity, communication, and convenience. From basic inventions like the wheel to modern advancements like artificial intelligence, technology drives societal progress and innovation.
        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/IYV7wBdmNgo?si=PADRzNzKPGJqAnIg"
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
            "Module 2: Evolution of Technology",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">EVOLUTION OF TECHNOLOGY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      The journey of technology spans thousands of years. Early humans invented tools like the wheel and fire to meet basic needs. The Industrial Revolution introduced machinery that transformed agriculture, manufacturing, and transportation. The 20th century brought groundbreaking inventions like airplanes, computers, and the internet. Today, we live in a digital age powered by smart devices, automation, and artificial intelligence. The evolution of technology reflects humanity’s ability to innovate and adapt to changing environments and challenges.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/YFGNXpErBoY?si=zKX-1ySUvBBUEi2V"
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
            "Module 3: Impact on Communication",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">IMPACT OF COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology has revolutionized the way people communicate. The telephone allowed instant long-distance conversations, and the internet brought email, instant messaging, and video calls. Social media platforms enable users to share ideas, news, and experiences with global audiences. Communication technology has also transformed businesses, enabling remote work, virtual meetings, and efficient customer interactions. However, challenges like misinformation and loss of face-to-face interactions highlight the need for responsible use.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/3ML_uBKpD6Y?si=UhQcFHf6tLDVELzY"
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
            "Module 4: Role in Education",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">ROLE IN EDUCATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology has made education more accessible and engaging. Online learning platforms, virtual classrooms, and educational apps allow students to learn at their own pace. Digital tools like interactive whiteboards and simulations make complex concepts easier to understand. Technologies like augmented reality (AR) and virtual reality (VR) provide immersive learning experiences, bringing historical events or scientific phenomena to life. By bridging geographic and economic barriers, technology democratizes education for students worldwide.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/9IbN1LxXevM?si=d6FLifPKt2nvmcIo"
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
            "Module 5: Healthcare Advancements",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">HEALTHCARE ADVANCEMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology has significantly improved healthcare, saving lives and enhancing quality of care. Medical imaging technologies like MRI and CT scans enable accurate diagnoses. Wearable devices monitor health metrics like heart rate, sleep patterns, and physical activity. Telemedicine allows patients to consult doctors remotely, improving access to care in rural or underserved areas. Advanced technologies like robotic surgery and AI-powered diagnostic tools provide precision and efficiency in treatment.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/Hw_2983Gd-c?si=lindHHSOK-rfSI-g"
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
            "Module 6: Automation and Artificial Intelligence (AI)",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">AUTOMATION AND AI</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Automation involves using machines or software to perform repetitive tasks, increasing efficiency and reducing errors. AI, a subset of technology, enables machines to mimic human intelligence through learning, reasoning, and decision-making. Examples include virtual assistants (like Alexa or Siri), chatbots for customer support, and AI-driven recommendations on streaming platforms. While automation and AI boost productivity, they also raise concerns about job displacement and ethical considerations.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/KSOxkhWs2Ic?si=1EZB7NXlgw4mSEEn"
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
            "Module 7:  Environmental Technology",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">ENVIRONMENTAL TECHNOLOGY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Environmental technology aims to reduce human impact on the planet by promoting sustainability. Innovations like solar panels, wind turbines, and electric vehicles help reduce reliance on fossil fuels. Water purification systems ensure access to clean water, while smart grids optimize energy usage. Technologies like carbon capture and biodegradable materials tackle climate change and pollution. Adopting green technology is crucial for preserving natural resources and ensuring a sustainable future.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/TCtIRAFyTIY?si=ASc13q4k8PZqWFVo"
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
            "Module 8: Future of Technology",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">FUTURE OF TECHNOLOGY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      The future of technology holds exciting possibilities. Quantum computing promises to revolutionize problem-solving in fields like medicine and cryptography. Nanotechnology could enable breakthroughs in material science and targeted drug delivery. AI advancements may lead to smarter systems that augment human capabilities. Innovations like self-driving cars, 3D-printed organs, and space exploration showcase the transformative potential of technology. As technology evolves, its impact will shape industries, societies, and lifestyles in unprecedented ways.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT TECHNOLOGY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/qNATvBDifpk?si=5ae7vFnnnZLaRg4j"
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
      <h1 id="hi">Technology Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/techno-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Tech;
