import React, { useState, useEffect } from "react";
import "./cric.css";
import { Link } from "react-router-dom";

const Cric = () => {
  const modules = [
    { id: 1, name: "Understanding Critical Thinking" },
    { id: 2, name: "Importance of Critical Thinking in Everyday Life" },
    { id: 3, name: "  The Role of Questions in Critical Thinking" },
    { id: 4, name: " The Relationship Between Critical Thinking and Problem-Solving" },
    { id: 5, name: " Critical Thinking in Education" },
    { id: 6, name: "  The Role of Critical Thinking in Technology and Media" },
    { id: 7, name: " Building Critical Thinking Skills" },
    { id: 8, name: " Components of Critical Thinking" },
    { id: 9, name: "Quiz" },
  ];

   const totalChapters = modules.length;  // Total number of modules
   
     // Step 1: Initialize the state from `localStorage`
     // Step 2: Fallback to empty object if not found in localStorage
     
     const courseKey = "criticalModules"; // Unique key for this course
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
            <h2 className="m">CRITICAL THINKING</h2>
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
           "Module 1:   Understanding Critical Thinking",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">CRITICAL THINKING</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Critical thinking is the intellectual discipline of actively analyzing, synthesizing, and evaluating information to guide beliefs or actions. It goes beyond merely accepting facts at face value, requiring an individual to question, interpret, and validate the information they encounter. For example, instead of simply accepting a claim about climate change, a critical thinker examines the data, considers alternative viewpoints, and assesses the credibility of the sources. This skill fosters deeper understanding and enables individuals to make logical, well-informed decisions in personal, academic, and professional settings.        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/dItUGF8GdTw?si=qoe9APHeou-idcEc"
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
            "Module 2:  Importance of Critical Thinking in Everyday Life",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE OF CRITICAL THINKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Critical thinking is essential in daily decision-making and problem-solving. It enables individuals to weigh the pros and cons of choices, such as purchasing a product, voting on an issue, or planning personal finances. For instance, when faced with a persuasive advertisement, critical thinking helps identify emotional appeals or misleading claims. It also promotes healthier communication by encouraging empathy and understanding during disagreements, ensuring conflicts are resolved constructively rather than impulsively.      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/bYoLHCT6P6U?si=dPqaKlsKoNPLzrXR"
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
            "Module 3:   The Role of Questions in Critical Thinking",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">THE ROLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Asking questions is the cornerstone of critical thinking. Questions encourage deeper inquiry and lead to better understanding. For example, in scientific research, asking “What evidence supports this hypothesis?” or “Are there alternative explanations?” ensures robust conclusions. Similarly, in everyday life, questions like “What are the consequences of this decision?” or “Who benefits from this information?” help uncover hidden motives or potential biases. Good questioning promotes curiosity, challenges assumptions, and leads to well-rounded conclusions.      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/vNDYUlxNIAA?si=4xjF-v6xCIbXpbVA"
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
            "Module 4:  The Relationship Between Critical Thinking and Problem-Solving",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">THE RELATIONSHIP</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Critical thinking and problem-solving go hand in hand, with the former providing the framework for the latter. For example, when tackling a workplace issue, such as improving team productivity, critical thinking helps identify the root causes (e.g., communication gaps or resource shortages). It then evaluates potential solutions based on feasibility, effectiveness, and impact. This logical and creative approach ensures that the chosen solution addresses the problem efficiently and sustainably.       </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/UvsZwz9bJl0?si=He-xyOVmTHhOA8Gj"
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
            "Module 5:  Critical Thinking in Education",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">CRITICAL THINKING IN EDUCATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Education systems play a crucial role in fostering critical thinking skills. Activities like debates, group discussions, and problem-based learning encourage students to analyze and evaluate information. For example, a history lesson might involve examining primary sources to understand different perspectives on a historical event. Similarly, science experiments teach students to question hypotheses and draw conclusions based on evidence. By practicing critical thinking in school, students develop the skills needed to excel academically and navigate real-world challenges effectively.       </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/0hoE8mtUS1E?si=8X45pR0iFqQig4Go"
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
            "Module 6:   The Role of Critical Thinking in Technology and Media",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">TECHNOLOGY AND MEDIA</h1>
      <p className="per" style={{fontSize:'18px'}}>
      In the digital age, where information is abundant but not always reliable, critical thinking is essential. It helps individuals evaluate the credibility of online content and identify misinformation. For example, before sharing a news article, a critical thinker examines the source’s credibility, checks for supporting evidence, and considers potential biases. This skill also applies to evaluating products or services, such as reading reviews critically to identify genuine feedback versus promotional content. Critical thinking ensures informed decisions in an increasingly complex digital landscape.         </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/eBAdfJye2QU?si=QSaspRwSCw8F7sVs"
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
            "Module 7:  Building Critical Thinking Skills",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">BUILDING CRITICAL THINKING SKILLS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Active Reading: Engaging with texts by questioning the author’s arguments and evidence.      
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Engaging in Discussions: Debating and discussing ideas with others to gain diverse perspectives.     
       </p>
       <p className="per" style={{fontSize:'18px'}}>
        3.Reflective Practice: Reviewing past decisions to identify strengths and areas for improvement.     
       </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/9QACXuTGt_k?si=xmZoMByeCadDsDNN"
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
            "Module 8:  Components of Critical Thinking",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">COMPONENTS OF CRITICAL THINKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Observation: Gathering relevant data through attentive listening, reading, or observing situations.    
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Analysis: Identifying patterns, relationships, and inconsistencies within the data.    
       </p>
       <p className="per" style={{fontSize:'18px'}}>
       3.Inference: Drawing logical conclusions based on available evidence.    
       </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CRITICAL THINKING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/TgLpejjb1d8?si=5GMeNq2M_A-ndLEJ"
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
      <h1 id="hi">CRITICAL THINKING Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/cric-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Cric;
