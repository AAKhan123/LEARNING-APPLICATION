import React, { useState, useEffect } from "react";
import "./prob.css";
import { Link } from "react-router-dom";

const Prob = () => {
  const modules = [
    { id: 1, name: "Introduction to Problem Solving" },
    { id: 2, name: "Key Components of Problem Solving" },
    { id: 3, name: "Tools and Strategies for Problem Solving" },
    { id: 4, name: "Real-Life Applications of Problem Solving" },
    { id: 5, name: "Challenges in Problem Solving" },
    { id: 6, name: "Developing Good Problem-Solving Habits" },
    { id: 7, name: "Benefits of Learning Problem Solving Early" },
    { id: 8, name: "Quiz" },
  ];

 const totalChapters = modules.length;  // Total number of modules
 
   // Step 1: Initialize the state from `localStorage`
   // Step 2: Fallback to empty object if not found in localStorage
   
   const courseKey = "probModules"; // Unique key for this course
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
            <h2 className="m">PROBLEM SOLVING</h2>
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
           "Module 1: Introduction to Problem Solving",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">WHAT IS PROBLEM SOLVING?</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Problem solving is the ability to identify challenges and find effective solutions. It’s a key skill that helps in everyday life, from resolving conflicts to fixing mistakes or completing tasks. Strong problem-solving skills involve critical thinking, creativity, and decision-making. Whether it’s figuring out how to fix a broken toy or choosing the best way to study for a test, problem solving builds confidence and independence.
        </p><br/>
        <h1 id="hi">Why Problem Solving Matters?</h1>
        <ul id="oll">
          <li>1.Helps make better decisions in tough situations.</li>
          <li>2.Encourages creative and logical thinking.</li>
          <li>3.Builds resilience by teaching how to overcome challenges.</li>
          <li>4.Improves teamwork and communication when solving problems together.</li>
        </ul><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/1VqMViLFbYY?si=TfXMZ6LbZexHea8D"
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
            "Module 2: Key Components of Problem Solving",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. IDENTIFYING THE PROBLEM</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Understanding what the problem really is can make solving it easier. Sometimes, what seems like the problem is just a symptom of a deeper issue. For example, if homework is piling up, the real issue might be poor time management.
      </p><br/>
      <h1 id="hi">2.BREAKING DOWN THE PROBLEM</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Large problems can feel overwhelming, but breaking them into smaller, manageable pieces makes them easier to tackle. This step-by-step approach ensures progress and reduces stress.
      </p><br/>
      <h1 id="hi">3. BRAINSTORMING SOLUTIONS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Thinking of as many solutions as possible helps find the best option. Creativity and open-mindedness are key during this phase—sometimes the best ideas come from trying something new.
      </p><br/>
      <h1 id="hi">4. EVALUATING OPTIONS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Each possible solution should be evaluated based on feasibility, effectiveness, and potential outcomes. Asking questions like “What happens if this doesn’t work?” helps make informed decisions.
      </p><br/>
      <h1 id="hi">5. TAKING ACTIONS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Once the best solution is chosen, it’s time to act. Implementing the solution with focus and confidence increases the likelihood of success.
      </p><br/>
      <h1 id="hi">6. LEARNING FROM RESULTS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Reflecting on the outcome teaches valuable lessons, even if the solution didn’t work as planned. Problem solving is as much about learning as it is about fixing.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/0pXTk7s08TY?si=cuNHI9kh2uH6xkZC"
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
            "Module 3: Tools and Strategies for Problem Solving",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. USING LOGIC AND CRITICAL THINKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Logic helps break down problems into facts and steps. Critical thinking involves questioning assumptions, looking at evidence, and thinking objectively.
      </p><br/>
      <h1 id="hi">2. THE 5 STEPS PROBLEM SOLVING MODEL ARE :</h1>
      <p className="per" style={{fontSize:'18px'}}>There are many ways to track a budget:</p><br/>
      <ul>
        <li>1.Define the Problem: Be clear about what’s wrong.</li>
        <li>2.Explore Solutions: Think of multiple ways to solve the issue.</li>
        <li>3.Evaluate Options: Choose the best solution after weighing the pros and cons.</li>
        <li>4.Implement the Solution: Take action to fix the problem.</li>
        <li>5.Review Results: Check if the problem is resolved and learn from the experience.</li>
      </ul><br/>
      <h1 id="hi">3. CREATIVITY AND INNOVATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Creative thinking opens the door to unconventional solutions. For example, solving a storage problem might involve repurposing old containers instead of buying new ones.
      </p><br/>
      <h1 id="hi">4. COMMUNICATION AND TEAMWORK</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Working with others to solve problems teaches collaboration. Sharing ideas and listening to different perspectives often leads to better solutions.
      </p><br/>
      <h1 id="hi">5. USING TOOLS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Simple tools like flowcharts, checklists, or mind maps can help visualize the problem and organize ideas.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/QOjTJAFyNrU?si=YUP4qAVGesu7RxJe"
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
            "Module 4: Real-Life Applications of Problem Solving",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. EVERYDAY CHALLENGES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Problem solving is used in daily life to manage time, resolve arguments, or even plan meals. For example, if there’s no milk for breakfast, deciding to substitute with juice or cereal bars is a quick solution.
      </p><br/>
      <h1 id="hi">2. SCHOOLWORKS AND PROJECTS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Whether it’s solving a tricky math problem or working on a group project, problem solving helps in finding the right approach to complete tasks effectively.
      </p><br/>
      <h1 id="hi">3. OUTDOOR AND SURVIVAL SITUATIONS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        In the wild, problem solving might involve finding shelter, starting a fire, or navigating without a map.
        </p><br/>
        <h1 id="hi">4. FUTURE CARRER SKILLS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Employers highly value problem solvers who can think critically and adapt to new challenges. Skills learned early prepare kids for real-world responsibilities.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/CdVCNjX6pc0?si=5t6b8eCGaUgfZBvP"
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
            "Module 5: Challenges in Problem Solving",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. OVERTHINKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Focusing too much on details can delay action. Simplifying the problem often helps.
      </p><br/>
      <h1 id="hi">2. FEAR OF FAILURE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Worrying about mistakes can stop people from trying solutions. Understanding that failure is a part of learning encourages persistence.
      </p><br/>
      <h1 id="hi">3. LACK OF RESOURCES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Sometimes, not having enough tools or information can make solving problems harder. Improvising and thinking creatively can help overcome these limitations.
      </p><br/>
      <h1 id="hi">
      TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/QeLfPya5cTQ?si=AxUkWEx_GKiFOLpX"
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
            "Module 6: Developing Good Problem-Solving Habits",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">1. STAY CALM</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Keeping a cool head allows you to think clearly and avoid making rushed decisions.
      </p><br/>
      <h1 id="hi">2. ASK FOR HELP</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Seeking advice from parents, teachers, or friends can provide new perspectives and solutions.
      </p><br/>
      <h1 id="hi">3. PRACTISE WITH PUZZLE AND GAMES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Activities like Sudoku, riddles, or building blocks improve critical thinking and problem-solving skills.
      </p><br/>
      <h1 id="hi">4. BE OPEN TO LEARNING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Each problem solved adds to your experience and helps you tackle bigger challenges in the future.
      </p><br/>
      <h1 id="hi">
      TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/0YeNFAdZBAg?si=HMBkLnvsCkxacWFH"
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
            "Module 7: Benefits of Learning Problem Solving Early",
            <><br/><br/>
             <div className="art">
             <h1 id="hi">ADVANTAGES:</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1. Encourages self-confidence and independence.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
        2. Teaches resilience and adaptability.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
        3. Builds creativity and logical thinking.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
        4. Prepares kids for real-life challenges
      </p>
      <br/>
      <h1 id="hi">
      TO UNDERSTAND MORE ABOUT PROBLEM SOLVING WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/AKciJ4nwFwQ?si=8c-72_uOvFiHZOm-"
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
            "Module 8: QUIZES ",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">Problem Solving Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/per_quize" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Prob;
