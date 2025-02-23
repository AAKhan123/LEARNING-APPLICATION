import React, { useState, useEffect } from "react";
import "./awar.css";
import { Link } from "react-router-dom";

const Awar = () => {
  const modules = [
    { id: 1, name: "Understanding Career Awareness" },
    { id: 2, name: "Importance of Career Exploration" },
    { id: 3, name: " Skills and Interests Assessment" },
    { id: 4, name: " Role of Education in Career Building" },
    { id: 5, name: " Career Pathways and Progression" },
    { id: 6, name: "  Importance of Soft Skills" },
    { id: 7, name: "Role of Technology in Careers" },
    { id: 8, name: " Setting Goals and Career Planning" },
    { id: 9, name: "Quiz" },
  ];

  

   const totalChapters = modules.length;  // Total number of modules
   
     // Step 1: Initialize the state from `localStorage`
     // Step 2: Fallback to empty object if not found in localStorage
     
     const courseKey = "careerModules"; // Unique key for this course
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
            <h2 className="m">CAREER AWARENESS</h2>
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
           "Module 1:  Understanding Career Awareness",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">CAREER AWARENESS</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Career awareness involves gaining knowledge about different job options, the skills they require, and how they align with individual interests and strengths. It is not just about choosing a job but about understanding the broader concept of careers as evolving journeys. Career awareness starts early, often in schools, by introducing students to professions through activities, career days, and guest speakers. This early exposure helps individuals connect their abilities to real-world opportunities and develop a sense of purpose regarding their education and future.Career awareness involves gaining knowledge about different job options, the skills they require, and how they align with individual interests and strengths. It is not just about choosing a job but about understanding the broader concept of careers as evolving journeys. Career awareness starts early, often in schools, by introducing students to professions through activities, career days, and guest speakers. This early exposure helps individuals connect their abilities to real-world opportunities and develop a sense of purpose regarding their education and future.
        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT CARRER AWARENESS WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/r-edeLinzhw?si=UF20Jnrx_LSdTTUB"
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
            "Module 2:  Importance of Career Exploration",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE OF CAREER AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Exploring various careers allows individuals to discover what they enjoy and excel at, helping them make informed decisions about their future. Career exploration also prevents "career traps," where people choose paths without fully understanding their implications. For example, someone interested in animals might explore roles like veterinarian, zoologist, or wildlife conservationist, each requiring different skills and education. Through internships, job shadowing, and informational interviews, individuals gain hands-on experience and a clearer picture of what each career entails.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/P5Ze05LStLA?si=1sgPtYIJM1i1RZg7"
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
            "Module 3:  Skills and Interests Assessment",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">SKILLS AND INTEREST</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Career awareness begins with self-assessment. Tools like aptitude tests, career quizzes, and personality assessments help identify strengths and preferences. For example, the Myers-Briggs Type Indicator (MBTI) categorizes personality traits that align with specific careers. Similarly, interest inventories, like Holland’s Code, match personal interests to job environments. Recognizing these attributes guides individuals toward roles where they are likely to thrive, such as technical fields for analytical minds or creative fields for artistic thinkers.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/scgqCyxe1QY?si=xCJ5fkmuRzSWwmlS"
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
            "Module 4: Role of Education in Career Building",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">ROLE OF EDUCATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Education serves as the cornerstone of career success, and understanding its relevance makes learning purposeful. For example, a student aspiring to be an engineer needs to focus on math and science, while a future journalist benefits from excelling in language and writing. Career awareness also highlights alternative education pathways, like vocational training, certifications, and online courses. In addition to academics, extracurricular activities like clubs, sports, or volunteering also develop skills applicable to future careers.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/a6g8y3EDHkw?si=RwjHaCZHB4aRYVHG"
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
            "Module 5:  Career Pathways and Progression",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">CAREER PATHWAYS AND PROGRESSION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Every career has a progression, and understanding this pathway helps individuals set realistic goals. For example, a career in healthcare might start as a nursing assistant, advance to a registered nurse, and eventually lead to becoming a nurse practitioner. In technology, one might begin as an intern, move to a junior developer role, and progress to senior-level positions or management. Career awareness emphasizes the importance of lifelong learning and adaptability, as job roles evolve with industry demands.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/NX6qIbflNyY?si=LpM20JmQZyjfW3bp"
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
            "Module 6:  Importance of Soft Skills",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">IMPORTANCE OF SOFT SKILLS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technical skills get you hired, but soft skills help you excel. Communication, teamwork, time management, and adaptability are universally valued across professions. For example, strong communication is crucial for teachers, project managers, and healthcare professionals. Career awareness helps individuals recognize the importance of developing these skills through activities like group projects, debates, and leadership roles. Workshops and mentorship programs also offer opportunities to refine soft skills, making individuals more prepared for professional environments.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/OSZ9NjSLULg?si=jYHVURU_82vW1iMr"
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
            "Module 7:   Role of Technology in Careers",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">ROLE OF TECHNOLOGY IN CAREERS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Technology is reshaping careers across industries, making tech literacy a vital skill. Career awareness involves understanding how technology impacts various fields and the need to adapt. For example, artificial intelligence and data analytics are transforming healthcare, finance, and marketing. Learning to use tools like Excel, CAD software, or programming languages gives individuals a competitive edge. Technology also facilitates remote work and global collaboration, expanding career opportunities beyond geographical boundaries.
        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/f45Lqucko-4?si=U6gbQkSLZvS4EeD1"
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
            "Module 8: Setting Goals and Career Planning",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">SETTING GOAL AND CAREER PLANNING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Career planning involves setting clear, achievable goals and mapping out the steps to reach them. For instance, a student interested in law might set short-term goals like joining a debate club and researching colleges with strong pre-law programs. Long-term goals might include earning a law degree and specializing in a particular area. Career awareness teaches the importance of regularly reviewing and updating career plans to adapt to changes in interests, skills, or industry trends. It encourages a proactive approach to personal and professional growth.
        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CAREER AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/L4N1q4RNi9I?si=3jS2nHcafjdxJU_6"
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
      <h1 id="hi">Career Awareness Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/awar-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Awar;
