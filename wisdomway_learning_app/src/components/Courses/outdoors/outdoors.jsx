import React, { useState, useEffect } from "react";
import "./outdoors.css";
import { Link } from "react-router-dom";

const Out = () => {
  const modules = [
    { id: 1, name: " Introduction to Outdoor and Survival Skills" },
    { id: 2, name: " Key Components of Outdoor and Survival Skills" },
    { id: 3, name: " Benefits of Outdoor and Survival Skills" },
    { id: 4, name: "Real-Life Applications of Outdoor and Survival Skills" },
    { id: 5, name: "Tools and Resources for Learning Outdoor Skills" },
    { id: 6, name: "Challenges in Developing Outdoor Skills" },
    { id: 7, name: "Tips for Mastering Outdoor and Survival Skills" },
    { id: 8, name: "Advanced Problem-Solving in Survival" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
 
   // Step 1: Initialize the state from `localStorage`
   // Step 2: Fallback to empty object if not found in localStorage
   
   const courseKey = "outdoorsModules"; // Unique key for this course
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
            <h2 className="m">OUTDOOR AND SURVIVAL SKILL</h2>
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
           "Module 1:  Introduction to Outdoor and Survival Skills",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">WHAT IS OUTDOOR AND SURVIVAL SKILLS?</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Outdoor and survival skills are essential for safely exploring nature, handling unexpected situations, and building confidence in challenging environments. These skills range from basic navigation and shelter-building to fire safety and wildlife awareness. They not only ensure safety but also promote self-reliance, problem-solving, and an appreciation for nature. Whether you’re hiking, camping, or dealing with emergencies, mastering these skills prepares you for any adventure.
        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILLS WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/6iIOtq8MF4Y?si=DgLUsdVP2eB_MAAW"
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
            "Module 2: Key Components of Outdoor and Survival Skills",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. BASIC NAVIGATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Using maps and compasses to find your way.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Understanding natural navigation using the sun, stars, and landmarks.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Marking trails with rocks, ribbons, or chalk to avoid getting lost.
      </p><br/>
      <h1 id="hi">2. SHELTER BUILDING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Creating temporary shelters with branches, tarps, or natural materials.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Choosing safe locations away from dangers like falling branches or flooding.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Learning to adapt shelters for different environments, such as deserts or snowy areas.
      </p><br/>
      <h1 id="hi">3. FIRE SAFETY AND BUILDING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Starting a fire using matches, flint, or other tools
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Safely maintaining and extinguishing fires to prevent accidents.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Understanding fire types: signal fires, cooking fires, and warming fires.
      </p><br/>
      <h1 id="hi">4. FIRST AID AND EMERGENCIES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Treating common injuries like cuts, sprains, and burns.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Packing an emergency kit with essentials like a whistle, flashlight, and first aid supplies.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Learning to stay calm and use available resources during crises.
      </p><br/>
      <h1 id="hi">5. WATER COLLECTION AND PURIFICATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Finding natural water sources like rivers, streams, or rain.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Purifying water using boiling, filtration, or purification tablets.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Conserving water to stay hydrated during long treks.
      </p><br/>
      <h1 id="hi">6. FOOD SAFETY AND FOREGING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Identifying safe-to-eat plants, berries, and mushrooms.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Avoiding poisonous or harmful plants and animals.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Storing and cooking food safely to prevent attracting wildlife.
      </p><br/>
      <h1 id="hi">7. WILD LIFE AND AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Recognizing animal tracks and behaviors to stay safe.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Learning how to respond to wildlife encounters calmly.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Respecting habitats and minimizing your impact on nature.
      </p><br/>
      <h1 id="hi">8. WEATHER AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Reading weather patterns and forecasts to prepare for changes.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Recognizing signs of storms, such as dark clouds or temperature drops.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Packing appropriate gear for hot, cold, or rainy weather.
      </p><br/>
      <h1 id="hi">9. TOOLS AND GEAR USAGE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Using tools like pocket knives, multi-tools, and hatchets safely.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Maintaining gear like tents, sleeping bags, and backpacks.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Improvising tools from natural materials when needed.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILL WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/Ry1b0Ce_dVk?si=zgF5xnh1XEK5JeRT"
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
            "Module 3: Benefits of Outdoor and Survival Skills",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1.SAFETY AND PREPAREDNESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Knowing how to handle emergencies, navigate the wild, and build shelters ensures your safety in unpredictable environments.
      </p><br/>
      <h1 id="hi">2. SELF RELIANCE</h1>
      <p className="per" style={{fontSize:'18px'}}>These skills build confidence and independence, teaching you how to solve problems and make decisions without relying on others.</p><br/>
      
      <h1 id="hi">3. TEAM WORK AND LEADERSHIP</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Surviving in groups often requires collaboration, clear communication, and leadership. Outdoor challenges help develop these traits.
      </p><br/>
      <h1 id="hi">4. ENVIRONMENTAL AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Spending time outdoors fosters a deeper appreciation for nature and the importance of conservation.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILL WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/NPh11smLuJk?si=4k9XNYGFHJC7V5Bs"
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
            "Module 4:  Real-Life Applications of Outdoor and Survival Skills",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. CAMPING AND HIKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Setting up tents, starting campfires, and navigating trails are essential for enjoyable outdoor adventures.
      </p>
      <br/>
      <h1 id="hi">2. EMERGENCY SITUATION</h1>
      <p className="per" style={{fontSize:'18px'}}>Knowing how to build a shelter, find water, and stay calm can save lives in survival scenarios like being stranded or lost.</p><br/>
      
      <h1 id="hi">3. EVERYDAY SKILLS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Problem-solving, resourcefulness, and teamwork developed through survival training can be applied to daily life, school, and work.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILL WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/BFheNvvJGoQ?si=ReVw6A-USqBAOuRv"
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
            "Module 5: Tools and Resources for Learning Outdoor Skills",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. WORKSHOPS AND CLASSES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Attend survival skill workshops or nature camps to learn hands-on.
      </p><br/>
      <h1 id="hi">2. BOOKS AND GUIDES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Read survival manuals or outdoor adventure books to expand your knowledge.
      </p><br/>
      <h1 id="hi">3. PRACTISE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Regularly practice skills like fire-building, knot-tying, and map-reading in safe outdoor settings.
      </p><br/>
      <h1 id="hi">4. APPS AND VIDEO</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Use survival apps or watch online tutorials for tips and demonstrations.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SKILLS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/8VrgeLeruFo?si=OlmxDX4g3SK5LY3C"
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
            "Module 6: Challenges in Developing Outdoor Skills",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">1. FEAR OF THE UNKNOWN</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Starting in the wild can be intimidating, but preparation and practice build confidence.
      </p><br/>
      <h1 id="hi">2. WEATHER DEPENDENCIES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Learning to adapt to sudden weather changes is a key part of mastering outdoor skills.
      </p><br/>
      <h1 id="hi">3. LIMITED RESOURSES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Improvising tools and solutions in resource-scarce environments teaches creativity and resilience.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILLS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/SSitRqKIt48?si=7i6XzbE0kLZec8fO"
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
            "Module 7: Tips for Mastering Outdoor and Survival Skills",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">TIPS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Start small with local hikes or backyard camping to build confidence.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Always pack essentials like water, snacks, a flashlight, and a first aid kit.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Practice regularly to make skills like fire-building and navigation second nature.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      4.Stay informed about the environment you’re exploring, including wildlife, plants, and weather conditions.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      5.Respect nature by following Leave No Trace principles and minimizing your impact on the environment.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILL WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/UUSJwHeH_t8?si=1nQjxvOx8yoNceNC"
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
            "Module 8: Advanced Problem-Solving in Survival",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">ADVANCED</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Survival situations often require quick thinking and creativity. For example, finding alternative ways to signal for help, improvising tools from available resources, or rationing supplies during extended emergencies are advanced skills that can save lives. These scenarios also teach resilience and adaptability.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT OUTDOOR AND SURVIVAL SKILL WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/bpXeaUASCFI?si=iuxh_30PBuNygwBm"
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
      <h1 id="hi">Outdoor and Survival Skill Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/out-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Out;
