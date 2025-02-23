import React, { useState, useEffect } from "react";
import "./comm.css";
import { Link } from "react-router-dom";

const Comm = () => {
  const modules = [
    { id: 1, name: "Introduction to Communication and Creativity" },
    { id: 2, name: "Key Components of Communication" },
    { id: 3, name: "Key Components of Creativity" },
    { id: 4, name: "Developing Communication and Creativity Skills" },
    { id: 5, name: "Real-Life Applications of Communication and Creativity" },
    { id: 6, name: "Benefits of Strong Communication and Creativity Skills" },
    { id: 7, name: "Challenges in Communication and Creativity" },
    { id: 8, name: "Tips to Improve Communication and Creativity" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "commModules"; // Unique key for this course
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
            <h2 className="m">COMMUNICATION & CREATIVITY</h2>
            <hr />
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
            "Module 1: Introduction to Communication and Creativity",
            <><br /><br />
              <div className="art">
                <h1 id="hi">WHAT IS COMMUNICATION & CREATIVITY?</h1>
                <p className="per" style={{ fontSize: '18px' }}>
                  Communication and creativity are essential skills that help express ideas, share knowledge, and solve problems effectively. Communication involves using words, body language, and technology to connect with others, while creativity is about thinking outside the box to create something new or innovative. Together, these skills empower individuals to collaborate, inspire, and bring unique perspectives to the table.
                </p><br />
                <h1 id="hi">WHY COMMUNICATION & CREATIVITY SKILLS MATTERS?</h1>
                <ul id="oll">
                  <li>1.Communication helps build relationships, share knowledge, and work as a team.</li>
                  <li>2.Creativity sparks innovation, promotes problem-solving, and leads to fresh ideas.</li>
                  <li>3.Combined, they foster confidence, adaptability, and the ability to think critically.</li>
                </ul><br />
                <h1 id="hi">
                  TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
                </h1>
                <div className="vid">
                  <iframe
                    width={560}
                    height={350}
                    src="https://www.youtube.com/embed/OK97eatxBOc?si=r7TT6vUv3NyDXW7A"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen=""
                  />
                </div>
                <br />
              </div>
            </>
          )}

          <br />
          <hr />
          <br />

          {/* Additional modules can follow in similar format */}
           {/* Module 2 */}
           {renderModule(
            2,
            "Module 2:Key Components of Communication",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. VERBAL COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Using clear language to express ideas effectively. This includes speaking confidently, using appropriate tone, and listening actively.
      </p><br/>
      <h1 id="hi">2. NON-VERBAL COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Body language, facial expressions, and gestures that convey messages without words. Understanding non-verbal cues helps strengthen interactions.
      </p><br/>
      <br/>
      <h1 id="hi">3. WRITTEN COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Expressing thoughts through writing, such as letters, emails, or creative stories. Strong writing skills are essential for both formal and creative purposes.
      </p><br/>
      <h1 id="hi">4. ACTIVE LISTENING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Paying attention, asking questions, and responding thoughtfully. Good listeners build trust and show respect in conversations.
      </p><br/>
      <h1 id="hi">5. DIGITAL COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Using tools like social media, emails, and video calls to share ideas. Knowing how to communicate respectfully and effectively online is crucial in today’s world.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/wVSnqL48MAM?si=u-2_-B4xkkHOdd3o"
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
            "Module 3: Key Components of Creativity",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. THINKING OUTSIDE THE BOX</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Creativity involves exploring new perspectives and challenging traditional ideas to find unique solutions or create something original.
      </p><br/>
      <h1 id="hi">2. INNOVATION AND INVENTION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Finding ways to improve existing ideas or developing something entirely new, such as an invention, art piece, or story.
      </p><br/>
      <h1 id="hi">3. EXPRESSION THROUGH ART</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Using music, drawing, painting, writing, or performance to communicate emotions and ideas in a way that resonates with others.
      </p><br/>
      <h1 id="hi">4. PROBLEM SOLVING WITH CREATIVITY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Applying creative thinking to resolve challenges, like designing a project or coming up with an unconventional solution to a problem.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/M6qGQ6Ktu_k?si=YUCCjRrf62BJ1qB0"
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
            "Module 4:  Developing Communication and Creativity Skills",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. FOR COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Practice Public Speaking:  Start small with group presentations or storytelling to build confidence.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Role-Playing Activities:  Simulate real-life conversations, such as ordering food or introducing yourself to someone new.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Debate and Discussion:  Engaging in debates helps organize thoughts and present them logically.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      4.Learn to Listen:  Practice active listening by summarizing what someone else has said.
      </p><br/>
      <h1 id="hi">2. FOR CREATIVITY</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Explore Art and Music: Engage in drawing, painting, crafting, or playing an instrument.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Creative Writing: Write stories, poems, or scripts to express thoughts and emotions.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Brainstorming Games: Challenge yourself to come up with as many ideas as possible for a given problem or scenario.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      4.DIY Projects: Create something from scratch, such as a craft, recipe, or experiment.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/srn5jgr9TZo?si=xmik7b7ijSH2hnVv"
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
            "Module 5: Real-Life Applications of Communication and Creativity",
            <><br/><br/>
             <div className="art">
             <h1 id="hi">1. IN SCHOOL</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Presenting projects in class with confidence.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Working on group assignments by sharing ideas and listening to teammates.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Writing essays, poems, or creative stories.
      </p>
      <br/>
      <h1 id="hi">2. IN DAILY LIFE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Resolving conflicts by communicating openly and finding solutions creatively.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Expressing emotions and ideas clearly to family and friends.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Designing or crafting items for personal use or gifts.
      </p>
      <br/>
      <h1 id="hi">3. IN FUTURE CAREER</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Communicating effectively in interviews and teamwork situations.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Using creativity to innovate in any field, from business to technology to the arts.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Building strong relationships with colleagues and clients.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/I6IAhXM-vps?si=hPuPIh2boKhSYVU3"
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
            "Module 6: Benefits of Strong Communication and Creativity Skills",
            <><br/><br/>
              <div className="art">
              <h1 id="hi">BENEFITS</h1>
             <p className="per" style={{fontSize:'18px'}}>
                 1.Builds Confidence: Communicating effectively and thinking creatively boosts self-esteem.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
                2.Enhances Problem-Solving: Combining clear communication with creativity leads to better solutions.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
                3.Improves Relationships: Effective communication fosters trust and understanding.
            </p><p className="per" style={{fontSize:'18px'}}>
                4.Encourages Innovation: Creative minds are always ready to bring fresh ideas to the table.
            </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/0gUgm4zB2F4?si=2qyQWqYpXHOxZ5Ac"
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
            "Module 7: Challenges in Communication and Creativity",
            <><br/><br/>
             <div className="art">
             <h1 id="hi">1. FOR COMMUNICATION</h1>
            <p className="per" style={{fontSize:'18px'}}>
            1.Stage Fright: Fear of speaking in public can be overcome with practice and preparation.
             </p>
            <p className="per" style={{fontSize:'18px'}}>
            2.Miscommunication: Misunderstanding messages can be reduced by asking clarifying questions.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
            3.Digital Overload: Learning to balance online and in-person communication is essential.
            </p>
            <br/>
            <h1 id="hi">2. FOR CREATIVITY</h1>
            <p className="per" style={{fontSize:'18px'}}>
            1.Creative Blocks: Feeling stuck is normal and can be overcome by trying new activities or taking breaks.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
            2.Fear of Judgment: Confidence grows by focusing on the joy of creation rather than external opinions.
            </p>
            <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/tTddgVZx8Ig?si=PiPN6KNdvNaYKvfj"
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
            "Module 8: Tips to Improve Communication and Creativity",
            <><br/><br/>
              <div className="art">
              <h1 id="hi">1. FOR COMMUNICATION</h1>
            <p className="per" style={{fontSize:'18px'}}>
            1.Use simple, clear language to express your ideas.
             </p>
            <p className="per" style={{fontSize:'18px'}}>
            2.Practice speaking in front of a mirror or with a trusted friend.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
            3.Focus on listening actively and understanding others’ perspectives.
            </p>
            <br/>
            <h1 id="hi">2. FOR CREATIVITY</h1>
            <p className="per" style={{fontSize:'18px'}}>
            1.Keep a journal to jot down ideas and sketches.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
            2.Try new experiences like learning a new skill or visiting inspiring places.
            </p>
            <p className="per" style={{fontSize:'18px'}}>
            3.Surround yourself with creative people to spark inspiration.
            </p>
            <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT COMMUNICATION & CREATIVITY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/I3LcSMYPGsA?si=KhZVS9hvPlR3Uwcz"
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
      <h1 id="hi">Communication and Creativity Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/comm-quize" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}

        </div>
      </div>
    </div>
  );
};

export default Comm;
