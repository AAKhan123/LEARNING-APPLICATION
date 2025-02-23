import {React,useState,useEffect} from "react";
import "./about.css"; // Add CSS for styling
import Loading from "./chatbot/Loading";
import Skcard from "./skcards";

function OurMissionPage() {
  const [loading,setLoading] =useState(true);

      useEffect(() => {
        setTimeout (() => {
          setLoading(false);
        },500);
      }, []);
  return (
    <>
    {loading ? < Skcard/> :
    <div className="our-mission-page">
      {/* Our Mission Section */}
      <section className="our-mission">
        <h1>Our Mission</h1>
        <div className="mission-image" style={{ position: "relative" }}>
          <img src="images/mission.jpg" alt="Our Mission" style={{ width: "100%", height: "50rem" }} />
          <div className="image-overlay" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "80%",
          }}>
            <p style={{ margin: 0, fontSize: "1.4rem", lineHeight: "1.3",color:"white",fontWeight:"500"}}>
              At <strong>Wisdomway</strong>, we are driven by the belief that education is the cornerstone of individual and societal progress. Our mission is to transcend the boundaries of traditional learning by creating a platform where individuals from all walks of life can access knowledge and skills that empower them to achieve their aspirations. In a rapidly evolving world, where innovation and adaptability are key to success, Wisdomway stands as a bridge between academic learning and real-world application, ensuring our learners are prepared to face the challenges of tomorrow.
              <br /><br />
              We aim to inspire a passion for lifelong learning by offering a comprehensive array of resources that cater to diverse interests and needs. Whether it’s mastering a new skill, exploring creative pursuits, or deepening expertise in a chosen field, Wisdomway provides a supportive environment for learners to thrive. Our approach combines modern pedagogy with cutting-edge technology, fostering an engaging and personalized learning experience that adapts to the pace and style of each individual.
              <br /><br />
              At the heart of Wisdomway is our unwavering commitment to inclusivity and accessibility. We envision a world where education is not a privilege but a right, where barriers to learning are removed, and everyone has the opportunity to unlock their full potential. Through collaboration with experts, educators, and innovators, we continuously expand our offerings to stay relevant in an ever-changing world.
              <br /><br />
              Our mission extends beyond academic success; we strive to cultivate critical thinkers, problem-solvers, and compassionate leaders who can contribute meaningfully to society. By instilling values of curiosity, resilience, and innovation, we empower our learners not just to keep up with the world but to shape it. At Wisdomway, education is more than a path to success—it’s a journey toward transformation, self-discovery, and the betterment of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Join Wisdomway Section */}
      <section className="join-wisdomway">
        <h2>Thank-You For Joining With Us</h2>
        <div className="card-container8">
          {/* Card 1 */}
          <div className="card11">
            <img src="images/arshan1.jpg" alt="arshan" />
            <p>MOHAMMED ARSHAN</p>
            <p>B.E-CSE</p>
          </div>
          {/* Card 2 */}
          <div className="card11">
            <img src="images/aamir.jpg" alt="aamir" />
            <p>AAMIR KHAN</p>
            <p>B.E-CSE</p>
          </div>
          {/* Card 3 */}
          <div className="card11">
            <img src="images/adarsh1.jpg" alt="Adarsh" />
            <p>ADARSH SHARMA</p>
            <p>B.E-CSE</p>
          </div>
          <div className="card11">
            <img src="images/harsh.jpg" alt="harsh" />
            <p>HARSH SINGH</p>
            <p>B.E-CSE</p>
          </div>
        </div>
      </section>
    </div>
}
    </>
  );
}

export default OurMissionPage;
