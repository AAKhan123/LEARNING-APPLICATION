import React, { useState, useEffect } from "react";
import "./Per.css";
import { Link } from "react-router-dom";

const Personal2 = () => {
  const modules = [
    { id: 1, name: "Introduction" },
    { id: 2, name: "Key Components of Personal Finance" },
    { id: 3, name: "Tools and Resources for Personal Finance" },
    { id: 4, name: "Key Concepts in Personal Finance" },
    { id: 5, name: "Developing Good Financial Habits" },
    { id: 6, name: "Real-Life Applications of Personal Finance" },
    { id: 7, name: "Challenges in Personal Finance" },
    { id: 8, name: "The Benefits of Learning Personal Finance Early" },
    { id: 9, name: "Quiz" },
  ];

  const totalChapters = modules.length;  // Total number of modules
  
    // Step 1: Initialize the state from `localStorage`
    // Step 2: Fallback to empty object if not found in localStorage
    
    const courseKey = "personalModules"; // Unique key for this course
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
      <div className="pane left-pane" style={{ width: `${28}%` }}>
        <div className="app-container">
          <div className="sidebar">
            <h2 className="m">PERSONAL FINANCE</h2>
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
      <div className="pane right-pane" style={{ width: `${100 - 28}%` }}>
        <div className="content">
          {/* Module 1 */}
          {renderModule(
            1,
            "Module 1: Introduction",
            <><br/><br/>
      <div className="art">
        <h1 id="hi">WHAT IS PERSONAL FINANCE?</h1>
        <p className="per" style={{fontSize:'18px'}}>
            Personal finance refers to how you manage your money, including earning, saving, spending, and investing. It’s an essential life skill that helps you make informed decisions about your financial future.Good personal finance habits allow you to meet short-term needs,achieve long-term goals, and prepare for unexpected situations.Whether it’s setting up a budget, opening a savings account, orlearning to spend wisely, personal finance helps you build a stable and secure life.
        </p><br/>
        <h1 id="hi">WHY PERSONAL FINANCE MATTERS?</h1>
        <ul id="oll">
          <li>1.Teaches responsibility and independence.</li>
          <li>2.Builds habits for managing money effectively.</li>
          <li>3.Helps avoid debt and financial stress.</li>
          <li>4.Ensures preparedness for emergencies or big expenses.</li>
          <li>5.Encourages saving and investment for future goals.</li>
        </ul><br/>
        <h1 id="hi">
          TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
        </h1>
        <div className="vid">
          <iframe
            width={560}
            height={350}
            src="https://www.youtube.com/embed/6sq2o1atWLY?si=0C7p7ADYjK93KkYp"
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
            "Module 2: Key Components of Personal Finance",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. EARNING MONEY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Earning money is the foundation of personal finance. Income can come
        from jobs, businesses, allowances, or investments. For kids, earning
        might start with chores, babysitting, or small entrepreneurial ventures
        like selling crafts. Understanding the value of money earned fosters a
        sense of responsibility and appreciation for spending and saving.
      </p><br/>
      <h1 id="hi">2. BUDGETING BASICS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        A budget is a plan that divides your income into categories like
        savings, needs, and wants. It ensures you don’t overspend and helps you
        achieve financial goals. A common budgeting method is the&nbsp;50/30/20
        rule:
      </p><br/>
      <ul>
        <li>Rule1: 50% for needs (essentials like food, rent, and bills).</li>
        
        <li>Rule2: 30% for wants (extras like entertainment or hobbies).</li>
        
        <li>Rule3: 20% for savings or paying off debt.</li>
      </ul><br/>
      <h1 id="hi">3. SPENDING WISELY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Spending money wisely means prioritizing needs over wants and thinking
        critically before making purchases. Tracking expenses helps you see
        where your money goes and identify areas to cut back. Smart spending
        ensures you live within your means while saving for the future.
      </p><br/>
      <h1 id="hi">4. SAVING MONEY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Saving is setting aside a portion of your income to use later. It’s a
        critical habit for financial security and achieving goals. Savings can
        be short-term (for smaller goals like toys or gifts) or long-term (for
        bigger investments like college or emergencies). Using tools like piggy
        banks or savings accounts helps organize and grow savings.
      </p><br/>
      <h1 id="hi">5. INVESTING</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Investing is putting money into something that can grow in value over
        time, like stocks, mutual funds, or real estate. Though more relevant
        for adults, kids can learn the concept by “investing” time or effort
        into projects that yield rewards later.
      </p><br/>
      <h1 id="hi">6. MANAGING DEBT</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Involves borrowing money that you need to pay back with interest.
        Understanding debt teaches the importance of borrowing responsibly and
        avoiding financial burdens.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/3TOcNkdJGrM?si=BkWU_tRU0vRod1xE"
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
            "Module 3: Tools and Resources for Personal Finance",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. SAVING ACCOUNTS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Banks offer savings accounts to keep money safe and help it grow with
        interest. Interest is the reward banks give for storing money,
        encouraging long-term savings.
      </p><br/>
      <h1 id="hi">2. BUDGETING TOOLS</h1>
      <p className="per" style={{fontSize:'18px'}}>There are many ways to track a budget:</p><br/>
      <ul>
        <li>way1: Using notebooks for recording expenses.</li>
        <li>way2: Mobile apps that automate budgeting.</li>
        <li>way3: Envelope systems where you divide cash into categories.</li>
      </ul><br/>
      <h1 id="hi">3. SAVING MONEY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Saving is setting aside a portion of your income to use later. It’s a
        critical habit for financial security and achieving goals. Savings can
        be short-term (for smaller goals like toys or gifts) or long-term (for
        bigger investments like college or emergencies). Using tools like piggy
        banks or savings accounts helps organize and grow savings.
      </p><br/>
      <h1 id="hi">4. DIGITAL BANKING</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Online banking makes managing money easier with tools like mobile apps,
        online transfers, and digital payments.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/gWvoznlJ2-I?si=JSS2p8e3mvXLfHCC"
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
            "Module 4: Key Concepts in Personal Finance",
            <><br/><br/>
            <div className="art">
      <h1 id="hi">1. NEEDS VS WANTS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Understanding the difference between needs and wants is a cornerstone of
        financial literacy:
      </p>
      <p className="per" style={{fontSize:'18px'}}>
       1: Needs: Essentials like food, shelter, clothing, and education.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
       2: Wants: Non-essentials like gadgets, games, or luxury items. Prioritizing
        needs ensures financial security, while controlling wants helps save
        money for future goals.
      </p><br/>
      <h1 id="hi">2. EMERGENCY FUNDS</h1>
      <p className="per" style={{fontSize:'18px'}}>Short-Term and Long-Term Goals:</p><br/>
      <ul>
        <li>
          1.Short-Term Goals: Saving for things like a toy, game, or small trip.
        </li>
        <li>
          2.Long-Term Goals: Saving for big milestones like college, a car, or
          starting a business. Setting clear goals helps stay motivated and
          focused.
        </li>
      </ul><br/>
      <h1 id="hi">3. THE POWER OF COMPOUND INTEREST</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Compound interest allows money to grow faster over time. For example,
        money in a savings account earns interest, and that interest earns more
        interest. Starting early means greater growth.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/WN9Mks1s4tM?si=PPdPDHUYXpf5QDEI"
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
            "Module 5: Developing Good Financial Habits",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. TRACKING EXPENSES</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Keeping a record of every dollar spent helps you understand spending
        habits and find ways to save.
      </p><br/>
      <h1 id="hi">2. SAVING CONSISTENTLY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Even small savings add up over time. Developing the habit of saving a
        portion of every income prepares you for bigger financial opportunities
        and challenges.
      </p><br/>
      <h1 id="hi">3. SETTING LIMITS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Decide in advance how much to spend on wants and entertainment to avoid
        overspending.
      </p><br/>
      <h1 id="hi">4. LEARNING FROM MISTAKES</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Making financial mistakes is part of the learning process. The key is
        understanding what went wrong and improving your habits for the future.
      </p><br/>
      <h1 id="hi">5. INVOLVING FAMILY</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Parents and guardians play a vital role in teaching personal finance.
        Discussing family budgets, shopping together, and opening savings
        accounts for kids are practical ways to learn.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/X0AZ6CriKpg?si=l0ioi0MgqictvRKj"
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
            "Module 6: Real-Life Applications of Personal Finance",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">1. ALLOWENCE MANAGEMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
        For kids, managing allowances is a great way to learn budgeting, saving,
        and spending responsibly.
      </p><br/>
      <h1 id="hi">2. SMALL BUISINESS VENTURE</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Encourage kids to try simple businesses like selling crafts, running a
        lemonade stand, or mowing lawns. It teaches earning, profit, and
        reinvestment.
      </p><br/>
      <h1 id="hi">3. SHOPPING MART</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Learning to compare prices, look for discounts, and avoid impulse buying
        are important skills.
      </p><br/>
      <h1 id="hi">4. UNDERSTANDING BILLS AND PAYMENT</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Kids can observe how adults pay bills and understand the importance of
        paying on time to avoid extra charges.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
      </h1>
      <div className="vid">
        <iframe
          width={560}
          height={350}
          src="https://www.youtube.com/embed/X0AZ6CriKpg?si=l0ioi0MgqictvRKj"
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
            "Module 7: Challenges in Personal Finance",
            <><br/><br/>
             <div className="art">
      <h1 id="hi">1. IMPULSE SPENDING</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Buying things without thinking about their value can quickly drain
        savings. Setting spending limits helps control impulses.
      </p><br/>
      <h1 id="hi">2. LACK OF AWARENESS</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Not knowing how much you’re spending or saving can lead to poor
        financial decisions. Regular reviews of your budget keep you on track.
      </p><br/>
      <h1 id="hi">3.PEER PRESSURE</h1>
      <p className="per" style={{fontSize:'18px'}}>
        Wanting to keep up with friends can lead to unnecessary spending.
        Staying focused on your goals helps resist this temptation.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
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

            {/* module 8 */}

            {renderModule(
            8,
            "Module 8: The Benefits of Learning Personal Finance Early",
            <><br/><br/>
              <div className="art">
      <h1 id="hi">ADVANTAGES:</h1>
      <p className="per" style={{fontSize:'18px'}}>
        1. Confidence and Independence:&nbsp;Knowing how to handle money builds
        self-reliance.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
        2. Financial Security:&nbsp;Good habits create a stable foundation for
        future success.
      </p>
      <p className="per" style={{fontSize:'18px'}}>
        3. Preparedness:&nbsp;Being financially literate ensures you’re ready for
        both opportunities and challenges.
      </p><br/>
      <h1 id="hi">
        TO UNDERSTAND MORE ABOUT PERSONAL FINANCE WATCH THIS VIDEO:
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
      <h1 id="hi">Personal Finance Quiz:</h1><br/>
      <div id="quiz-question">
     <Link to="/quiz" ><p className="click">Click Here To Proceed Quize</p> </Link>    
      </div>
      
    </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Personal2;
