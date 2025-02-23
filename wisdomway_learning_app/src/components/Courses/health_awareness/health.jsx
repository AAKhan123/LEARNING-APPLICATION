import React, { useState, useEffect } from "react";
import "./health.css";
import { Link } from "react-router-dom";

const Health = () => {
  const modules = [
    { id: 1, name: "Understanding Health and Wellness" },
    { id: 2, name: "Importance of Physical Health" },
    { id: 3, name: "  Role of Nutrition in Wellness" },
    { id: 4, name: " Mental Health and Emotional Wellness" },
    { id: 5, name: "  Importance of Regular Exercise" },
    { id: 6, name: "  Stress Management for Wellness" },
    { id: 7, name: "  Preventative Health Care" },
    { id: 8, name: " Balancing Work, Life, and Wellness" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "healthModules"; // Unique key for this course
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
            <h2 className="m">HEALTH AND AWARENESS</h2>
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
           "Module 1:   Understanding Health and Wellness",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">HEALTH AND WELLNESS</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Health refers to the state of being free from illness or injury, while wellness takes a broader perspective, focusing on the active pursuit of a balanced and fulfilling life. Wellness incorporates various dimensions—physical, mental, emotional, social, and spiritual—that contribute to overall well-being. For example, someone might be physically healthy but still struggle with emotional wellness due to unmanaged stress. Recognizing the interplay of these dimensions helps individuals adopt holistic approaches to maintain and improve their quality of life.          </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/8PH4JYfF4Ns?si=6yJAeP9MqOEqBaPI"
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
            "Module 2:   Importance of Physical Health",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE OF PHYSICAL HEALTH</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Physical health is the foundation for overall wellness, enabling the body to function efficiently. Regular physical activity, such as brisk walking, swimming, or strength training, strengthens muscles, improves heart health, and enhances flexibility. Maintaining a healthy weight and eating a nutrient-rich diet prevent chronic diseases like diabetes, heart disease, and arthritis. Additionally, prioritizing adequate sleep—7 to 9 hours for most adults—helps regulate hormones, repair tissues, and improve concentration. Investing in physical health boosts energy levels, productivity, and longevity.          </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/37UhELFvPec?si=NPXHSP26XmjEftus"
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
            "Module 3:    Role of Nutrition in Wellness",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">THE ROLE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Good nutrition fuels the body, providing energy and supporting bodily functions. A balanced diet includes macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals). For instance, leafy greens and fruits provide essential antioxidants that fight free radicals, while proteins repair tissues and build muscles. Poor eating habits, such as overconsumption of processed foods or sugary drinks, can lead to weight gain, fatigue, and chronic illnesses. Mindful eating, which involves paying attention to hunger cues and savoring meals, encourages better food choices and overall wellness.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/ziOpBWFPlyI?si=9t9eln0Fi2T9SRVs"
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
            "Module 4:  Mental Health and Emotional Wellness",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">MENTAL HEALTH AND EMOTIONAL WELLNESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Mental health encompasses cognitive and emotional well-being, influencing how individuals think, feel, and behave. Emotional wellness involves recognizing, expressing, and managing feelings constructively. For example, someone practicing mindfulness might use deep breathing to calm themselves during stressful situations. Building strong coping mechanisms, such as journaling, meditation, or seeking therapy, helps manage anxiety and depression. Mental health stigma often prevents people from seeking help, but awareness and support systems encourage individuals to prioritize and address their emotional needs.         </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/GCtQxghI_l0?si=7PExQdf0M00aZTEd"
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
            "Module 5: Importance of Regular Exercise",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">REGULAR EXERCISE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Exercise is not just about physical fitness; it profoundly impacts mental and emotional health as well. Activities like jogging, cycling, or yoga release endorphins, which elevate mood and reduce stress. Strength training improves bone density, while aerobic exercises enhance cardiovascular health. Even moderate activity, like a daily 30-minute walk, boosts energy and reduces the risk of chronic diseases. Tailoring exercise routines to personal preferences makes them enjoyable and sustainable, ensuring long-term health benefits.            </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/MvG7l8KTlKU?si=Dy1y9tdmPv1nep0D"
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
            "Module 6:  Stress Management for Wellness",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">STRESS MANAGEMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Chronic stress can take a significant toll on both body and mind, leading to health issues like high blood pressure, weakened immunity, and sleep disturbances. Effective stress management techniques include practicing mindfulness, time management, and engaging in hobbies. For example, gardening can serve as both a stress reliever and a physical activity. Identifying stress triggers and addressing them proactively prevents burnout. Developing a work-life balance and setting realistic expectations fosters resilience and emotional stability.            </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/ssyefDOWra4?si=lL2LtHqDMK4vCRS-"
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
            "Module 7:   Preventative Health Care",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">PREVENTATIVE HEALTH CARE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Preventative health care focuses on identifying and addressing potential health problems before they become serious. Regular medical check-ups, vaccinations, and screenings (e.g., mammograms, cholesterol tests) are crucial for early detection of diseases. For instance, routine dental visits prevent cavities and gum disease, while flu vaccinations reduce the risk of seasonal illness. By staying proactive, individuals can avoid complications, reduce medical expenses, and maintain a higher quality of life.      
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/ftJyvn_5dF0?si=dIANRS9pebrLOMki"
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
            "Module 8:   Balancing Work, Life, and Wellness",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">BALANCING WORK,LIFE,AND WELLNESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Achieving balance between professional responsibilities, personal life, and self-care is key to maintaining wellness. Overworking can lead to burnout, while neglecting work can cause financial and emotional stress. Time management techniques, such as prioritizing tasks and setting boundaries, help individuals allocate time for work, relaxation, and social activities. Incorporating wellness practices, like a short meditation during lunch breaks or a family walk after dinner, ensures that health remains a priority despite busy schedules. This balance enhances productivity, satisfaction, and overall happiness.      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT HEALTH AND AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/O0yxJH2i0DE?si=9Cf_cVsriwnY8kn0"
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
      <h1 id="hi">Health And Awareness Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/health-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Health;
