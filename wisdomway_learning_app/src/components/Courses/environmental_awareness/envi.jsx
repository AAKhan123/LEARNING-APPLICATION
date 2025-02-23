import React, { useState, useEffect } from "react";
import "./envi.css";
import { Link } from "react-router-dom";

const Envi = () => {
  const modules = [
    { id: 1, name: "Understanding Environmental Awareness" },
    { id: 2, name: "Importance of Protecting Natural Resources" },
    { id: 3, name: " Understanding Pollution and Its Effects" },
    { id: 4, name: " Climate Change Awareness" },
    { id: 5, name: " Biodiversity Conservation" },
    { id: 6, name: "  Reducing Waste Through Sustainable Practices" },
    { id: 7, name: "Adopting Eco-Friendly Lifestyles" },
    { id: 8, name: " Technology for Environmental Solutions" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "environModules"; // Unique key for this course
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
            <h2 className="m">ENVIRONMENTAL AWARENESS</h2>
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
           "Module 1:   Understanding Environmental Awareness",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">ENVIRONMENTAL AWARENESS</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Environmental awareness is about understanding the critical role that nature plays in supporting life and recognizing the threats posed by human activities. It involves knowledge of issues like deforestation, pollution, and climate change, as well as solutions to address them. For instance, being aware of how overfishing harms marine life or how plastic waste pollutes oceans motivates individuals to adopt eco-friendly practices. Environmental awareness empowers people to make informed decisions that contribute to a healthier and more sustainable planet.        </p><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/8u-SrHapsLs?si=qpPvw0EMIX2dyfmK"
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
            "Module 2:  Importance of Protecting Natural Resources",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">IMPORTANCE OF PROTECTING NATURAL RESOURCES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Natural resources like air, water, soil, and forests are finite and essential for survival. Environmental awareness highlights the importance of conserving these resources to prevent shortages and ecological damage. Overuse of resources, such as groundwater depletion or excessive logging, leads to long-term consequences like desertification and biodiversity loss. Protecting natural resources involves actions like planting trees, harvesting rainwater, and reducing energy consumption by switching to renewable sources like solar and wind power.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/_CsKjqS1R1I?si=ZM2_T9Pxzb5aoM5S"
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
            "Module 3:   Understanding Pollution and Its Effects",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">UNDERSTANDING POLLUTION AND ITS EFFECT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Pollution disrupts ecosystems and harms both human and animal health. Air pollution from vehicles and factories contributes to respiratory diseases, while water pollution from industrial waste affects aquatic life and drinking water supplies. Environmental awareness educates people about these effects and encourages them to reduce pollution by using public transport, avoiding plastic products, and properly disposing of waste. Addressing pollution is not just about cleaning up but also about preventing further harm by adopting sustainable practices.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/oSbUp3XYQX8?si=1wz_KX1v-r97MBrN"
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
            "Module 4:  Climate Change Awareness",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">CLIMATE CHANGE AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Climate change, driven by activities like burning fossil fuels and deforestation, results in global warming, rising sea levels, and extreme weather events. Environmental awareness helps people understand these causes and their widespread effects, such as droughts, floods, and habitat destruction. It also emphasizes solutions like reducing carbon footprints, advocating for clean energy, and supporting reforestation projects. Increased awareness can drive collective action, influencing policies and behaviors that combat climate change.        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/z1eq7LFi6c4?si=-QBQyIpsI_gMRiBU"
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
            "Module 5:  Biodiversity Conservation",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">BIODIVERSITY CONSERVATION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Biodiversity ensures ecosystems remain balanced and functional. For example, bees pollinate crops, while predators control pest populations. Environmental awareness sheds light on how human activities like habitat destruction, pollution, and hunting threaten biodiversity. Educating people about the role of biodiversity fosters actions like protecting endangered species, preserving natural habitats, and avoiding products made from illegal wildlife trade. Conserving biodiversity is essential for maintaining ecological stability and ensuring the survival of all species.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/HICoS7grDyg?si=4UO1LlXTaQDZZU76"
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
            "Module 6:   Reducing Waste Through Sustainable Practices",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">REDUCING WASTE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Landfills overflow with waste, much of which could be reduced or recycled. Environmental awareness promotes the 3Rs: reduce, reuse, and recycle. Reducing waste involves avoiding single-use plastics, buying only what is necessary, and choosing sustainable products.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/kZIrIQDf1nQ?si=nXXn-jjIoBeXu0An"
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
            "Module 7:   Adopting Eco-Friendly Lifestyles",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">ECO-FRIENDLY LIFESTYLES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Living sustainably means making everyday choices that benefit the planet. For example, using energy-efficient appliances, eating locally grown food, and conserving water are small steps that make a big difference. Environmental awareness teaches the importance of habits like turning off lights when not in use, avoiding unnecessary car trips, and using renewable energy sources. These choices reduce individual carbon footprints and inspire others to follow eco-friendly practices, creating a positive ripple effect.        </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/jT3JzFdcXOI?si=wFHCrWy-YU9hhr9C"
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
            "Module 8:  Technology for Environmental Solutions",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">ENVIRONMENTAL SOLUTION</h1>
      <p className="per" style={{fontSize:'18px'}}>
      Innovative technologies play a crucial role in addressing environmental challenges. Solar panels and wind turbines generate clean energy, reducing dependence on fossil fuels. Smart waste management systems sort and recycle trash more efficiently, while water purification technologies ensure access to clean drinking water. Environmental awareness encourages the adoption of these technologies in homes, businesses, and governments. Supporting technological advancements and learning how to use them responsibly ensures a sustainable future for the planet.        </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT ENVIRONMENTAL AWARENESS WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/sMqtwbKc8EA?si=2KA3oe0HuZxNVULv"
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
      <h1 id="hi">Environmental Awareness Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/envi-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Envi;
