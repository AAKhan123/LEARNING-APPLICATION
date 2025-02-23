import React, { useState, useEffect } from "react";
import "./cult.css";
import { Link } from "react-router-dom";

const Cult = () => {
  const modules = [
    { id: 1, name: "Understanding Cultural Awareness" },
    { id: 2, name: " Importance of Cultural Awareness in Daily Life" },
    { id: 3, name: " The Role of History in Cultural Awareness" },
    { id: 4, name: " Overcoming Stereotypes and Prejudices" },
    { id: 5, name: "   Cultural Awareness in Communication" },
    { id: 6, name: "  The Role of Education in Cultural Awareness" },
    { id: 7, name: "   Cultural Awareness in the Workplace" },
    { id: 8, name: " Benefits of Cultural Awareness" },
    { id: 9, name: "Quiz" },
  ];

   const totalChapters = modules.length;  // Total number of modules
   
     // Step 1: Initialize the state from `localStorage`
     // Step 2: Fallback to empty object if not found in localStorage
     
     const courseKey = "cultModules"; // Unique key for this course
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
            <h2 className="m">CULTURUL AWARENESS </h2>
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
           "Module 1: Understanding Cultural Awareness",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">CULTURAL AWARENESS</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Cultural awareness is the knowledge and understanding of the values, practices, and traditions that define a group of people. It involves recognizing that cultural differences exist and appreciating those differences without judgment. For example, certain cultures may value collectivism, prioritizing family or community needs over individual goals, while others may emphasize individualism and personal achievement. Cultural awareness also includes understanding that culture influences how people communicate, celebrate, and solve problems. Developing this awareness allows individuals to adapt and thrive in multicultural environments.          </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT CULTURAL AWARENESS WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/oIFQFq0isFE?si=l2n6aP2UjaCuymCj"
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
            "Module 2:   Importance of Cultural Awareness in Daily Life",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE OF CULTURUL AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Cultural awareness enhances interactions in today’s interconnected world. For instance, understanding another person's cultural norms can prevent unintentional disrespect. If a guest declines food multiple times due to cultural politeness, someone aware of this custom might offer the food again to show hospitality. It is particularly relevant in travel, education, and work settings, where diverse groups come together. Cultural awareness improves relationships, reduces misunderstandings, and fosters inclusivity in daily interactions.      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/seCkNSgMrQE?si=BMdxEwhYKm9zX9B9"
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
            "Module 3:  The Role of History in Cultural Awareness",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">THE ROLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Understanding the historical events that shaped a culture provides context for its present practices and beliefs. For instance, learning about the colonization of African nations helps explain certain cultural dynamics and struggles for identity. Similarly, understanding the impact of migration in countries like the United States helps appreciate its multiculturalism. Historical awareness reduces stereotypes by highlighting the unique experiences that have influenced a culture’s evolution, fostering empathy and deeper connections.         </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/lK3oqU2WNY0?si=a2XYa4rHyMyk7wGZ"
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
            "Module 4: Overcoming Stereotypes and Prejudices",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">STEREOTYPES AND PREJUDICES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Stereotypes are oversimplified views about a group, while prejudices involve unjustified attitudes or discrimination. For example, assuming all people from a certain culture behave in a specific way limits understanding and perpetuates misunderstandings. Cultural awareness helps break these barriers by encouraging individuals to learn about people as individuals rather than basing opinions on generalizations. Interactions, education, and exposure to diverse perspectives dismantle prejudices and build mutual respect.         </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/7P0iP2Zm6a4?si=XNtbt1x4twwKjBFV"
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
            "Module 5:   Cultural Awareness in Communication",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">COMMUNICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Effective communication across cultures requires understanding differences in language, gestures, and etiquette. For example, in Japan, silence during a conversation may indicate thoughtfulness, while in other cultures, it might be seen as disinterest. Similarly, gestures like nodding or pointing have different meanings across cultures. Cultural awareness equips individuals to navigate these differences, promoting respectful and effective communication that avoids misunderstandings and strengthens relationships.      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/ewjFRx4Pwp4?si=FsdUDBV-Ily5yCfU"
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
            "Module 6:  The Role of Education in Cultural Awareness",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">THE ROLE OF EDUCATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Education introduces individuals to diverse cultures and promotes tolerance and understanding. Schools can incorporate lessons on global traditions, languages, and cultural practices through exchange programs, cultural festivals, or inclusive curricula. For instance, students learning about Indigenous cultures may explore their connection to nature and sustainable practices. Early exposure to cultural diversity through education nurtures open-mindedness and prepares individuals to thrive in multicultural environments.
            </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/rKC-cWnzpyc?si=hAUweaA406FHgkRY"
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
            "Module 7:   Cultural Awareness in the Workplace",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">WORKPLACE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      In multicultural workplaces, cultural awareness fosters inclusivity, teamwork, and productivity. For example, understanding a colleague's need to observe religious practices, such as fasting during Ramadan, shows respect and creates a supportive environment. Companies that embrace cultural diversity benefit from broader perspectives, creativity, and innovation. Cultural awareness also reduces workplace conflicts by addressing differences in communication styles or work ethics, ensuring harmony among team members.
            </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURUL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/HOIo-EHOXmk?si=V0K_9K6Z7fgv0cTu"
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
            "Module 8:  Benefits of Cultural Awareness",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">BENEFITS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Enhanced Communication: Understanding cultural differences in language and gestures improves clarity in interactions.           
       </p>
       <p className="per" style={{fontSize:'18px'}}>
       2.Increased Empathy: Awareness of others’ cultural backgrounds fosters compassion and reduces biases.           
       </p>
       <p className="per" style={{fontSize:'18px'}}>
       3.Stronger Relationships: Respecting cultural norms strengthens personal and professional connections.          
       </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT CULTURAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/fPS8L4rlu-U?si=qy-DxGaD2vc3SZE6"
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
      <h1 id="hi">Culturul Awareness Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/cult-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Cult;
