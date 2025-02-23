import React, { useState, useEffect } from "react";
import "./media.css";
import { Link } from "react-router-dom";

const Media = () => {
  const modules = [
    { id: 1, name: "Understanding Media" },
    { id: 2, name: " The Purpose of Media" },
    { id: 3, name: " Recognizing Advertisements" },
    { id: 4, name: " Identifying Hidden Messages" },
    { id: 5, name: "  Spotting Fake News" },
    { id: 6, name: "  Critical Thinking in Media" },
    { id: 7, name: "  Consumer Rights" },
    { id: 8, name: " Understanding Marketing Strategies" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "mediaModules"; // Unique key for this course
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
            <h2 className="m">MEDIA AND ADVERTISING LITERACY</h2>
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
           "Module 1:  Understanding Media",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">MEDIA</h1>
        <p className="per" style={{fontSize:'18px'}}>
        Media includes all the ways information is shared with the public, such as newspapers, television, social media, websites, apps, and even games.       
         </p>
        <br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/gPmuAPWl9ew?si=M5XDFHHHCWMkXhy3"
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
            "Module 2:   The Purpose of Media",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">THE ROLE OF MEDIA</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.News reports about weather, sports, or world events aim to keep people updated.      
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Documentaries teach viewers about topics like wildlife, history, or technology.    
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Media can try to influence opinions, encourage purchases, or promote ideas.   
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/bVhG0VlKeao?si=CwqUUhzgeIDToAv_"
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
            "Module 3:  Recognizing Advertisements",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">RECOGNIZING ADVERTISEMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.TV commercials, YouTube pre-roll videos, banners on websites, or even product placements in movies.     
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Use bright colors, exciting music, and catchy slogans to attract attention.  
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Teach kids to ask: “What is the ad trying to sell me? Is this product really necessary?” 
      </p>
        <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/K9RkoENV-n4?si=aLj44dqBWbtMm7to"
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
            "Module 4:   Identifying Hidden Messages",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">IDENTIFYING HIDDEN MESSAGE</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Emotional Appeals: Ads may show a happy family eating a specific cereal, implying it will bring happiness.    
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Scarcity: Using phrases like "Limited Time Offer" to make you feel rushed. 
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Status Symbols: Associating a product with being cool, rich, or famous.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/iyCRKUbWFt8?si=Pd5B30C97HAxuC0C"
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
            "Module 5:   Spotting Fake News",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">FAKE NEWS</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.False information presented as news to mislead readers, create panic, or influence opinions.   
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Kids are exposed to misleading information online, and teaching them to fact-check helps them make informed decisions.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Verify with other sources: If multiple trusted outlets aren’t reporting it, it might be fake.
      </p>
        <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/AkwWcHekMdo?si=t20eLYRSxilyhcM8"
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
            "Module 6:  Critical Thinking in Media",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">CRITICAL THINKING </h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Who created this content, and what’s their goal? 
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.What techniques are used to grab attention?
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.What’s missing? Does this give the full picture?
      </p>
            <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/HnJ1bqXUnIM?si=uOVsQGZfO33Vw5Pw"
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
            "Module 7:    Consumer Rights",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">CONSUMER RIGHT</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Products must be safe.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Clear details about price and features should be provided.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Learn to read product labels and online reviews.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/KAGWjGzo-28?si=zZzdtH7fOF51dMbJ"
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
            "Module 8: Understanding Marketing Strategies",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">MARKETING STRATEGIES</h1>
      <p className="per" style={{fontSize:'18px'}}>
      1.Branding: Repeating logos and slogans to make you remember the product.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      2.Peer Influence: Ads showing friends enjoying a product.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
      3.Freebies: Giving something small for free to encourage buying the full product.
      </p>
      <br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT MEDIA AND ADVERTISING LITERACY WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/ZvChhHNTz1g?si=nq84U7WEPaGFeB86"
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
      <h1 id="hi">Media And Advertising Literacy Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/media-quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Media;
