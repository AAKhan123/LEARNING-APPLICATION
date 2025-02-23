import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define courses with unique localStorage keys
const courses = [
  { id: 1, name: "Personal Finance", image: "images/c1.jpg", route: "/Per", storageKey: "personalModules", totalModules: 9 },
  { id: 2, name: "Problem Solving", image: "images/c2.jpg", route: "/problem-solving", storageKey: "probModules", totalModules: 7 },
  { id: 13, name: "Digital Literacy", image: "images/c13.jpg", route: "/digital", storageKey: "digitalModules", totalModules: 9 },
  { id: 4, name: "Outdoors and Survival Skills", image: "images/c4.jpg", route: "/out-door", storageKey: "outdoorsModules", totalModules: 8 },
  { id: 5, name: "Social Responsibilities", image: "images/response.jpg", route: "/social", storageKey: "socialResponsibilityModules", totalModules: 5 },
  { id: 6, name: "Technology", image: "images/tech.jpg", route: "/techno", storageKey: "technologyModules", totalModules: 10 },
  { id: 7, name: "Career Awareness", image: "images/carr.jpg", route: "/awar", storageKey: "careerModules", totalModules: 7 },
  { id: 8, name: "Environmental Awareness", image: "images/env.jpg", route: "/envi", storageKey: "environModules", totalModules: 6 },
  { id: 9, name: "Critical Thinking", image: "images/cric.jpg", route: "/cric", storageKey: "criticalModules", totalModules: 7 },
  { id: 10, name: "Health and Awareness", image: "images/heal.jpg", route: "/health", storageKey: "healthModules", totalModules: 5 },
  { id: 11, name: "Everyday Science", image: "images/science.jpg", route: "/ever", storageKey: "everydayModules", totalModules: 8 },
  { id: 12, name: "Cultural Awareness", image: "images/cult.jpg", route: "/cult", storageKey: "cultModules", totalModules: 6 },
  { id: 3, name: "Communication and Creativity", image: "images/comm.jpg", route: "/communication-creativity", storageKey: "commModules", totalModules: 6 },
  { id: 14, name: "Time Management and Organization", image: "images/time.jpg", route: "/time", storageKey: "timesModules", totalModules: 6 },
  { id: 15, name: "Media and Advertising Literacy", image: "images/c15.jpg", route: "/media", storageKey: "mediaModules", totalModules: 7 }
];

function Cards() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const progressData = {};

    courses.forEach((course) => {
      const storedProgress = JSON.parse(localStorage.getItem(course.storageKey)) || {};
      const completedModules = Object.values(storedProgress).filter(Boolean).length;
      const percentage = Math.round((completedModules / course.totalModules) * 100);
      progressData[course.id] = {
        completed: completedModules,
        total: course.totalModules,
        percentage: percentage
      };
    });

    setProgress(progressData);
  }, []);

  return (
    <>
      <br />
      <div className="h1">
        <h1>ENJOY LEARNING COURSES</h1>
      </div>
      <br />

      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <img src={course.image} alt="Course" className="course-img" />
            <div className="course-info">
              <center>
                <h3>{course.name}</h3>
              </center>

              {/* Progress Bar */}
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${progress[course.id]?.percentage || 0}%`,
                    height: "10px",
                    backgroundColor: "#4CAF50",
                    borderRadius: "8px",
                    marginTop: "5px",
                  }}
                />
              </div>
              <center>
                <p style={{ fontSize: "14px", marginTop: "5px", color: "black" }}>
                  {progress[course.id]?.completed || 0} / {course.totalModules} Modules Completed
                </p>
              </center><br></br>
              <p className="rating">Rating: 4.4 (3746 Enrolled)</p>
              <Link to={course.route} className="enroll-btn">
                Learn For Free
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
